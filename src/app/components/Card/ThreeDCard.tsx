"use client";

import { RefObject, SyntheticEvent, useRef } from "react";
import { Card, CardProps } from "./Card";

import styles from "./Card.module.css";

function useMouseMove<T extends HTMLElement>(
  cb: <E extends SyntheticEvent>(e: E, ref: RefObject<T>) => unknown,
) {
  const ref = useRef<T>(null);

  const onMouseMove = (e: SyntheticEvent) => {
    if (!ref.current) return;

    return cb(e, ref as RefObject<T>);
  };

  return { ref, onMouseMove };
}

// function MouseSpotlight({ children }) {
//   const { ref, onMouseMove } = useMouseMove<HTMLDivElement>((ev, ref) => {
//     const { clientX: x, clientY: y } = ev.nativeEvent as MouseEvent;

//     ref.current.style.top = `${y}px`;
//     ref.current.style.left = `${x}px`;
//   });

//   return (
//     <div onMouseMove={onMouseMove}>
//       <div className={`${styles.mousecontainer}`} ref={ref} />
//       <div className={styles.overlay} />
//       <div className={styles["content-wrapper"]}>{children}</div>
//     </div>
//   );
// }

const MAX_HORIZONTAL_ROTATE_DEGS = 20;
const MAX_VERTICAL_ROTATE_DEGS = 5;
const MAX_SHADOW_PX = 10;
const MAX_SHADOW_BLUR_PX = 30;

export function ThreeDCard({ children }: CardProps) {
  const { ref, onMouseMove } = useMouseMove<HTMLDivElement>((ev, ref) => {
    const rect = ev.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const { clientX, clientY } = ev.nativeEvent as MouseEvent;

    // Based on "how close to the middle (point of rotation) we are"...
    const distanceFromCenterX = (clientX - centerX) / (rect.width / 2); // -1 to 1
    const distanceFromCenterY = (clientY - centerY) / (rect.height / 2); // -1 to 1
    // ...modulate amount of max rotation degrees we want
    const deg = Math.abs(distanceFromCenterX) * MAX_HORIZONTAL_ROTATE_DEGS;
    // ...modulate amount of drop shadow
    const shadow = distanceFromCenterX * MAX_SHADOW_PX;
    const shadowBlur = Math.abs(distanceFromCenterX) * MAX_SHADOW_BLUR_PX;

    // Need to know which direction to rotate
    const directionX = distanceFromCenterX < 0 ? -1 : 1;
    const directionY = distanceFromCenterY < 0 ? 1 : -1;

    ref.current.style.transform = `
      rotate3d(0, ${directionX}, 0, ${deg}deg)
      rotate3d(${directionY}, 0, 0, ${MAX_VERTICAL_ROTATE_DEGS * Math.abs(distanceFromCenterY)}deg)
    `;
    ref.current.style.boxShadow = `${shadow}px 0 ${shadowBlur}px var(--shadow)`;
  });

  const handleMouseLeave = () => {
    if (!ref?.current) return;
    ref.current.style.transform = "rotate3d(0, 1, 0, 0deg)";
    ref.current.style.boxShadow = "revert";
  };

  return (
    <div
      className={styles.threedcontainer}
      onMouseMove={onMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={ref} className={styles.threedwrapper}>
        <Card
          variant="simple"
          style={{ paddingBottom: "calc(var(--spacing) * 2)" }}
        >
          {children}
        </Card>
      </div>
    </div>
  );
}

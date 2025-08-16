"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Sandbox.module.css";

const P_LIGHT = [
  "light-1",
  "light-2",
  "light-3",
  "light-4",
  "light-5",
  "light-6",
];

const P_DARK = ["dark-1", "dark-2", "dark-3", "dark-4", "dark-5", "dark-6"];

const SHADES = [
  "shade-1",
  "shade-2",
  "shade-3",
  "shade-4",
  "shade-5",
  "shade-6",
];

const TINTS = ["tint-1", "tint-2", "tint-3", "tint-4", "tint-5", "tint-6"];

type TileProps = {
  tileColour: string;
  onClick(): void;
};

const Tile = ({ tileColour, onClick }: TileProps) => {
  return (
    <div
      className={styles.row}
      style={{ backgroundColor: tileColour }}
      onClick={onClick}
    />
  );
};

export function Sandbox() {
  const originalBgColour = useRef("");

  const [bgColour, setBgColour] = useState(originalBgColour.current);
  const toggled = bgColour !== originalBgColour.current;

  useEffect(() => {
    originalBgColour.current = getComputedStyle(
      document.documentElement,
    ).getPropertyValue("--background");

    setBgColour(originalBgColour.current);
  }, []);

  const onToggle = (tileColour: string) => {
    let nextColour = tileColour;

    // Clicking the same tile will revert bg colour
    if (toggled && tileColour === bgColour) {
      nextColour = originalBgColour.current;
    } else {
      nextColour = tileColour;
    }

    setBgColour(nextColour);
    document.documentElement.style.setProperty("--background", nextColour);
  };

  return (
    <section className={styles.Sandbox}>
      <p>Light</p>
      <div className={styles.container}>
        {P_LIGHT.map((v, idx) => {
          const tileColour = `var(--${v})`;

          return (
            <Tile
              key={idx}
              tileColour={tileColour}
              onClick={() => {
                onToggle(tileColour);
              }}
            />
          );
        })}
      </div>
      <p>Dark</p>
      <div className={styles.container}>
        {P_DARK.map((v, idx) => {
          const tileColour = `var(--${v})`;

          return (
            <Tile
              key={idx}
              tileColour={tileColour}
              onClick={() => {
                onToggle(tileColour);
              }}
            />
          );
        })}
      </div>
      <p>Shades</p>
      <div className={styles.container}>
        {SHADES.map((v, idx) => {
          const tileColour = `var(--${v})`;

          return (
            <Tile
              key={idx}
              tileColour={tileColour}
              onClick={() => {
                onToggle(tileColour);
              }}
            />
          );
        })}
      </div>
      <p>Tints</p>
      <div className={styles.container}>
        {TINTS.map((v, idx) => {
          const tileColour = `var(--${v})`;

          return (
            <Tile
              key={idx}
              tileColour={tileColour}
              onClick={() => {
                onToggle(tileColour);
              }}
            />
          );
        })}
      </div>
    </section>
  );
}

export const sandboxTitle = "Colour palettes";

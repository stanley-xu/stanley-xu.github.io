"use client";

import { useActionState } from "react";
import { createError } from "~/lib/posts";

const initialState = {
  message: "",
};

export function Form() {
  const [state, formAction, pending] = useActionState(
    createError,
    initialState,
  );

  return (
    <form action={formAction}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content" required />
      {state?.message && <p aria-live="polite">{state.message}</p>}
      <button disabled={pending}>Create Post</button>
    </form>
  );
}

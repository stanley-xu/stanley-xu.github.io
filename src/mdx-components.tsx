import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    ul: ({ children }) => <ul style={{ listStyle: "revert" }}>{children}</ul>,
    ...components,
  };
}

import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article className="prose dark:prose-invert xl:prose-xl">
      {" "}
      {children}{" "}
    </article>
  );
}

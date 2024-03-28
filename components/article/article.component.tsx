import { ReactNode } from "react";

export default function Article({ children }: { children: ReactNode }) {
  return <article className="prose dark:prose-invert"> {children} </article>;
}

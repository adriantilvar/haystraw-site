import nextMdx from "@next/mdx";
import { mdxAnnotations } from "mdx-annotations";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMdx = nextMdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [mdxAnnotations.remark],
    rehypePlugins: [mdxAnnotations.rehype],
    recmaPlugins: [mdxAnnotations.recma],
  },
});

export default withMdx(nextConfig);

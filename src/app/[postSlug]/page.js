import React from "react";
import { loadBlogPost } from "@/helpers/file-helpers";
import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./postSlug.module.css";

async function BlogPost({ params }) {
  const { content } = await loadBlogPost(`${params.postSlug}`);
  // console.log(content);
  return (
    <article className={styles.wrapper}>
      <BlogHero title="Example post!" publishedOn={new Date()} />
      <div className={styles.page}>
        <MDXRemote source={content} />
      </div>
    </article>
  );
}

export default BlogPost;

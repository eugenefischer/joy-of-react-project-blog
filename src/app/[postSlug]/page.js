import React from "react";
import dynamic from "next/dynamic";
import { loadBlogPost } from "@/helpers/file-helpers";
import BlogHero from "@/components/BlogHero";
import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "./postSlug.module.css";
import { BLOG_TITLE } from "@/constants";
import COMPONENTS_MAP from "@/helpers/mdx-components";

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(`${params.postSlug}`);
  return {
    title: `${frontmatter.title} - ${BLOG_TITLE}`,
    description: frontmatter.abstract,
  };
}

async function BlogPost({ params }) {
  const post = await loadBlogPost(`${params.postSlug}`);
  // console.log(content);
  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={post.content} components={COMPONENTS_MAP} />
      </div>
    </article>
  );
}

export default BlogPost;

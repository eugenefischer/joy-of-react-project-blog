import React from "react";
import { getBlogPostList } from "@/helpers/file-helpers";
import BlogSummaryCard from "@/components/BlogSummaryCard";

import styles from "./homepage.module.css";

async function Home() {
  const blogPosts = await getBlogPostList();
  // console.log(blogPosts);
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>
      {blogPosts.map((elem) => {
        return (
          <BlogSummaryCard
            key={elem.slug}
            slug={elem.slug}
            title={elem.title}
            abstract={elem.abstract}
            publishedOn={new Date(elem.publishedOn)}
          />
        );
      })}
    </div>
  );
}

export default Home;

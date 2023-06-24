import React from "react";
import BlogCard from "./BlogCard";

function Blog() {
  return (
    <div className="p-5 lg:px-36">
      <h3 className="mb-6 text-center text-[28px] font-bold xl:bottom-[30%] xl:text-[48px]">
        Blog
      </h3>
      <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {Array(3)
          .fill(0)
          .map((e, i) => (
            <BlogCard key={`blog-card-${i}`} />
          ))}
      </div>
    </div>
  );
}

export default Blog;

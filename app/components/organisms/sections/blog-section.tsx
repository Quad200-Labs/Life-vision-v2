import { Heading } from "@/components/atoms/headings";
import { BlogCard } from "@/components/molecules/cards/blog-card";
import { BLOG_POSTS } from "@/constants";

export const BlogSection = () => {
  return (
    <section className="py-12 px-4 max-w-[95%] mx-auto">
      <Heading
        title="Blog"
        highlight="Posts"
        className="text-left text-3xl font-bold mb-10"
      />
      <div className="flex flex-col gap-8">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

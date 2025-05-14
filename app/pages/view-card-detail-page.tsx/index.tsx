import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { BLOG_POSTS, SOLUTION_CARDS } from "@/constants";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

export const CardDetailScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const isBlog = location.pathname.startsWith("/blogs");
  const isSolution = location.pathname.startsWith("/solutions");

  const data = isBlog ? BLOG_POSTS : isSolution ? SOLUTION_CARDS : [];

  const post = isBlog
    ? BLOG_POSTS.find((item) => item.id === id)
    : isSolution
    ? SOLUTION_CARDS.find((item) => item.id === id)
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return <p className="text-center text-red-500">Blog post not found.</p>;
  }

  return (
    <div className="max-w-[85%] mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-semibold text-red-600 mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      {/* Two-column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left: Main Blog Content */}
        <div className="lg:col-span-2">
          <p className="text-sm text-muted-foreground mb-2">
            {isBlog && post.date && `Published on ${post.date}`}
          </p>
          <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>
          <div className="text-base text-gray-700 leading-relaxed">
            <img
              src={post.image}
              alt={post.title}
              className="float-left mr-6 mb-4 w-[350px] rounded-xl"
            />
            <p>{post.description}</p>
          </div>
        </div>

        {/* Right: Related Posts */}
        <aside className="lg:border-l lg:pl-6 space-y-8">
          <h3 className="text-lg font-bold">Other Latest Blogs</h3>

          {data
            .filter((item) => item.id !== id)
            .map((related) => (
              <Link
                to={`/${isBlog ? "blogs" : "solutions"}/${related.id}`}
                key={related.id}
                className="block space-y-2 group"
              >
                <img
                  src={related.image}
                  className="rounded-md w-full h-auto group-hover:opacity-90 transition"
                  alt={related.title}
                />
                {related.date && (
                  <p className="text-xs text-gray-500">{related.date}</p>
                )}
                <h4 className="font-semibold text-sm">{related.title}</h4>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {related.description}
                </p>
              </Link>
            ))}
        </aside>
      </div>
    </div>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { BlogPostItem } from "@/interfaces";
import { Calendar, Clock } from "lucide-react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const BlogCard: FC<{ post: BlogPostItem }> = ({ post }) => {
  const navigate = useNavigate();
  return (
    <Card className="flex flex-col md:flex-row items-start gap-6 overflow-hidden rounded-xl shadow-none border-none p-0">
      <img
        src={post.image}
        alt={post.title}
        className="w-full lg:min-w-xl h-72 object-cover rounded-lg"
      />
      <CardContent className="p-0 flex flex-col justify-center">
        <div className="text-xs text-muted-foreground flex flex-wrap items-center gap-2 mb-2">
          <span>{post.author}</span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
        <h3 className="text-base font-semibold">{post.title}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-6">
          {post.description}
        </p>
        <p
          className="mt-3 text-sm font-semibold text-red-600 cursor-pointer hover:underline"
          onClick={() => {
            navigate(`/blogs/${post.id}`);
          }}
        >
          Read more
        </p>
      </CardContent>
    </Card>
  );
};

// src/components/posts/PostCard.tsx

import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export interface PostData {
  id: string;
  author: string;
  location?: string;
  caption: string;
  imageUrl: string;
  likes: number;
  comments: number;
  shares: number;
  bookmarks: number;
}

interface PostCardProps {
  post: PostData;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-[#0B143F] rounded-xl p-8 shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-400 to-pink-500 flex items-center justify-center overflow-hidden">
            <img
              src="/icon.svg"
              alt="User avatar"
              className="h-full w-full object-cover"
            />
          </div>


          <div>
            <p className="text-white font-medium leading-tight">
              {post.author}
            </p>
            {post.location && (
              <p className="text-xs text-blue-300">{post.location}</p>
            )}
          </div>
        </div>

        <button className="text-gray-400 hover:text-white text-xl">⋯</button>
      </div>

      {/* Caption */}
      <p className="text-sm text-white-200 mb-3">
        {post.caption}
      </p>

      {/* Image */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={post.imageUrl}
          alt="post"
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center gap-6 text-blue-200">
        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <Heart size={18} />
          <span className="text-sm">{post.likes}</span>
        </div>

        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <MessageCircle size={18} />
          <span className="text-sm">{post.comments}</span>
        </div>

        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <Share2 size={18} />
          <span className="text-sm">{post.shares}</span>
        </div>

        <div className="flex items-center gap-1 hover:text-white cursor-pointer">
          <Bookmark size={18} />
          <span className="text-sm">{post.bookmarks}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
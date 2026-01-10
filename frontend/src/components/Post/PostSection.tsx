// src/components/posts/PostSection.tsx

import PostCard, { type PostData } from "./PostCard";

const dummyPosts: PostData[] = [
  {
    id: "1",
    author: "Suhana Dhar",
    location: "Rose Garden",
    caption: "Night view at rose garden.",
    imageUrl:
      "post2.svg",
    likes: 329,
    comments: 56,
    shares: 12,
    bookmarks: 2,
  },
  {
    id: "2",
    author: "Suhana Dhar",
    location: "Rose Garden",
    caption: "Night view at rose garden.",
    imageUrl:
      "post2.svg",
    likes: 329,
    comments: 56,
    shares: 12,
    bookmarks: 2,
  },
  {
    id: "3",
    author: "Suhana Dhar",
    location: "Rose Garden",
    caption: "Night view at rose garden.",
    imageUrl:
      "post2.svg",
    likes: 329,
    comments: 56,
    shares: 12,
    bookmarks: 2,
  },
];

const PostSection = () => {
  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-[#00092A] min-h-screen rounded-lg">

      {/* Posts */}
      <div className="space-y-5">
      {dummyPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      </div>

    </div>
  );
};

export default PostSection;
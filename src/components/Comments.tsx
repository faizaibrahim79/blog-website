"use client";

import React, { useState } from "react";

const Comments = () => {
  // State for comments
  const [comments, setComments] = useState<string[]>([]); // Define comments as an array of strings
  const [newComment, setNewComment] = useState<string>(""); // Define newComment as a string

  // Function to handle adding a new comment
  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (newComment.trim()) {
      setComments([...comments, newComment]); // Add new comment to state
      setNewComment(""); // Clear input field
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Comments Heading */}
      <h2 className="text-2xl font-semibold mb-4">Comments</h2>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded shadow text-gray-800"
            >
              {comment}
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet. Be the first to comment!</p>
        )}
      </div>

      {/* Add Comment Form */}
      <form onSubmit={handleAddComment} className="mt-6 flex gap-4">
        <input
          type="text"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;

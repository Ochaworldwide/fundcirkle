import React from "react";

// Placeholder image URLs (replace these with actual URLs or image imports)
const images = [
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
  "https://via.placeholder.com/100",
];

const CircleAvatars = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 to-pink-300">
      <div className="relative w-[400px] h-[400px]">
        {images.map((src, index) => {
          // Define different styles for each image
          const styles = [
            "top-0 left-1/4 border-pink-200",
            "top-10 left-1/2 border-blue-200",
            "top-20 left-1/5 border-green-200",
            "top-24 right-1/3 border-yellow-200",
            "bottom-10 left-1/4 border-purple-200",
            "bottom-5 right-1/4 border-cyan-200",
            "bottom-10 right-1/2 border-red-200",
          ];

          return (
            <div
              key={index}
              className={`absolute ${styles[index]} rounded-full border-4 p-1`}
              style={{ width: "100px", height: "100px" }}
            >
              <img
                src={src}
                alt={`Avatar ${index + 1}`}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CircleAvatars;

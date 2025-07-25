import React from "react";

const AvatarCircle = ({ avatars, size = 64 }) => {
  return (
    <div className="flex -space-x-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          width={size}
          height={size}
          className="rounded-full border-2 border-white dark:border-gray-800 object-cover"
          style={{ zIndex: avatars.length - index }}
        />
      ))}
    </div>
  );
};

export default AvatarCircle;

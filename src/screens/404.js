import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-screen bg-gray-200">
      <h1 className="text-4xl m-auto text-red-500">Oops! Page Not Found</h1>
      <p className="text-lg m-auto">The page you are looking for does not exist.</p>
    </div>
  );
}

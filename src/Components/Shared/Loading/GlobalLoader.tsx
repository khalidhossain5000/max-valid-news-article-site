import React from 'react';

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-white">
      {/* Spinner */}
      <div className="h-12 w-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />

      {/* Label */}
      <p className="text-sm font-medium text-slate-500">Loading...</p>
    </div>
  );
};

export default GlobalLoader;
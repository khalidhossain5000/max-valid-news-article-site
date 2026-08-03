const NewsCardSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm w-full"
        >
          {/* Title */}
          <div className="h-6 w-3/4 rounded-md bg-slate-200" />

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-full rounded bg-slate-200" />
            <div className="h-4 w-2/3 rounded bg-slate-200" />
          </div>

          {/* Date */}
          <div className="mt-6 flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-slate-200" />
            <div className="h-4 w-28 rounded bg-slate-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCardSkeleton;

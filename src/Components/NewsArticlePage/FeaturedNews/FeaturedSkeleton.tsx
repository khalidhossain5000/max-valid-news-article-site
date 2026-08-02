
const FeaturedSkeleton = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm animate-pulse flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-52 md:h-auto bg-slate-200 shrink-0" />
      <div className="w-full md:w-1/2 p-6 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="h-6 bg-slate-200 rounded-md w-3/4" />
          <div className="h-6 bg-slate-200 rounded-md w-1/2" />
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded-md w-full" />
          <div className="h-4 bg-slate-200 rounded-md w-5/6" />
          <div className="h-4 bg-slate-200 rounded-md w-2/3" />
        </div>
        <div className="h-4 bg-slate-200 rounded-md w-1/4 mt-2" />
      </div>
    </div>
  );
};

export default FeaturedSkeleton;

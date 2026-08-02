interface NewsTableSkeletonProps {
  rows?: number;
}

const NewsTableSkeleton = ({ rows = 8 }: NewsTableSkeletonProps) => {
  const skeletonRows = Array.from({ length: rows });

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-100">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 bg-gray-50 text-gray-600">
            <th className="px-4 py-3 font-medium">Content Title</th>
            <th className="px-4 py-3 font-medium">Published Date</th>
            <th className="px-4 py-3 font-medium">Source Link</th>
            <th className="px-4 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {skeletonRows.map((_, i) => (
            <tr key={i} className="border-b border-gray-100 last:border-0">
              {/* content title */}
              <td className="px-4 py-3">
                <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
              </td>

              {/* published date */}
              <td className="px-4 py-3">
                <div className="h-3.5 w-20 animate-pulse rounded bg-gray-200" />
                <div className="mt-1.5 h-3 w-14 animate-pulse rounded bg-gray-200" />
              </td>

              {/* source link */}
              <td className="px-4 py-3">
                <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              </td>

              {/* action */}
              <td className="px-4 py-3">
                <div className="ml-auto h-4 w-4 animate-pulse rounded bg-gray-200" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTableSkeleton;
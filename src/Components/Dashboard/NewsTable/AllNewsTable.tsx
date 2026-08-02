import { Link } from "react-router";
import { IoOpenOutline, IoEllipsisVertical } from "react-icons/io5";

import NewsTableSkeleton from "./NewsTableSkeleton";
import { usePosts } from "../../../Hooks/useNews";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import { formatDate } from "../../../service/formatDate";
import Pagination from "../../Shared/Pagination/Pagination";
import PerPageSelect from "../../Shared/Pagination/PerPageSelect";

const AllNewsTable = () => {
  const {
    posts,
    meta,
    isLoading,
    page,
    limit,
    searchTerm,
    setPage,
    setSearchTerm,
    setLimit,
  } = usePosts({ defaultLimit: 10 });
  console.log(posts, meta, isLoading, "this are post page meta etc");
  return (
    <div className="p-6">
      {/* search */}
      <div className="mb-4">
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />
      </div>

      {/* table */}
      {isLoading ? (
        <NewsTableSkeleton rows={limit} />
      ) : (
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
              {posts.length === 0 ? (
                <tr>
                  <td
                    colSpan={4}
                    className="px-4 py-10 text-center text-gray-400"
                  >
                    No content found
                  </td>
                </tr>
              ) : (
                posts?.map((post) => {
                  const { day, time } = formatDate(post.createdAt);

                  return (
                    <tr
                      key={post.id}
                      className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3 text-gray-900">{post.title}</td>
                      <td className="px-4 py-3 text-gray-600">
                        <p>{day}</p>
                        <p className="text-xs text-gray-400">{time}</p>
                      </td>
                      <td className="px-4 py-3">
                        <Link to={`/news/${post.id}`}>
                          <IoOpenOutline size={18} />
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          className="text-gray-500 hover:text-gray-900"
                        >
                          <IoEllipsisVertical size={18} />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* footer: pagination + per-page */}
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Page {page} of {meta?.totalPages || 1}
        </p>
        <div className="flex items-center gap-4">
          <Pagination
            page={page}
            totalPages={meta?.totalPages || 1}
            onPageChange={setPage}
          />
          <PerPageSelect limit={limit} onLimitChange={setLimit} />
        </div>
      </div>
    </div>
  );
};

export default AllNewsTable;

import { Link } from "react-router";
import { IoOpenOutline } from "react-icons/io5";

import NewsTableSkeleton from "./NewsTableSkeleton";
import SearchBar from "../../Shared/SearchBar/SearchBar";
import { formatDate } from "../../../service/formatDate";
import Pagination from "../../Shared/Pagination/Pagination";
import PerPageSelect from "../../Shared/Pagination/PerPageSelect";
import ActionMenu from "./ActionMenu";
import { useNews } from "../../../Hooks/useNews";
import FeaturedSkeleton from "../../NewsArticlePage/FeaturedNews/FeaturedSkeleton";
import NewsCard from "../../NewsArticlePage/NewsCard/NewsCard";

const AllNewsTable = () => {
  const {
    news,
    meta,
    isLoading,
    page,
    limit,
    searchTerm,
    setPage,
    setSearchTerm,
    setLimit,
  } = useNews({ defaultLimit: 10 });

  return (
    <section className="p-6 flex flex-col items-stretch justify-between h-full">
      <div>
        {/* search */}
        <div className="mb-4">
          <SearchBar value={searchTerm} onSearch={setSearchTerm} />
        </div>

        {/* table */}
        {isLoading ? (
          <NewsTableSkeleton rows={limit} />
        ) : (
          <div className="overflow-x-auto rounded-lg border border-gray-100 h-full hidden md:block">
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
                {news.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-10 text-center text-gray-400"
                    >
                      No content found
                    </td>
                  </tr>
                ) : (
                  news?.map((n) => {
                    const { day, time } = formatDate(n.createdAt);

                    return (
                      <tr
                        key={n.id}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                      >
                        <td className="px-4 py-3 text-gray-900">{n.title}</td>
                        <td className="px-4 py-3 text-gray-600">
                          <p>{day}</p>
                          <p className="text-xs text-gray-400">{time}</p>
                        </td>
                        <td className="px-4 py-3">
                          <Link to={`/news/${n.id}`}>
                            <IoOpenOutline size={18} />
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <button
                            type="button"
                            className="text-gray-500 hover:text-gray-900"
                          >
                            <ActionMenu
                              editPath={`/dashboard/news/edit/${n.id}`}
                              onDeleteConfirm={() => {
                                console.log("Delete confirmed for:", n.id);
                              }}
                            />
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

        {/* mobile card view */}
        {isLoading ? (
          <FeaturedSkeleton />
        ) : (
          news.map((n) => (
            <NewsCard
            className="my-6"
              key={n.id}
              news={n}
              showActions
              actions={
                <div className="flex items-center gap-1">
                  {" "}
                  <Link to={`/news/${n.id}`}>
                    <IoOpenOutline size={18} />
                  </Link>{" "}
                  <ActionMenu
                    editPath={`/dashboard/news/edit/${n.id}`}
                    onDeleteConfirm={() => {
                      console.log("Delete confirmed for:", n.id);
                    }}
                  />
                </div>
              }
            />
          ))
        )}
      </div>
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
    </section>
  );
};

export default AllNewsTable;

/* eslint-disable @typescript-eslint/no-unused-vars */
import FeaturedCard from "../../Components/NewsArticlePage/FeaturedNews/FeaturedCard";
import FeaturedSkeleton from "../../Components/NewsArticlePage/FeaturedNews/FeaturedSkeleton";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import SearchBar from "../../Components/Shared/SearchBar/SearchBar";
import { useNews } from "../../Hooks/useNews";

const NewsArticlePage = () => {
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

  const featuredNews = news.find((n) => n.isFeatured === true);
  console.log(featuredNews, "this is featured news", news);
  return (
    <section >
      <PageHeader title="News & Article" />
      {/* Article content will go here */}
      <div className="max-w-[1400px] mx-auto py-6 lg:py-12 xl:py-5 mt-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-14">
      {/* search */}
      <div className="mb-4 lg:py-6">
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />
      </div>
      {/* featured card */}
      <div>
        {isLoading ? (
          <FeaturedSkeleton />
        ) : featuredNews ? (
          <FeaturedCard featuredNews={featuredNews} />
        ) : (
          <p className="text-sm text-rose-600 text-center py-6">No featured news found</p>
        )}
      </div>

      {/* main card with filter sidebar */}
      <div></div>

      </div>
    </section>
  );
};

export default NewsArticlePage;

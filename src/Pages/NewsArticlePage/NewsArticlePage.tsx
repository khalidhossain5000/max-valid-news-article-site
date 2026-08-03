/* eslint-disable @typescript-eslint/no-unused-vars */
import FeaturedCard from "../../Components/NewsArticlePage/FeaturedNews/FeaturedCard";
import FeaturedSkeleton from "../../Components/NewsArticlePage/FeaturedNews/FeaturedSkeleton";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import SearchBar from "../../Components/Shared/SearchBar/SearchBar";
import { useNews } from "../../Hooks/useNews";
import CategoryFilter from "../../Components/NewsArticlePage/CategoryFilter/CategoryFilter";
import NewsCard from "../../Components/NewsArticlePage/NewsCard/NewsCard";
import NewsCardSkeleton from "../../Components/NewsArticlePage/NewsCard/NewsCardSkeleton";
import Pagination from "../../Components/Shared/Pagination/Pagination";
import Title from "../../Components/Shared/Title/Title";

const NewsArticlePage = () => {
  const {
    news,
    meta,
    isLoading,
    page,
    searchTerm,
    setPage,
    setSearchTerm,
    category,
    setCategory,
  } = useNews({ defaultLimit: 9 });

  const featuredNews = news.find((n) => n.isFeatured === true);
  console.log(featuredNews, "this is featured news", news);

  console.log(news, "sports news al data hey llo");
  return (
    <section>
      <PageHeader title="News & Article" />
      {/* Article content will go here */}
      <div className="max-w-7xl mx-auto py-6 lg:py-12 xl:py-5 mt-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 2xl:px-14">
        {/* search */}
        <div className="mb-4 lg:py-6">
          <SearchBar value={searchTerm} onSearch={setSearchTerm} />
        </div>
        {/* featured card */}
        <div>
          {/* featured title */}
          <div className="py-6 ">
            <Title className="">Featured News & Article</Title>
          </div>

          {isLoading ? (
            <FeaturedSkeleton />
          ) : featuredNews ? (
            <FeaturedCard featuredNews={featuredNews} />
          ) : (
            <p className="text-sm text-rose-600 text-center py-6">
              No featured news found
            </p>
          )}
        </div>

        {/* mobile view category title */}

        <div className="lg:hidden py-6 pt-9">
          <Title className="text-xl lg:text-xl font-normal text-center">
            Filter By Category
          </Title>
        </div>
        {/* main card with filter sidebar */}
        <div className="flex flex-col gap-6 lg:flex-row pt-6 md:pt-12 h-full">
          {/* category filter */}
          <div className="md:w-56 mb-8 lg:mb-0">
            <CategoryFilter activeCategory={category} onSelect={setCategory} />
          </div>
          {/* grid layout with pagination */}
          <div className="flex-3 ">
            {/* card div */}
            <div className="">
              {isLoading ? (
                <NewsCardSkeleton />
              ) : news.length === 0 ? (
                <p className="text-sm text-rose-600 text-center py-6">
                  No news found
                </p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {news.map((n) => (
                    <NewsCard key={n.id} news={n} />
                  ))}
                </div>
              )}
            </div>
            {/* pagination div */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsArticlePage;

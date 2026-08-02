/* eslint-disable @typescript-eslint/no-unused-vars */
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

  const featuredNews=news.find((n)=>n.isFeatured===true)
  console.log(featuredNews,'this is featured news',news)
  return (
    <section>
      <PageHeader title="News & Article" />
      {/* Article content will go here */}
      {/* search */}
      <div className="mb-4">
        <SearchBar value={searchTerm} onSearch={setSearchTerm} />
      </div>
      {/* featured card */}
      <div>

      </div>

      {/* main card with filter sidebar */}
      <div>

      </div>
    </section>
  );
};

export default NewsArticlePage;

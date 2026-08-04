import Title from "../../Components/Shared/Title/Title";
import NewsDetails from "../../Components/NewsDetails/NewsDetails";
import { useLoaderData } from "react-router";

const NewsDetailsPage = () => {
  const newsData = useLoaderData();

  return (
    <div className="pt-44 pb-12">
      <Title className="text-center">News Article Details </Title>
      <div className="py-6">
        <NewsDetails newsData={newsData.data} />
      </div>
    </div>
  );
};

export default NewsDetailsPage;

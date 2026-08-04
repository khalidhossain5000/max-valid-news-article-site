import { Link } from "react-router";
import { formatDate } from "../../../service/formatDate";
import type { INews } from "../../../types/types";
import Title from "../../Shared/Title/Title";

interface IFeaturedNewsCardProps {
  featuredNews: INews;
}

const FeaturedCard = ({ featuredNews }: IFeaturedNewsCardProps) => {
  const { day, time } = formatDate(featuredNews.createdAt);

  return (
    <Link to={`/news-article/${featuredNews.id}`}>
      <article className="overflow-hidden rounded-xl border border-gray-200 bg-card shadow-sm">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <figure className="md:w-1/2">
            <img
              src={featuredNews.thumbnail}
              alt={featuredNews.title}
              className="h-full min-h-65 md:min-h-70 w-full object-cover"
            />
          </figure>

          {/* Content */}
          <div className="flex flex-col  p-6 md:w-1/2">
            <Title className=" text-xl md:text-2xl lg:text-3xl max-w-lg text-center lg:text-left">
              {featuredNews.title.slice(0, 50)}.....
            </Title>

            <p className="mb-5 lg:line-clamp-3 text-sm md:text-lg lg:leading-relaxed text-slate-600 py-3 lg:py-6 max-w-lg inter text-center lg:text-left">
              {featuredNews.content.replace(/<[^>]*>/g, "")}
            </p>

            <time
              dateTime={featuredNews.createdAt}
              className="text-lg font-medium text-slate-500 text-center lg:text-left"
            >
              {day} <span>{time}</span>
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeaturedCard;

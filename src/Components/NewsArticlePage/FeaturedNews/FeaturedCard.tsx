import { formatDate } from "../../../service/formatDate";
import type { INews } from "../../../types/types";
import Title from "../../Shared/Title/Title";

interface IFeaturedNewsCardProps {
  featuredNews: INews;
}

const FeaturedCard = ({ featuredNews }: IFeaturedNewsCardProps) => {
  const { day, time } = formatDate(featuredNews.createdAt);

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <figure className="md:w-1/2">
          <img
            src={featuredNews.thumbnail}
            alt={featuredNews.title}
            className="h-full min-h-70 w-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="flex flex-col p-6 md:w-1/2">
          
<Title>{featuredNews.title}</Title>
          <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">
            {featuredNews.content.replace(/<[^>]*>/g, "")}
          </p>

          <time
            dateTime={featuredNews.createdAt}
            className="text-sm font-medium text-gray-500"
          >
            {day} <span>{time}</span>
          </time>
        </div>
      </div>
    </article>
  );
};

export default FeaturedCard;
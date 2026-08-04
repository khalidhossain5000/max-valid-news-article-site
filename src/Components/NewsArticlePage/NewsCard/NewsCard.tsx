import { twMerge } from "tailwind-merge";
import type { INews } from "../../../types/types";
import { formatDate } from "../../../service/formatDate";
import Title from "../../Shared/Title/Title";
import { Link } from "react-router";

interface NewsCardProps {
  news: INews;
  className?: string;

  showActions?: boolean;
  actions?: React.ReactNode;
}

const NewsCard = ({
  news,
  className,
  showActions = false,
  actions,
}: NewsCardProps) => {
  const { day, time } = formatDate(news.createdAt);

  return (
    <Link to={`/news-article/${news.id}`}>
    <article
      className={twMerge(
        "overflow-hidden rounded-2xl border border-slate-200 bg-card shadow-sm transition hover:shadow-md",
        className,
      )}
    >
      {/* thumbnail image */}
      <img
        src={news.thumbnail}
        alt={news.title}
        className="h-44 md:h-48 lg:h-56 w-full object-cover rounded-xl shadow-sm"
      />

      {/* content */}
      <div className="p-5">
        {/* top section */}
        <div className="flex items-start justify-between gap-4">
          <Title className="line-clamp-2 text-sm md:text-xl lg:text-2xl font-normal text-text-primary inter">
            {" "}
            {news.title}
          </Title>

          {showActions && actions && <div className="shrink-0">{actions}</div>}
        </div>

        {/* description */}
        <div
          className="mt-3 lg:mt-4 line-clamp-8 text-sm leading-relaxed text-text-secondary inter"
          dangerouslySetInnerHTML={{
            __html: news.content,
          }}
        />

        {/* date */}
        <div className="mt-5 flex items-center gap-1.5 text-sm text-[#333333] inter">
          <span>{day}</span>
          <span>{time}</span>
        </div>
      </div>
    </article>
    </Link>
  );
};

export default NewsCard;

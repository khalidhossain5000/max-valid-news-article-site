import type { INews } from "../../types/types";

import Title from "../Shared/Title/Title";
import { formatDate } from "../../service/formatDate";

interface INewsProps {
  newsData: INews;
}

const NewsDetails = ({ newsData }: INewsProps) => {
  const { day, time } = formatDate(newsData.createdAt);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <figure className="md:w-1/2">
          <img
            src={newsData.thumbnail}
            alt={newsData.title}
            className="h-full min-h-65 md:min-h-70 w-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="flex flex-col  p-6 md:w-1/2">
          <Title className=" text-xl md:text-2xl lg:text-3xl max-w-lg text-center lg:text-left">
            {newsData.title}
          </Title>

          <div
          className="mt-3 lg:mt-4 line-clamp-8 text-sm leading-relaxed text-text-secondary inter"
          dangerouslySetInnerHTML={{
            __html: newsData.content,
          }}
        />

          <time
            dateTime={newsData.createdAt}
            className="text-lg font-medium text-slate-500 text-center lg:text-left"
          >
            {day} <span>{time}</span>
          </time>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

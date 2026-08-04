import type { INews } from "../../types/types";
import { FaCalendarAlt, FaFolderOpen, FaTag, FaStar } from "react-icons/fa";

import Title from "../Shared/Title/Title";
import { formatDate } from "../../service/formatDate";

interface INewsProps {
  newsData: INews;
}

const NewsDetails = ({ newsData }: INewsProps) => {
  const { day, time } = formatDate(newsData.createdAt);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col lg:flex-row">
          {/* Image */}
          <figure className="relative lg:w-1/2">
            <img
              src={newsData.thumbnail}
              alt={newsData.title}
              className="h-full min-h-72 w-full object-cover"
            />

            {newsData.isFeatured && (
              <span className="absolute left-5 top-5 flex items-center gap-2 rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white">
                <FaStar />
                Featured
              </span>
            )}
          </figure>

          {/* Content */}
          <div className="flex flex-1 flex-col p-6 lg:p-8">
            {/* Meta */}
            <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                {day} • {time}
              </span>

              <span className="flex items-center gap-2">
                <FaFolderOpen className="text-primary" />
                {newsData.category}
              </span>

              <span
                className={`rounded px-3 py-1 text-xs font-semibold ${
                  newsData.status === "PUBLISHED"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {newsData.status}
              </span>
            </div>

            {/* Title */}
            <Title className="max-w-xl text-center text-2xl lg:text-left lg:text-3xl">
              {newsData.title}
            </Title>

            {/* Content */}
            <div
              className="inter mt-5 flex-1 leading-8 text-text-secondary [&>p]:mb-4"
              dangerouslySetInnerHTML={{
                __html: newsData.content,
              }}
            />

            {/* Tags */}
            {newsData.tags.length > 0 && (
              <div className="mt-6 border-t border-slate-200 pt-5">
                <h4 className="mb-3 font-semibold text-text-primary">Tags</h4>

                <div className="flex flex-wrap gap-2">
                  {newsData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 transition hover:bg-primary hover:text-white"
                    >
                      <FaTag className="text-xs" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetails;

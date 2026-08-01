import React from "react";
import { IoChevronForward } from "react-icons/io5";
import PrimaryBtn from "../../../Components/Shared/Button/PrimaryBtn";

const NewsManagement = () => {
  return (
    <section>
      {/* breadcramb and title + create btn*/}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          {" "}
          {/* bread */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="#" className="text-text-primary hover:text-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <IoChevronForward className="text-text-primary " />
              </li>

              <li>
                <a href="#" className="text-text-primary  font-medium">
                  Content Management
                </a>
              </li>
            </ol>
          </nav>
          {/* title */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl lg:font-bold mt-3      text-text-primary inter ">
            Blog & News Management
          </h1>
        </div>

        <PrimaryBtn className="rounded-xl font-semibold text-white transition-transform  hover:-translate-y-0.5 duration-500 hover:bg-sky-600 cursor-pointer px-4 py-2">
          Create New Content
        </PrimaryBtn>
      </div>

      {/* content goes here */}
      <div></div>
    </section>
  );
};

export default NewsManagement;

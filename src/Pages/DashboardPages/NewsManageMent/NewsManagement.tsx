import { IoChevronForward } from "react-icons/io5";
import PrimaryBtn from "../../../Components/Shared/Button/PrimaryBtn";
import { Link } from "react-router";
import AllNewsTable from "../../../Components/Dashboard/NewsManagementPage/AllNewsTable";

const NewsManagement = () => {
  return (
    <section className="h-full flex flex-col">
      {/* breadcramb and title + create btn*/}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 p-4">
        <div>
          {" "}
          {/* bread */}
          <nav className="flex justify-center lg:justify-start" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="#" className="text-text-primary inter hover:text-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <IoChevronForward className="text-text-primary " />
              </li>

              <li>
                <a href="#" className="text-text-primary inter  font-medium">
                  Content Management
                </a>
              </li>
            </ol>
          </nav>
          {/* title */}
          <h1 className="inter text-xl  md:text-2xl lg:text-3xl xl:text-4xl lg:font-bold mt-3      text-text-primary text-center lg:text-left p-3 md:pt-4 lg:pt-6">
            Blog & News Management
          </h1>
        </div>
        <Link to="/dashboard/create-content" className="text-center block lg:inline-block lg:text-right">
          <PrimaryBtn className="rounded-xl font-semibold text-white transition-transform  hover:-translate-y-0.5 duration-500 hover:bg-sky-600 cursor-pointer px-3 lg:px-4 py-1 lg:py-2">
            Create New Content
          </PrimaryBtn>
        </Link>
      </div>

      {/* content goes here */}
      <div className="h-full">
        <AllNewsTable />
      </div>
    </section>
  );
};

export default NewsManagement;

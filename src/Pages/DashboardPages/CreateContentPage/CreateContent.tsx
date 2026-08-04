import { IoChevronForward } from "react-icons/io5";
import ContentForm from "../../../Components/Dashboard/CreateContentPage/ContentForm";

const CreateContent = () => {
  return (
    <div className="">
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
                Create New Content
              </a>
            </li>
          </ol>
        </nav>
        {/* title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl lg:font-bold mt-3      text-text-primary inter ">
          Create New Blogs & Content
        </h1>
      </div>

      {/* content form */}

      <div className="mt-6">
        <ContentForm />
      </div>
    </div>
  );
};

export default CreateContent;

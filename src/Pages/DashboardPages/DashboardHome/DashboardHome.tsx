
const DashboardHome = () => {
    return (
        <div>
            <h2 className="text-center py-22 bg-primary text-xl md:text-2xl lg:text-3xl xl:text-5xl font-medium xl:font-bold inter">Welcome Super Admin To Dashboard </h2>


                <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 mt-12">
      <h3 className="text-lg font-semibold text-blue-900">
        Available Dashboard Route is - Blogs & Content Management In Sidebar
      </h3>

      <p className="mt-2 text-sm leading-6 text-blue-800">
        According to the provided Figma design, the implemented dashboard
        section is:
      </p>

      <div className="mt-4 rounded-lg bg-white px-4 py-3 font-mono text-sm text-gray-700 shadow-sm">
        /dashboard/content-management
      </div>

      <p className="mt-3 text-sm text-blue-700">
        Other dashboard sections are planned for future implementation.
      </p>
    </div>
        </div>
    );
};

export default DashboardHome;
/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useState } from "react";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const DashboardNoticeModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedTime = localStorage.getItem("dashboard-notice");

    const oneHour = 60 * 60 * 1000;
    const currentTime = Date.now();

    if (!savedTime) {
      setOpen(true);
      return;
    }

    const elapsedTime = currentTime - Number(savedTime);

    if (elapsedTime > oneHour) {
      localStorage.removeItem("dashboard-notice");
      setOpen(true);
    }
  }, []);

  const closeModal = () => {
    localStorage.setItem("dashboard-notice", Date.now().toString());

    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 text-gray-400 transition hover:text-gray-800 cursor-pointer"
        >
          <FaTimes size={18} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900">
          Dashboard Available
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          This project includes a dashboard page based on the provided Figma
          design. You can access the dashboard from the navigation bar or click
          the button below.
        </p>

        <div className="mt-6 flex justify-end">
          <Link
            to="/dashboard"
            onClick={closeModal}
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-white transition hover:opacity-90"
          >
            Go to Dashboard
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNoticeModal;

import { useEffect } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const DashboardNoticeModal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedTime = localStorage.getItem("dashboard-notice");

    const oneHour = 60 * 60 * 1000;
    const currentTime = Date.now();

    if (!savedTime || currentTime - Number(savedTime) > oneHour) {
      localStorage.removeItem("dashboard-notice");

      Swal.fire({
        title: "Dashboard Available",
        text: "This project includes a dashboard page based on the provided Figma design. You can access the dashboard from the navigation bar or click the button below.",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Go to Dashboard",
        cancelButtonText: "Close",
        confirmButtonColor: "#009689",
        cancelButtonColor: "#64748b",
        reverseButtons: true,
        customClass: {
          popup: "rounded-2xl",
        },
      }).then((result) => {
        localStorage.setItem(
          "dashboard-notice",
          Date.now().toString()
        );

        if (result.isConfirmed) {
          navigate("/dashboard");
        }
      });
    }
  }, [navigate]);

  return null;
};

export default DashboardNoticeModal;
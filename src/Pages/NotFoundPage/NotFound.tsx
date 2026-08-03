import { FaHome, FaSearchPlus } from "react-icons/fa";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-background px-4">
      {/* Background glow */}
      <div className="absolute top-20 h-72 w-72 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-lg md:p-12">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <FaSearchPlus size={42} />
        </div>

        {/* 404 */}
        <h1 className="font-lora text-7xl font-bold text-primary md:text-8xl">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-text-primary md:text-3xl">
          Page Not Found
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary md:text-base">
          The page you are looking for does not exist or may have been removed.
          Please return to the homepage and continue exploring.
        </p>

        <button
          onClick={() => navigate("/")}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-accent transition hover:bg-primary-hover"
        >
        <FaHome size={18} />
          Back To Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
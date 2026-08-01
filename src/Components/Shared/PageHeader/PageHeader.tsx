
interface PageHeaderProps {
  title: string;
  bgImage?: string;
}

const PageHeader = ({
  title,
  bgImage = "/assets/banner/bannerbg.png",
}: PageHeaderProps) => {
  return (
    <div
      className="relative flex h-40 sm:h-44 md:h-56 xl:h-68 items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-[#264658]/60 " />

      <h1 className="relative z-10 text-3xl font-normal text-text-muted inter md:text-5xl text-center">
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
import Typography from "../base/Typography";

type PageLayoutProps = {
  pageHeading: string;
  children: React.ReactNode;
};
const PageLayout = ({ pageHeading, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Typography variant="header" as="h1">
        {pageHeading}
      </Typography>
      <div className="w-full h-full grid grid-cols-2 gap-16">{children}</div>
    </div>
  );
};

export default PageLayout;

import Typography from "../base/Typography";

type PageLayoutProps = {
  pageHeading: string;
  children: React.ReactNode;
};

const PageLayout = ({ pageHeading, children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Typography variant="header" as="h1">
        {pageHeading}
      </Typography>
      {children}
    </div>
  );
};

export default PageLayout;

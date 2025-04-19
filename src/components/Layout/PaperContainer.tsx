const PaperContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full flex justify-center items-center py-4">
      {children}
    </div>
  );
};

export default PaperContainer;

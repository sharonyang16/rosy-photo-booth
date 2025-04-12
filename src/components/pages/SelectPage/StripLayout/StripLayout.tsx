import DroppableImage from "./DroppableImage";

type StripLayoutProps = {
  selectedPictures: string[];
};
const StripLayout = ({ selectedPictures }: StripLayoutProps) => {
  return (
    <div className="flex flex-col gap-1">
      {selectedPictures.map((picture, index) => (
        <DroppableImage
          key={`droppable-slot-${index}`}
          id={index.toString()}
          src={picture}
        />
      ))}
    </div>
  );
};

export default StripLayout;

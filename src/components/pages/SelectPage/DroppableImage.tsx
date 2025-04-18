import { useDroppable } from "@dnd-kit/core";
import Typography from "@/components/base/Typography";

type DroppableImageProps = {
  id: string;
  src: string;
  className?: string;
};
const DroppableImage = ({ id, src, className }: DroppableImageProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div
      className={`flex justify-center items-center  ${className} ${
        isOver ? "bg-gray-400" : "bg-gray-500"
      }`}
      ref={setNodeRef}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="droppable image" />
      ) : (
        <Typography>{isOver ? "Drop Here!" : "No Image Selected"}</Typography>
      )}
    </div>
  );
};

export default DroppableImage;

import { useDroppable } from "@dnd-kit/core";
import Typography from "@/components/base/Typography";

type DroppableImageProps = {
  id: string;
  src: string;
  className?: string;
  size: { height: number; width: number };
};
const DroppableImage = ({ id, src, className, size }: DroppableImageProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div
      className={`flex justify-center items-center  ${className} ${
        isOver ? "bg-gray-400" : "bg-gray-500"
      }`}
      style={{ ...size }}
      ref={setNodeRef}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          style={{ ...size, objectFit: "cover" }}
          alt="droppable image"
        />
      ) : (
        <Typography>{isOver ? "Drop Here!" : "No Image Selected"}</Typography>
      )}
    </div>
  );
};

export default DroppableImage;

import { useDroppable } from "@dnd-kit/core";
import Typography from "@/components/base/Typography";
import CroppedImage from "@/components/CroppedImage/CroppedImage";

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
        isOver ? "bg-gray-300" : "bg-gray-400"
      }`}
      style={{ ...size }}
      ref={setNodeRef}
    >
      {src ? (
        <CroppedImage src={src} size={size} alt="dropped picture preview" />
      ) : (
        <Typography>{isOver ? "Place Image Here" : "No Image Selected"}</Typography>
      )}
    </div>
  );
};

export default DroppableImage;

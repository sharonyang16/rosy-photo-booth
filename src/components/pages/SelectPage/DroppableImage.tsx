import { useDroppable } from "@dnd-kit/core";

type DroppableImageProps = {
  id: string;
  src: string;
  className?: string;
};
const DroppableImage = ({ id, src, className }: DroppableImageProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div
      className={`flex justify-center items-center bg-gray-500 ${className}`}
      ref={setNodeRef}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="droppable image" />
      ) : (
        <div>No Image Selected</div>
      )}
    </div>
  );
};

export default DroppableImage;

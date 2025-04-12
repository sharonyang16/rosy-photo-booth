import { useDroppable } from "@dnd-kit/core";

type DroppableImageProps = {
  id: string;
  src: string;
};
const DroppableImage = ({ id, src }: DroppableImageProps) => {
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div className="h-full" ref={setNodeRef}>
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} className="h-120 w-160" alt="droppable image" />
      ) : (
        <div className="h-120 w-160 bg-amber-200"> No Image</div>
      )}
    </div>
  );
};

export default DroppableImage;

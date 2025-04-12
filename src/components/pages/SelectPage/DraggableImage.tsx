import { useDraggable } from "@dnd-kit/core";

type DraggableImageProps = {
  src: string;
};

const DraggableImage = ({ src }: DraggableImageProps) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: src,
  });
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="w-1/4"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      src={src}
      alt="picture preview"
    />
  );
};

export default DraggableImage;

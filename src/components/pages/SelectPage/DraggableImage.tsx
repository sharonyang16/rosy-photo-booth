import CroppedImage from "@/components/CroppedImage/CroppedImage";
import { useDraggable } from "@dnd-kit/core";

type DraggableImageProps = {
  src: string;
  size: { height: number; width: number };
};

const DraggableImage = ({ src, size }: DraggableImageProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: src,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    cursor: "grab",
  };

  return (
    <>
      <button ref={setNodeRef} {...attributes} {...listeners} style={style}>
        <CroppedImage src={src} size={size} alt="taken picture preview" />
      </button>
    </>
  );
};

export default DraggableImage;

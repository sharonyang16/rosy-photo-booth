import { useDraggable } from "@dnd-kit/core";

type DraggableImageProps = {
  src: string;
};

const DraggableImage = ({ src }: DraggableImageProps) => {
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
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="min-w-[160px] w-[160px]"
          src={src}
          alt="picture preview"
        />
      </button>
    </>
  );
};

export default DraggableImage;

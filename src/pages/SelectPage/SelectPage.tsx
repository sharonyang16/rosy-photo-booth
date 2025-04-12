import { PhotoboothState } from "@/types/photobooth";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import StripLayout from "./StripLayout.tsx/StripLayout";
import DraggableImage from "./DraggableImage";

type SelectPageProps = {
  pictures: string[];
  selectedPictures: string[];
  setPhotoboothState: React.Dispatch<React.SetStateAction<PhotoboothState>>;
  handleDragEnd: (event: DragEndEvent) => void;
};
const SelectPage = ({
  pictures,
  setPhotoboothState,
  selectedPictures,
  handleDragEnd,
}: SelectPageProps) => {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <div>
          <StripLayout selectedPictures={selectedPictures} />
          <button
            disabled={selectedPictures.some((picture) => !picture)}
            onClick={() => setPhotoboothState("CUSTOMIZE")}
          >
            done
          </button>
        </div>
        <div>
          {pictures.map((picture, index) => (
            <DraggableImage key={index} src={picture} />
          ))}
        </div>
      </div>
    </DndContext>
  );
};

export default SelectPage;

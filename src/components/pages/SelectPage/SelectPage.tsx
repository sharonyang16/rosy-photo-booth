import { Layout, PhotoboothState } from "@/types/photobooth";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import DraggableImage from "./DraggableImage";
import DroppableImage from "./DroppableImage";
import StripLayout from "@/components/StripLayout";
import { layoutToImgClass } from "@/types/constants";

type SelectPageProps = {
  layout: Layout;
  pictures: string[];
  selectedPictures: string[];
  setPhotoboothState: React.Dispatch<React.SetStateAction<PhotoboothState>>;
  handleDragEnd: (event: DragEndEvent) => void;
};
const SelectPage = ({
  layout,
  pictures,
  selectedPictures,
  setPhotoboothState,
  handleDragEnd,
}: SelectPageProps) => {
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        <div>
          <StripLayout layout={layout}>
            {selectedPictures.map((picture, index) => (
              <DroppableImage
                key={`droppable-slot-${index}`}
                id={index.toString()}
                src={picture}
                className={layoutToImgClass.get(layout)}
              />
            ))}
          </StripLayout>
          <button
            disabled={selectedPictures.some((picture) => !picture)}
            onClick={() => setPhotoboothState("CUSTOMIZE")}
          >
            done
          </button>
        </div>
        <div className="flex flex-col">
          <h4>Drag and Drop</h4>
          <div className="grid grid-cols-2 gap-8">
            {pictures.map((picture, index) => (
              <DraggableImage key={index} src={picture} />
            ))}
          </div>
        </div>
      </div>
    </DndContext>
  );
};

export default SelectPage;

import { Layout, PhotoboothState } from "@/types/photobooth";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import DraggableImage from "./DraggableImage";
import DroppableImage from "./DroppableImage";
import StripLayout from "@/components/StripLayout/StripLayout";
import PageLayout from "@/components/Layout/PageLayout";

type SelectPageProps = {
  layout: Layout;
  pictureSize: { height: number; width: number };
  pictures: string[];
  selectedPictures: string[];
  setPhotoboothState: React.Dispatch<React.SetStateAction<PhotoboothState>>;
  handleDragEnd: (event: DragEndEvent) => void;
};

const SelectPage = ({
  layout,
  pictureSize,
  pictures,
  selectedPictures,
  setPhotoboothState,
  handleDragEnd,
}: SelectPageProps) => {

  const size = {
    height: pictureSize.height / 2,
    width: pictureSize.width / 2,
  };

  return (
    <PageLayout pageHeading="Choose your pictures">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex justify-center items-center gap-16">
          <div>
            <StripLayout layout={layout} size={size}>
              {selectedPictures.map((picture, index) => (
                <DroppableImage
                  key={`droppable-slot-${index}`}
                  id={index.toString()}
                  src={picture}
                  size={size}
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
            <>
              <div className="grid grid-cols-4 gap-8">
                {pictures.map((picture, index) => (
                  <DraggableImage key={index} src={picture} size={size} />
                ))}
              </div>
            </>
          </div>
        </div>
      </DndContext>
    </PageLayout>
  );
};

export default SelectPage;

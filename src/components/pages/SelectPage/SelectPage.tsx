import { Layout, PhotoboothState } from "@/types/photobooth";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import DraggableImage from "./DraggableImage";
import DroppableImage from "./DroppableImage";
import StripLayout from "@/components/StripLayout/StripLayout";
import PageLayout from "@/components/Layout/PageLayout";
import PaperContainer from "@/components/Layout/PaperContainer";

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
      <div className="col-span-full">
        <DndContext onDragEnd={handleDragEnd}>
          <div className="w-full grid grid-cols-2 gap-16">
            <PaperContainer>
              <StripLayout layout={layout} className="bg-white">
                {selectedPictures.map((picture, index) => (
                  <DroppableImage
                    key={`droppable-slot-${index}`}
                    id={index.toString()}
                    src={picture}
                    size={size}
                  />
                ))}
              </StripLayout>
            </PaperContainer>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-8 w-fit">
                {pictures.map((picture, index) => (
                  <DraggableImage key={index} src={picture} size={size} />
                ))}
              </div>
              <button
                disabled={selectedPictures.some((picture) => !picture)}
                onClick={() => setPhotoboothState("CUSTOMIZE")}
              >
                done
              </button>
            </div>
          </div>
        </DndContext>
      </div>
    </PageLayout>
  );
};

export default SelectPage;

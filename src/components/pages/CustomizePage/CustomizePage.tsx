import RadioButton from "@/components/base/RadioButton";
import Typography from "@/components/base/Typography";
import CroppedImage from "@/components/CroppedImage/CroppedImage";
import PageLayout from "@/components/Layout/PageLayout";
import PaperContainer from "@/components/Layout/PaperContainer";
import StripLayout from "@/components/StripLayout/StripLayout";
import { useCustomize } from "@/hooks/useCustomize";
import {
  BACKGROUND_COLORS,
  backgroundColorToClass,
  FILTERS,
  filterToClass,
} from "@/types/constants";
import { Layout } from "@/types/photobooth";

type CustomizePageProps = {
  layout: Layout;
  selectedPictures: string[];
  pictureSize: { height: number; width: number };
};

const CustomizePage = ({
  layout,
  selectedPictures,
  pictureSize,
}: CustomizePageProps) => {
  const {
    backgroundColor,
    setBackgroundColor,
    filter,
    setFilter,
    downloadableImageRef,
    handleDownloadImage,
  } = useCustomize();

  const size = {
    height: pictureSize.height / 2,
    width: pictureSize.width / 2,
  };

  return (
    <PageLayout pageHeading="Customize">
      <PaperContainer>
        <StripLayout
          ref={downloadableImageRef}
          layout={layout}
          className={backgroundColorToClass.get(backgroundColor)}
        >
          {selectedPictures.map((picture, index) => (
            <CroppedImage
              key={index}
              src={picture}
              size={size}
              alt="picture"
              className={`${filterToClass.get(filter)}`}
            />
          ))}
        </StripLayout>
      </PaperContainer>
      <form className="flex flex-col">
        <fieldset>
          <Typography variant="label" as="label">
            background color
          </Typography>
          {BACKGROUND_COLORS.map((color) => (
            <RadioButton
              key={color}
              label={color}
              value={color}
              checked={backgroundColor === color}
              onChange={(e) => setBackgroundColor(e.target.value)}
            />
          ))}
        </fieldset>
        <fieldset>
          <Typography variant="label" as="label">
            filters
          </Typography>
          {FILTERS.map((filterName) => (
            <RadioButton
              key={filterName}
              label={filterName}
              value={filterName}
              checked={filter === filterName}
              onChange={(e) => setFilter(e.target.value)}
            />
          ))}
        </fieldset>
        <button
          disabled={Object.keys(downloadableImageRef).length === 0}
          onClick={handleDownloadImage}
        >
          Download
        </button>
      </form>
    </PageLayout>
  );
};

export default CustomizePage;

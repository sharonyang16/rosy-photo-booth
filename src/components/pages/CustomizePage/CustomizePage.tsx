import RadioButton from "@/components/base/RadioButton";
import PageLayout from "@/components/Layout/PageLayout";
import StripLayout from "@/components/StripLayout";
import { useCustomize } from "@/hooks/useCustomize";
import {
  BACKGROUND_COLORS,
  backgroundColorToClass,
  FILTERS,
  filterToClass,
  layoutToImgClass,
} from "@/types/constants";
import { Layout } from "@/types/photobooth";

type CustomizePageProps = {
  layout: Layout;
  selectedPictures: string[];
};
const CustomizePage = ({ layout, selectedPictures }: CustomizePageProps) => {
  const {
    backgroundColor,
    setBackgroundColor,
    filter,
    setFilter,
    downloadableImageRef,
    handleDownloadImage,
  } = useCustomize();
  return (
    <PageLayout pageHeading="Customize">
      {" "}
      <div className="flex">
        <div className="flex flex-col w-fit">
          <StripLayout
            ref={downloadableImageRef}
            layout={layout}
            className={backgroundColorToClass.get(backgroundColor)}
          >
            {selectedPictures.map((picture, index) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className={`${layoutToImgClass.get(layout)} ${filterToClass.get(
                  filter
                )}`}
                key={index}
                src={picture}
                alt="picture"
              />
            ))}
          </StripLayout>
          <button
            disabled={Object.keys(downloadableImageRef).length === 0}
            onClick={handleDownloadImage}
          >
            Download
          </button>
        </div>
        <form className="flex flex-col">
          <fieldset>
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
        </form>
      </div>
    </PageLayout>
  );
};

export default CustomizePage;

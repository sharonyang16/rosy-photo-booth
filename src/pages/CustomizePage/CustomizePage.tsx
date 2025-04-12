import { useDecorate } from "@/hooks/useDecorate";
import { BACKGROUND_COLORS } from "@/types/constants";

type CustomizePageProps = {
  selectedPictures: string[];
};
const CustomizePage = ({ selectedPictures }: CustomizePageProps) => {
  const {
    backgroundColor,
    setBackgroundColor,
    downloadableImageRef,
    handleDownloadImage,
  } = useDecorate();
  return (
    <div className="flex">
      <div className="flex flex-col w-fit">
        <div
          ref={downloadableImageRef}
          className={`flex flex-col w-min gap-3 bg-${backgroundColor}-500 px-3 py-7`}
        >
          {selectedPictures.map((picture, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="min-w-[160px]"
              key={index}
              src={picture}
              alt="picture"
            />
          ))}
        </div>
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
            <label key={color}>
              <input
                type="radio"
                value={color}
                checked={backgroundColor === color}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
              {color}
            </label>
          ))}
        </fieldset>
      </form>
    </div>
  );
};

export default CustomizePage;

import { useState, useRef } from "react";
import { toPng } from "html-to-image";

export const useCustomize = () => {
  const [backgroundColor, setBackgroundColor] = useState("sky");
  const [filter, setFilter] = useState("none");
  const downloadableImageRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  const handleDownloadImage = () => {
    toPng(downloadableImageRef.current, { cacheBust: false, skipFonts: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `rosy-photo-booth-${new Date().toLocaleDateString(
          "en-US"
        )}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    backgroundColor,
    setBackgroundColor,
    filter,
    setFilter,
    downloadableImageRef,
    handleDownloadImage,
  };
};

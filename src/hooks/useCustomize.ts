import { useState, useRef, useEffect } from "react";
import { toPng } from "html-to-image";
import { backgroundColorToClass, filterToClass } from "@/types/constants";

export const useCustomize = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [backgroundColorClass, setBackgroundColorClass] = useState("bg-white");
  const [filter, setFilter] = useState("none");
  const [filterClass, setFilterClass] = useState("");
  const downloadableImageRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    setBackgroundColorClass(backgroundColorToClass.get(backgroundColor) || "");
  }, [backgroundColor]);

  useEffect(() => {
    setFilterClass(filterToClass.get(filter) || "");
  }, [filter]);

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

  const handleRestart = () => {
    window.location.reload();
  };

  return {
    backgroundColor,
    setBackgroundColor,
    backgroundColorClass,
    filter,
    setFilter,
    filterClass,
    downloadableImageRef,
    handleDownloadImage,
    handleRestart,
  };
};

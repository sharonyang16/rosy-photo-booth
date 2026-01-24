import { LAYOUTS, ORIENTATIONS } from "@/types/constants";
import { PhotoboothFormProps } from "../../../../types/photobooth";
import RadioButton from "@/components/base/RadioButton";
import Typography from "@/components/base/Typography";

const OptionsForm = ({
  mirrored,
  handleMirroredChange,
  orientation,
  handleOrientationChange,
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
  handleResetToDefault,
}: PhotoboothFormProps) => {
  return (
    <form className="flex flex-col gap-8">
      <div className="flex gap-8">
        <fieldset className="flex flex-col gap-2">
          <Typography variant="label" as="label">
            camera
          </Typography>
          <label className="label text-black">
            <input
              type="checkbox"
              checked={mirrored}
              className="checkbox checkbox-sm checkbox-primary"
              onChange={handleMirroredChange}
            />
            mirrored
          </label>
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Typography variant="label" as="label">
            orientation
          </Typography>
          {ORIENTATIONS.map((orientationName) => (
            <RadioButton
              key={orientationName}
              label={orientationName.toLowerCase()}
              value={orientationName}
              checked={orientation === orientationName}
              onChange={(e) => handleOrientationChange(e)}
            />
          ))}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Typography variant="label" as="label">
            layout
          </Typography>
          {LAYOUTS.map((layoutName) => (
            <RadioButton
              key={layoutName}
              label={layoutName.toLowerCase()}
              value={layoutName}
              checked={layout === layoutName}
              onChange={(e) => handleLayoutChange(e)}
            />
          ))}
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <Typography variant="label" as="label">
            countdown
          </Typography>
          <div className="flex items-end gap-2">
            <input
              type="number"
              className="input"
              min="1"
              max="10"
              value={countdown}
              onChange={(e) => handleCountdownChange(e)}
            />
            <Typography>seconds</Typography>
          </div>
        </fieldset>
      </div>
      <div className="flex grow gap-4">
        <button
          className="btn btn-outline btn-lg grow"
          onClick={handleResetToDefault}
        >
          reset
        </button>
        <button
          className="btn btn-primary btn-lg grow"
          type="submit"
          onClick={() => setPhotoboothState("CAPTURE")}
        >
          start
        </button>
      </div>
    </form>
  );
};

export default OptionsForm;

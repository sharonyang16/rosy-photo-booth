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
    <form className="flex flex-col gap-4">
      <fieldset className="flex gap-2">
        <input
          type="checkbox"
          checked={mirrored}
          onChange={handleMirroredChange}
        />
        <Typography variant="label" as="label">
          mirrored
        </Typography>
      </fieldset>
      <fieldset>
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
      <fieldset>
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

      <fieldset>
        <Typography variant="label" as="label">
          countdown
        </Typography>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            max="10"
            value={countdown}
            onChange={(e) => handleCountdownChange(e)}
          />
          <Typography>seconds</Typography>
        </div>
      </fieldset>
      <div className="flex gap-4">
        <button onClick={handleResetToDefault}>reset</button>
        <button type="submit" onClick={() => setPhotoboothState("CAPTURE")}>
          start
        </button>
      </div>
    </form>
  );
};

export default OptionsForm;

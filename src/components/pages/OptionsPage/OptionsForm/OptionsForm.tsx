import { LAYOUTS } from "@/types/constants";
import { PhotoboothFormProps } from "../../../../types/photobooth";
import RadioButton from "@/components/base/RadioButton";
import Typography from "@/components/base/Typography";

const OptionsForm = ({
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
}: PhotoboothFormProps) => {
  return (
    <form className="flex flex-col gap-4">
      <Typography variant="header" as="h1">
        options
      </Typography>
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
      <button type="submit" onClick={() => setPhotoboothState("CAPTURE")}>
        start
      </button>
    </form>
  );
};

export default OptionsForm;

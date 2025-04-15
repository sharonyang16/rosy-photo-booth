import { LAYOUTS } from "@/types/constants";
import { PhotoboothFormProps } from "../../../../types/photobooth";
import RadioButton from "@/components/base/RadioButton";

const OptionsForm = ({
  layout,
  handleLayoutChange,
  countdown,
  handleCountdownChange,
  setPhotoboothState,
}: PhotoboothFormProps) => {
  return (
    <form className="flex flex-col gap-4">
      <fieldset>
        <p>layout</p>
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
        <p>countdown</p>
        <div className="flex gap-2">
          <input
            type="number"
            min="1"
            max="10"
            value={countdown}
            onChange={(e) => handleCountdownChange(e)}
          />
          <p>seconds</p>
        </div>
      </fieldset>
      <button type="submit" onClick={() => setPhotoboothState("CAPTURE")}>
        start
      </button>
    </form>
  );
};

export default OptionsForm;

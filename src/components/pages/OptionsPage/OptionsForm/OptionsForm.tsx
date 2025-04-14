import { PhotoboothFormProps } from "../../../../types/photobooth";

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
        <label>
          <input
            type="radio"
            value="STRIP"
            checked={layout === "STRIP"}
            onChange={(e) => handleLayoutChange(e)}
          />
          strip
        </label>
        <label>
          <input
            type="radio"
            value="SQUARE"
            checked={layout === "SQUARE"}
            onChange={(e) => handleLayoutChange(e)}
          />
          square
        </label>
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

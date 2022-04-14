import { useState } from "react";
import { useCarDamageDetectionHook } from "../../store/hooks/carDamageDetection";

const CarDamageDetection = () => {
  const [inputUrl, setInputUrl] = useState("");
  const { checkingCarDamagedAreasHandler, outputUrl, resultSpinner } = useCarDamageDetectionHook();

  console.log(outputUrl);
  return (
    <div>
      <div>Enter your file Url</div>
      <input
        value={inputUrl}
        onChange={(event) => setInputUrl(event.target.value)}
      />
      <button onClick={() => checkingCarDamagedAreasHandler({ image: inputUrl, draw_result: true })}>
        {resultSpinner ? "Analysing" : "Submit"}
      </button>
      {
      !resultSpinner && outputUrl &&
      <img src={outputUrl} alt="Car overview"></img>
      }
    </div>
  );
};

export default CarDamageDetection;

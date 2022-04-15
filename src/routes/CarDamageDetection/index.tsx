import { useState } from "react";

import "./style.css";
import Header from "../../components/Header";
import ImagesContainer from "../../components/ImagesContainer";
import { useCarDamageDetectionHook } from "../../store/hooks/carDamageDetection";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const testUrls = [
  "https://fifodemopublic.s3.ap-south-1.amazonaws.com/11.jpg",
  "https://jixjiastorage.blob.core.windows.net/public/sensor-ai/vehicle_damage/sample.jpg",
  "https://fifodemopublic.s3.ap-south-1.amazonaws.com/download+(4).jpeg",
];

const CarDamageDetection = () => {
  const [inputUrl, setInputUrl] = useState("");
  const { checkingCarDamagedAreasHandler, outputUrl, resultSpinner } =
    useCarDamageDetectionHook();

  console.log(outputUrl);
  return (
    <div>
      <Header />

      <div className="image-url-input-section">
        <div>Enter your file Url</div>
        <CustomInput
          value={inputUrl}
          handleOnChange={(value) => setInputUrl(value)}
          className="image-url-input"
        />
        <CustomButton
          title={resultSpinner ? "Analysing" : "Submit"}
          onClick={() =>
            checkingCarDamagedAreasHandler({
              image: inputUrl,
              draw_result: true,
            })
          }
        />
      </div>

      <div className="images-selection-display">
        <ImagesContainer
          testUrls={testUrls}
          onClick={(link) =>
            checkingCarDamagedAreasHandler({ image: link, draw_result: true })
          }
        />
        {!resultSpinner && outputUrl && (
          <div className="result-img-contain">
            <img
              src={outputUrl}
              alt="Car overview"
              className="result-img"
            ></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDamageDetection;

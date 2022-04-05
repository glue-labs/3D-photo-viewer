import { useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

import { useLoginHook } from "../../store/hooks/userAuth";

const Dashboard = () => {
  const { logoutUserHandler, userName } = useLoginHook();
  const [image, setImage] = useState(undefined as any);

  useEffect(() => {
    if (document.querySelector("#viewer")) {
    }
  }, []);

  const setViewer = (imageURL: any) => {
    new Viewer({
      container: document.querySelector("#viewer"),
      panorama: imageURL,
    } as any);
  };

  const handleOnImageUpload = (e: any) => {
    if (e.target.files[0] && !image) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setViewer(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div>
      <div>{userName}</div>
      <div>Upload a panorama image here</div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleOnImageUpload(e)}
      />
      <div
        id="viewer"
        style={{ width: "90vw", height: "70vh", border: "solid 1px black" }}
      ></div>
      <button onClick={logoutUserHandler}>Sign Out</button>
    </div>
  );
};

export default Dashboard;

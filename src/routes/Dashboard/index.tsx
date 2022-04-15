import { Fragment, useCallback, useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

import "./style.css";
import { useLoginHook } from "../../store/hooks/userAuth";

const Dashboard = () => {
  const { logoutUserHandler, userName } = useLoginHook();
  const [image, setImage] = useState(undefined as any);
  const [viewerInfo, setViewerInfo] = useState(undefined as any);

  useEffect(() => {
    if (document.querySelector("#viewer")) {
    }
  }, []);

  const setViewer = useCallback((imageURL: any) => {
    const viewer = new Viewer({
      container: document.querySelector("#viewer"),
      panorama: imageURL,
    } as any);
    setViewerInfo(viewer);
  }, []);

  const handleOnImageUpload = useCallback(
    (e: any) => {
      if (e.target.files[0] && !image && !viewerInfo) {
        setImage(URL.createObjectURL(e.target.files[0]));
        setViewer(URL.createObjectURL(e.target.files[0]));
      } else {
        setImage(undefined);
        viewerInfo.destroy();
        setViewerInfo(undefined);
      }
    },
    [image, setViewer, viewerInfo]
  );

  return (
    <Fragment>
      <div className="header">
        <div>Hi, {userName} </div>
        <button onClick={logoutUserHandler}>Sign Out</button>
      </div>
      <div className="container">
        Upload a panorama image here
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleOnImageUpload(e)}
        />
        <div
          id="viewer"
          style={{ width: "90vw", height: "70vh", border: "solid 1px black" }}
        ></div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

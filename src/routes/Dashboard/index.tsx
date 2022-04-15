import { Fragment, useCallback, useEffect, useState } from "react";
import { Viewer } from "photo-sphere-viewer";
import "photo-sphere-viewer/dist/photo-sphere-viewer.css";

import "./style.css";
import Header from "../../components/Header";

const Dashboard = () => {
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
      <Header />
      <div className="container">
        Upload a panorama image here
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleOnImageUpload(e)}
        />
        <div
          id="viewer"
          style={{
            width: "60vw",
            height: "50vh",
            border: "solid 1px black",
            borderRadius: "15px",
          }}
        ></div>
      </div>
    </Fragment>
  );
};

export default Dashboard;

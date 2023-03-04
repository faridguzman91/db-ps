import React, { useState } from "react";
import Layout from "../../../components/layout/layout";

const UploadImage = () => {
  const [imageUploaded, setImageUploaded] = useState();

  return (
    <Layout>
      <div className="page">
        <form>
          <h1>Upload Image</h1>
          <input accept=".jpg, .png, .gif, .jpeg" type="file"></input>

          <input type="submit" value="Upload" />
        </form>
      </div>
    </Layout>
  );
};

export default UploadImage;

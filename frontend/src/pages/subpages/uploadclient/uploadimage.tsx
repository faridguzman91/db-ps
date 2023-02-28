//@ts-ignore
//@ts-nocheck

import Router from "next/router";
import React, { useState } from "react";
import Layout from "../../../components/layout/layout";

const UploadImage = () => {
  const [imageUploaded, setImageUploaded] = useState();

  const handleChange = (event: any) => {
    setImageUploaded(event.target.files[0]);
  };

  const submitData = async (e) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUploaded);

      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="page">
        <form onSubmit={submitData}>
          <h1>Upload Image</h1>

          <input
            onChange={handleChange}
            accept=".jpg, .png, .gif, .jpeg"
            type="file"
          ></input>

          <input type="submit" value="Upload" />
        </form>
      </div>
      <style jsx>{`
        .page {
          background: white;
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        input[type="submit"] {
          background: #ececec;
          border: 0;
          padding: 1rem 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default UploadImage;

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from "./images/upload.png";
import upload2 from "./images/upload2.png";
import "../App.css";

function UploadEvent() {
  const [files, setFiles] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFiles(URL.createObjectURL(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // const changeHandler = (e) => {
  //   // console.log(e.target.files)
  //   setFiles(URL.createObjectURL(e.target.files[0]))
  // }

  return (
    <div className="uploadeventhead">
      <h1>Upload a Event</h1>
      <div {...getRootProps()}>
        <img src={upload} alt="uploadbutton" />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="uploadeventptag">Drop the files here ...</p>
        ) : (
          <p className="uploadeventptag">Drag & drop the file here</p>
        )}
        <span className="uploadeventspanclass">or</span>
        <br />
        <br />
        <button type="button" className="uploadimagebutton">
          Browse your system
        </button>
        {/* <input
          type="file"
          onChange={changeHandler}
          className="uploadimageclass"
        /> */}
        <br />
        <span className="uploadeventspanclass">
          {" "}
          Please upload your in JPEG or PNG format Only.
        </span>
        <br />
        {files && (
          <img src={files} height="200px" width="200px" alt="uploaded_image" />
        )}
      </div>

      {/* --------------------------------------------------- */}
      <h1>Event Details</h1>
      <input type="text" placeholder="Title" className="uploadeventinput1" />
      <br />
      <br />
      <input
        type="text"
        placeholder="Description"
        className="uploadeventinput2"
      />
      <br />
      <br />
      <button type="button" className="uploadeventbuttonclass">
        <div>
          <span>Upload </span>
          <img src={upload2} alt="smallupload" height="15vw" width="15vw" />
        </div>
      </button>
    </div>
  );
}

export default UploadEvent;

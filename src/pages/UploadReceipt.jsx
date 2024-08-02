import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import upload from "./images/upload.png";
import upload2 from "./images/upload2.png";
import "../App.css";

function UploadReceipt() {
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
      <h1>{null}</h1>
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
      <h1>Please Fill the Details Below</h1>
      <form>
        <div className="uploadreceiptform">
          <label htmlFor="input1">
            Full Name
            <br />
            <input
              type="text"
              id="input1"
              placeholder="Name"
              className="uploadeventinput"
              style={{ width: "20vw" }}
            />
          </label>
          <label htmlFor="input2">
            Mobile Number
            <br />
            <input type="number" id="input2" className="uploadeventinput" />
          </label>
          <label htmlFor="input3">
            Date of Payment
            <br />
            <input type="date" id="input3" className="uploadeventinput" />
          </label>
          <label htmlFor="input4">
            E-mail ID
            <br />
            <input
              type="text"
              id="input4"
              placeholder="Email ID"
              className="uploadeventinput"
              style={{ width: "20vw" }}
            />
          </label>
        </div>
        <br />
        <label htmlFor="input5" style={{ marginLeft: "43%" }}>
          Transaction ID
          <br />
          <input
            type="number"
            id="input5"
            className="uploadeventinput"
            placeholder="ID No."
            style={{ width: "25%", marginLeft: "35%" }}
          />
        </label>
      </form>

      <p style={{ marginLeft: "28%" }}>
        Please note : Enter the 12 Digit number (
        <b style={{ color: "#B61A1A" }}>Transaction ID OR UTR Number </b> )
      </p>
      <h4 style={{ marginLeft: "38%" }}>
        Note : Maximum upload file size:
        <span style={{ color: "#B61A1A" }}>10 MB.</span>
      </h4>

      <button type="button" className="uploadeventbuttonclass">
        <div>
          <span>Upload </span>
          <img src={upload2} alt="smallupload" height="15vw" width="15vw" />
        </div>
      </button>
    </div>
  );
}

export default UploadReceipt;

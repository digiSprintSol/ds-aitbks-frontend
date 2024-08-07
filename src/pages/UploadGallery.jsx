import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Grid, TextField } from "@mui/material";
import Button from "../components/Button";
import upload from "./images/upload.png";
import upload2 from "./images/upload2.png";
import "../App.css";

function UploadGallery() {
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
      <h1 style={{ fontFamily: "ProximaBold" }}>Upload a Image</h1>
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
        <span
          style={{ fontFamily: "ProximaRegular" }}
          className="uploadeventspanclass"
        >
          Please upload your in JPEG or PNG format Only.
        </span>
        <br />
        {files && (
          <img src={files} height="200px" width="200px" alt="uploaded_image" />
        )}
      </div>

      {/* --------------------------------------------------- */}
      <h1 style={{ fontFamily: "ProximaSemiBold" }}>Image Details</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="text"
            placeholder="Title"
            className="uploadeventinput1"
            sx={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="text"
            placeholder="Description"
            className="uploadeventinput2"
            sx={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12} sx={{ marginLeft: "500px", marginTop: "20px" }}>
          <Button type="button" className="uploadeventbuttonclass">
            <div>
              <span>Upload </span>
              <img src={upload2} alt="smallupload" height="15vw" width="15vw" />
            </div>
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadGallery;

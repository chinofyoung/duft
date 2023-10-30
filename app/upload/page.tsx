"use client";
import { message, Image, Progress } from "antd";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from "react";
import { storage } from "../firebase";
import Padded from "../layout/padded";

const UploadImageToStorage = () => {
  const [imageFile, setImageFile] = useState<File>();
  const [downloadURL, setDownloadURL] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [progressUpload, setProgressUpload] = useState(0);

  const handleSelectedFile = (files: any) => {
    if (files && files[0].size < 10000000) {
      setImageFile(files[0]);

      console.log(files[0]);
    } else {
      message.error("File size to large");
    }
  };

  const handleUploadFile = () => {
    if (imageFile) {
      const name = imageFile.name;
      const storageRef = ref(storage, `image/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          setProgressUpload(progress); // to show progress upload

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          message.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            //url is download url of file
            setDownloadURL(url);
          });
        }
      );
    } else {
      message.error("File not found");
    }
  };

  const handleRemoveFile = () => setImageFile(undefined);

  return (
    <Padded>
      <div className="">
        <input
          type="file"
          placeholder="Select file to upload"
          accept="image/png"
          onChange={(files) => handleSelectedFile(files.target.files)}
        />

        <div className="mt-5">
          {imageFile && (
            <>
              <button
                loading={isUploading}
                type="primary"
                onClick={handleRemoveFile}
                className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-red-500"
              >
                Remove
              </button>

              <div>
                <span>{imageFile.name}</span>
                <span>Size: {imageFile.size}</span>
              </div>

              <div className="text-right mt-3">
                <button
                  loading={isUploading}
                  type="primary"
                  onClick={handleUploadFile}
                  className="rounded-md px-5 py-2.5 text-white text-center text-xs bg-red-500"
                >
                  Upload
                </button>

                <Progress percent={progressUpload} />
              </div>
            </>
          )}

          {downloadURL && (
            <>
              <Image
                src={downloadURL}
                alt={downloadURL}
                style={{ width: 200, height: 200, objectFit: "cover" }}
              />
              <p>{downloadURL}</p>
            </>
          )}
        </div>
      </div>
    </Padded>
  );
};

export default UploadImageToStorage;

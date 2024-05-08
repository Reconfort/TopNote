"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      <CldUploadWidget
        uploadPreset="imztdyu8"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;

          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => {
          return (
            <button className="btn btn-primary" onClick={() => open()}>
              Upload
            </button>
          );
        }}
      </CldUploadWidget>

      {
        publicId && <CldImage src={publicId} width={270} height={180} alt="Coffe Image"/>
      }

    </>
  );
};

export default UploadPage;

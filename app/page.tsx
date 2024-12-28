"use client"
import Image from "next/image";
import { UploadButton, useUploadThing } from "../utils/uploadthing";
import { SetStateAction, useEffect, useState } from "react";
import { MultiUploader } from "../components/shared/uploadthing/example-custom-uploader";
import { Button } from "../components/ui/button";

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);

  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: () => { },
    onUploadError: () => {
      // alert("error occurred while uploading");
    },
    onUploadBegin: () => {
      // console.log("upload has begun for", file);
    },
  });

  const submitImages = async () => {
    if (files.length > 0) {
      const data = await startUpload(files)
      return data ? data.map(d => d.appUrl) : []
    }
  }

  const handleUpload = async (e) => {
    e.stopPropagation()
    const images = await submitImages()
    if (images) { setImage(prev => images[0] || prev) }
  }

  return (
    <div className="bg-gradient-to-br from-purple-700 to-purple-500 space-y-4  h-screen flex justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <h1 className="m-4 text-white text-4xl  font-bold">Clerk + Nextjs + Uploadthing Template</h1>
        <MultiUploader
          className="text-white border-dashed cursor-pointer"
          render={
            <div className="flex flex-col justify-center items-center space-y-2">
              {
                files.length == 0
                  ? <p className="text-xl ">Drag files here</p>
                  : <div className="my-2">Files Uploaded = {files.length}</div>
              }
              <Button onClick={handleUpload} > Upload Image </Button>
            </div>
          }
          files={files}
          setFiles={setFiles}
          submit={submitImages} />
        {image && <Image src={image} width={300} height={400} alt="uploaded image" />}
      </main>
    </div>
  );
}

'use client'
import { useParams } from "next/navigation"
import { useCallback, useRef, useState } from "react";
// import { useRef, useState } from "react";
// import { Camera, CameraType } from "react-camera-pro";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";

export default function ReportPage() {
    const {slug} = useParams<{slug: string}>();

    const onSubmit = () => {
        console.log('HERE')
        toast.success(`The ${slug} is coming to you right away`)
    }

    // const camera = useRef<CameraType>(null);
    // const [image, setImage] = useState("");
    // const errorMessages = {
    //     noCameraAccessible: "No camera accessible. Please check your device settings.",
    //     permissionDenied: "Camera access was denied. Please grant camera permission.",
    //     switchCamera: "It is not possible to switch the camera.",
    //     canvas: "Canvas is not supported by your browser."
    // };

    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        setImgSrc(imageSrc!);
      }, [webcamRef]);
    

    return (
        <div className="py-20 px-6 flex flex-col justify-center gap-6 items-stretch h-screen">
            <>
                <div className="flex justify-center">
                    <div className="w-full"> 
                        {/* <Camera 
                            ref={camera} 
                            aspectRatio={4/3}
                            errorMessages={errorMessages}
                        /> */}
                        <Webcam 
                            ref={webcamRef}
                            height={600} 
                            width={600} 
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button 
                        onClick={capture}
                        className="bg-gray-200 h-[70px] w-[70px] flex justify-center items-center rounded-full"
                    >
                        <FaCamera className="text-3xl" />
                    </button>
                </div>
            </>
            {imgSrc && (
                <>
                    <img src={imgSrc} alt='Taken photo' />
                    <textarea 
                        placeholder="Enter short description"
                        className="w-full p-4 rounded-lg bg-gray-100 border-2 border-gray-200" 
                    />
                    <button 
                        onClick={onSubmit}
                        className="w-full bg-red-500 py-4 text-lg rounded-lg"
                    >
                        Submit
                    </button>
                </>
            )}
        </div>
    )
}

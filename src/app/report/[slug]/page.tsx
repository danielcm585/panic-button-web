'use client'
import { useParams } from "next/navigation"
import { useCallback, useRef, useState } from "react";
// import { useRef, useState } from "react";
// import { Camera, CameraType } from "react-camera-pro";
import Webcam from "react-webcam";
import { FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import { IoReload } from "react-icons/io5";

export default function ReportPage() {
    const {slug} = useParams<{slug: string}>();

    const webcamRef = useRef<Webcam>(null);
    const [imgSrc, setImgSrc] = useState<string | null>(null);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current?.getScreenshot();
        setImgSrc(imageSrc!);
      }, [webcamRef]);
    

    const [description, setDescription] = useState('');

    const onSubmit = () => {
        if (!imgSrc) {
            toast.error('Please take a picture as an evidence');
            return;
        }
        if (description === '') {
            toast.error('Please add short description');
            return;
        }
        toast.success(`The ${slug} is coming to you right away`);
        window.location.href = '/progress'
    }

    return (
        <main className="py-20 px-6 flex flex-col justify-center gap-6 items-stretch h-screen">
            <>
                <div className="flex justify-center">
                    <div className="w-full"> 
                        {!imgSrc ? (
                            <Webcam 
                                ref={webcamRef}
                                height={600} 
                                width={600} 
                                videoConstraints={{facingMode: 'environment'}}
                            />
                        ) : (
                            <img src={imgSrc} alt='Taken photo' />
                        )}
                    </div>
                </div>
                <div className="flex justify-center">
                    {!imgSrc ? (
                        <button 
                            onClick={capture}
                            className="bg-gray-200 h-[70px] w-[70px] flex justify-center items-center rounded-full"
                        >
                            <FaCamera className="text-3xl" />
                        </button>
                    ) : (
                        <button 
                            onClick={() => setImgSrc(null)}
                            className="bg-gray-200 h-[70px] w-[70px] flex justify-center items-center rounded-full"
                        >
                            <IoReload className="text-3xl" />
                        </button>
                    )}
                </div>
            </>
            <textarea 
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter short description"
                className="w-full p-4 rounded-lg bg-gray-100 border-2 border-gray-200" 
            />
            <button 
                onClick={onSubmit}
                className="w-full bg-red-500 py-4 text-lg rounded-lg"
            >
                Submit
            </button>
        </main>
    )
}

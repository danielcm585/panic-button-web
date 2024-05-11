'use client'
import { useEffect, useState } from "react"

export default function ProgressPage() {
    const [isWaiting, setIsWaiting] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsWaiting(false);
        }, 2000);
    }, [])

    return (
        <main className="flex flex-col justify-center items-stretch h-screen overflow-hidden">
            {isWaiting ? (
                <div className="text-3xl px-6">
                    Report pending...
                </div>
            ) : (
                <>
                    <div className="h-screen w-full overflow-hidden">
                        <div className="relative">
                            <div className="absolute h-[50px] w-[50px] border-2 border-black z-[10] rounded-full overflow-hidden p-1 bg-white mt-[180px] ml-[420px]">
                                <img src="/siren.png" />
                            </div>
                            <div className="absolute flex justify-center items-center h-[50px] w-[50px] border-2 border-black z-[10] rounded-full overflow-hidden p-1 bg-white mt-[450px] ml-[100px]">
                                YOU
                            </div>
                            <img src="/map.png" className="absolute h-[120vh] w-auto object-cover brightness-75" />
                            
                        </div>
                    </div>
                    <div className="fixed bottom-0 w-[min(520px,100vw)] p-6 bg-white rounded-t-xl items-start text-xl flex flex-col gap-2">
                        Your help will be there in about 
                        <p className="text-red-500 font-semibold text-3xl">
                            3 minutes
                        </p>
                    </div>
                </>
            )}
        </main>
    )
}

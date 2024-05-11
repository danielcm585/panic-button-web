'use client';
export default function HomePage() {
    return (
        <main className="flex flex-col justify-between h-screen items-stretch py-20">
            <h1 className="w-full text-center font-bold text-3xl">
                <span className="text-red-500">
                    PANIC
                </span>
                {' '}BUTTON
            </h1>
            <div className="flex gap-4 justify-center w-full">
                <button 
                    onClick={() => window.location.href = '/report/ambulance'}
                    className="font-semibold text-2xl bg-green-500 h-[180px] w-[180px] rounded-full shadow-2xl"
                >
                    Ambulance
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full">
                <button 
                    onClick={() => window.location.href = '/report/police'}
                    className="font-semibold text-2xl bg-blue-500 h-[180px] w-[180px] rounded-full shadow-2xl"
                >
                    Police
                </button>
            </div>
            <div className="flex gap-4 justify-center w-full">
                <button 
                    onClick={() => window.location.href = '/report/firefighter'}
                    className="font-semibold text-2xl bg-red-500 h-[180px] w-[180px] rounded-full shadow-2xl"
                >
                    Firefighter
                </button>
            </div>
            <div className="flex flex-col justify-center w-full">
                <p className="text-xl font-semibold text-center">
                    My Location
                </p>
                <p className="text-lg text-center">
                    Latitude: 41.85052 
                </p>
                <p className="text-lg text-center">
                    Longitude: -20.30960
                </p>
            </div>
        </main>
    );
}

'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function AdminPage() {

    const [data, setData] = useState([
        {
            slug: 'firefighter',
            description: 'Kebakaran hebat di lantai 2 ruko',
            location: 'Latitude: 41.85052 Longitude: -20.30960'
        },
        {
            slug: 'police',
            description: 'Kerusuhan karena tawuran antar pelajar',
            location: 'Latitude: 41.85052 Longitude: -20.30960'
        },
        {
            slug: 'ambulance',
            description: 'Orang pingsan akibat serangan jantung',
            location: 'Latitude: 41.85052 Longitude: -20.30960'
        },
    ])

    return (
        <div className="py-20 px-6 flex flex-col gap-6 ">
            <h1 className="text-3xl font-bold">ADMIN</h1>
            {data.map((item, index) => (
                <div 
                    key={`report-${index}`}
                    className="w-full bg-gray-100 border-2 border-gray-200 rounded-lg p-4"
                >
                    {item.slug === 'firefighter' ? (
                        <p className="font-semibold text-red-500 text-lg">Firefighter</p>
                    ) : item.slug === 'police' ? (
                        <p className="font-semibold text-blue-500 text-lg">Police</p>
                    ) : (
                        <p className="font-semibold text-green-500 text-lg">Ambulance</p>
                    )}
                    <p className="font-semibold">{item.location}</p>
                    <p className="text-sm">{item.description}</p>
                    <button 
                        onClick={() => {
                            toast.success('Approve success, report will be forwarded to the emergency service')
                            setData((prev) => 
                                [...prev].filter((_, i) => i != index
                            ))
                        }}
                        className="mt-2 bg-gray-500 text-white py-1 px-2 rounded-md"
                    >
                        Approve
                    </button>
                </div>
            ))}
        </div>
    )
}

"use client";


import React from 'react'
import Time from "../components/Time.jsx";
import Sidebar from "../components/Sidebar.jsx"
import CreateMessage from "../components/CreateMessage.jsx";

const page = () => {
    return (
        <div>
            <Sidebar children={<CreateMessage />} />


        </div>
    )
}

export default page
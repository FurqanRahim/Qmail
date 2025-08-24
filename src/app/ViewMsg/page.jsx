"use client";


import React from 'react'
import Time from "../components/Time.jsx";
import Sidebar from "../components/Sidebar.jsx"
import ViewMessage from "../components/ViewMessage.jsx";

const page = () => {
    return (
        <div>
            <Sidebar children={<ViewMessage />} />


        </div>
    )
}

export default page
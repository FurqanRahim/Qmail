"use client";


import React from 'react'
import Time from "../components/Time.jsx";
import Sidebar from "../components/Sidebar.jsx"
import Logout from "../components/Logout.jsx";

const page = () => {
    return (
        <div>
            <Sidebar children={<Logout />} />


        </div>
    )
}

export default page
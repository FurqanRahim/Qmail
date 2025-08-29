"use client";


import React from 'react'
import Logout from "../../components/Logout.jsx";
import Time from "../../components/Time.jsx";
import Sidebar from "../../components/Sidebar.jsx";

const page = () => {
    return (
        <div>
            <Sidebar children={<Logout />} />


        </div>
    )
}

export default page
"use client";

import React, { useState } from "react";

export default function ViewMessage() {
    const [emails, setEmails] = useState([
        {
            to: "john@example.com",
            subject: "Meeting Reminder",
            message: "Don't forget about our meeting tomorrow at 10 AM.",
            futureDate: "2025-09-01 10:00",
        },
        {
            to: "sara@example.com",
            subject: "Project Update",
            message: "The project is on track, expecting completion next week.",
            futureDate: "",
        },
        {
            to: "alex@example.com",
            subject: "Invitation",
            message: "You are invited to the annual company dinner.",
            futureDate: "2025-09-05 20:00",
        },
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const [formData, setFormData] = useState({
        to: "",
        subject: "",
        message: "",
        futureDate: "",
    });

    // Open edit modal
    const handleEdit = (index) => {
        setEditIndex(index);
        setFormData(emails[index]);
    };

    // Save edited email
    const saveEdit = () => {
        const updatedEmails = [...emails];
        if (editIndex !== null) {
            updatedEmails[editIndex] = formData;
            setEmails(updatedEmails);
            setEditIndex(null);
        }
    };

    // Delete email
    const confirmDelete = () => {
        if (deleteIndex !== null) {
            const updatedEmails = emails.filter((_, i) => i !== deleteIndex);
            setEmails(updatedEmails);
            setDeleteIndex(null);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-[#2F206A] mb-4">
                    All Composed Emails
                </h2>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-[#2F206A] text-white text-left">
                                <th className="p-3">To</th>
                                <th className="p-3">Subject</th>
                                <th className="p-3">Message</th>
                                <th className="p-3">Scheduled Date</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {emails.map((email, index) => (
                                <tr
                                    key={index}
                                    className="border-b hover:bg-gray-50 transition text-sm"
                                >
                                    <td className="p-3">{email.to}</td>
                                    <td className="p-3">{email.subject}</td>
                                    <td className="p-3">{email.message}</td>
                                    <td className="p-3">{email.futureDate || "Now"}</td>
                                    <td className="p-3 flex gap-2">
                                        <button
                                            onClick={() => handleEdit(index)}
                                            className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => setDeleteIndex(index)}
                                            className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Edit Modal */}
            {editIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
                        <h3 className="text-lg font-bold mb-4 text-[#2F206A]">
                            Edit Email
                        </h3>
                        <div className="space-y-3">
                            <input
                                type="email"
                                value={formData.to}
                                onChange={(e) =>
                                    setFormData({ ...formData, to: e.target.value })
                                }
                                placeholder="Recipient"
                                className="w-full border rounded-lg px-3 py-2"
                            />
                            <input
                                type="text"
                                value={formData.subject}
                                onChange={(e) =>
                                    setFormData({ ...formData, subject: e.target.value })
                                }
                                placeholder="Subject"
                                className="w-full border rounded-lg px-3 py-2"
                            />
                            <textarea
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                placeholder="Message"
                                rows={4}
                                className="w-full border rounded-lg px-3 py-2"
                            />
                            <input
                                type="datetime-local"
                                value={formData.futureDate}
                                onChange={(e) =>
                                    setFormData({ ...formData, futureDate: e.target.value })
                                }
                                className="w-full border rounded-lg px-3 py-2"
                            />
                        </div>
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setEditIndex(null)}
                                className="px-4 py-2 border rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={saveEdit}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {deleteIndex !== null && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg">
                        <h3 className="text-lg font-bold mb-4 text-red-600">
                            Confirm Delete
                        </h3>
                        <p>Are you sure you want to delete this email?</p>
                        <div className="flex justify-end gap-3 mt-4">
                            <button
                                onClick={() => setDeleteIndex(null)}
                                className="px-4 py-2 border rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

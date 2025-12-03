"use client";

import { useState } from "react";

export default function StudentsPage() {
    const students = [
        { id: 1, name: "Aarav Sharma", grade: "A", dept: "Computer Science" },
        { id: 2, name: "Meera Patel", grade: "B", dept: "IT" },
        { id: 3, name: "Rohit Verma", grade: "A+", dept: "AI & ML" },
        { id: 4, name: "Sanjana Rao", grade: "C", dept: "ECE" },
        { id: 5, name: "Vikram Singh", grade: "B+", dept: "Mechanical" },
        { id: 6, name: "Ananya Reddy", grade: "A", dept: "Civil" },
        { id: 7, name: "Nikhil Das", grade: "A-", dept: "AI & ML" },
        { id: 8, name: "Priya Shetty", grade: "B", dept: "Computer Science" },
        { id: 9, name: "Harsh Raj", grade: "C+", dept: "IT" },
    ];

    const [search, setSearch] = useState("");
    const [filterGrade, setFilterGrade] = useState("All");

    const filteredStudents = students.filter((s) => {
        const matchesSearch =
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.dept.toLowerCase().includes(search.toLowerCase());

        const matchesGrade =
            filterGrade === "All" ? true : s.grade === filterGrade;

        return matchesSearch && matchesGrade;
    });

    return (
        <section className="pt-32 px-6">
            <h1 className="text-4xl font-bold text-blue-700">
                Student Records
            </h1>

            {/* SEARCH + FILTER */}
            <div className="mt-6 flex flex-col md:flex-row gap-4 md:items-center">
                <input
                    type="text"
                    placeholder="Search by name or department..."
                    className="w-full md:w-1/2 p-3 rounded-xl border border-gray-300 bg-white text-gray-800"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="w-full md:w-40 p-3 rounded-xl border border-gray-300 bg-white text-gray-800"
                    value={filterGrade}
                    onChange={(e) => setFilterGrade(e.target.value)}
                >
                    <option>All</option>
                    <option>A</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B</option>
                    <option>B+</option>
                    <option>C</option>
                    <option>C+</option>
                </select>
            </div>

            {/* TABLE */}
            <div className="mt-8 bg-white shadow-xl rounded-2xl p-6 border border-gray-200 max-w-6xl mx-auto">
                <table className="w-full text-left text-gray-700">
                    <thead>
                        <tr className="border-b border-gray-300 font-semibold">
                            <th className="py-3">ID</th>
                            <th>Name</th>
                            <th>Grade</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((s) => (
                                <tr
                                    key={s.id}
                                    className="border-b border-gray-200 hover:bg-gray-100 transition"
                                >
                                    <td className="py-3">{s.id}</td>
                                    <td>{s.name}</td>
                                    <td className="font-semibold">{s.grade}</td>
                                    <td>{s.dept}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td className="py-4 text-center text-red-500" colSpan="4">
                                    No matching students found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
}

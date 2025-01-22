"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TeamMember } from "@/types/dataTypes";

const DetailsPage = () => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const status = searchParams.get("status");

    useEffect(() => {
        const data = localStorage.getItem("teamData");
        if (data) {
            const parsedData = JSON.parse(data);
            console.log("Parsed teamData from localStorage:", parsedData); // Log for debugging

            const teamData = parsedData // Safely access teamData

            if (teamData && Array.isArray(teamData)) {
                const filteredMembers = teamData.filter((member: TeamMember) => member.Status === status);
                setMembers(filteredMembers);
            } else {
                console.error("teamData is not an array or is undefined"); // Error log
            }
        } else {
            console.error("No teamData found in localStorage"); // Error log
        }
    }, [status]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-white to-blue-700">
            <h1 className="text-2xl font-bold mb-4 text-blue-600">{status} Members</h1>
            <div className="flex gap-4  ">
                {members.map((member, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded shadow-md  gap-3">
                        <h2 className="text-lg font-semibold ">{member.Name}</h2>
                        <p>Status: {member.Status}</p>
                        <p>Type {member.Type} </p>
                        <p>Join Date :-{member["Join Date"]} </p>
                        <p>Reported to :-{member["Reported to"]} </p>
                        <p>Project Codes :-{member["Project Codes"]}</p>
                        <p>{member.user_id}@ceew.in</p>
                        

                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailsPage;

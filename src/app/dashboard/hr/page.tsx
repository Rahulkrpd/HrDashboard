"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    LabelList,
} from "recharts";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const HRDashboard = () => {
    const [teamCards, setTeamCards] = useState<{ [key: string]: { activeUsers: string[] } }>({});
    const [chartData, setChartData] = useState<any[]>([]); // State for chart data
    const router = useRouter();

    useEffect(() => {
        try {
            const data = localStorage.getItem("allData");
            if (data) {
                const allData = JSON.parse(data);

                let globalActiveCount = 0;

                const teamData = allData.reduce((acc: any, row: any) => {
                    const { "Team Name": teamName, Status, Name } = row;

                    if (!acc[teamName]) {
                        acc[teamName] = {
                            activeUsers: [],
                        };
                    }

                    if (Status === "Active") {
                        acc[teamName].activeUsers.push(Name);
                        globalActiveCount += 1; // Increment the global active count
                    }

                    return acc;
                }, {});

                // Add the "All" team data representing all active members
                teamData["All"] = {
                    activeUsers: Array(globalActiveCount).fill(""), // Dummy array to represent all active members
                };

                setTeamCards(teamData);

                const newChartData = Object.keys(teamData).map((teamName) => ({
                    teamName,
                    activeMembers: teamData[teamName]?.activeUsers.length || 0,
                }));

                setChartData(newChartData);
            }
        } catch (error) {
            console.error("Error processing allData", error);
        }
    }, []);

    const handleTeamClick = (teamName: string) => {
        const allData = JSON.parse(localStorage.getItem("allData") || "[]");

        const selectedTeamMembers =
            teamName === "All"
                ? allData.filter((member: any) => member.Status === "Active")
                : allData.filter((member: any) => member["Team Name"] === teamName);

        localStorage.setItem("teamData", JSON.stringify(selectedTeamMembers));
        router.push(`/dashboard/team-leader`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-white to-blue-700">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold">Hello HR</h1>
                <h5 className="text-lg">Welcome to the HR Dashboard</h5>
            </div>

            {/* Team Name Cards */}
            <div className="lower-div grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
                {Object.keys(teamCards).map((teamName) => (
                    <Card
                        key={teamName}
                        onClick={() => handleTeamClick(teamName)}
                        className="hover:bg-slate-400 hover:scale-105 transform transition duration-300 ease-in-out z-1 shadow-md hover:shadow-lg cursor-pointer hover:border-none"
                    >
                        <CardHeader>
                            <CardTitle>{teamName}</CardTitle>
                            <CardDescription className="text-bold">
                                Active Members: {teamCards[teamName]?.activeUsers.length || 0}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Click to view team details</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Bar Chart */}
            <div className="graph">
                <Card>
                    <CardHeader>
                        <CardTitle>Team Activity Bar Chart</CardTitle>
                        <CardDescription>Active Members by Team</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={{ label: "Active Members", color: "hsl(var(--chart-1))" }}>
                            <BarChart data={chartData} width={500} height={300}>
                                <CartesianGrid vertical={false} stroke="#ccc" />
                                <XAxis
                                    dataKey="teamName"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value}
                                />
                                <YAxis allowDecimals={false} />
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Bar dataKey="activeMembers" fill="hsl(var(--chart-1))" radius={10}>
                                    <LabelList dataKey="activeMembers" position="top" />
                                </Bar>
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="flex gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing active members by team
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default HRDashboard;

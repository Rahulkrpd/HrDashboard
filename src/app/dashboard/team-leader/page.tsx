"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { TeamData, TeamMember } from "@/types/dataTypes";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
    const [teamData, setTeamData] = useState<TeamData | null>(null);
    const [count, setCount] = useState<{
        activeCount: number;
        inactiveCount: number;
        TeamLeader: string;
        TeamName: string;
    } | null>(null);
    const [isAllTeams, setIsAllTeams] = useState(false); // Flag to check if data is for all teams
    const router = useRouter();

    const getTeamDataFromLocalStorage = (): TeamData | null => {
        if (typeof window !== "undefined") {
            const data = localStorage.getItem("teamData");
            return data && data !== "undefined" ? JSON.parse(data) : null;
        }
        return null;
    };

    const TeamInfo = (team: TeamMember[]) => {
        const activeCount = team.filter((member) => member.Status === "Active").length;
        const inactiveCount = team.filter((member) => member.Status === "InActive").length;

        // Check for multiple team leaders
        const teamLeaders = team
            .filter((member) => member.Designation === "Team Leader")
            .map((leader) => leader.Name);
        const TeamLeader = teamLeaders.length > 1 ? "Multiple Leaders" : teamLeaders[0] || "Not Available";

        const uniqueTeamNames = [...new Set(team.map((member) => member["Team Name"]))];
        const TeamName = uniqueTeamNames.length > 1 ? "All" : uniqueTeamNames[0] || "Unknown";

        return { activeCount, inactiveCount, TeamLeader, TeamName };
    };

    useEffect(() => {
        const storedData = getTeamDataFromLocalStorage();
        setTeamData(storedData);
        if (storedData) {
            const teamMembers = Array.isArray(storedData) ? storedData : storedData.teamData;
            if (teamMembers) {
                const memberCounts = TeamInfo(teamMembers);
                setCount(memberCounts);

                // Set the isAllTeams flag if multiple teams are present
                setIsAllTeams(memberCounts.TeamName === "All");
            }
        }
    }, []);

    const handleCardClick = (status: string) => {
        router.push(`/dashboard/details?status=${status}`);
    };



    const a = count?.activeCount 
    const n = count?.inactiveCount 
    const chartData = [
        { browser: "Active", visitors: a, fill: "var(--color-chrome)" },
        { browser: "InActive", visitors: n, fill: "var(--color-safari)" },

    ]

    const chartConfig = {
        visitors: {
            label: "Visitors",
        },
        chrome: {
            label: "Active",
            color: "hsl(var(--chart-2))",
        },
        safari: {
            label: "InActive",
            color: "hsl(var(--chart-1))",
        },

    } satisfies ChartConfig



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 via-white to-blue-700">
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold">{count?.TeamName}</h1>
                <h5 className="text-lg">{isAllTeams ? "Multiple Teams" : count?.TeamLeader}</h5>
            </div>

            <div className="upper-idv flex gap-4">
                <Card onClick={() => handleCardClick("Active")}>
                    <CardHeader>
                        <CardTitle>Active</CardTitle>
                        <CardDescription>
                            Active Members {isAllTeams ? "across all teams" : `in ${count?.TeamName}`}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Number: {count?.activeCount || 0}</p>
                    </CardContent>
                    <CardFooter>
                        <p>Click to view members</p>
                    </CardFooter>
                </Card>

                <Card onClick={() => handleCardClick("InActive")}>
                    <CardHeader>
                        <CardTitle>Inactive</CardTitle>
                        <CardDescription>
                            Inactive Members {isAllTeams ? "across all teams" : `in ${count?.TeamName}`}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Number: {count?.inactiveCount || 0}</p>
                    </CardContent>
                    <CardFooter>
                        <p>Click to view members</p>
                    </CardFooter>
                </Card>
            </div>

            <div className="pie-char py-5">
                <Card className="flex flex-col">
                    <CardHeader className="items-center pb-0">
                        <CardTitle>Pie Chart - Label</CardTitle>
                        <CardDescription>January - June 2024</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 pb-0">
                        <ChartContainer
                            config={chartConfig}
                            className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                        >
                            <PieChart>
                                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
                            </PieChart>
                        </ChartContainer>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter>
                </Card>
            </div>


        </div>
    );
};

export default Page;

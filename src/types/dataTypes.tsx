export type TeamMember = {
    ID: string;
    user_id: string;
    Name: string;
    Status: string;
    Type: string;
    "Join Date": string;
    "Team Name": string;
    "Reported to": string;
    "date of leaving": string;
    "Project Codes": string;
    "Salary (LPA in Lakhs)": string;
    Designation: string;
};

export type TeamData = {
    teamData: TeamMember[];
    teamCount: number;
};

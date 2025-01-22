// pages/TeamCards.tsx
import React from 'react';

interface Member {
    ID: string;
    user_id: string;
    Name: string;
    Status: string;
    Type: string;
    JoinDate: string;
    TeamName: string;
    ReportedTo: string;
    DateOfLeaving: string;
    ProjectCodes: string;
    Salary: string;
    Designation: string;
}

interface Team {
    teamName: string;
    teamLeader: Member | null;
    activeMembers: Member[];
    allMembers: Member[];
}


const obj = {
    "allData": [
        [
            {
                "ID": "1",
                "user_id": "rahul",
                "Name": "Rahul",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "10-Oct -2024",
                "Team Name": "Water",
                "Reported to": "Vaibhav Chugh",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "15",
                "Designation": "Team Member"
            },
            {
                "ID": "6",
                "user_id": "aditya.singh",
                "Name": "Aditya Singh",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "15-Jan-2024",
                "Team Name": "Water",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Leader"
            },
            {
                "ID": "13",
                "user_id": "ankit.desai",
                "Name": "Ankit Desai",
                "Status": "InActive",
                "Type": "Consultant",
                "Join Date": "13-Dec-2020",
                "Team Name": "Water",
                "Reported to": "CEO",
                "date of leaving": "13-Dec-2022",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "76k",
                "Designation": "Team Member"
            },
            {
                "ID": "18",
                "user_id": "sanjay.joshi",
                "Name": "Sanjay Joshi",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "14-Apr-2024",
                "Team Name": "Water",
                "Reported to": "Sam Joshi",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "23",
                "user_id": "aayush.verma",
                "Name": "Aayush Verma",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "06-Jun-2023",
                "Team Name": "Water",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "78k",
                "Designation": "Team Member"
            },
            {
                "ID": "33",
                "user_id": "vivek.jha",
                "Name": "Vivek Jha",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "15-Oct-2024",
                "Team Name": "Water",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "47k",
                "Designation": "Team Member"
            },
            {
                "ID": "39",
                "user_id": "harshita.s.",
                "Name": "Harshita S.",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "14-Sep-2024",
                "Team Name": "Water",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "44k",
                "Designation": "Team Member"
            }
        ],
        [
            {
                "ID": "2",
                "user_id": "arjun.singh",
                "Name": "Arjun Singh",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "12-Sep-2024",
                "Team Name": "Mobility",
                "Reported to": "Neha Mehta",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "30",
                "Designation": "Team Member"
            },
            {
                "ID": "7",
                "user_id": "meera.nair",
                "Name": "Meera Nair",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "28-Oct-2022",
                "Team Name": "Mobility",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "80k",
                "Designation": "Team Leader"
            },
            {
                "ID": "14",
                "user_id": "tanvi.roy",
                "Name": "Tanvi Roy",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "05-Jan-2024",
                "Team Name": "Mobility",
                "Reported to": "Sam Joshi",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "43k",
                "Designation": "Team Member"
            },
            {
                "ID": "19",
                "user_id": "nisha.thakur",
                "Name": "Nisha Thakur",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "07-Feb-2024",
                "Team Name": "Mobility",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "41k",
                "Designation": "Team Member"
            },
            {
                "ID": "24",
                "user_id": "isha.mittal",
                "Name": "Isha Mittal",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "02-Jan-2024",
                "Team Name": "Mobility",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "28",
                "user_id": "ved.arya",
                "Name": "Ved Arya",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "13-Nov-2024",
                "Team Name": "Mobility",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "39k",
                "Designation": "Team Member"
            },
            {
                "ID": "34",
                "user_id": "diya.gupta",
                "Name": "Diya Gupta",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "05-Mar-2023",
                "Team Name": "Mobility",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "77k",
                "Designation": "Team Member"
            },
            {
                "ID": "40",
                "user_id": "vishal.rao",
                "Name": "Vishal Rao",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "30-Jun-2023",
                "Team Name": "Mobility",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "79k",
                "Designation": "Team Member"
            }
        ],
        [
            {
                "ID": "3",
                "user_id": "maya.patel",
                "Name": "Maya Patel",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "01-Jul-2023",
                "Team Name": "Air",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "75k",
                "Designation": "Team Member"
            },
            {
                "ID": "8",
                "user_id": "rohit.mehta",
                "Name": "Rohit Mehta",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "14-Mar-2024",
                "Team Name": "Air",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "38k",
                "Designation": "Team Member"
            },
            {
                "ID": "15",
                "user_id": "vinay.arora",
                "Name": "Vinay Arora",
                "Status": "InActive",
                "Type": "Intern",
                "Join Date": "17-Jul-2022",
                "Team Name": "Air",
                "Reported to": "Ria Kapoor",
                "date of leaving": "17-Jul-2024",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "20",
                "user_id": "rohan.pillai",
                "Name": "Rohan Pillai",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "21-May-2023",
                "Team Name": "Air",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "82k",
                "Designation": "Team Member"
            },
            {
                "ID": "25",
                "user_id": "yash.sharma",
                "Name": "Yash Sharma",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "29-Sep-2024",
                "Team Name": "Air",
                "Reported to": "Sam Joshi",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "42k",
                "Designation": "Team Member"
            },
            {
                "ID": "29",
                "user_id": "zoya.kapoor",
                "Name": "Zoya Kapoor",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "17-Oct-2024",
                "Team Name": "Air",
                "Reported to": "Raj Verma",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "35",
                "user_id": "varun.reddy",
                "Name": "Varun Reddy",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "28-Jul-2024",
                "Team Name": "Air",
                "Reported to": "Neha Mehta",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "41",
                "user_id": "kiran.ahuja",
                "Name": "Kiran Ahuja",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "04-Aug-2024",
                "Team Name": "Air",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            }
        ],
        [
            {
                "ID": "4",
                "user_id": "karan.shah",
                "Name": "Karan Shah",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "22-Aug-2024",
                "Team Name": "CR",
                "Reported to": "Vaibhav Chugh",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "5",
                "user_id": "priya.kumar",
                "Name": "Priya Kumar",
                "Status": "InActive",
                "Type": "Consultant",
                "Join Date": "18-Jun-2022",
                "Team Name": "CR",
                "Reported to": "Sam Joshi",
                "date of leaving": "18-Jun-2024",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "40k",
                "Designation": "Team Member"
            },
            {
                "ID": "9",
                "user_id": "zara.khan",
                "Name": "Zara Khan",
                "Status": "InActive",
                "Type": "Full Time",
                "Join Date": "09-May-2021",
                "Team Name": "CR",
                "Reported to": "Raj Verma",
                "date of leaving": "09-May-2023",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Leader"
            },
            {
                "ID": "10",
                "user_id": "aman.grover",
                "Name": "Aman Grover",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "10-Oct-2023",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "69k",
                "Designation": "HR"
            },
            {
                "ID": "16",
                "user_id": "kritika.rao",
                "Name": "Kritika Rao",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "19-Nov-2023",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "79k",
                "Designation": "Team Member"
            },
            {
                "ID": "17",
                "user_id": "ali.qureshi",
                "Name": "Ali Qureshi",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "11-Aug-2024",
                "Team Name": "CR",
                "Reported to": "Neha Mehta",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "46k",
                "Designation": "Team Member"
            },
            {
                "ID": "21",
                "user_id": "geetika.sen",
                "Name": "Geetika Sen",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "01-Aug-2024",
                "Team Name": "CR",
                "Reported to": "Neha Mehta",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "22",
                "user_id": "arpita.jain",
                "Name": "Arpita Jain",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "20-Oct-2024",
                "Team Name": "CR",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "44k",
                "Designation": "Team Member"
            },
            {
                "ID": "26",
                "user_id": "nitin.khanna",
                "Name": "Nitin Khanna",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "25-Mar-2023",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "81k",
                "Designation": "Team Member"
            },
            {
                "ID": "27",
                "user_id": "sneha.nanda",
                "Name": "Sneha Nanda",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "19-Apr-2024",
                "Team Name": "CR",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "30",
                "user_id": "anuj.saxena",
                "Name": "Anuj Saxena",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "12-Sep-2023",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "80k",
                "Designation": "Team Member"
            },
            {
                "ID": "31",
                "user_id": "bhavna.tyagi",
                "Name": "Bhavna Tyagi",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "24-Jan-2024",
                "Team Name": "CR",
                "Reported to": "Vaibhav Chugh",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "43k",
                "Designation": "Team Member"
            },
            {
                "ID": "36",
                "user_id": "sakshi.bhat",
                "Name": "Sakshi Bhat",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "11-Dec-2023",
                "Team Name": "CR",
                "Reported to": "Sam Joshi",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "46k",
                "Designation": "Team Member"
            },
            {
                "ID": "37",
                "user_id": "lakshmi.iyer",
                "Name": "Lakshmi Iyer",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "09-Nov-2022",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "83k",
                "Designation": "Team Member"
            },
            {
                "ID": "42",
                "user_id": "rhea.singh",
                "Name": "Rhea Singh",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "25-Oct-2024",
                "Team Name": "CR",
                "Reported to": "Vaibhav Chugh",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "48k",
                "Designation": "Team Member"
            },
            {
                "ID": "43",
                "user_id": "gaurav.vyas",
                "Name": "Gaurav Vyas",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "07-Feb-2023",
                "Team Name": "CR",
                "Reported to": "CEO",
                "date of leaving": "NA",
                "Project Codes": "IGRF2",
                "Salary (LPA in Lakhs)": "81k",
                "Designation": "Team Member"
            }
        ],
        [
            {
                "ID": "11",
                "user_id": "raj.gupta",
                "Name": "Raj Gupta",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "25-Feb-2024",
                "Team Name": "ClimTech",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "42k",
                "Designation": "Team Leader"
            },
            {
                "ID": "12",
                "user_id": "sara.malik",
                "Name": "Sara Malik",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "30-Aug-2024",
                "Team Name": "ClimTech",
                "Reported to": "Sushant Rao",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "32",
                "user_id": "pooja.roy",
                "Name": "Pooja Roy",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "07-Aug-2024",
                "Team Name": "ClimTech",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "38",
                "user_id": "faizan.ali",
                "Name": "Faizan Ali",
                "Status": "Active",
                "Type": "Intern",
                "Join Date": "06-Feb-2024",
                "Team Name": "ClimTech",
                "Reported to": "Vaibhav Chugh",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Leader"
            },
            {
                "ID": "44",
                "user_id": "shruti.joshi",
                "Name": "Shruti Joshi",
                "Status": "InActive",
                "Type": "Intern",
                "Join Date": "16-Mar-2020",
                "Team Name": "ClimTech",
                "Reported to": "Neha Mehta",
                "date of leaving": "16-Mar-2023",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "15k",
                "Designation": "Team Member"
            },
            {
                "ID": "45",
                "user_id": "nandini.saha",
                "Name": "Nandini Saha",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "08-Jul-2024",
                "Team Name": "ClimTech",
                "Reported to": "Ria Kapoor",
                "date of leaving": "NA",
                "Project Codes": "BLOOMEXP",
                "Salary (LPA in Lakhs)": "39k",
                "Designation": "Team Member"
            },
            {
                "ID": "46",
                "user_id": "raghav.puri",
                "Name": "Raghav Puri",
                "Status": "Active",
                "Type": "Consultant",
                "Join Date": "20-Mar-2021",
                "Team Name": "ClimTech",
                "Reported to": "-",
                "date of leaving": "NA",
                "Project Codes": "AICR",
                "Salary (LPA in Lakhs)": "150k",
                "Designation": "Team Member"
            }
        ],
        [
            {
                "ID": "47",
                "user_id": "arunabha.gosh",
                "Name": "Arunabha Gosh",
                "Status": "Active",
                "Type": "Full Time",
                "Join Date": "1-Jan-2010",
                "Team Name": "All",
                "Reported to": "-",
                "date of leaving": "NA",
                "Project Codes": "-",
                "Salary (LPA in Lakhs)": "-",
                "Designation": "CEO"
            }
        ]
    ],
    "groupCounts": {
        "Team Member": 40,
        "Team Leader": 5,
        "HR": 1,
        "CEO": 1
    },
    "total": 47
}


const processTeamData = (data: Member[][]): Team[] => {
    const teamMap: { [key: string]: Team } = {};

    data.flat().forEach((member) => {
        const teamName = member.TeamName;

        if (!teamMap[teamName]) {
            teamMap[teamName] = {
                teamName,
                teamLeader: null,
                activeMembers: [],
                allMembers: []
            };
        }

        // Add to all members
        teamMap[teamName].allMembers.push(member);

        // Determine active members and team leader
        if (member.Status === 'Active') {
            if (member.Designation === 'Team Leader') {
                teamMap[teamName].teamLeader = member;
            } else {
                teamMap[teamName].activeMembers.push(member);
            }
        }
    });

    return Object.values(teamMap);
};

const TeamCard = ({ team }: { team: Team }) => (
    <div className="card">
        <h2>{team.teamName}</h2>
        <h3>Team Leader: {team.teamLeader ? team.teamLeader.Name : 'None'}</h3>
        <h4>Active Members:</h4>
        <ul>
            {team.activeMembers.map((member) => (
                <li key={member.ID}>{member.Name} - {member.Designation}</li>
            ))}
        </ul>
        <h4>All Members:</h4>
        <ul>
            {team.allMembers.map((member) => (
                <li key={member.ID}>{member.Name} - {member.Designation} ({member.Status})</li>
            ))}
        </ul>
    </div>
);

const TeamCards = () => {

    const allData = obj.allData;
    const teams = processTeamData(allData);

    return (
        <div className="team-cards">
            {teams.map((team) => (
                <TeamCard key={team.teamName} team={team} />
            ))}
        </div>
    );
};

export default TeamCards;

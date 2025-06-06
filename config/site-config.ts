export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"|"4x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project"|"experience"|"skills";
export type EqiupmentItem = {
    title: string;
    link: string;
};

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    /* Mentor */
    promotion?: string;
    price?: string;
    oldPrice?: string;
    /* Project */
    stars?: number;
    /* Equipments */
    equipments?: EqiupmentItem[];
    image?: string;
}


const GridItems: GridItemInterface[] = [
    {
        layout: "2x2",
        type: "social",
        title: "LinkedIn",
        icon: "linkedin",
        username: "Devansh Vishwa",
        description:
            "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
        color: "#0077b5",
        buttonTitle: "Connect with me !",
        buttonLink: "https://www.linkedin.com/in/devansh-vishwa-1baa34212/",
        buttonSecondaryText: "150+",
    },
    {
        layout: "2x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@dev129",
        buttonTitle: "Follow Me!",
        buttonSecondaryText: "60+ Repo.",
        buttonLink: "https://github.com/dev129",
        color: "#070707",
        description:
        "Click to view my open-source projects!",
    },
      {
        layout: "1x2",
        type: "social",
        title: "Discord",
        icon: "discord",
        username: "devansh#1133",
        buttonTitle: "Let's Connect",
        buttonLink: "https://discordapp.com/users/devansh#1133",
        color: "#5865F2",
      },
    
    {
        layout: "1x2",
        type: "social",
        title: "Resume",
        username: "",
        icon: "resume",
        buttonTitle: "Download",
        buttonLink: "https://drive.google.com/file/d/1GBub-o8NVNoUcxgU6HYmv2N2cQgSSw0m/view?usp=sharing",
        buttonSecondaryText: "",
        color: "#070707",
        description:
            "Download my resume!",
    },

    {
        layout: "2x2",
        type: "social",
        title: "Hall of Fame",
        icon: "trophy",
        username: "",
        description:
            "Skills & Achievements",
        color: "#070707",
        buttonTitle: "Know More",
        buttonLink: "/pages/halloffame",
        
        // buttonSecondaryText: "1.1K",
    },
    {
        layout: "2x1",
        type: "project",
        title: "College Campus Creator Hackathon",
        icon: "github",
        color: "#070707",
        buttonLink: "https://github.com/dev129/College-Campus-Creators-2024",
        // stars: 1,
    },
    {
        layout: "2x1",
        type: "project",
        title: "Park Mate",
        icon: "github",
        color: "#070707",
        stars: 2,

        buttonLink: "https://github.com/dev129/ParkMate",
    },
];

const GridItemsLower: GridItemInterface[] = [];



export const siteConfig = {
    creator: "Devansh Vishwa",
    title: "Frontend developer",
    bio: "Head , Debuggers Club ||Frontend Developer || 2x Hackathon Organiser || 48th rank in GSSoC-ext (2024) || NextJS || Open Source Contributor",
    location: "Udaipur, Raj.",
    locationLink:
        "https://www.google.com/maps/place/Udaipur,+Rajasthan/@24.6084198,73.6224703,12z/data=!3m1!4b1!4m6!3m5!1s0x3967e56550a14411:0xdbd8c28455b868b0!8m2!3d24.585445!4d73.712479!16zL20vMGJfa2Z5?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
    email: "devanshvishwa2004@gmail.com",
    items: GridItems,
    itemsLower: GridItemsLower,
} as const;
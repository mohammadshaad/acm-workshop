import React, { useState } from "react";
import one1 from '../../../../assets/1/kural.jpeg'
import one2 from '../../../../assets/1/sivaguru.jpeg'
import one3 from '../../../../assets/1/cyber-hack-2022.jpeg'
import two from '../../../../assets/2/internet-2.0.jpg'
import three1 from '../../../../assets/3/srikrithi.jpeg'
import three2 from '../../../../assets/3/sri-krithi-new.jpeg'
import four1 from '../../../../assets/4/gautham-cert.jpeg'
import four2 from '../../../../assets/4/gautham-krishna.jpeg'
import four3 from '../../../../assets/4/sabari-cert.jpeg'
import four4 from '../../../../assets/4/sabari-ganesh.jpeg'
import five1 from '../../../../assets/5/jaya-ganesh.jpeg'
import five2 from '../../../../assets/5/navatej.jpeg'
import five3 from '../../../../assets/5/susi.jpeg'
import five4 from '../../../../assets/5/tamil-comp-2022.jpeg'
import { motion } from "framer-motion";


const events = [
    {
        id: 1,
        image11: one1,
        image12: one2,
        image13: one3,
        year: "2020",
        title: "Cyber Hackathon 2022 Winners",
        winners: ["Shiva Gurunath 20BPS1028", "Kuralamuthan B 20BPS1082"],
        description: "The team of SCOPE faculty and students Dr. Vallidevi K, Associate Professor, SCOPE, Shiva Gurunath – 20BPS1028, Kuralamuthan B – 20BPS1082 won the I Prize in the finals and awarded the gifts and trophy by Mr. Shankar Jiwal, Chennai Police Commissioner, Selvi. Kiran Shruthi, IPS, Deputy Commissioner of Police, Ms. G.Nagajothi, Deputy Commissioner of Police& Dr. R. Velraj, VC, Anna University.",
    },
    {
        id: 2,
        image2: two,
        year: "2021",
        title: "Internet 2.0 – Outstanding Leadership Award in the field of Technology",
        description: "Our student 19MIA 1100 Anirudh Vasudev has won the Outstanding Leadership Award in the field of Technology at Internet 2.0 Conference held at the Intercontinental Hotel Dubai Festival City, Dubai.",
    },
    {
        id: 3,
        image31: three1,
        image32: three2,
        year: "2021",
        title: "Finalist in all Girls Hackathon – CHALAANG",
        description: "Part of the finalist team at Chalaang Hackathon which was conducted by Passion Connect in the Microsoft Office on 9th of December in Mumbai, Maharashtra.",
    },
    {
        id: 4,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "Lumos Metaverse’s Build for Web3 Hackathon",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 5,
        image41: five1,
        image42: five2,
        image43: five3,
        image44: five4,
        year: "2021",
        title: "Tamil Computing 2022",
        description: "Our students won the first prize with cash award Rs. 50000 /- in Hackathon on Tamil Computing 2022 jointly organized by Tamil Virtual Academy and VIT Vellore.",
    },
    {
        id: 6,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "QUIZ PRO QUO",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 7,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "Optum Stratethon Season 4 – APAC Hackathon Winners",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 8,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "Best Outgoing Student Award",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 9,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "IIT Madras Sports Fest",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 10,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "Asian International Youth United Nations Conference",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 11,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "Gold Medals in Power lifting and Bench Press Championship",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 12,
        image41: four1,
        image42: four2,
        image43: four3,
        image44: four4,
        year: "2021",
        title: "HackWithInfy 2022",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
];

const Timeline = () => {
    const [hoveredEvent, setHoveredEvent] = useState(null);

    return (
        <div className="absolute top-20">
            <div className="border-l-2 border-gray-300 absolute h-full top-0 left-5"></div>
            {events.map((event) => (
                <motion.div
                    key={event.id}
                    className="mb-8"
                    onMouseEnter={() => setHoveredEvent(event)}
                    onMouseLeave={() => setHoveredEvent(null)}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 },
                    }}
                >
                    <div className="flex items-center mb-2 cursor-pointer">
                        <motion.div
                            className="bg-green-500 rounded-full px-3 py-2 text-sm flex items-center justify-center z-10"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1, transition: { delay: 0.1 } }}
                        >
                            <span className="text-white">{event.id}</span>
                        </motion.div>
                        <div className="ml-4 font-bold">{event.title}</div>
                    </div>
                    {hoveredEvent === event && (
                        <motion.div

                            className="ml-12 cursor-pointer transition-all duration-500 flex flex-wrap items-start justify-center flex-col gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                        >                            <p className="text-gray-700">{event.description}</p>
                            {/* <p className="text-gray-700">{event.winners}</p> */}
                            <div className="flex items-start justify-center flex-col md:flex-row gap-2">
                                <img src={event.image11} alt='' />
                                <img src={event.image12} alt='' />
                                <img src={event.image13} alt='' />
                                <img src={event.image2} alt='' />
                                <img src={event.image31} alt='' />
                                <img src={event.image32} alt='' />
                                <img src={event.image41} alt='' />
                                <img src={event.image42} alt='' />
                                <img src={event.image43} alt='' />
                                <img src={event.image44} alt='' />
                            </div>

                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};


export default Timeline;

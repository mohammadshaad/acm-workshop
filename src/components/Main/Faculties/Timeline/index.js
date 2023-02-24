import React, { useState } from "react";
import one from '../../../../assets/8/1.png'
import two from '../../../../assets/8/2.png'
import three from '../../../../assets/8/3.png'
import four from '../../../../assets/8/4.png'
import five from '../../../../assets/8/5.png'
import { motion } from "framer-motion";


const events = [
    {
        id: 1,
        image11: one,
        year: "2020",
        title: "Dr S. Geetha has won the Best Indian Golden Personalities award from Friendship Forum, 2019",
        winners: ["Shiva Gurunath 20BPS1028", "Kuralamuthan B 20BPS1082"],
        description: "The team of SCOPE faculty and students Dr. Vallidevi K, Associate Professor, SCOPE, Shiva Gurunath – 20BPS1028, Kuralamuthan B – 20BPS1082 won the I Prize in the finals and awarded the gifts and trophy by Mr. Shankar Jiwal, Chennai Police Commissioner, Selvi. Kiran Shruthi, IPS, Deputy Commissioner of Police, Ms. G.Nagajothi, Deputy Commissioner of Police& Dr. R. Velraj, VC, Anna University.",
    },
    {
        id: 2,
        image2: two,
        year: "2021",
        title: "Dr T. S. Pradeepkumar has been appointed as ACM Distinguished Speaker,2018",
        description: "Our student 19MIA 1100 Anirudh Vasudev has won the Outstanding Leadership Award in the field of Technology at Internet 2.0 Conference held at the Intercontinental Hotel Dubai Festival City, Dubai.",
    },
    {
        id: 3,
        image31: three,
        year: "2021",
        title: "Dr R. Rajalakshmi received CODS Data Challenge Winner from Indian Institute of Technology, Madras, 2017",
        description: "Part of the finalist team at Chalaang Hackathon which was conducted by Passion Connect in the Microsoft Office on 9th of December in Mumbai, Maharashtra.",
    },
    {
        id: 4,
        image41: four,
        year: "2021",
        title: "Dr V. Pattabiraman and Dr. S. Harini received Best Paper Award with Euro 150 e-Cash Voucher in the International Conference on Computational Sciences Thailand, 2017.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 5,
        image41: five,
        year: "2021",
        title: "Dr B. Rajesh Kanna received Best Poster Award at 22nd International ACM Symposium on High-Performance Parallel and Distributed Computing(HPDC2013), New York, 2013.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 6,
        image41: four,
        year: "2021",
        title: "Dr.S.Geetha won “Best Professor Award” from ASDF for the year 2014",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 7,
        image41: four,
        year: "2021",
        title: "Dr. Jagadeesh Kannan won “ADINA Young Scientist Award” instituted by ADINA Group of Institutions, Sagar (M.P.) on March 05, 2016.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 8,
        image41: four,
        year: "2021",
        title: "Dr.Jagadeesh Kannan won “Vidyasagar Award – Keen Dedication & contribution in the field of Science & Technology” in 2016.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 9,
        image41: four,
        year: "2021",
        title: "Dr.T.Subbulakshmi won “Best Young Researcher Award” from SIAA of ASDF for the year 2017.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 10,
        image41: four,
        year: "2021",
        title: "Dr.Syed Ibrahim S.P. received “Best Male Faculty Award” in University Day Celebrations, VIT University Chennai in 2017.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 11,
        image41: four,
        year: "2021",
        title: "Dr.Harini Sriram, Dr.Pattabiraman won “Best Paper Award”, Springer in 2017.",
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 12,
        image41: four,
        year: "2021",
        title: "Dr. Vaidehi Vijayakumar won “Research Award” for 4th International Conference on Signal Processing, Communications and Networking ,MIT campus Chennai in 2017.",
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
                        <div className="ml-4 text-sm md:text-lg font-bold max-w-4xl">{event.title}</div>
                    </div>
                    {hoveredEvent === event && (
                        <motion.div

                            className="ml-12 cursor-pointer transition-all duration-500 flex flex-wrap items-start justify-center flex-col gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                        >
                            <p className="text-gray-700 text-xs md:text-base">{event.description}</p>
                            {/* <p className="text-gray-700">{event.winners}</p> */}
                            <div className="flex items-start justify-center gap-2">
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

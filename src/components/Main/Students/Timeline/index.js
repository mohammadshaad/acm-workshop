import React, { useState } from "react";
import { motion } from "framer-motion";
import zfr from '../../../../assets/ZFR-min.jpeg'
import shield1 from '../../../../assets/shield1.jpeg'
import shift2 from '../../../../assets/shift2.jpeg'

const events = [
    {
        id: 1,
        images: [""],
        title: "Finalist at Google Cloud The NEXT Big THING Hackathon",
        winners: ["Hartej Singh (19BCT0168)", "Pallavi Chauhan (19BCE0102)"],
        description: "Hartej Singh (19BCT0168)  & Pallavi Chauhan (19BCE0102)  for participated in and reached the finale of Google Cloud The NEXT Big THING Hackathon. The  prototype on the theme Banking & Finance was shortlisted in the top 6 among 330+ submissions all over India from all age groups as it was an open-to-all competition. Google Cloud Next 2022, Bangalore for the Grand Finale to showcase our prototype in front of jury members and industry experts on October 12–13, 2022, at the Bangalore International Exhibition Center, Bangalore.",
    },
    {
        id: 2,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/sivaguru.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/kural.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/cyber-hack-2022.jpg"],
        title: "Cyber Hackathon 2022 Winners",
        winners: ["Shiva Gurunath 20BPS1028", "Kuralamuthan B 20BPS1082"],
        description: "The team of SCOPE faculty and students Dr. Vallidevi K, Associate Professor, SCOPE, Shiva Gurunath – 20BPS1028, Kuralamuthan B – 20BPS1082 won the I Prize in the finals and awarded the gifts and trophy by Mr. Shankar Jiwal, Chennai Police Commissioner, Selvi. Kiran Shruthi, IPS, Deputy Commissioner of Police, Ms. G.Nagajothi, Deputy Commissioner of Police& Dr. R. Velraj, VC, Anna University.",
    },
    {
        id: 3,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/internet-2.0.jpg"],
        title: "Internet 2.0 – Outstanding Leadership Award in the field of Technology",
        winners: ["Anirudh Vasudev 19MIA1100"],
        description: "Our student 19MIA 1100 Anirudh Vasudev has won the Outstanding Leadership Award in the field of Technology at Internet 2.0 Conference held at the Intercontinental Hotel Dubai Festival City, Dubai.",
    },
    {
        id: 4,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/sri-krithi-new.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/srikrithi.jpg"],
        title: "Finalist in all Girls Hackathon – CHALAANG",
        winners: ["B N Shrikriti – 19MIA1037"],
        description: "Part of the finalist team at Chalaang Hackathon which was conducted by Passion Connect in the Microsoft Office on 9th of December in Mumbai, Maharashtra.",
    },
    {
        id: 5,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/sabari-ganesh.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/gautham-krishna.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/gautham-cert.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/sabari-cert.jpg"],
        title: "Lumos Metaverse’s Build for Web3 Hackathon",
        winners: ["Sabari Ganesh – 21BPS1209", "Gautham Krishna- 21BRS1032"],
        description: "Our team “Green Genesis participated in “Lumos Metaverse’s Build for Web3 Hackathon” which had around 7700+ developers across the world with all proficiency and 14 winning tracks by sponsors !! Our students’ team won Pool Prize in Polygon Track.",
    },
    {
        id: 6,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/susi.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/jaya-ganesh.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/navatej.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/tamil-comp-2022.jpg"],
        title: "Tamil Computing 2022",
        winners: ["Susindhar A (20BCE1973)", "JayaganeshVelayutham (22MIA1177)", "Navtej S Nair (22MIS1122)"],
        description: "Our students won the first prize with cash award Rs. 50000 /- in Hackathon on Tamil Computing 2022 jointly organized by Tamil Virtual Academy and VIT Vellore.",
    },
    {
        id: 7,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/aaditya-kanan.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/soumitya-pareek.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/aaditya-cert.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/soumitya-cert.jpg"],
        title: "QUIZ PRO QUO",
        winners: ["AadityaKannan – 21BPS1353", "Soumitya Pareek- 21BPS1408"],
        description: "Our students won the fourth place in quiz pro quo (intercollegiate quiz competition) conducted by Dwaraka Doss Goverdhan Doss Vaishnav College.",
    },
    {
        id: 8,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/joy-apporv.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/joy-apporv-award.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/arpan-jyo.jpg"],
        title: "Optum Stratethon Season 4 – APAC Hackathon Winners",
        winners: ["Joyeeta Dey – 19BCE1243", "Apoorv Singh Chauhan – 19BCE1055"],
        description: "Team “BYTEMAGIC” – Winners of E-Track were awarded prize money of $6700 \n Team “OPTUMIZERS” – Runners Up of E-Track were awarded prize money of $3000",
    },
    {
        id: 9,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/jayit-saha.jpg"],
        title: "Best Outgoing Student Award",
        winners: ["Jayit Saha 18BCE1071"],
        description: "Jayit Saha(18BCE1071) was facilitated with the Best Outgoing Student Award for the year 2021-22.",
    },
    {
        id: 10,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/srinidhi.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/vanthana.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/hannah.jpg"],
        title: "IIT Madras Sports Fest",
        winners: ["SRINIDHI K 21BAI1479", "VANDHANA S21BPS1172", "HANNAH GRACELYNE S21BCE1078"],
        description: "Srinidhi won the third prize in the women’s 800-metre category while the women’s relay team, consisting of Hannah, Vandhana, and Srinithi also bagged the third position",
    },
    {
        id: 11,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/puvanesh.jpg"],
        title: "Asian International Youth United Nations Conference",
        winners: ["PUVANESH Y.A 22MIA1180"],
        description: "Puvanesh Y A bagged the first prize in the Asian International Youth UnitedNations Conference which was held at Kuala Lumpur, Malaysia from 29thSeptember 2022 to 4th October 2022.",
    },
    {
        id: 12,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/isha-guptha.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2023/02/isha-stage.jpg"],
        title: "Gold Medals in Power lifting and Bench Press Championship",
        winners: ["ISHA GUPTA21BCE5557"],
        description: "Isha Gupta won gold medals in the junior and senior under 84kg categories in the District Level Powerlifting championship and the State level Bench Press Championship.",
    },
    {
        id: 13,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2023/02/kashvi.jpg"],
        title: "HackWithInfy 2022",
        winners: ["KASHVI ANKITBHAI SHETH 21BCE5329"],
        description: "KashviAnkibhaiSheth has been selected as the Campus Ambassador for Infosys based on her performance in HackWithInfy September 2022.",
    },
    {
        id: 14,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/ICIoT-2022.jpg"],
        title: "ICIoT-2022 held at SRM Institute of Science & Technology",
        winners: ["Prasad A 19BAI1061", "Sruthi Srinivasan 19BAI1046", "Vedang Sawarkar 19BCE1303", "Saumya Bhardwaj 19BCE1067", "Jaiveer Singh Rathore 19BLC1181"],
        description: "Our students won two best paper awards in ICIoT-2022 held at SRM.",
    },
    {
        id: 15,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/Binance-Ideathon.jpg"],
        title: "Binance Ideathon(Blockchain Based) June 2022",
        winners: ["Delano Oscar Do Rosario Lourenco 20BAI1158", "Vishal Singh 20BLC1054", "Vedang Sawarkar 19BCE1303", "Sinojia Meet Chandreshbhai 20BCE1234", "Eshan Das 19BCE1575"],
        description: "Binance Ideathon June 2022 shortlisted four of our teams. The below students headed the team.",
    },
    {
        id: 16,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/Hack-for-Sport-.jpg"],
        title: "Hack for Sport Finalists",
        winners: ["Mohit Madhukar More 19MIA1005", "Bhamidipati Naga Shrikriti 19MIA1037", "Sayantan Nandy 19MIA1049", "Hanchate Samyuktha 19MIA1080", "Gitansh Saharan 19MIA1060"],
        description: "Our students were the finalists in India’s first gaming and sport Hackathon by Sporjo – June 2022",
    },
    {
        id: 17,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/ET-Campus-Stars.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2022/11/ET-Campus-Star.jpg"],
        title: "ET Campus Stars 5.0 Award Holders",
        winners: ["Anshul Harish Khatri 19BAI1071", "BHARGAVI K 19BCE1269", "BHARGAVI K 19BCE1591", "DIVYANSHI THAPA 19BCE1367", "GODUGOLLA KARTHIK 18MIS1070", "GYANADIPTA MOHANTY 19BCE1224", "JIGYASA SARASWAT 19BCE1706", "JOYEETA DEY 19BCE1243", "JYOTIKA JAISWAL19BPS1034", "KINSHUK DUA19BCE1048", "MUVVA DURGA SAMHITHA19BCE1486", "SHAIK MOHAMMED SAIF 19BCE1225", "SHAUNAK SUNIL DESHPANDE 19BCE1310", "SHOURYA GUPTA 19BCE1704", "SHRAVANI SWAROOP URALA 19BPS1019", "B N TEJASRI 19BAI1032", "SAWARKAR VEDANG SANDIP 19BCE1303"],
        description: "Our students participated in ET Campus Stars 5.0 and won the award for winners.",
    },
    {
        id: 18,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/Binance-Ideathon-Winner.jpg"],
        title: "Binance Ideathon Winners, Runners and Best SPOC Award",
        winners: ["SINOJIA MEET CHANDRESHBHAI 20BCE1234 (TEAM LEADER)", "VADGAMA DARSHIT NIRAVBHAI- 20BLC1004", "RISHANK SHARMA- 20BCE1783", "MEGHA NATH- 20BCE1581"],
        description: "Our students have been awarded the Binance Ideathon Winners, Runners and Best SPOC Award for the project titled “PS6-Decentralized EV Charging Infrastructure” under the guidance of Dr.V.Sakthivel.",
    },
    {
        id: 19,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/DICV.jpg"],
        title: "DAIMLER INDIA COMMERCIAL VEHICLES (DICV) Hackathon’2022",
        winners: ["THRISHA B19MIA1011", "GONUGUNTLA ANJANA CHOWDARY-19MIA1017", "SUBHIKSHA S-19MIA1087", "GAURAV TRIVEDI- 19MIA1077"],
        description: "Our students were shortlisted for Daimler India Commercial Vehicles (DICV) Hackathon’2022.",
    },
    {
        id: 20,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/11/Team-Aquasol.jpg"],
        title: "Smart India Hackathon 2022 – Team Aquasol",
        winners: ["ARAN AGARWAL-21BCE5443 (TEAM LEADER)", "AANCHAL SINGH 21BCE5447", "IPSIT MAURYA 21BCE5390", "ISHITA AGARWAL 21BCE5317", "SAURAV SINGH 21BCE5384", "SAMBHAV JAIN 21BRS1403"],
        description: "Our students received the runner up award for Smart India Hackathon 2022 – Team Aquasol – August 2022 under the guidance of Dr. Sakthivel.",
    },
    {
        id: 21,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/06/sa1.png"],
        title: "ARAI TechNovuss Mobility Hackathon",
        winners: ["Ishita Agarwal (21BCE5317) : Team Leader", "C S Aditya (21BCE5493)", "Aanchal Singh (21BCE5447)", "Saurav Singh (21BCE5384)"],
        description: "The students got selected for the grand ﬁnale of ARAI TechNovuss Mobility Hackathon.",
    },
    {
        id: 22,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/06/sa2.png"],
        title: "Dare2Compete Awards 2022 Winners",
        winners: ["Kinshuk Dua – 19BCE1048 awarded rank 1", "Jayit Saha – 18BCE1071 awarded rank 2"],
        description: "Our students achieved first and second rank in Dare2Compete Awards 2022,an event of a National Prestige",
    },
    {
        id: 23,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/Innerve.webp"],
        title: "Second Place in a Hackathon “Innerve”",
        winners: ["Ayan Sadhukhan (19BCE1872)", "Aniket Bansal (19BCE1869)", "Ronit Kumar Sarkar (19BEC1236)"],
        description: "The students won the 2nd position in the Innerve 6.0 National Hackathon at Army Institute of Technology, Pune. This event witnessed participation of over 1000 teams from colleges across India.",
    },
    {
        id: 24,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/Selected-for-the-WE-Program-Supported-by-Google.webp"],
        title: "Selected for the WE Program Supported by Google",
        winners: ["Rujuta Prajakt Kulkarni 21BCE5196", "Vaishnavi Dixit (21BCE5108)"],
        description: "Our students have been selected for the 4th Cohort of the TalentSprint WE (Women Engineers) Program, supported by Google to receive a cash scholarship of ₹1,00,000.",
    },
    {
        id: 25,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/GE-Precision-Health-Challenge-2021-22.webp"],
        title: "Precision Health Challenge 2021-22 – 2nd Runner Up",
        winners: ["Shourya Gupta (19BCE1704)", "Ridhika Sahni (19BCE1697)"],
        description: "The won the 3rd position (2nd runner up) in the Precision Health Challenge 2021-22 organised by General Electric (Ranked 38 in Fortune 500 companies). This event witnessed the participation of over 1112 competitors from colleges across India.",
    },
    {
        id: 26,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/Optum_Winner_Photo.webp"],
        title: "1st Prize in Engineering at Track Optum Stratethon 2021 Season 3 International Hackathon.",
        winners: ["Jayit Saha – 18BCE1071", "Kinshuk Dua – 19BCE1048"],
        description: "The students won 1st Prize in Engineering at Track Optum Stratethon 2021 Season 3 International Hackathon. The students got rewarded with prize money of $6,700 along with PPIs from Optum, part of UnitedHealth Group. After gruelling rounds of competing with over 17,000+ participants, the Top 12 finalist teams were shortlisted from campus rounds and wild card entries across 150+ colleges from 5 countries. The Grand Finale saw two rounds, first was presenting to the National jury from where the Top 3 teams were selected, followed by a presentation to the Global Jury post where the Winners were announced.",
    },
    {
        id: 27,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/Winner-Researcher-Discovery-Platform-RDP-Competition.webp"],
        title: "Winner Researcher Discovery Platform (RDP) Competition",
        winners: ["Anirudh C P, 20BCE1394", "Assistant Professor"],
        description: "The student and the faculty member secured the ﬁrst place in the contest among 12 teams by representing VIT Chennai in the Researcher Discovery Platform contest conducted by IIT B, sponsored by Tata.",
    },
    {
        id: 28,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/First-Runner-Up-In-Reign-Track-1.webp"],
        title: "First Runner Up In Reign Track 1",
        winners: ["Vaibhav Agarwal(19BCE1413)", "Varun Menon(19BCE1438)", "Gautam Sanjay Wadhwani(19BCE1209)"],
        description: "The students won 2nd position ( First Runner Up) in Kotak Mahindra Bank REIGN Challenge Track 1: Reimagine Banking with Conversational AI and won the prize money of INR 50,000.",
    },
    {
        id: 29,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/05/Won-the-3rd-prize-in-the-enter-the-travel-verse-hackathon-1.webp"],
        title: "Won the 3rd prize in the enter the travel-verse hackathon",
        winners: ["Aravindan TR – 19MIA1061", "Anirudh Vasudev – 19MIA1100", "Lokesh L – 19MIA1010", "Govind Anjan – 19MIA1056"],
        description: "Our students won the 3rd prize in the enter the travel-verse hackathon conducted by Airlines Reporting Company (ARC America) on the hacker earth website/platform. The competition was held in the month of November 2021 and over 1250 teams across the globe participated in the hackathon. The students have been awarded with a prize money of 500$ and an incentive of 25$ by ARC America.",
    },
    {
        id: 30,
        images: [""],
        title: "Best Girls Team” and “Top 5 Teams” at the Hack4Bengal 2022 hackathon",
        winners: ["Pritika Kannapiran (21BAI1172)", "Anjali Kedia (21BAI1130)", "Srijena Guin (21BAI1161)", "Anushka Agarwal (21BAI1194)"],
        description: "The students won “Best Girls Team” and “Top 5 Teams” at the Hack4Bengal 2022 hackathon. They also  received prize money and other perks from sponsors and partners. They also won an opportunity to pitch our business idea at an oﬄine event held at Kolkata. The event witnessed participation from over 1000+ teams from around the nation.",
    },
    {
        id: 31,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/01/codetocare.jpg"],
        title: "Code to Care challenge 2021",
        winners: ["Smridhi Verma(19BCE1550)", "S Deeksha (19BPS1090)", "Jigyasa Agarwal (19BPS1056)"],
        description: "Won the 2nd position (runners up) in the Philips Code to Care 2021 Challenge. This event witnessed the participation of over 1350 teams from colleges across India.",
    },
    {
        id: 32,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/01/Economic-Times-Campus-Stars-1536x802.png"],
        title: "4th Edition of Economic Times Campus Stars",
        winners: ["Ananya Sajwan: 18BCE1355", "Ishita Dasgupta: 18BCE1351", "Jayit Saha: 18BCE1071", "Mansi Parashar: 18BCE1048", "Shreya Shrivastava: 18BCE1188", "Utkarsh Bhardwaj: 17BCE1111"],
        description: "Over 40,000+ students from more than 2000 universities competed, from which top 87 finalists made it to the “ET Campus Stars Class of 2021” throughout the nation. Above mentioned students were among the top 0.0025 percent of the total candidates who appeared in the program.",
    },
    {
        id: 33,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/01/BorderHacks-2021.jpeg"],
        title: "BorderHacks 2021, organized by the University of Windsor, Ontario, Canada",
        winners: ["Rajashri Mahato(19BPS1130)", "Saadhikha Shree S.(19BPS1075)"],
        description: "People’s Choice Winner for the project titled “Wearable Tracker for Disasters”",
    },
    {
        id: 34,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/01/Amogh-Singh.png", "https://chennai.vit.ac.in/wp-content/uploads/2022/01/Harisha.-S.png"],
        title: "Ideathon Winners:",
        winners: ["Amogh Singh and Harisha. S, 2nd year CSE with AI & Robotics"],
        description: "Students of SCOPE have won the 1st Prize ( Rs. 25,000/-) US company has expressed interest, to work with them.",
    },
    {
        id: 35,
        images: [""],
        title: "National Winners | Manthan Hackathon 2021, organized by MoE, AICTE, and BPR&D under the category “Event detection in CCTV footage”",
        winners: ["Team Leader: Amit Kumar 19bce1281", "Member 1: Rishabh Singh 19bce1500", "Member 2: Pratham Jangra 19bce1318", "Member 3: Anuttam Anand 19bce1285", "Team Mentor: Dr. Gayathri R (Scope)"],
        description: "Winner Manthan Hackathon 2021",
    },
    {
        id: 36,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2022/01/trevel_verse.png"],
        title: "Travel-verse hackathon conducted by Airlines Reporting Company (ARC America) on the hacker earth website/platform",
        winners: ["1. Aravindan TR – 19MIA1061", "2. Anirudh Vasudev – 19MIA1100", "3. Lokesh L – 19MIA1010", "4. Govind Anjan – 19MIA1056"],
        description: "The students won the 3rd prize with prize money of 500$ and an incentive of 25$ by ARC America.",
    },

    {
        id: 37,
        images: [zfr],
        title: "Team Zuura Formula Racing participated in FMAE FFS INDIA-2022. held at Kari Motor Speedway, Coimbatore.",
        winners: [""],
        description: "Team Zuura Formula have secured the Runners-Up in the Design Presentation category, 3rd in Sales Presentation, 6th in Cost Presentation, and an overall rank of 5th out of more than 20 registered teams. It was held from 2nd February to 6th February.",
    },
    {
        id: 38,
        images: ["https://epaper.thehindu.com/ccidist-ws/th/th_delhi/issues/22278/OPS/Public/GAHAPJ91H.1+GQAAPJ9AR.1.jpg?rev=2023-01-22T19:34:21+05:30"],
        title: "Sai Sanjay T participated in four races in last week end MRF 2000 category. He won one race and finished three podium.",
        winners: [""],
        description: "Sai Sanjay T participated in four races in last week end MRF 2000 category. He won one race and finished three podium.",
    },
    {
        id: 39,
        images: [shield1],
        title: "Achievement in SHIFT 2022 hackathon",
        winners: ["G.Harinisri (19MIA1069)", "Madasu Deepika (19MIA1066)"],
        description: "G.Harinisri (19MIA1069) and Madasu Deepika (19MIA1066) have reached the top 5 teams conducted by SHIFT 2022, 24-hour onsite healthcare hackathon in Siemens Healthineers, Bengaluru on November 17 & 18, 2022. With 300+ registrations and idea submissions, after a lot of shortlisting processes and presenting their prototype before the grand jury, they made it into the top 5 finale teams. The team 'Hack Elite' focussed on theme: Access to Care on topic 'Polycystic ovarian syndrome (PCOS) analysis and prediction' by providing the most efficient personal guide app named as HadeeCare for females.",
    },
    {
        id: 40,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/11/3-month-mentorship-from-ibm.webp"],
        title: "1st place in the IBM Z DATATHON",
        winners: ["Student: Ilakkiya V 19BCE1699", "Student: Vijay – 19BCE1388"],
        description: "Secured 1st place in the IBM Z DATATHON (and bagged 1000USD along with mentorship from IBM Z and access to IBM Z Cloud) competition organized by Shooting Stars Foundation and IBM.",
    },
    {
        id: 41,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/11/Won-the-third-Place-in-IBM-Z-Datathon-conducted-by-Shooting.webp"],
        title: "Third Place in IBM-Z Datathon conducted by Shooting Stars Foundation and IBM",
        winners: ["Student: Mohit Madhukar More – 19MIA1005", "Student: B N Shrikriti – 19MIA1037", "Student: Sayantan Nandy – 19MIA1049", "Student: Gitansh Saharan – 19MIA1060", "Student: Hanchate Samyuktha – 19MIA1080", "Student: Kiran Benny – 19MIA1091"],
        description: "Won third Place in IBM-Z Datathon conducted by Shooting Stars Foundation and IBM, with prize money and mentoring too, to the team members.",
    },
    {
        id: 42,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/11/Achieved-Special-Jury-Award-in-the-IBM-Hack-Challenge-2021-2.webp"],
        title: "Achieved Special Jury Award in the IBM Hack Challenge 2021",
        winners: ["Student: Mr. G O Narendra (19BCE1082)", "Student: Ms. Vaishnavi V V (19BCE1497)", "Student: Mr. Aravinda B (19BCE1190)", "Student: Ms. Shalini A (19BCE1005)"],
        description: "Achieved Special Jury Award in the IBM Hack Challenge 2021",
    },
    {
        id: 43,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/11/Students-participated-in-Ford-Cyber-Security-Awareness-Month.webp", "https://chennai.vit.ac.in/wp-content/uploads/2021/11/Role-of-AIML-in-cyber-security.webp"],
        title: "Students participated in Ford Cyber Security Awareness Month, call for papers – ” Role of AI/ML in cyber security” and have won the paper presentation",
        winners: ["Student: Prithvi Seshadri (19BAI1105)", "Student: Abishek Mahesh (19BAI1143)"],
        description: "Students participated in Ford Cyber Security Awareness Month, call for papers – ” Role of AI/ML in cyber security” and have won the paper presentation. [The competition was conducted by FORD INDIA for the cyber security awareness month sticking to a domain of “Role of AI/ML in cyber security”. The competition had three rounds starting from the month of September, After gruelling rounds of competing with over participants from 300 colleges, the top 5 teams were selected to the Finale Event which happened on 29-10-2021]",
    },
    {
        id: 44,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/11/Jury%E2%80%99s-Choice-Award.webp"],
        title: "Jury’s Choice Award – Accenture Innovation Challenge 2021.",
        winners: ["Student: Tejasri B N (19BAI1032)", "Student: A R Arvindh (19BAI1106)"],
        description: "Jury’s Choice Award – Accenture Innovation Challenge 2021.",
    },
    {
        id: 45,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/07/Modi-TeamPrimis.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2021/07/Modi-interaction_small.jpg"],
        title: "Winners of Toycathon 2021 – Digital edition in the Learning, Education, and Schooling categories",
        winners: ["Student: Tejasri B N (19BAI1032)", "Student: A R Arvindh (19BAI1106)"],
        description: "Winners of Toycathon 2021 – Digital edition in the Learning, Education, and Schooling categories. One of the winning teams among 117 teams. Winners will be honored with a cash prize worth Rs.50 lacs overall. Interaction of VIT Chennai students with Hon’ble Prime Minister of India, Shri Narendra Modi during TOYCATHON 2021 DIGITAL EDITION",
    },
    {
        id: 46,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/NSS_Arasada_Eleaveera.jpg", "https://chennai.vit.ac.in/wp-content/uploads/2021/06/NSS_Yenni_Aditya.jpg"],
        title: "Winners of Toycathon 2021 – Digital edition in the Learning, Education, and Schooling categories",
        winners: ["19BCE1535", "18BCE1045"],
        description: "Our NSS VIT Chennai Victory at 3rd Position in Sankalp Festival 2020-2021:Here we have a set of students who have excelled in a competition held at National Level “Sankalp”, an Inter NSS unit competition that involved Presentation and Case Study rounds in Jaagriti 2021, on 12th and 17th April 2021, respectively. Congratulations on winning 3rd Position at the National Level !!! And We Wish them to carry on the brilliant work!",
    },
    {
        id: 47,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/champion-world-record.jpg"],
        title: "More number of World Records in Mathematics made in Single day",
        winners: ["Mr. D.Dhaxina Kumar"],
        description: "Congratulations to our B.Tech Computer Science and Engineering student Mr. D.Dhaxina Kumar from VIT University, Chennai. He has won “More number of World Records in Mathematics made in Single day” on the 24th day of August 2020 certified by CHAMPION WORLD RECORDS.",
    },
    {
        id: 48,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/Superintendent-of-Police.jpg"],
        title: "Commended by the Superintendent of Police, GRP, Prayagraj, UP for an app developed",
        winners: ["Neelesh Ranjan Jha", "Naman Agarwal", "Abhishek Soni"],
        description: "Congratulations to our students Neelesh Ranjan Jha, Naman Agarwal, and Abhishek Soni have been commended by the Superintendent of Police, GRP, Prayagraj, UP for an app developed by them. This app generated daily and weekly Duty Charts for the Government Railway Police, thus helping the SP Office in maintaining transparency and impartiality, while reducing the time taken to do so manually from 2 hours to 2 minutes. Hats off to their noble contribution to society!",
    },
    {
        id: 49,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/COVID-19-AR-Challenge-Contest.jpg"],
        title: "COVID ‘19 AR Challenge Contest – CSIR – CEERI & Elixar Systems, Ministry of Commerce and Trade, GOI and NVIDIA",
        winners: ["Neelesh Ranjan Jha", "Naman Agarwal", "Abhishek Soni"],
        description: "Mr. Sainath Ganesh & Mr. Siddharth, COVID ‘19 AR Challenge Contest – CSIR – CEERI & Elixar Systems, Ministry of Commerce and Trade, GOI and NVIDIA — Symptom Visualizer (AR based COVID symptoms Visualisation using X-Rays)",
    },
    {
        id: 50,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/hackathon.jpg"],
        title: "HACK2BUILD” conducted by ICANN and NASSCOM conference at III-T, Hyderabad.",
        winners: ["Mr.Sahil Sheikh", "Mr.Siddhant Varyambat"],
        description: "Mr.Sahil Sheikh, Mr.Siddhant Varyambat of B.Tech Students along with Mr.Akshath Varugeese from MS(SE) have participated in the hackathon “HACK2BUILD” conducted by ICANN and NASSCOM conference at III-T, Hyderabad.",
    },
    {
        id: 51,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/SwellRT-Software-Contest.jpg"],
        title: "SwellRT Software Contest",
        winners: ["Fenil Patel", "Prastut Kumar"],
        description: "Fenil Patel & Prastut Kumar B.Tech (CSE) Winner, First and Second Prize, SwellRT Software Contest  is an open-source platform for developers to create a real-time, Decentralized Apps",
    },
    {
        id: 52,
        images: [""],
        title: "Fully sponsored trip by Google along with a stipend of 2400 USD to the Google Code-in summit in San Francisco and Google HQ, Mountain.",
        winners: ["Shreyans Sheth"],
        description: "Shreyans Sheth  was  awarded a fully sponsored trip by Google along with a stipend of 2400 USD to the Google Code-in summit in San Francisco and Google HQ, Mountain.",
    },
    {
        id: 53,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/Digital-Dream-2019-Hackathon-1st-pize.jpg"],
        title: "First prize in the Digital Dream 2019 Hackathon conducted at Kalasalingam Academy of Research and Education",
        winners: ["Rahat Kataria"],
        description: "Rahat Kataria and his team got first prize in the Digital Dream 2019 Hackathon conducted at Kalasalingam Academy of Research and Education, they got certificates, trophy and cash prizes in reward.",
    },
    {
        id: 54,
        images: ["https://chennai.vit.ac.in/wp-content/uploads/2021/06/Cisco-Webex-Virtual-Hackathon2.jpg"],
        title: "Second winner position in 'Cisco Webex Virtual Hackathon'",
        winners: ["KG Nithesh", "Jacob Jebaraj V", "Sruti Verma"],
        description: "KG Nithesh, Jacob Jebaraj V, Sruti Verma  got Second winner position in ” Cisco Webex Virtual Hackathon ” and each student is been gifted a Tablet worth Rs 20000/- as a prize.",
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
                        <div className="ml-4 text-sm md:text-lg font-bold">{event.title}</div>
                    </div>
                    {hoveredEvent === event && (
                        <motion.div

                            className="ml-12 cursor-pointer transition-all duration-500 flex flex-wrap items-start justify-center flex-col gap-5"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                        >
                            <p className="text-gray-700 text-xs md:text-base">{event.description}</p>
                            {/* <p className="text-gray-700">{event.winners}</p> */}
                            <ul>
                                {event.winners.map((winner) => (
                                    <li key={winner}>{winner}</li>
                                ))}
                            </ul>

                            <div className="flex items-start justify-center flex-col md:flex-row gap-2">

                                {event.images.map((image) => (
                                    <img src={image} alt='' />
                                ))}

                            </div>

                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};


export default Timeline;

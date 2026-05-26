import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Intact",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/daf790a1baa126ef8562e9e55e11a75e.png",
      role: "Software Engineer",
      period: "Apr 2025 - Dec 2025",
      location: "Toronto, ON",
      achievements: [
        "Designed and optimized end-to-end ETL workflows in Snowflake and Databricks using PySpark, Kafka, and SQL to build scalable, reliable data pipelines supporting analytics, reporting, and downstream data engineering initiatives",
        "Leveraged AWS services (S3, RDS) and CI/CD practices to automate data transformation in Oracle packages, reducing manual intervention while improving data quality, deployment speed, and system resilience across teams",
        "Optimized large-scale data pipelines from enterprise data warehouses using Python, SQL, and PySpark on Oracle, supporting minor ETL processes and enabling advanced analytics workflows across distributed systems",
        "Parsed XML to Snowflake's Bronze/Silver layers, implemented JS-based updates/testing, and maintained GitHub CI/CD pipelines to reduce release times by 60% and manual testing errors by 98% through automated build, test, and deployment workflows"
      ],
      skills: "Python, SQL, Oracle, Pyspark, Kafka, Snowflake, Databricks, Github, AWS"
    },
    {
      company: "MedMe Health",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/163d94613fbf6c656c3fe4f6701492ca.jpg",
      role: "Software Engineer",
      period: "Aug 2024 - Dec 2024",
      location: "Toronto, ON",
      achievements: [
        "Built scripts using Python/Typescript in Windmill to automate manually intensive tasks such as deploying appointment types by copying pre-existing ones reducing deployment times by 94%",
        "Created internal tools that automate processes by building components such as authentication handling/management in Postman, and methods to interact with GraphQL endpoints streamlining the process of script development",
        "Strengthened script reliability in Javascript and performance by incorporating error handling and idempotency to retry data creation upon API failures/errors and ensure duplicate data is not created in the database",
        "Wrote SQL queries to ensure integrity and correctness of appointment type configurations in the database in MySQL"
      ],
      skills: "Python, SQL, JavaScript, TypeScript, GraphQL, Windmill, Postman API, Data Modeling"
    },
    {
      company: "Health Canada",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/c16a39dd0e5de4db88313b43496fe85b.jpg",
      role: "Software Engineer",
      period: "Jan 2024 - Apr 2024",
      location: "Toronto, ON",
      achievements: [
        "Made custom site scripts and UI enhancements in Microsoft Power Apps, integrated data flows with Dataverse and SQL Database. Automated data extraction and transformation using Python, which increased user experience by 92%",
        "Implemented thorough unit tests in Python, performed integration testing across APIs and MySQL, and conducted user acceptance testing to align with expectations for integration GitHub Actions to improve software stability",
        "Conducted unit testing with PyTest, integration testing with unittest, and UAT to validate database interactions across Azure SQL, PostgreSQL, and MySQL, ensuring data consistency",
        "Optimized Power BI data models using complex SQL queries and Python data processing, enhancing performance through indexing, partitioning, and query optimization in SQL Server and PostgreSQL",
        "Designed and optimized Power BI data models by structuring SQL-extracted data, defining table relationships, creating calculated measures, and enhancing performance with DAX",
        "Conducted tests to identify and fix bugs, and ensured the application functions correctly and meets quality standards. This includes unit testing, integration testing, and user acceptance testing"
      ],
      skills: "Python, MySQL, PostgreSQL, SQL, HTML/CSS, Power BI, Power Apps, Sharepoint Server, DAX"
    },
    {
      company: "Software for Love",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/5aa9f2819fa10b3fadd4b646e8a29e19.jpg",
      role: "Software Engineer",
      period: "May 2023 - Aug 2023",
      location: "Markham, ON",
      achievements: [
        "Created wireframes, interactive prototypes, and mockups to visualize design concepts and iterate on user flows using tools like Figma allowing stakeholders to experience and provide feedback on the design's functionality and interactivity",
        "Developed responsive front-end components using HTML, CSS, and React.js, improving performance and user engagement across devices",
        "Contributed to developing and maintaining a comprehensive design system, including UI components and patterns, to promote design consistency and increase efficiency by 65%",
        "Developed responsive and mobile-friendly user interfaces using GatsbyJS, ensuring seamless experiences across various devices and screen sizes"
      ],
      skills: "HTML/CSS, React.js, Figma, GatsbyJS, Web Design, UX/UI"
    },
    {
      company: "Mobalytics",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/1d214c5d1a21c60e8308f01183cca84d.jpg",
      role: "Engineer",
      period: "May 2023 - Jul 2023",
      location: "New York, NY",
      achievements: [
        "Conducted a P2E market analysis using SQL and provided recommendations on monetization opportunities, marketing strategies, product features, and partnerships to Mobalytics",
        "Utilized Tableau to create visualizations and present insights to Mobalytics alongside working with Web 3 technologies to explore potential applications in the gaming industry",
        "Evaluates business and operations data using Excel, Python, and SQL to formulate a business plan with hands-on experience with blockchain-based solutions, including smart contracts, decentralized applications, and NFTs"
      ],
      skills: "Python, SQL, Excel, Tableau, Marketing Analysis"
    },
    {
      company: "UWAFT",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/c6bbb79d9cf94a1fc76dd8f335d39b4a.jpg",
      role: "Software Engineer",
      period: "Sep 2022 - Feb 2023",
      location: "Waterloo, ON",
      achievements: [
        "Instituted active integration in website development using Python and React to introduce a new design interface which increased user engagement and experience by 20%",
        "Explored ways to visualize and send a daily report of updated results to team members using HTML and Python",
        "Brought 10% efficiency when translating designs and wireframes into high-quality code",
        "Leveraged knowledge in Android Auto and Apple CarPlay insertions into vehicle display"
      ],
      skills: "Python, React, HTML"
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Work <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-purple-500/50 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo Column */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center p-2 shadow-lg overflow-hidden group-hover:scale-105 transition-transform duration-300">
                      {exp.logo ? (
                        <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-contain" />
                      ) : (
                        <Briefcase className="w-8 h-8 text-purple-400" />
                      )}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow">
                    {/* Header Row: Title/Company & Date/Location */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 md:gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.role}</h3>
                        <p className="text-white/60 font-medium text-lg mt-1">{exp.company}</p>
                      </div>
                      
                      <div className="text-left md:text-right flex flex-row md:flex-col gap-x-4 md:gap-x-0">
                        <p className="text-white/80 font-bold whitespace-nowrap">{exp.period}</p>
                        <p className="text-white/50 text-sm mt-0.5">{exp.location}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/70 text-sm leading-relaxed">
                          <span className="text-white/40 mt-1.5 h-1.5 w-1.5 rounded-full bg-white/40 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Skills */}
                    {exp.skills && (
                      <div className="mt-4 pt-4">
                        <span className="text-sm font-bold text-white">Skills: </span>
                        <span className="text-sm text-white/70">
                          {exp.skills}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
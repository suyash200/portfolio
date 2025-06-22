import React from 'react';
import {
  SiAngular,
  SiArcgis,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLeaflet,
  SiOpenlayers,
  SiPostgresql,
  SiPython,
  SiQgis,
  SiTypescript,
} from 'react-icons/si';
import { FaAws } from "react-icons/fa";
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
import { BiLogoGoLang, BiLogoMongodb } from 'react-icons/bi';
import { GiArtificialHive } from 'react-icons/gi';

const SkillsShowcase = () => {
  const skills = [
    { text: 'AWS', Icon: FaAws },
    { text: 'Python', Icon: SiPython },
    { text: 'JavaScript', Icon: SiJavascript },
    { text: 'HTML', Icon: SiHtml5 },
    { text: 'TypeScript', Icon: SiTypescript },
    { text: 'PostGres', Icon: SiPostgresql },
    { text: 'Git', Icon: SiGit },
    { text: 'Docker', Icon: SiDocker },
    { text: "MongoDb", Icon: BiLogoMongodb },
    { text: "LLM", Icon: GiArtificialHive },
    { text: "GO", Icon: BiLogoGoLang }
  ];

  return (
    <Marquee
      className="border-t-border dark:border-t-darkBorder dark:bg-secondaryBlack border-t-2 border-b-2 border-b-border dark:border-b-darkBorder bg-main py-2 sm:py-3 lg:py-5 font-base"
      direction="left"
      speed={70}
      loop={0}
    >
      {skills.map((skill, id) => (
        <motion.div
          className="flex items-center mx-4 sm:mx-6 lg:mx-8"
          key={id}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <skill.Icon className="text-3xl sm:text-4xl lg:text-5xl mr-2 sm:mr-3 lg:mr-4 [#FFDB58]" />
          <span className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-heading">
            {skill.text}
          </span>
        </motion.div>
      ))}
    </Marquee>);
};

export default SkillsShowcase;

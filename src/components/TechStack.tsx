import { motion } from 'framer-motion';
import { RiReactjsLine } from 'react-icons/ri';
import { FaJs, FaNodeJs, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiSpring, SiDocker } from 'react-icons/si';
import zipkin from '../images/zipkin_vertical_grey_gb.png';
import hibernate from '../images/hibernate.png';
import mongo from '../images/mongodb.ico';
import aws from '../images/aws.png';          
import dynamodb from '../images/dynamodb.png'; 

// Floating animation variants
const floatingVariants = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: duration,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
});

export const TechStack = () => {
  const technologies = [
    { name: 'Java', icon: <FaJava className="text-5xl text-orange-400" />, delay: 3.5 },
    { name: 'SpringBoot', icon: <SiSpring className="text-5xl text-green-600" />, delay: 3.5 },
    { name: 'Docker', icon: <SiDocker className="text-5xl text-blue-600" />, delay: 4 },
    {
      name: 'AWS',
      icon: (
        <img
          src={aws}
          alt="AWS"
          className="w-10 h-10 object-contain"
        />
      ),
      delay: 4
    },
    {
      name: 'DynamoDB',
      icon: (
        <img
          src={dynamodb}
          alt="DynamoDB"
          className="w-10 h-10 object-contain"
        />
      ),
      delay: 4
    },
    // { name: 'ZIPKIN', icon: <img src={zipkin} alt="Zipkin" className="w-10 h-10 object-contain" />, delay: 4 },
    // { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl text-sky-700" />, delay: 3 },
    { name: 'Hibernate', icon: <img src={hibernate} alt="Hibernate" className="w-10 h-10 object-contain" />, delay: 4 },
    { name: 'JavaScript', icon: <FaJs className="text-5xl text-yellow-400" />, delay: 3.5 },
    { name: 'Node.js', icon: <FaNodeJs className="text-5xl text-green-500" />, delay: 3 },
    { name: 'MongoDB', icon: <img src={mongo} alt="MongoDB" className="w-10 h-10 object-contain" />, delay: 4 },
    { name: 'Git', icon: <FaGitAlt className="text-5xl text-red-500" />, delay: 3.5 },
    { name: 'React', icon: <RiReactjsLine className="text-5xl text-cyan-400" />, delay: 3 },
  ];

  return (
    <section id="techstack" className="px-6 py-12 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-3xl font-bold text-neutral-900 dark:text-white mb-4"
          >
            Technical Stack
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"
          >
            Specialized in modern backend technologies and frameworks for building scalable applications
          </motion.p>
        </div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-8 mt-8 justify-center">
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={floatingVariants(tech.delay)}
              initial="initial"
              animate="animate"
              className="flex flex-col items-center justify-center space-y-1"
            >
              <div className="bg-gray-800 text-white rounded-full p-4 w-20 h-20 flex items-center justify-center shadow-md">
                {tech.icon}
              </div>
              <span className="mt-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

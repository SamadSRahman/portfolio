import { motion } from "framer-motion";

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans">
      <header className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 text-white py-12">
        {" "}
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Samad Shahid Rahman
          </motion.h1>
          <motion.p
            className="text-2xl mt-2 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Full Stack Web Developer
          </motion.p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            About Me
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I&apos;m a passionate web developer with a flair for creating
            cutting-edge digital experiences. My expertise spans modern
            JavaScript frameworks and I have a keen eye for design. I thrive on
            turning complex problems into elegant, efficient, and user-friendly
            solutions.
          </p>
        </motion.section>

        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "Next.js",
              "JavaScript",
              "MongoDB",
            ].map((skill) => (
              <motion.div
                key={skill}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(93, 161, 230, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg font-semibold text-gray-100">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn} className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Ai-Engage",
                link:"https://aiengage.xircular.io/",
                desc: "A SaaS web app for creating interactive video campaigns with dynamic user-driven flows and AI-powered analytics.",
              },
              {
                title: "Men of Platinum - MS Dhoni Edition",
                link:"https://msdhoni-menofplatinum.com/",
                desc: "A personalized video experience for Men of Platinum's MS Dhoni edition jewelry customers, featuring their name alongside MS Dhoni's signature.",
              },
              {
                title: "Senco - Celebrations",
                link:"https://msdhoni-menofplatinum.com/",
                desc: "A web app for Senco’s Lakshmi Puja celebration, offering personalized videos, momentos, and a chance to win a gold coin for registered users.",
              },
            ].map((project) => (
              <motion.div
                onClick={() => window.open(project.link)}
                key={project.title}
                className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
                whileHover={{
                  y: -5,
                  boxShadow: "0 5px 15px rgba(93, 161, 230, 0.7)",
                }}
              >
                <h3 className="text-2xl font-semibold mb-3 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section {...fadeIn}>
          <h2 className="text-3xl font-semibold mb-6 text-blue-600">Contact</h2>
          <p className="text-xl text-gray-300 mb-4">
            Ready to bring your project to life? Let&apos;s connect!
          </p>
          <a
            href="mailto:samadsrahman@gmail.com"
            className="text-2xl text-blue-400 hover:text-blue-300 transition duration-300"
          >
            samadsrahman@gmail.com
          </a>
          <div className="mt-6 flex space-x-4">
            <a
              target="_blank"
              href="https://github.com/SamadSRahman/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              GitHub
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/samadrahman/"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="bg-gray-900 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Samad Rahman. Crafted with passion and code.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

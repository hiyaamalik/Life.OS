import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-600">
      <motion.div
        className="flex flex-col items-center space-y-6 p-10 bg-white/40 rounded-xl backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-white leading-tight text-center">
          🏡 Welcome to Life.OS
        </h1>
        <p className="text-xl text-white max-w-2xl text-center">
          A sleek, all-in-one productivity and life management app designed to simplify your workflow and bring a touch of magic to your daily tasks.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;

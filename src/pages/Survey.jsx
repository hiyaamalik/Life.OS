import { motion } from "framer-motion";

function Survey() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-600">
      <motion.div
        className="flex flex-col items-center space-y-8 p-12 bg-white/40 rounded-2xl backdrop-blur-md shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-extrabold text-white leading-tight text-center">
          📝 Ready to Personalize Your Experience?
        </h1>
        <p className="text-lg text-white max-w-xl text-center">
          To tailor your experience, we’d love to know more about your preferences. Answer a few quick questions and choose a theme that suits you!
        </p>
      </motion.div>
    </div>
  );
}

export default Survey;

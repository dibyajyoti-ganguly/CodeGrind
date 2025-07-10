/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // corrected import

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-zinc-900">
      <div className="relative w-40 h-40">
        {/* Static circle border - thicker */}
        <div className="absolute inset-0 rounded-full border-[20px] border-zinc-600" />

        {/* Rotating arc - thicker */}
        <motion.div
          className="absolute inset-0 rounded-full border-[22px] border-purple-500 border-t-transparent border-l-transparent border-b-transparent"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}

export default Loading;

"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const EnterExitMotion = ({ children }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={path}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default EnterExitMotion;

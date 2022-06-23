import { motion } from "framer-motion";
import React, { Children } from "react";

function FancyRender(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      key={props.state}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 70,
      }}
      exit={{ opacity: 1 }}
    >

        {props.children}
    </motion.div>
  );
}

export default FancyRender;
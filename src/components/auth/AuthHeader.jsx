import { motion } from "framer-motion";
import { itemVariants } from "./animations";

export default function AuthHeader({ title, subtitle }) {
  return (
    <motion.header className="auth-header" variants={itemVariants}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </motion.header>
  );
}

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { itemVariants } from "./animations";

export default function AuthFooterLink({ text, linkText, to }) {
  return (
    <motion.p className="auth-footer" variants={itemVariants}>
      {text} <Link to={to}>{linkText}</Link>
    </motion.p>
  );
}

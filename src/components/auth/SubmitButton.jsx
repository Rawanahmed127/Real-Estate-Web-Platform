import { motion } from "framer-motion";
import { itemVariants } from "./animations";

export default function SubmitButton({ children, loading }) {
  return (
    <motion.button
      type="submit"
      className="btn-primary"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      disabled={loading}
    >
      {loading ? "جاري التحميل..." : children}
    </motion.button>
  );
}

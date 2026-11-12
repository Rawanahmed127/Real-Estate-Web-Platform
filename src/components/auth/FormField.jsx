import { motion } from "framer-motion";
import { itemVariants } from "./animations";

export default function FormField({ label, id, error, children, ...inputProps }) {
  return (
    <motion.div className="field" variants={itemVariants}>
      <label htmlFor={id}>{label}</label>
      {/* children = حاجة مخصصة زي PasswordField، وإلا بنرسم input عادي */}
      {children ?? <input id={id} name={id} aria-invalid={!!error} {...inputProps} />}
      {error && <span className="field__error" role="alert">{error}</span>}
    </motion.div>
  );
}

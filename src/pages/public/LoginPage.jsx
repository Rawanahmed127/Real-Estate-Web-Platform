import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthHeader from "../../components/auth/AuthHeader";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";
import SubmitButton from "../../components/auth/SubmitButton";
import AuthFooterLink from "../../components/auth/AuthFooterLink";
import { panelVariants, itemVariants } from "../../components/auth/animations";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // TODO: اربطي هنا بالـ API بتاعك
      console.log("login", form);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      className="auth-form"
      onSubmit={handleSubmit}
      variants={panelVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AuthHeader title="مرحبا بك في DIYAR!" subtitle="ابحث عن بيت احلامك.." />

      <FormField
        label="البريد الالكتروني"
        id="email"
        type="email"
        placeholder="Gmm@lg.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <PasswordField
        label="كلمة المرور"
        id="password"
        placeholder="••••••••"
        value={form.password}
        onChange={handleChange}
        required
      />

      <motion.div variants={itemVariants}>
        <Link to="/forgot-password" className="auth-form__forgot">هل نسيت كلمة المرور؟</Link>
      </motion.div>

      <SubmitButton loading={loading}>تسجيل الدخول</SubmitButton>
      <AuthFooterLink text="ليس لديك حساب؟" linkText="انشئ حسابك الان!" to="/register" />
    </motion.form>
  );
}

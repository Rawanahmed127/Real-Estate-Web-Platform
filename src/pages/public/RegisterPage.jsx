import { useState } from "react";
import { motion } from "framer-motion";
import AuthHeader from "../../components/auth/AuthHeader";
import FormField from "../../components/auth/FormField";
import PasswordField from "../../components/auth/PasswordField";
import SubmitButton from "../../components/auth/SubmitButton";
import AuthFooterLink from "../../components/auth/AuthFooterLink";
import { panelVariants, itemVariants } from "../../components/auth/animations";

export default function RegisterPage() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setErrors({ confirmPassword: "كلمتا المرور غير متطابقتين" });
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      // TODO: اربطي هنا بالـ API بتاعك
      console.log("register", form);
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
      <AuthHeader title="انشاء حساب جديد" subtitle="خطوات بسيطة تفصلك عن بيت احلامك!" />

      <motion.div className="auth-form__row" variants={itemVariants}>
        <FormField label="الاسم الاول" id="firstName" value={form.firstName} onChange={handleChange} required />
        <FormField label="الاسم الاخير" id="lastName" value={form.lastName} onChange={handleChange} required />
      </motion.div>

      <FormField
        label="البريد الالكتروني"
        id="email"
        type="email"
        placeholder="Gmm@lg.com"
        value={form.email}
        onChange={handleChange}
        required
      />
      <PasswordField label="كلمة المرور" id="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
      <PasswordField label="تأكيد كلمة المرور" id="confirmPassword" placeholder="••••••••" value={form.confirmPassword} onChange={handleChange} error={errors.confirmPassword} required />

      <SubmitButton loading={loading}>إنشاء حساب</SubmitButton>
      <AuthFooterLink text="لديك حساب بالفعل؟" linkText="تسجيل الدخول!" to="/login" />
    </motion.form>
  );
}

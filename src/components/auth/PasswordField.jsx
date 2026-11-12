import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import FormField from "./FormField";

export default function PasswordField({ label, id, error, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField label={label} id={id} error={error}>
      <div className="password-wrap">
        <input
          id={id}
          name={id}
          type={visible ? "text" : "password"}
          aria-invalid={!!error}
          {...props}
        />
        <button
          type="button"
          className="password-wrap__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
        >
          {visible ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </FormField>
  );
}

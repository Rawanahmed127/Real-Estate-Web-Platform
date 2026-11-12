import { Link } from "react-router-dom";
import DiyarLogo from "./DiyarLogo";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <DiyarLogo variant="footer" />
          </Link>

          <p>
            اكتشف منزلك المثالي مع Diyar.
            نوفر لك تجربة سهلة للبحث عن العقارات
            المناسبة للبيع والإيجار.
          </p>
        </div>

        <div className="footer__col">
          <h3>روابط سريعة</h3>
          <Link to="/">الرئيسية</Link>
          <Link to="/properties">العقارات</Link>
          <Link to="/about">عن ديار</Link>
          <Link to="/contact">تواصل معنا</Link>
        </div>

        <div className="footer__col">
          <h3>الحساب</h3>
          <Link to="/login">تسجيل الدخول</Link>
          <Link to="/register">إنشاء حساب</Link>
        </div>

        <div className="footer__col">
          <h3>تواصل معنا</h3>
          <span><Mail size={14} /> info@diyar.com</span>
          <span><Phone size={14} /> <bdi dir="ltr">+20 100 000 0000</bdi></span>
          <span><MapPin size={14} /> القاهرة، مصر</span>
        </div>
      </div>

      <div className="footer__bottom">© {new Date().getFullYear()} DIYAR. جميع الحقوق محفوظة.</div>
    </footer>
  );
}
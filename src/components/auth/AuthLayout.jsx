import Navbar from "../public/Navbar";
import Footer from "../public/Footer";
import AuthImagePanel from "./AuthImagePanel";

export default function AuthLayout({ children }) {
  return (
    <div className="site" dir="rtl">
      <Navbar />
      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-card__form">{children}</div>
          <AuthImagePanel />
        </section>
      </main>
      <Footer />
    </div>
  );
}
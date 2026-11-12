import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DiyarLogo from "./DiyarLogo";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  CircleUserRound,
  Plus,
  ChevronDown,
} from "lucide-react";

const links = [
  { to: "/properties?type=sale", label: "للبيع", type: "sale" },
  { to: "/properties?type=rent", label: "للإيجار", type: "rent" },
  { to: "/compounds", label: "كمباوندات" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const close = () => setOpen(false);

  const isActive = (link) => {
    if (link.type) {
      return (
        location.pathname === "/properties" &&
        new URLSearchParams(location.search).get("type") === link.type
      );
    }

    return location.pathname === link.to;
  };

  return (
    <div className="navbar-wrapper" dir="rtl">
      <motion.header
        className="navbar"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar__inner">

          {/* Logo */}
          <Link to="/" className="navbar__logo-link" onClick={close}>
            <DiyarLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__links" aria-label="التنقل الرئيسي">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`navbar__link ${
                  isActive(link) ? "active" : ""
                }`}
              >
                {link.label}
                {isActive(link) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="navbar__underline"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="navbar__actions">
            <Link to="/login" className="btn-outline">
              <CircleUserRound size={19} />
              <span>تسجيل الدخول</span>
            </Link>

            <Link to="/add-property" className="btn-solid">
              <Plus size={19} />
              <span>أضف عقارك</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="navbar__burger"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="navbar__mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <nav className="navbar__mobile-links">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={close}
                    className={`navbar__mobile-link ${
                      isActive(link) ? "active" : ""
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={16}
                      className="navbar__mobile-arrow"
                    />
                  </Link>
                ))}
              </nav>

              <div className="navbar__mobile-actions">
                <Link
                  to="/login"
                  className="btn-outline"
                  onClick={close}
                >
                  <CircleUserRound size={19} />
                  <span>تسجيل الدخول</span>
                </Link>

                <Link
                  to="/add-property"
                  className="btn-solid"
                  onClick={close}
                >
                  <Plus size={19} />
                  <span>أضف عقارك</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}

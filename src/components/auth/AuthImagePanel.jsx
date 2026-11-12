
import villaImg from "../../assets/Modern-villa.png";

export default function AuthImagePanel() {
  return (
    <div className="auth-card__image">
      <div className="auth-image-panel">
        <img
          src={villaImg}
          alt="Luxury modern villa"
        />
      </div>
    </div>
  );
}

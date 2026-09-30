import { FaArrowRight } from "react-icons/fa";

const HeroButton = ({ text, onClick, className, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-cut relative inline-flex items-center justify-center gap-3 px-7 py-3 text-[var(--color-text)] font-semibold text-base cursor-pointer transition-all duration-300 ease-in-out border-2 border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.2)] backdrop-blur z-10 group overflow-hidden hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] ${className}`}
    >
      <span className="relative z-20 transition-colors duration-300 group-hover:text-black">
        {text}
      </span>
      <FaArrowRight className="relative z-20 transition-transform duration-300 group-hover:translate-x-1" />

      <span className="btn-cut absolute inset-0 gradient-emerald z-0"></span>
      <span className="btn-cut absolute inset-[2px] bg-[#0a0a0a] z-0 transition-opacity duration-300 group-hover:opacity-0"></span>
    </button>
  );
};

export default HeroButton;

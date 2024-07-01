import { Link } from "react-router-dom";

export default function BottomHeading({ label, to, locationtxt }) {
  return (
    <div className="flex justify-center items-center gap-2">
      {label}
      <Link
        className="bg-gradient-to-r from-deep-teal to-golden-yellow text-transparent bg-clip-text"
        to={to}
      >
        {locationtxt}
      </Link>
    </div>
  );
}

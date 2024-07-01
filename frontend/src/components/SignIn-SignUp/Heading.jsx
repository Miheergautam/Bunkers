export default function Heading({ label }) {
  return (
    <div className="font-bold text-5xl py-2 bg-gradient-to-r from-deep-teal to-golden-yellow text-transparent bg-clip-text">
      {label}
    </div>
  );
}

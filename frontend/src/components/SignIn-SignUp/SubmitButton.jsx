export default function SubmitButton({ label, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="my-4 px-5 py-2.5 text-white rounded-xl bg-gradient-to-r from-mist to-golden-yellow"
    >
      {label}
    </button>
  );
}

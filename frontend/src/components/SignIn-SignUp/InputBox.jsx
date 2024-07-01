export default function InputBox({ label, onChange, placeholder, type }) {
  return (
    <div className="mt-3 w-3/4 lg:w-1/2">
      <div className="text-lg font-medium text-left py-2">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-mist rounded-lg focus:outline-none focus:ring-1 focus:ring-mist"
      />
    </div>
  );
}

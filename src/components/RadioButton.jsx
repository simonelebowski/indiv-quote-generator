export default function RadioButton({ label, name, value, onChange, border }) {
  return (
    <div className="form-group">
      <label className="block text-gray-600 mb-1">{label}</label>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input
            type="radio"
            name={name}
            value="yes"
            checked={value === "yes"}
            onChange={onChange}
            className={`mr-2 ${border}`}
          />
          Yes
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name={name}
            value="no"
            checked={value === "no"}
            onChange={onChange}
            className={`mr-2 ${border}`}
          />
          No
        </label>
      </div>
    </div>
  );
}

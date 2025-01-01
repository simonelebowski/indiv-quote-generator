export default function DropdownComponent({
  label,
  options,
  value,
  onChange,
  border,
}) {
  const safeOptions = Array.isArray(options) ? options : [];

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-gray-600">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className={`border ${border} text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-1.5 py-2`}
      >
        <option selected value="">
          Select an option
        </option>
        {safeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function DurationComponent({
  date,
  courseWeeks,
  onChangeDate,
  onChangeWeeks,
  borderDate,
  borderWeeks,
}) {
  // Function to generate dates for every Monday in 2025
  function generateStartDates() {
    const startDates = [];
    const currentDate = new Date();
    const startYear = 2025;

    // If current date is not in 2025, jump to January 1, 2025
    if (currentDate.getFullYear() < startYear) {
      currentDate.setFullYear(startYear, 0, 1); // Set to Jan 1, 2025
    }

    // Find the first Monday of 2025
    while (
      currentDate.getFullYear() === startYear &&
      currentDate.getDay() !== 1
    ) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Generate Mondays for the rest of 2025
    while (currentDate.getFullYear() === startYear) {
      startDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 7);
    }

    return startDates.map((date) => {
      const dateString = date.toDateString();
      const parts = dateString.split(" ").slice(1);
      return `${parts[0]}, ${parts[1]}, ${parts[2]}`;
    });
  }

  // Generate options for durations (1 to 49 weeks)
  const durationOptions = Array.from({ length: 49 }, (_, i) => i + 1);

  // Generate start dates for 2025
  const startDateOptions = generateStartDates();

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1.5">
        <label className="text-gray-600">Start Date</label>
        <select
          value={date}
          onChange={onChangeDate}
          className={`border ${borderDate} text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-1.5 py-2`}
        >
          <option value="" disabled>
            Select option
          </option>
          {startDateOptions.map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
        </select>
      </div>
      {date !== "" && (
        <div className="flex flex-col gap-1.5">
          <label className="text-gray-600">Duration</label>
          <select
            value={courseWeeks}
            onChange={onChangeWeeks}
            className={`border ${borderWeeks} text-gray-800 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full px-1.5 py-2`}
          >
            <option value="" disabled>
              Select option
            </option>
            {durationOptions.map((week) => (
              <option key={week} value={week}>
                {week} week{week > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

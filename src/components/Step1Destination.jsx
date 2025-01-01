import DropdownComponent from "./DropdownComponent";
import DurationComponent from "./DurationComponent";
import ContinueButton from "./ContinueButton";
import HrComponent from "./HrComponent";
import { handleContinueBtnDestination } from "../utils/BtnHandlers";

import { destinations, courses } from "../data/data";

export default function Step1Destination({
  selectedDestination,
  setSelectedDestination,
  selectedCourse,
  setSelectedCourse,
  date,
  setDate,
  courseWeeks,
  setCourseWeeks,
  setStep,
  reset,
  validationErrors,
  setValidationErrors,
  validateFields,
}) {
  const filteredCourses = courses[selectedDestination];
  const fields = {
    selectedDestination,
    selectedCourse,
    date,
    courseWeeks,
  };

  return (
    <>
      <div className="w-full max-w-[290px] flex flex-col gap-4">
        {/* DESTINATION SELECTION */}
        <DropdownComponent
          label="Destination"
          options={destinations}
          value={selectedDestination}
          onChange={(e) => {
            reset();
            setSelectedDestination(e.target.value);
            setValidationErrors((prev) => ({ ...prev, destination: false }));
          }}
          border={`${
            validationErrors.destination ? "border-red-500" : "border-gray-300"
          }`}
        />

        {/* COURSE SELECTION */}
        {filteredCourses && selectedDestination !== "" && (
          <DropdownComponent
            label="Course"
            options={filteredCourses}
            value={selectedCourse?.value || ""}
            onChange={(e) => {
              const course = filteredCourses.find(
                (course) => course.value === e.target.value
              );
              setSelectedCourse(course || {});
              setCourseWeeks("");
              setValidationErrors((prev) => ({ ...prev, course: false }));
            }}
            border={`${
              validationErrors.course ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}

        {/* DURATION SELECTION */}
        {selectedCourse && (
          <div className="duration-container">
            <DurationComponent
              date={date}
              courseWeeks={courseWeeks}
              onChangeDate={(e) => {
                setDate(e.target.value);
                setValidationErrors((prev) => ({ ...prev, date: false }));
              }}
              onChangeWeeks={(e) => {
                setCourseWeeks(e.target.value);
                setValidationErrors((prev) => ({ ...prev, weeks: false }));
              }}
              borderDate={`${
                validationErrors.date ? "border-red-500" : "border-gray-300"
              }`}
              borderWeeks={`${
                validationErrors.weeks ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>
        )}
      </div>

      <HrComponent />
      {/* CONTINUE BUTTON */}
      <div className="flex justify-end">
        <ContinueButton
          onClick={(event) => {
            event.preventDefault();
            if (validateFields(fields)) {
              handleContinueBtnDestination(
                event,
                selectedDestination,
                selectedCourse,
                courseWeeks,
                setStep
              );
            }
          }}
        />
      </div>
      <HrComponent />
    </>
  );
}

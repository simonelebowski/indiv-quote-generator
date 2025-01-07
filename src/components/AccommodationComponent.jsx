import { useState, useEffect } from "react";
import DropdownComponent from "./DropdownComponent";
import RadioButton from "./RadioButton";
import { calculateSummerWeeks } from "../utils/calculateFunctions";

export default function AccommodationComponent({
  needsAccommodation,
  setNeedsAccommodation,
  courseWeeks,
  date,
  summerWeeks,
  setSummerWeeks,
  options,
  accommodationWeeks,
  setAccommodationWeeks,
  selectedAccommodation,
  setSelectedAccommodation,
  needsSpecialDiet,
  setNeedsSpecialDiet,
  setAddAccommodationFee,
  validationErrors,
  setValidationErrors,
  filteredAccommodation,
}) {
  const [possibleAccommodationWeeks, setPossibleAccommodationWeeks] =
    useState("");

  useEffect(() => {
    calculatePossibleWeeks();
  }, [courseWeeks]);

  useEffect(() => {
    const calculatedWeeks = calculateSummerWeeks(date, accommodationWeeks);
    setSummerWeeks(calculatedWeeks);
  }, [accommodationWeeks]);

  function calculatePossibleWeeks() {
    if (courseWeeks === "") {
      return null;
    } else if (courseWeeks > 0) {
      const weeksArray = Array.from({ length: courseWeeks }, (_, i) => i + 1);
      setPossibleAccommodationWeeks(
        weeksArray.map((week) => ({
          value: week,
          label: `${week} week${week > 1 ? "s" : ""}`,
        }))
      );
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <RadioButton
        label="Does the student need accommodation?"
        name="accommodation"
        value={needsAccommodation}
        onChange={(e) => {
          const value = e.target.value;
          setNeedsAccommodation(e.target.value);
          setValidationErrors((prev) => ({
            ...prev,
            needsAccommodation: false,
          }));
          if (value === "no") {
            setAccommodationWeeks("");
            setSelectedAccommodation("");
            setAccommodationWeeks("");
            setAddAccommodationFee("no");
          }
        }}
        border={`${
          validationErrors.needsAccommodation
            ? "ring-2 ring-red-500 focus:ring-red-500"
            : ""
        }`}
      />

      {needsAccommodation === "yes" && (
        <div className="flex flex-col gap-4">
          <DropdownComponent
            label="Accommodation"
            options={options}
            value={selectedAccommodation?.value || ""}
            onChange={(e) => {
              const accommodation = filteredAccommodation.find(
                (accommodation) => accommodation.value === e.target.value
              );
              setSelectedAccommodation(accommodation || {});
              setValidationErrors((prev) => ({
                ...prev,
                selectedAccommodation: false,
              }));
            }}
            border={`${
              validationErrors.selectedAccommodation
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          <DropdownComponent
            label="Number of weeks"
            options={possibleAccommodationWeeks}
            value={accommodationWeeks}
            onChange={(e) => {
              setAccommodationWeeks(e.target.value);
              setValidationErrors((prev) => ({
                ...prev,
                accommodationWeeks: false,
              }));
            }}
            border={`${
              validationErrors.accommodationWeeks
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          <RadioButton
            label="Does the student need a special diet?"
            name="specialDiet"
            value={needsSpecialDiet}
            onChange={(e) => {
              setNeedsSpecialDiet(e.target.value);
              setValidationErrors((prev) => ({
                ...prev,
                needsSpecialDiet: false,
              }));
            }}
            border={`${
              validationErrors.needsSpecialDiet
                ? "ring-2 ring-red-500 focus:ring-red-500"
                : ""
            }`}
          />
        </div>
      )}
    </div>
  );
}

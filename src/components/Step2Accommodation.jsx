import AccommodationComponent from "./AccommodationComponent";
import BackButton from "./BackButton";
import ContinueButton from "./ContinueButton";
import HrComponent from "./HrComponent";
import {
  handleBackBtn,
  handleContinueBtnAccommodation,
} from "../utils/BtnHandlers";
import { accommodationOptions } from "../data/data";

export default function Step2Accommodation({
  selectedDestination,
  setSelectedAccommodation,
  needsAccommodation,
  setNeedsAccommodation,
  courseWeeks,
  date,
  accommodationWeeks,
  setAccommodationWeeks,
  summerWeeks,
  setSummerWeeks,
  selectedAccommodation,
  needsSpecialDiet,
  setNeedsSpecialDiet,
  setStep,
  validationErrors,
  setValidationErrors,
  validateFields,
}) {
  const filteredAccommodation = accommodationOptions[selectedDestination] || [];
  const fields = {
    needsAccommodation,
    selectedAccommodation,
    accommodationWeeks,
    needsSpecialDiet,
  };

  return (
    <>
      <div className="w-full max-w-[290px] flex flex-col gap-4">
        <AccommodationComponent
          needsAccommodation={needsAccommodation}
          setNeedsAccommodation={setNeedsAccommodation}
          courseWeeks={courseWeeks}
          options={filteredAccommodation}
          date={date}
          accommodationWeeks={accommodationWeeks}
          setAccommodationWeeks={setAccommodationWeeks}
          selectedAccommodation={selectedAccommodation}
          setSelectedAccommodation={setSelectedAccommodation}
          needsSpecialDiet={needsSpecialDiet}
          setNeedsSpecialDiet={setNeedsSpecialDiet}
          summerWeeks={summerWeeks}
          setSummerWeeks={setSummerWeeks}
          validationErrors={validationErrors}
          setValidationErrors={setValidationErrors}
          filteredAccommodation={filteredAccommodation}
        />
      </div>

      <HrComponent />
      <div className="flex justify-end gap-3">
        <BackButton
          onClick={() => {
            handleBackBtn(setStep);
          }}
        />
        <ContinueButton
          onClick={(event) => {
            event.preventDefault();
            if (validateFields(fields) || needsAccommodation === "no") {
              handleContinueBtnAccommodation(
                event,
                needsAccommodation,
                accommodationWeeks,
                selectedAccommodation,
                needsSpecialDiet,
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

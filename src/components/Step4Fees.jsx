import RadioButton from "./RadioButton";
import BackButton from "./BackButton";
import HrComponent from "./HrComponent";
import { handleBackBtn } from "../utils/BtnHandlers";

export default function Step4Fees({
  needsInsurance,
  setNeedsInsurance,
  addTextBook,
  setAddTextBook,
  needsAccommodation,
  addAccommodationFee,
  setAddAccommodationFee,
  addRegistrationFee,
  setAddRegistrationFee,
  addBankCharges,
  setAddBankCharges,
  setStep,
  validationErrors,
  setValidationErrors,
}) {
  return (
    <>
      <div className="w-full max-w-[290px] flex flex-col gap-4">
        {/* Insurance */}
        <RadioButton
          label="Does the student need insurance?"
          name="insurance"
          value={needsInsurance}
          onChange={(e) => {
            setNeedsInsurance(e.target.value);
            setValidationErrors((prev) => ({ ...prev, needsInsurance: false }));
          }}
          border={`${
            validationErrors.needsInsurance
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : ""
          }`}
        />

        {/* Text book */}
        <RadioButton
          label="Add Text Book?"
          name="textBook"
          value={addTextBook}
          onChange={(e) => {
            setAddTextBook(e.target.value);
            setValidationErrors((prev) => ({ ...prev, addTextBook: false }));
          }}
          border={`${
            validationErrors.addTextBook
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : ""
          }`}
        />

        {/* Accommodation Placement Fee */}
        {needsAccommodation === "yes" && (
          <RadioButton
            label="Add Accommodation Placement Fee?"
            name="accommodationFee"
            value={addAccommodationFee}
            onChange={(e) => {
              setAddAccommodationFee(e.target.value);
              setValidationErrors((prev) => ({
                ...prev,
                addAccommodationFee: false,
              }));
            }}
            border={`${
              validationErrors.addAccommodationFee
                ? "ring-2 ring-red-500 focus:ring-red-500"
                : ""
            }`}
          />
        )}

        {/* Registration Fee */}
        <RadioButton
          label="Add Registration Fee?"
          name="registrationFee"
          value={addRegistrationFee}
          onChange={(e) => {
            setAddRegistrationFee(e.target.value);
            setValidationErrors((prev) => ({
              ...prev,
              addRegistrationFee: false,
            }));
          }}
          border={`${
            validationErrors.addRegistrationFee
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : ""
          }`}
        />

        {/* Bank Charges */}
        <RadioButton
          label="Add Bank Charges?"
          name="bankCharges"
          value={addBankCharges}
          onChange={(e) => {
            setAddBankCharges(e.target.value);
            setValidationErrors((prev) => ({ ...prev, addBankCharges: false }));
          }}
          border={`${
            validationErrors.addBankCharges
              ? "ring-2 ring-red-500 focus:ring-red-500"
              : ""
          }`}
        />
      </div>

      <HrComponent />
      <div className="flex justify-end">
        <BackButton
          onClick={() => {
            handleBackBtn(setStep);
          }}
        />
      </div>
      <HrComponent />
    </>
  );
}

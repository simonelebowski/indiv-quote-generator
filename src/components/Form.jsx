import { useFormState } from "../hooks/useFormState";
import useFormValidation from "../hooks/useFormValidation";
import { useQuoteCalculations } from "../hooks/useQuoteCalculation";
import Step1Destination from "./Step1Destination";
import Step2Accommodation from "./Step2Accommodation";
import Step3Transfers from "./Step3Transfers";
import Step4Fees from "./Step4Fees";
import Review from "./Review";

export default function Form() {
  const {
    validationErrors,
    setValidationErrors,
    validateFields,
    step1ValidateFields,
    step2ValidateFields,
    step3ValidateFields,
  } = useFormValidation();
  const formState = useFormState();
  const { step } = formState;
  const {
    coursePrice,
    accommodationPrice,
    arrivalTransferPrice,
    departureTransferPrice,
    totalQuote,
  } = useQuoteCalculations(formState);

  return (
    <div className="mt-20 flex justify-between gap-12 w-full">
      <form className="w-full max-w-[530px] flex flex-col gap-4">
        <h1 className="text-2xl text-[#e0a83c]">Select the options below</h1>
        {step === 1 && (
          <Step1Destination
            {...formState}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
            validateFields={step1ValidateFields}
          />
        )}
        {step === 2 && (
          <Step2Accommodation
            {...formState}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
            validateFields={step2ValidateFields}
          />
        )}
        {step === 3 && (
          <Step3Transfers
            {...formState}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
            validateFields={step3ValidateFields}
          />
        )}
        {step === 4 && (
          <Step4Fees
            {...formState}
            validationErrors={validationErrors}
            setValidationErrors={setValidationErrors}
          />
        )}
      </form>
      <Review
        {...formState}
        step={step}
        validateFields={validateFields}
        coursePrice={coursePrice}
        accommodationPrice={accommodationPrice}
        arrivalTransferPrice={arrivalTransferPrice}
        departureTransferPrice={departureTransferPrice}
        totalQuote={totalQuote}
      />
    </div>
  );
}

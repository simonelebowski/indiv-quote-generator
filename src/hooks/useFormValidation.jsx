import { useState } from "react";

export default function useFormValidation() {
  const [validationErrors, setValidationErrors] = useState({});

  function validateFields(fields) {
    const errors = [];

    // Validate each field
    if (!fields.needsInsurance) errors.needsInsurance = true;
    if (!fields.addTextBook) errors.addTextBook = true;
    if (fields.needsAccommodation === "yes" && !fields.addAccommodationFee) {
      errors.addAccommodationFee = true;
    }
    if (!fields.addRegistrationFee) errors.addRegistrationFee = true;
    if (!fields.addBankCharges) errors.addBankCharges = true;
    setValidationErrors(errors);

    return Object.keys(errors).length === 0; // Returns true if no errors
  }

  function step1ValidateFields(fields) {
    const errors = [];
    if (!fields.selectedDestination) errors.destination = true;

    if (fields.selectedDestination !== "" && !fields.selectedCourse) {
      errors.course = true;
    }

    if (fields.selectedCourse !== "" && !fields.date) {
      errors.date = true;
    }

    if (fields.date !== "" && !fields.courseWeeks) {
      errors.weeks = true;
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  }

  function step2ValidateFields(fields) {
    const errors = [];
    if (!fields.needsAccommodation) errors.needsAccommodation = true;

    if (
      fields.needsAccommodation &&
      Object.keys(fields.selectedAccommodation).length <= 0
    ) {
      errors.selectedAccommodation = true;
    }

    if (fields.needsAccommodation !== "" && !fields.accommodationWeeks) {
      errors.accommodationWeeks = true;
    }

    if (fields.accommodationWeeks !== "" && !fields.needsSpecialDiet) {
      errors.needsSpecialDiet = true;
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  }

  function step3ValidateFields(fields) {
    const errors = [];
    if (!fields.needsArrivalTransfer) errors.needsArrivalTransfer = true;

    if (!fields.needsDepartureTransfer) errors.needsDepartureTransfer = true;

    if (
      fields.needsArrivalTransfer === "yes" &&
      !fields.arrivalTransferAirport
    ) {
      errors.arrivalTransferAirport = true;
    }

    if (
      fields.needsDepartureTransfer === "yes" &&
      !fields.departureTransferAirport
    ) {
      errors.departureTransferAirport = true;
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0; // Returns true if no errors
  }

  return {
    validationErrors,
    setValidationErrors,
    validateFields,
    step1ValidateFields,
    step2ValidateFields,
    step3ValidateFields,
  };
}

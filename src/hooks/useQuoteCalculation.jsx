import { useMemo } from "react";
import {
  calculateTotalQuote,
  calculateCoursePrice,
  calculateAccommodationPrice,
  getArrivalTransferPrice,
  getDepartureTransferPrice,
} from "../utils/calculateFunctions";

export function useQuoteCalculations(formState) {
  const {
    selectedCourse,
    courseWeeks,
    selectedAccommodation,
    needsAccommodation,
    accommodationWeeks,
    needsSpecialDiet,
    needsInsurance,
    addTextBook,
    addRegistrationFee,
    addAccommodationFee,
    needsArrivalTransfer,
    arrivalTransferAirport,
    needsDepartureTransfer,
    departureTransferAirport,
    addBankCharges,
  } = formState;

  const coursePrice =
    calculateCoursePrice(selectedCourse, courseWeeks) * courseWeeks;
  const accommodationPrice = calculateAccommodationPrice(
    selectedAccommodation,
    needsAccommodation,
    accommodationWeeks
  );
  const arrivalTransferPrice = getArrivalTransferPrice(
    needsArrivalTransfer,
    arrivalTransferAirport
  );
  const departureTransferPrice = getDepartureTransferPrice(
    needsDepartureTransfer,
    departureTransferAirport
  );

  const totalQuote = useMemo(
    () =>
      calculateTotalQuote(
        needsSpecialDiet,
        accommodationWeeks,
        needsInsurance,
        courseWeeks,
        addTextBook,
        addRegistrationFee,
        addAccommodationFee,
        coursePrice,
        accommodationPrice,
        arrivalTransferPrice,
        departureTransferPrice,
        addBankCharges
      ),
    [
      needsSpecialDiet,
      accommodationWeeks,
      needsInsurance,
      courseWeeks,
      addTextBook,
      addRegistrationFee,
      addAccommodationFee,
      coursePrice,
      accommodationPrice,
      arrivalTransferPrice,
      departureTransferPrice,
      addBankCharges,
    ]
  );

  return {
    coursePrice,
    accommodationPrice,
    arrivalTransferPrice,
    departureTransferPrice,
    totalQuote,
  };
}

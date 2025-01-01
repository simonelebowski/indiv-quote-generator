// Button handler functions

// DESTINATION CONTINUE BUTTON
export function handleContinueBtnDestination(
  event,
  selectedDestination,
  selectedCourse,
  courseWeeks,
  setStep
) {
  event.preventDefault();

  if (
    selectedDestination !== "" &&
    selectedCourse !== "" &&
    courseWeeks !== ""
  ) {
    setStep((prevStep) => prevStep + 1);
  }
}

// ACCOMMODATION CONTINUE BUTTON
export function handleContinueBtnAccommodation(
  event,
  needsAccommodation,
  accommodationWeeks,
  selectedAccommodation,
  needsSpecialDiet,
  setStep
) {
  event.preventDefault();

  if (
    (needsAccommodation !== "" &&
      accommodationWeeks !== "" &&
      selectedAccommodation !== "" &&
      needsSpecialDiet !== "") ||
    needsAccommodation === "no"
  ) {
    setStep((prevStep) => prevStep + 1);
  }
}

// TRANSFERS CONTINUE BUTTON
export function handleContinueBtnTransfers(
  event,
  needsArrivalTransfer,
  arrivalTransferAirport,
  needsDepartureTransfer,
  departureTransferAirport,
  setStep
) {
  event.preventDefault();

  const isValidArrivalTransfer =
    needsArrivalTransfer &&
    (needsArrivalTransfer === "no" ||
      (needsArrivalTransfer === "yes" && arrivalTransferAirport !== ""));

  const isValidDepartureTransfer =
    needsDepartureTransfer &&
    (needsDepartureTransfer === "no" ||
      (needsDepartureTransfer === "yes" && departureTransferAirport !== ""));

  if (isValidArrivalTransfer && isValidDepartureTransfer) {
    setStep((prevStep) => prevStep + 1);
  }
}

// BACK BUTTON
export function handleBackBtn(setStep) {
  setStep((prevStep) => prevStep - 1);
}

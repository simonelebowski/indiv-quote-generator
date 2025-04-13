// Calculate course price---------
export function calculateCoursePrice(course, weeks) {
  if (!course || (!weeks && course.value !== "")) return 0;

  // Check if the course has price rules
  if (course.priceRules) {
    const rule = course.priceRules.find(
      (r) => weeks >= r.minWeeks && weeks <= r.maxWeeks
    );
    return rule ? rule.price : 0;
  }

  // Default price (if no price rules exist)
  return course.price || 0;
}

// Calculate accommodation price---------
export function calculateAccommodationPrice(
  selectedAccommodation,
  needsAccommodation,
  accommodationWeeks,
  totalSummerWeeks
) {
  if (
    selectedAccommodation &&
    Object.keys(selectedAccommodation).length > 0 &&
    needsAccommodation === "yes"
  ) {
    const summerCharge = totalSummerWeeks > 0 ? totalSummerWeeks * 35 : 0;
    return summerCharge + selectedAccommodation.price * accommodationWeeks;
  } else {
    return 0;
  }
}

// Calculate summer supplement---------
export function calculateSummerWeeks(startDate, accommodationWeeks) {
  let totalSummerWeeks = 0;
  const surchargeStart = new Date("2025-06-16");
  const surchargeEnd = new Date("2025-08-30");
  const startDateObj = new Date(startDate);

  for (let i = 0; i < accommodationWeeks; i++) {
    const weekStart = new Date(startDateObj);
    weekStart.setDate(weekStart.getDate() + i * 7);

    const inSummerPeriod =
      weekStart >= surchargeStart && weekStart <= surchargeEnd;

    if (inSummerPeriod) {
      totalSummerWeeks++;
    }
  }

  return totalSummerWeeks;
}

// Calculate transfers price---------
export function getArrivalTransferPrice(
  needsArrivalTransfer,
  arrivalTransferAirport
) {
  if (
    needsArrivalTransfer === "yes" &&
    arrivalTransferAirport !== "" &&
    arrivalTransferAirport.price
  ) {
    return arrivalTransferAirport.price;
  } else {
    return 0;
  }
}

export function getDepartureTransferPrice(
  needsDepartureTransfer,
  departureTransferAirport
) {
  if (
    needsDepartureTransfer === "yes" &&
    departureTransferAirport !== "" &&
    departureTransferAirport.price
  ) {
    return departureTransferAirport.price;
  } else {
    return 0;
  }
}

export function calculateTotalQuote(
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
) {
  const costs = {
    specialDiet: needsSpecialDiet === "yes" ? 30 * accommodationWeeks : 0,
    insurance: needsInsurance === "yes" ? 10 * courseWeeks : 0,
    textBook: addTextBook === "yes" ? 32 : 0,
    registrationFee: addRegistrationFee === "yes" ? 75 : 0,
    accommodationFee: addAccommodationFee === "yes" ? 75 : 0,
    bankCharges: addBankCharges === "yes" ? 15 : 0,
  };

  return (
    Object.values(costs).reduce((total, cost) => total + cost, 0) +
    coursePrice +
    accommodationPrice +
    arrivalTransferPrice +
    departureTransferPrice
  );
}

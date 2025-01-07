import { useState } from "react";

export function useFormState() {
  const [step, setStep] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [infoSchool, setInfoSchool] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [date, setDate] = useState("");
  const [courseWeeks, setCourseWeeks] = useState("");
  const [needsAccommodation, setNeedsAccommodation] = useState("");
  const [accommodationWeeks, setAccommodationWeeks] = useState("");
  const [selectedAccommodation, setSelectedAccommodation] = useState("");
  const [summerWeeks, setSummerWeeks] = useState("");
  const [needsSpecialDiet, setNeedsSpecialDiet] = useState("");
  const [needsArrivalTransfer, setNeedsArrivalTransfer] = useState("");
  const [arrivalTransferAirport, setArrivalTransferAirport] = useState("");
  const [needsDepartureTransfer, setNeedsDepartureTransfer] = useState("");
  const [departureTransferAirport, setDepartureTransferAirport] = useState("");
  const [needsInsurance, setNeedsInsurance] = useState("");
  const [addTextBook, setAddTextBook] = useState("");
  const [addRegistrationFee, setAddRegistrationFee] = useState("");
  const [addAccommodationFee, setAddAccommodationFee] = useState("");
  const [addBankCharges, setAddBankCharges] = useState("");

  function reset() {
    setStep(1);
    setSelectedDestination("");
    setSelectedCourse("");
    setDate("");
    setCourseWeeks("");
    setNeedsAccommodation("");
    setAccommodationWeeks("");
    setSelectedAccommodation("");
    setSummerWeeks("");
    setNeedsSpecialDiet("");
    setNeedsArrivalTransfer("");
    setArrivalTransferAirport("");
    setNeedsDepartureTransfer("");
    setDepartureTransferAirport("");
    setNeedsInsurance("");
    setAddTextBook("");
    setAddRegistrationFee("");
    setAddAccommodationFee("");
    setAddBankCharges("");
  }

  return {
    step,
    setStep,
    selectedDestination,
    setSelectedDestination,
    infoSchool,
    setInfoSchool,
    selectedCourse,
    setSelectedCourse,
    date,
    setDate,
    courseWeeks,
    setCourseWeeks,
    needsAccommodation,
    setNeedsAccommodation,
    accommodationWeeks,
    setAccommodationWeeks,
    selectedAccommodation,
    setSelectedAccommodation,
    summerWeeks,
    setSummerWeeks,
    needsSpecialDiet,
    setNeedsSpecialDiet,
    needsArrivalTransfer,
    setNeedsArrivalTransfer,
    arrivalTransferAirport,
    setArrivalTransferAirport,
    needsDepartureTransfer,
    setNeedsDepartureTransfer,
    departureTransferAirport,
    setDepartureTransferAirport,
    needsInsurance,
    setNeedsInsurance,
    addTextBook,
    setAddTextBook,
    addRegistrationFee,
    setAddRegistrationFee,
    addAccommodationFee,
    setAddAccommodationFee,
    addBankCharges,
    setAddBankCharges,
    reset,
  };
}

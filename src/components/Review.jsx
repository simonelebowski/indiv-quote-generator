import ExtrasComponent from "./ExtrasComponent";
import ReviewItem from "./ReviewItem";
import { generateQuoteWithTemplate } from "../utils/generateQuoteWithTemplate";

export default function Review({
  selectedDestination,
  selectedCourse,
  date,
  courseWeeks,
  needsAccommodation,
  selectedAccommodation,
  accommodationWeeks,
  summerWeeks,
  needsArrivalTransfer,
  arrivalTransferAirport,
  needsDepartureTransfer,
  departureTransferAirport,
  needsInsurance,
  needsSpecialDiet,
  addAccommodationFee,
  addRegistrationFee,
  addTextBook,
  addBankCharges,
  totalQuote,
  step,
  validateFields,
  coursePrice,
  accommodationPrice,
}) {
  function handleDownloadQuote() {
    const fields = {
      needsInsurance,
      addTextBook,
      needsAccommodation,
      addAccommodationFee,
      addRegistrationFee,
      addBankCharges,
    };

    if (!validateFields(fields)) {
      return; // Prevent download if validation fails
    }

    const quoteData = {
      location: selectedDestination,
      course: selectedCourse.label,
      dates: date,
      weeks: courseWeeks,
      coursePrice: `£${coursePrice}`,
      courseWeekPrice: `£${coursePrice / courseWeeks}`,
      accommodation: `£${needsAccommodation}`,
      accommodationType:
        needsAccommodation && selectedAccommodation
          ? selectedAccommodation.label
          : `Accommodation: no`,
      accommodationWeeks: accommodationWeeks,
      accommodationPrice: accommodationPrice,
      accommodationWeekPrice: `£${accommodationPrice / accommodationWeeks}`,
      specialDiet:
        needsSpecialDiet === "yes" ? `Special diet: yes` : `Special diet: no`,
      specialDietWeekPrice: needsSpecialDiet === `yes` ? `£30` : ``,
      specialDietPrice:
        needsSpecialDiet === "yes" ? `£${30 * accommodationWeeks}` : `£0`,
      arrivalTransfer:
        needsArrivalTransfer === "yes"
          ? `Arrival transfer ${arrivalTransferAirport.label}`
          : `Arrival transfer: no`,
      arrivalTransferPrice:
        needsArrivalTransfer && arrivalTransferAirport
          ? `£${arrivalTransferAirport.price}`
          : `£0`,
      departureTransfer:
        needsDepartureTransfer === "yes"
          ? `Departure transfer ${departureTransferAirport.label}`
          : `Departure transfer: no`,
      departureTransferPrice:
        needsDepartureTransfer && departureTransferAirport
          ? `£${departureTransferAirport.price}`
          : `£0`,
      insurance: needsInsurance,
      accommodationFee: addAccommodationFee === "no" ? "£75" : "£0",
      registrationFee: addRegistrationFee === "yes" ? "£75" : "£0",
      textBook: addTextBook === "yes" ? "£32" : "Not included",
      bankCharges: addBankCharges === "yes" ? "£15" : "£0",
      totalPrice: `£${totalQuote || 0}`,
    };

    generateQuoteWithTemplate(quoteData);
  }

  return (
    <div className="review-container mb-8 w-full max-w-[320px]">
      <h1 className="text-2xl text-slate-700 mb-4">Summary</h1>

      {courseWeeks === "" && (
        <p>Please make your selections to see the summary here.</p>
      )}

      {/* Course Details Section */}
      {selectedDestination && selectedCourse.label && date && courseWeeks && (
        <div className="mb-3">
          <div className="grid gap-4 mb-3">
            {selectedDestination && (
              <div>
                <h3 className="font-semibold">CES {selectedDestination}</h3>
                <p>{selectedCourse.label}</p>
                <p>{date}</p>
                <p>
                  {courseWeeks} week{courseWeeks > 1 ? "s" : ""}
                </p>
              </div>
            )}
          </div>
          <ReviewItem item="Total" price={`£${coursePrice}`} />
          <hr></hr>
        </div>
      )}

      {/* Accommodation Section */}
      {needsAccommodation && (
        <div className="mb-3">
          <div className="grid gap-4 mb-3">
            <div>
              <h3 className="font-semibold flex gap-1">
                Accommodation:{" "}
                <p className="font-normal">
                  {needsAccommodation === "yes" ? "Yes" : "No"}
                </p>
              </h3>
              {selectedAccommodation.label && (
                <p>{selectedAccommodation.label}</p>
              )}
              {accommodationWeeks && (
                <p>
                  {accommodationWeeks} week{accommodationWeeks > 1 ? "s" : ""}
                </p>
              )}
              {summerWeeks !== "" && summerWeeks !== 0 && (
                <p>
                  {summerWeeks} summer week{summerWeeks > 1 ? "s" : ""}{" "}
                  supplement
                </p>
              )}
            </div>
          </div>
          <ReviewItem item="Total" price={`£${accommodationPrice}`} />
          <hr></hr>
        </div>
      )}

      {/* Transfers Section */}
      {(needsArrivalTransfer || needsDepartureTransfer) && (
        <div className="mb-3">
          <div className="flex flex-col gap-4 mb-3">
            {needsArrivalTransfer && (
              <div className="flex justify-between">
                <h3 className="font-semibold flex gap-1">
                  Arrival Transfer:
                  <p className="font-normal">
                    {needsArrivalTransfer === "yes"
                      ? `Yes${
                          arrivalTransferAirport?.label
                            ? ` - ${arrivalTransferAirport.label}`
                            : ``
                        }`
                      : "No"}
                  </p>
                </h3>
                {needsArrivalTransfer === "yes" && arrivalTransferAirport && (
                  <p>{`£${arrivalTransferAirport.price}`}</p>
                )}
              </div>
            )}
            {needsDepartureTransfer && (
              <div className="flex justify-between">
                <h3 className="font-semibold flex gap-1">
                  Departure Transfer:{" "}
                  <p className="font-normal">
                    {needsDepartureTransfer === "yes"
                      ? `Yes${
                          departureTransferAirport?.label
                            ? ` - ${departureTransferAirport.label}`
                            : ""
                        }`
                      : "No"}
                  </p>
                </h3>
                {needsDepartureTransfer === "yes" &&
                  departureTransferAirport && (
                    <p>{`£${departureTransferAirport.price}`}</p>
                  )}
              </div>
            )}
          </div>
          <hr></hr>
        </div>
      )}

      {/* Extras Section */}
      {(needsInsurance ||
        addRegistrationFee ||
        addAccommodationFee ||
        addTextBook) && (
        <div className="mb-3">
          {/* <div className="grid grid-cols-2 gap-4 mb-3"> */}
          <div className="flex flex-col gap-4 mb-3">
            <ExtrasComponent
              extrasArr={[
                {
                  label: "Insurance",
                  value: needsInsurance,
                  options: { yes: "Yes", no: "No" },
                },
                {
                  label: "Accommodation Fee",
                  value: addAccommodationFee,
                  options: { yes: "£75", no: "No" },
                },
                {
                  label: "Registration Fee",
                  value: addRegistrationFee,
                  options: { yes: "£75", no: "No" },
                },
                {
                  label: "Text Book",
                  value: addTextBook,
                  options: { yes: "£32", no: "Not Included" },
                },
                {
                  label: "Bank Charges",
                  value: addBankCharges,
                  options: { yes: "£15", no: "No" },
                },
              ]}
            />
          </div>
          <hr></hr>
        </div>
      )}

      {selectedDestination && selectedCourse.label && date && courseWeeks && (
        <>
          {/* Total Quote */}
          <div className="quote-summary mb-3">
            <h2 className="text-xl font-semibold">Total price</h2>
            <p className="text-lg font-bold">£{totalQuote}</p>
          </div>

          {step === 4 && (
            <>
              {/* Download Button */}
              <button
                onClick={handleDownloadQuote}
                className="bg-[#5cb85c] hover:bg-[#449d44] text-white font-bold py-2 px-4 rounded"
              >
                DOWNLOAD
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
}

// Download Your Quote	#5cb85c (or #4e79a7)	#ffffff	#449d44 (or #3c5c85)

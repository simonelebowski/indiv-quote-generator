import TransfersComponent from "./TransfersComponent";
import BackButton from "./BackButton";
import ContinueButton from "./ContinueButton";
import HrComponent from "./HrComponent";
import {
  handleBackBtn,
  handleContinueBtnTransfers,
} from "../utils/BtnHandlers";
import { arrivalTransfers, departureTransfers } from "../data/data";

export default function Step3Transfers({
  selectedDestination,
  needsArrivalTransfer,
  arrivalTransferAirport,
  setNeedsArrivalTransfer,
  setArrivalTransferAirport,
  needsDepartureTransfer,
  departureTransferAirport,
  setNeedsDepartureTransfer,
  setDepartureTransferAirport,
  setStep,
  validationErrors,
  setValidationErrors,
  validateFields,
}) {
  const filteredArrivalTransfers = arrivalTransfers[selectedDestination] || [];
  const filteredDepartureTransfers =
    departureTransfers[selectedDestination] || [];
  const fields = {
    needsArrivalTransfer,
    needsDepartureTransfer,
    arrivalTransferAirport,
    departureTransferAirport,
  };

  return (
    <>
      <div className="w-full max-w-[290px] flex flex-col gap-4">
        <TransfersComponent
          label="arrival"
          needsTransfer={needsArrivalTransfer}
          options={filteredArrivalTransfers}
          transferAirport={arrivalTransferAirport}
          onChangeNeeds={setNeedsArrivalTransfer}
          onChangeAirport={setArrivalTransferAirport}
          errorNeedsTransfer={validationErrors.needsArrivalTransfer}
          errorAirport={validationErrors.arrivalTransferAirport}
          setValidationErrors={setValidationErrors}
        />
        <TransfersComponent
          label="departure"
          needsTransfer={needsDepartureTransfer}
          options={filteredDepartureTransfers}
          transferAirport={departureTransferAirport}
          onChangeNeeds={setNeedsDepartureTransfer}
          onChangeAirport={setDepartureTransferAirport}
          errorNeedsTransfer={validationErrors.needsDepartureTransfer}
          errorAirport={validationErrors.departureTransferAirport}
          setValidationErrors={setValidationErrors}
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
            if (
              validateFields(fields) ||
              (needsArrivalTransfer === "no" && needsDepartureTransfer === "no")
            ) {
              handleContinueBtnTransfers(
                event,
                needsArrivalTransfer,
                arrivalTransferAirport,
                needsDepartureTransfer,
                departureTransferAirport,
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

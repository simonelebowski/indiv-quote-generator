import DropdownComponent from "./DropdownComponent";
import RadioButton from "./RadioButton";

export default function TransfersComponent({
  label,
  needsTransfer,
  options,
  transferAirport,
  onChangeNeeds,
  onChangeAirport,
  errorNeedsTransfer,
  errorAirport,
  setValidationErrors,
}) {
  return (
    <div className="transfers-container flex flex-col gap-4">
      <RadioButton
        label={`Does the student need a${
          label === "arrival" ? "n" : ""
        } ${label} transfer`}
        name={`${label}Transfer`}
        value={needsTransfer}
        onChange={(e) => {
          onChangeNeeds(e.target.value);
          if (label === "arrival") {
            setValidationErrors((prev) => ({
              ...prev,
              needsArrivalTransfer: false,
            }));
          } else if (label === "departure") {
            setValidationErrors((prev) => ({
              ...prev,
              needsDepartureTransfer: false,
            }));
          }

          if (e.target.value === "no") {
            onChangeAirport("");
          }
        }}
        border={`${
          errorNeedsTransfer ? "ring-2 ring-red-500 focus:ring-red-500" : ""
        }`}
      />

      {needsTransfer === "yes" && (
        <DropdownComponent
          label="Please select the airport"
          options={options}
          value={transferAirport?.value || ""}
          onChange={(e) => {
            const transferAirport = options.find(
              (transfer) => transfer.value === e.target.value
            );
            onChangeAirport(transferAirport || {});
            if (label === "arrival") {
              setValidationErrors((prev) => ({
                ...prev,
                arrivalTransferAirport: false,
              }));
            } else if (label === "departure") {
              setValidationErrors((prev) => ({
                ...prev,
                departureTransferAirport: false,
              }));
            }
          }}
          border={`${errorAirport ? "border-red-500" : "border-gray-300"}`}
        />
      )}
    </div>
  );
}

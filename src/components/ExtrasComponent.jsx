export default function ExtrasComponent({ extrasArr }) {
  return (
    <>
      {extrasArr &&
        extrasArr.map(
          (extra, index) =>
            extra.value && (
              <div key={index} className="flex justify-between">
                <h3 className="font-semibold flex gap-1">{extra.label}: </h3>
                <p className="font-normal">
                  {extra.value === "yes" ? extra.options.yes : extra.options.no}
                </p>
              </div>
            )
        )}
    </>
  );
}

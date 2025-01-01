export default function ReviewItem({ item, price }) {
  return (
    <div className="flex justify-between">
      <p>{item}</p>
      <p>{price}</p>
    </div>
  );
}

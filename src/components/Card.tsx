export default function Card({
  icon,
  title,
  value,
  changePercentage,
}: {
  icon: string;
  title: string;
  value: number;
  changePercentage: number;
}) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

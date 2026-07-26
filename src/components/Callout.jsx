export default function Callout({ children, type = "note" }) {
  return (
    <div className={`callout callout-${type}`}>
      {children}
    </div>
  );
}

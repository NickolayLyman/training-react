export default function MyButton({ value, ...props }) {
  return <button {...props}>{value}</button>;
}

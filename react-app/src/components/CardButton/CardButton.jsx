import './cardButton.scss';
export default function CardButton({ children }) {
  return (
    <>
      <button className="card-button">{children}</button>
    </>
  );
}

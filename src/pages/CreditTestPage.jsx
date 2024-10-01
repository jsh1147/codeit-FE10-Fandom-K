import { useCredit } from '../hooks/useCredit';

export default function CreditTestPage() {
  const { credit, addCredit, deductCredit } = useCredit();

  const handleOnClick1 = () => {
    addCredit(1);
  };

  const handleOnClick2 = () => {
    deductCredit(1);
  };

  return (
    <div>
      <h1>CreditTest</h1>
      <p>current credit: {credit}</p>
      <button onClick={handleOnClick1}>add credit + 1</button>
      <button onClick={handleOnClick2}>deduct credit - 1</button>
    </div>
  );
}

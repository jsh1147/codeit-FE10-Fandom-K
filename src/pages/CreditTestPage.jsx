import { useCredit } from '../hooks/useCredit';

export default function CreditTestPage() {
  const { credit, updateCredit } = useCredit();

  const handleOnClick = () => {
    updateCredit(1);
  };
  return (
    <div>
      <h1>CreditTest</h1>
      <p>current credit: {credit}</p>
      <button onClick={handleOnClick}>add credit + 1</button>
    </div>
  );
}

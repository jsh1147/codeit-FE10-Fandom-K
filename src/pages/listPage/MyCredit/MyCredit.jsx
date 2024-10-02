import creditImage from '@/assets/icons/credit.svg';

export default function MyCredit() {
  return (
    <section>
      <div>
        <span>내 크레딧</span>
        <div>
          <img src={creditImage} />
          <span></span>
        </div>
      </div>
      <button>충전하기</button>
    </section>
  );
}

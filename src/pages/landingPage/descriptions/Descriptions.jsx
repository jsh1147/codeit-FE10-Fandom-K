import Description from './components/Description';
import styles from './Descriptions.module.css';

const descriptionData = [
  {
    keyword: '후원하기',
    content: (
      <>
        좋아하는 아이돌에게
        <br />
        쉽게 조공해 보세요
      </>
    ),
    imageAlt: '후원하기 모바일 뷰',
  },
  {
    keyword: '이달의 아티스트',
    content: (
      <>
        내 아티스트에게 1등의
        <br />
        영예를 선물하세요
      </>
    ),
    imageAlt: '투표하기 모바일 뷰',
  },
  {
    keyword: '나만의 아티스트',
    content: (
      <>
        좋아하는 아티스트들의
        <br />
        소식을 모아보세요
      </>
    ),
    imageAlt: '관심 아이돌 모바일 뷰',
  },
];

export default function Descriptions() {
  return (
    <section className={styles.section}>
      <div className={styles.guide} aria-hidden="true"></div>
      {descriptionData.map((data, idx) => (
        <Description
          key={idx}
          idx={idx}
          keyword={data.keyword}
          content={data.content}
          imageAlt={data.imageAlt}
        />
      ))}
    </section>
  );
}

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { donationsSettings as settings } from '@/constants/carouselConstants';
import spinners from '@/assets/icons/spinners.svg';

import styles from './Donations.module.css';
import { getDonations } from '@/apis/donationsApi';

import DonationCard from './components/DonationCard';
import FetchError from './components/FetchError';

export default function Donations() {
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { list } = await getDonations();
        setDonations(list);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        console.error(error);
        setError('데이터 로딩 실패');
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <section className={styles.donations}>
        {isLoading ? (
          <div className={styles.spinnersWrapper}>
            <img src={spinners} alt="로딩 아이콘" className={styles.spinners} />
          </div>
        ) : error ? (
          <FetchError error={error} />
        ) : (
          <Slider {...settings}>
            {donations.map((item) => (
              <DonationCard key={item.id} {...item} />
            ))}
          </Slider>
        )}
      </section>
    </>
  );
}

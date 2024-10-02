import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { donationsSettings as settings } from '@/constants/carouselConstants';
import spinners from '@/assets/icons/spinners.svg';

import styles from './Donations.module.css';
import { getDonations } from '@/apis/donationsApi';

import DonationCard from './components/DonationCard';
import FetchError from './components/FetchError';
import { useApiFetch } from '../../../hooks/useApiFetch';

export default function Donations() {
  const { data, isLoading, error } = useApiFetch(getDonations, 20);
  const donations = data?.list || [];

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

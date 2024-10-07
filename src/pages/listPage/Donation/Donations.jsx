import styles from './Donations.module.css';
import Slider from 'react-slick';
import { donationsSettings as settings } from '@/constants/carouselConstants';
import DonationCard from './components/DonationCard';
import FetchError from './components/FetchError';
import { getDonations } from '@/apis/donationsApi';
import { useApiFetch } from '@/hooks/useApiFetch';
import Spinner from '@/components/Spinner';

export default function Donations() {
  const { data, isLoading, error } = useApiFetch(getDonations, 30);
  const donations = data?.list || [];

  return (
    <section className={styles.donations}>
      {isLoading ? (
        <div className={styles.spinnerWrapper}>
          <Spinner width="80px" height="80px" />
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
  );
}

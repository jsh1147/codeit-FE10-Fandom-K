import styles from './Donations.module.css';
import Slider from 'react-slick';
import { donationsSettings as settings } from '@/constants/carouselConstants';
import DonationCard from './components/DonationCard';
import FetchError from './components/FetchError';
import { getDonations } from '@/apis/donationsApi';
import { useApiFetch } from '@/hooks/useApiFetch';
import Spinner from '@/components/Spinner';

const PAGE_SIZE = 30;

export default function Donations() {
  const { data, isLoading, error, makeRequest } = useApiFetch(
    getDonations,
    PAGE_SIZE,
  );

  const donations = data?.list || [];

  const handleOnError = () => {
    makeRequest(PAGE_SIZE);
  };

  return (
    <section className={styles.donations}>
      {isLoading ? (
        <div className={styles.spinnerWrapper}>
          <Spinner width="80px" height="80px" />
        </div>
      ) : error ? (
        <FetchError error={error} onError={handleOnError} />
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

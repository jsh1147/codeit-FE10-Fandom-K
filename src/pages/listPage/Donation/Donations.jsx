import styles from './Donations.module.css';
import Slider from 'react-slick';
import { donationsSettings as settings } from '@/constants/carouselConstants';
import DonationCard from './components/DonationCard';
import FetchError from './components/FetchError';
import { getDonations } from '@/apis/donationsApi';
import { useApiFetch } from '../../../hooks/useApiFetch';
import Spinner from '../../../components/icons/Spinner';

export default function Donations() {
  const { data, isLoading, error } = useApiFetch(getDonations, 20);
  const donations = data?.list || [];

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className={styles.spinnerWrapper}>
          <Spinner width="80px" height="80px" />
        </div>
      );
    }

    if (error) {
      return <FetchError error={error} />;
    }

    return (
      <Slider {...settings}>
        {donations.map((item) => (
          <DonationCard key={item.id} {...item} />
        ))}
      </Slider>
    );
  };

  return <section className={styles.donations}>{renderContent()}</section>;
}

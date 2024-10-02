import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { donationsSettings as settings } from '@/constants/carouselConstants';

import styles from './Donations.module.css';
// import { getDonations } from '@/apis/donationsApi';
import { getDonations } from '@/apis/donationsMockApi';

import DonationCard from './components/DonationCard';

export default function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      // const { list } = await getDonations();
      const { list } = await getDonations({});
      setDonations(list);
    };

    fetchItems();
  }, []);

  return (
    <section className={styles.donations}>
      <Slider {...settings}>
        {donations.map((item) => (
          <DonationCard key={item.id} {...item} />
        ))}
      </Slider>
    </section>
  );
}

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    speed: 500,
    slidesToShow: 4, // Adjust this value as needed
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1199, // Mobile and smaller
        settings: {
          slidesToShow: 3, // Show 1 card on smaller screens
          slidesToScroll: 3,
          arrows: false, // Disable arrows for responsive views
          swipe: true, // Allow swipe scrolling
        },
      },
      {
        breakpoint: 767, // Mobile and smaller
        settings: {
          slidesToShow: 2, // Show 1 card on smaller screens
          slidesToScroll: 2,
          arrows: false, // Disable arrows for responsive views
          swipe: true, // Allow swipe scrolling
        },
      },
    ],
  };

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

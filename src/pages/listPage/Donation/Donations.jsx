import { useEffect, useState } from 'react';

import styles from './Donations.module.css';
import { getDonations } from '../../../apis/donationsApi';
import DonationCard from './components/DonationCard';

export default function Donations() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { list } = await getDonations({});
      console.log({ list });
      setDonations(list);
    };

    fetchItems();
  }, []);

  return (
    <div className={styles.donations}>
      {donations.map((item) => (
        <DonationCard key={item.id} {...item} />
      ))}
    </div>
  );
}

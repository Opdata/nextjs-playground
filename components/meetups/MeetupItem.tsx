'use client';

import { useRouter } from 'next/navigation';
import Card from 'components/card/Card';
import styles from 'components/meetups/MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push('/' + props.id);
  };

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={styles.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

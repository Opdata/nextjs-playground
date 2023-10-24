import MeetupItem from 'components/meetups/MeetupItem';
import styles from 'components/meetups/MeetupList.module.css';

function MeetupList(props) {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

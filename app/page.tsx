import MeetupList from 'components/meetups/MeetupList';

const getFetchMeetups = async () => {
  const res = await fetch('http://localhost:3000/api/dummy');

  if (!res.ok) {
    throw new Error('error');
  }

  return res.json();
};

const HomePage = async () => {
  const meetups = await getFetchMeetups();

  return <MeetupList meetups={meetups} />;

  // return <div>dfasdf</div>;
};

export default HomePage;

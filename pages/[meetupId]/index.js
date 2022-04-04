import MeetupDetail from '../../components/meetups/MeetupDetail';

const index = () => {
  return (
    <MeetupDetail
      image={
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/House_in_Poland.png/1280px-House_in_Poland.png'
      }
      title={'A First Meetup'}
      address={'Some address 1'}
      description={'This is first meetup'}
    />
  );
};

export default index;

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

export async function getStaticPaths() {
  return {
    fallback: false,
    path: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  //fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/House_in_Poland.png/1280px-House_in_Poland.png',
        id: meetupId,
        title: 'A First Meetup',
        address: 'Some address 1',
        description: 'This is first meetup',
      },
    },
  };
}

export default index;

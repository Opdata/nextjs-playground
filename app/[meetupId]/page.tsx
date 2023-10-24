import MeetupDetail from 'components/meetups/MeetupDetail';

export const getDetailMeetup = async (params) => {
  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');

  const res = await fetch(`http://localhost:3000/api/detail?${queryString}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // console.log(res);
  return res.json();
};

const MeetUpDetail = async ({ params }) => {
  const res = await getDetailMeetup(params);

  return (
    <MeetupDetail
      image={res.image}
      title={res.title}
      address={res.address}
      description={res.description}
    />
  );
};

export default MeetUpDetail;

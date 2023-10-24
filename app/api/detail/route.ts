import type { NextRequest } from 'next/server';

export const GET = (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get('meetupId');

  let result = {};

  switch (id) {
    case '1':
      {
        result = {
          id: '1',
          title: 'A First Meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/House_in_Poland.png/1280px-House_in_Poland.png',
          address: 'Some address 1',
          description: 'This is first meetup',
        };
      }
      break;
    case '2': {
      result = {
        id: '2',
        title: 'A Second Meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/14%2C_Strada_Vasile_Conta%2C_Bucharest_%28Romania%29.jpg/1061px-14%2C_Strada_Vasile_Conta%2C_Bucharest_%28Romania%29.jpg',
        address: 'Some address 2',
        description: 'This is second meetup',
      };
      break;
    }
    case '3': {
      result = {
        id: '3',
        title: 'A Third Meetup',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Katsura_Imperial_Villa_in_Spring.jpg/1280px-Katsura_Imperial_Villa_in_Spring.jpg',
        address: 'Some address 3',
        description: 'This is third meetup',
      };
      break;
    }
    case '4':
      {
        result = {
          id: '4',
          title: 'A Fourth Meetup',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/9%2C_Strada_Mitropolit_Nifon%2C_Bucharest_%28Romania%29.jpg/1113px-9%2C_Strada_Mitropolit_Nifon%2C_Bucharest_%28Romania%29.jpg',
          address: 'Some address 4',
          description: 'This is fourth meetup',
        };
      }
      break;
  }

  return new Response(JSON.stringify(result));
};

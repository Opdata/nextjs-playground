'use client';

import AddMeetUpForm from 'components/meetups/NewMeetupForm';

function NewMeetUpForm() {
  const AddMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return <AddMeetUpForm onAddMeetup={AddMeetUpHandler} />;
}

export default NewMeetUpForm;

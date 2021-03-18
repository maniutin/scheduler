export function getAppointmentsForDay(state, day) {
  const appointmentsArr = [];

  const dayObj = state.days.find((selected) => selected.name === day);

  if (!dayObj) {
    return [];
  } else {
    const appointmentKeys = Object.keys(state.appointments).map(Number);
    for (const id of dayObj.appointments) {
      if (appointmentKeys.includes(id)) {
        appointmentsArr.push(state.appointments[id.toString()]);
      }
    }
  }
  return appointmentsArr;
}

export function getInterviewersForDay(state, day) {
  const interviewersArr = [];

  const dayObj = state.days.find((selected) => selected.name === day);

  if (!dayObj) {
    return [];
  } else {
    for (const appointmentId of dayObj.appointments) {
      const interview = state.appointments[appointmentId].interview;
      if (interview) {
        const interviewerId = interview.interviewer;
        interviewersArr.push(state.interviewers[interviewerId]);
      }
    }
  }

  return interviewersArr;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    return {
      ...interview,
      interviewer: state.interviewers[interview.interviewer],
    };
  }
}

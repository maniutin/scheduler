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

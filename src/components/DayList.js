import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log("DAYS:", props.days);
  return props.days.map((day) => (
    <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  ));
}

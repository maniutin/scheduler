import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Empty from "components/Appointment/Empty";
import Show from "components/Appointment/Show";

export default function Appointment(props) {
  return (
    <>
      <Header time={props.time} />{" "}
      {props.interview ? (
        <Show
          id={props.id}
          time={props.time}
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      ) : (
        <div id={props.id}>
          <Empty />
        </div>
      )}
    </>
  );
}

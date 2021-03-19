import React from "react";

import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header";
import Status from "components/Appointment/Status";
import Confirm from "components/Appointment/Confirm";
import Empty from "components/Appointment/Empty";
import Form from "components/Appointment/Form";
import Show from "components/Appointment/Show";

import useVisualMode from "hooks/useVisualMode";

const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const SAVING = "SAVING";
const CREATE = "CREATE";
const EMPTY = "EMPTY";
const SHOW = "SHOW";

export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    props.bookInterview(props.id, interview).then(() => transition(SHOW));
  }

  function del() {
    transition(DELETING);
    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Header time={props.time} />{" "}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
        />
      )}
      {mode === CREATE && (
        <Form interviewers={props.interviewers} onSave={save} onCancel={back} />
      )}
      {mode === SAVING && <Status message={"Saving"} />}
      {mode === CONFIRM && (
        <Confirm
          message={"Are you sure you would like to delete?"}
          onCancel={back}
          onConfirm={del}
        />
      )}
      {mode === DELETING && <Status message={"Deleting"} />}
    </>
  );
}

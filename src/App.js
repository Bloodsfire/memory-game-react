import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { startTimer } from "./features/timer/timerSlice";
import './App.css';
import { Field } from "./features/field/Field";
import { Modal } from "./features/modal/Modal";
import { Header } from "./features/header/Header";

function App() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

    dispatch(startTimer());

  return (
      <>
        <Header />
        <Field />
        <Modal show={show} callback={() => setShow(false)}/>
      </>
  )
}

export default App;

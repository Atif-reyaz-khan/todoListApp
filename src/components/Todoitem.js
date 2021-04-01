import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import "./Todoitem.css"
import {useDispatch}from "react-redux"
import {setCheck} from "../features/todoSlice"
const Todoitem = (props) => {
  const name=props.name;
  const done=props.done;
  const id=props.id;
const dispatch=useDispatch();
    const handleCheck = () => {
        dispatch(setCheck(id));

    };
  console.log(name);
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    
      <p className={done &&  'todoItem--done'}>{name}</p>
    </div>
  );
};

export default Todoitem;

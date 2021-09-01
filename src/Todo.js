import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css'
import db from './firebase';
import { doc, deleteDoc } from "firebase/firestore";

function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="Dummy Deadline ⏰ " />
            </ListItem>
            <DeleteForeverIcon onClick={event => deleteDoc(doc(db, "todos", props.todo.id))}/>
        </List>
    )
}

export default Todo

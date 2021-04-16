import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";

export default function TodoListItem({todo, is_in_progress, id}) {
    return (
        <div>
             <ListItem>
                 <ListItemText primary={todo} secondary={ is_in_progress ? "In Progress" : "Completed"}   />
             </ListItem>
             <Button>Done</Button>
        </div>
    );
}

import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  ListItem,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempTask: "",
      todoTasks: ["Task1", "Task2"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange = (event) => {
    this.setState({ tempTask: event.target.value });
  };
  removeTask = (index) => {
    let { todoTasks } = this.state;
    todoTasks.splice(index, 1);
    this.setState({ todoTasks });
  };
  addTask = () => {
    let { todoTasks, tempTask } = this.state;
    todoTasks = [...todoTasks, ...[tempTask]];
    this.setState({ todoTasks, tempTask: "" });
  };
  render() {
    return (
      <Container maxWidth="md">
        <Typography variant="h3">Todo Application React/Material UI</Typography>
        <Grid container>
          <Grid item xs={11}>
            <TextField
              onKeyPress={(ev) => {
                if (ev.key === "Enter") {
                  this.addTask();
                  ev.preventDefault();
                }
              }}
              fullWidth
              variant="outlined"
              value={this.state.tempTask}
              onChange={this.handleChange.bind(this)}
            />
          </Grid>
          <Grid item xs={1}>
            <AddBoxIcon
              fontSize="large"
              color="primary"
              onClick={this.addTask.bind(this)}
            />
          </Grid>
          {this.state.todoTasks.map((task, index) => (
            <ListItem>
              <Grid item xs={11}>
                <Typography variant="h6">{task}</Typography>
              </Grid>
              <Grid item xs={1}>
                <DeleteForeverIcon
                  fontSize="large"
                  color="secondary"
                  onClick={this.removeTask.bind(this, index)}
                />
              </Grid>
            </ListItem>
          ))}
        </Grid>
      </Container>
    );
  }
}
export default TodoApp;

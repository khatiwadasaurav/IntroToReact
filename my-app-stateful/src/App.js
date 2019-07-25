import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/todos/Todos'
import Header from './components/layout/Header';
import AddTodo from './components/todos/AddTodo'
import './App.css'
import About from './components/pages/About';
import axios from 'axios';


export class App extends Component {
  state = {
    todos: [
     
    ]
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(response=>{
     this.setState({todos:response.data})
    })
  }
  //Toggle complete
  markComplete = (id) => {
    this.setState(
      {
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo;
        }),
      }
    )
  }

  //Delete todo
  deleteTodo = (id) => {
    axios.delete('http://jsonplaceholder.typicode.com/todos/${id}').then(res=>{
      this.setState({
        todos: [...this.state.todos.filter(todo => {
          return todo.id !== id;
        })]
      })
    })
    
  }
  addTodo = (title) => {
    const newTodo = {
      title,
      completed: false,
    }
    // console.log([...this.state.todos, newTodo])
    axios.post('http://jsonplaceholder.typicode.com/todos',
    newTodo)
    .then(res=>{
      this.setState({
        todos:[...this.state.todos,res.data]
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos}
                  markAsCompleted={this.markComplete}
                  deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />


            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App




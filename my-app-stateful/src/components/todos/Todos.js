import React, { Component } from 'react'
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';


export class Todos extends Component {
    
    render() {
        return this.props.todos.map((todo) => {
            return <Todoitem key={todo.id} todo={todo} markComplete={this.props.markAsCompleted} delTodo ={this.props.deleteTodo}/>
        });
    }
}
//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markAsCompleted : PropTypes.func.isRequired,
    deleteTodo:PropTypes.func.isRequired
}

export default Todos

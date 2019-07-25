import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const {id,title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '}
                    {title}
                    <button style={btnDelete} onClick={this.props.delTodo.bind(this,id)}>X</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete : PropTypes.func.isRequired,
    delTodo:PropTypes.func.isRequired
}
const btnDelete = {
    background :'#ff0000',
    border :'none',
    color :'#fff',
    padding : '5px 7px',
    margin : '0px 4px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}

export default Todoitem

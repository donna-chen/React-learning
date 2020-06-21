import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    /*markComplete(e) {
        console.log(this.props)
    }
    <input type="checkbox" onChange={this.markComplete.bind(this)} />
    */
    /*markComplete = (e) => {
        console.log(this.props)
    }*/
    render() {
        const { id, title } = this.props.todo;
        return (
            /*<div style={{backgroundColor:'#f4f4f4'}}> 内联样式*/
            /*<div style={itemStyle}> 用变量给样式*/
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

/*const itemStyle = {
    backgroundColor:'red'
}*/

export default TodoItem

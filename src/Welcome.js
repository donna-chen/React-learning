import React from 'react'

class Welcome extends React.Component {
    render() {
        const todoList = ['Learn React', 'Learn Redux']
        const isLogin = false
        const test = <h1>Hello React</h1>
        console.log(test)
        return (
            <div className="" htmlFor="">
                <h1> Hello React </h1>
                {/* { <ul>
                    {
                        todoList.map(item=><li>{item}</li>)
                    }
                </ul> 
                isLogin?<p>你已经登陆</p>:<p>请登陆</p>} */}
            </div>
        )
        // return React.createElement("div", null, React.createElement("h1", null, " Hello React "));
    }
}
export default Welcome
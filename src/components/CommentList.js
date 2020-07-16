import React from 'react'

const CommentList = ({ comments }) => { //没有state没有生命周期，只接收props,并返回固定的view的，就可以写成函数的形式
    return (
        <div className="comment-list-component">
            <label>
                评论列表
            </label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index) =>
                        <li key={index} className="list-group-item">{comment}</li>
                    )
                }
            </ul>
        </div>
    )
}
export default CommentList
import React from 'react';
import SingleComment from './SingleComment.js';

export default function CommentSection (props) {

    const commentArray = props.comments.map((comment, index) => {
        return <SingleComment 
            key={comment.id} 
            handleRemove={() => props.handleRemove(index)} 
            comment={comment}
        />
    })

    // Create form for bonus deliverables
    const [formData, setFormData] = React.useState({
        sortByUsername: "",
        isSorted: false
    })

    function handleFormChange (e) {
        const {name, value, type, checked} = e.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value}))
    }

    // Bonus Deliverable #2
    const filteredComments = commentArray.filter(commentElement => {
        return commentElement.props.comment.user.includes(formData.sortByUsername)
    })

    // Bonus Deliverable #4
    if (formData.isSorted) {
        filteredComments.sort((a, b) => {
            const firstUser = a.props.comment.user
            const secondUser = b.props.comment.user
            if (firstUser < secondUser) {
                return -1;
              }
              if (firstUser > secondUser) {
                return 1;
              }
              return 0;
        })
    }

    return (
        <div>
            <br />
            <input
                type="text"
                placeholder="Filter by Username"
                onChange={handleFormChange}
                name="sortByUsername"
                value={formData.sortByUsername}
            />
            <br />
            <h3>{props.comments.length} comments</h3>
            <br />
            <input 
                type="checkbox" 
                id="isSorted" 
                checked={formData.isSorted}
                onChange={handleFormChange}
                name="isSorted"
            />
            <span>Sort comments by username alphabetically?</span>
            {filteredComments}
        </div>
    )
}

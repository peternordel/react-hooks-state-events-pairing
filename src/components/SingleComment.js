import React from 'react';

export default function Comment(props){
    const {user, comment} = props.comment
    const [votes, setVotes] = React.useState({
        up: 0,
        down: 0
    })

    function handleCommentVotes (e) {
        const {name} = e.target
        setVotes(prevVotes => {
            name === 'comment-upvotes' ? prevVotes.up++ : prevVotes.down++
            return {...prevVotes}
        })
    }

    return(
        <div>
            <h4>{user}</h4>
            <p>{comment}</p>

            {/* Bonus Deliverable #1 */}
            <button name='comment-upvotes' onClick={handleCommentVotes}>{votes.up} 👍</button>
            <button name='comment-downvotes' onClick={handleCommentVotes}>{votes.down} 👎</button>

            <br />

            {/* Bonus Deliverable #3 */}
            <button onClick={props.handleRemove}>Remove Comment</button>

        </div>
    )
}

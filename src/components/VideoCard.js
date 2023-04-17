import React from 'react'
import CommentSection from './CommentSection'

export default function VideoCard({video}){
    const [videoData, setVideoData] = React.useState(video)
    const {downvotes, upvotes, id, title, views, embedUrl, createdAt, comments} = videoData
    const [isDisplay, setIsDisplay] = React.useState(true)
    
    function handleVotes (e) {
        const {name} = e.target
        setVideoData(prevVideoData => {
            name === 'upvotes' ? prevVideoData.upvotes++ : prevVideoData.downvotes++
            return {...prevVideoData}
        })
    }

    function displayComments(){
        setIsDisplay(!isDisplay)
    }

    function handleRemove (index) {
        setVideoData(prevVideoData => {
          videoData.comments.splice(index, 1)
          return {...prevVideoData}
        })
    }

    return(
        <div>
            <iframe
                width="919"
                height="525"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{views} views | Uploaded {createdAt}</p>
            <button className='upvotes-button' name='upvotes' onClick={handleVotes}>{upvotes} 👍</button>
            <button className='downvotes-button' name='downvotes' onClick={handleVotes}>{downvotes} 👎</button>
            <br />
            <button name ='isComments' onClick={displayComments}>Hide Comments</button>
            <hr />
            {isDisplay && <CommentSection comments={comments} handleRemove={handleRemove} />}
        </div>
    )
}

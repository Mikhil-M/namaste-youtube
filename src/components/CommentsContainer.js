import React from 'react'

const comments = [
    {
        id: "1",
        name: 'John Doe',
        commentText: 'This is a comment',
        replies: []
    },
    {
        id: "2",
        name: 'John Doe',
        commentText: 'This is a comment',
        replies: [
            {
                id: "2.1",
                name: 'John Doe',
                commentText: 'This is a comment',
                replies: []
            },
            {
                id: "2.2",
                name: 'John Doe',
                commentText: 'This is a comment',
                replies: [
                    {
                        id: "2.2.1",
                        name: 'John Doe',
                        commentText: 'This is a comment',
                        replies: []
                    },
                ]
            },
            {
                id: "2.3",
                name: 'John Doe',
                commentText: 'This is a comment',
                replies: []
            }
        ]
    },
    {
        id: "3",
        name: 'John Doe',
        commentText: 'This is a comment',
        replies: []
    },
    {
        id: "4",
        name: 'John Doe',
        commentText: 'This is a comment',
        replies: []
    }
]

const Comment = ({comment}) => {
    const {name, commentText} = comment
    return (
        <div className='flex my-2 bg-gray-50 rounded-md px-2'>
            <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="profile" className='w-12 h-12' />
            <div className='pl-2'>
                <p className='font-bold'>{name}</p>
                <p>{commentText}</p>
            </div>
        </div>
    )
}

const CommentList = ({comments}) => {
    return comments?.map(comment => (
        <div key={comment.id}>
            <Comment comment={comment} />
            <div className='ml-4 pl-4   border border-l-black'>
                <CommentList comments={comment.replies} />
            </div>
        </div>
        )
    )
}

const CommentsContainer = () => {
  return (
    <div className='px-4 py-2'>
        <h1 className='text-2xl font-bold'>Comments</h1>
        <CommentList comments={comments}/>
    </div>
  )
}

export default CommentsContainer
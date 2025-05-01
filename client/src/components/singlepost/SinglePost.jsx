import React from 'react'
import './singlePost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
      <div className="singlePostwrapper">
        <img src='https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt="singlepost" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostAuthor'>Author:<b>Nirmal</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, minus aut. Unde, earum sequi ex
           iusto animi sed? Eius quidem illum at tempore, nemo ea consequuntur illo ex recusandae alias.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio molestias aperiam architecto ut 
           magnam fuga laudantium ullam,
            quisquam delectus sed ab quam quasi pariatur
            a voluptatem vitae soluta labore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, minus aut. Unde, earum sequi ex
           iusto animi sed? Eius quidem illum at tempore, nemo ea consequuntur illo ex recusandae alias.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio molestias aperiam architecto ut 
           magnam fuga laudantium ullam,
            quisquam delectus sed ab quam quasi pariatur
            a voluptatem vitae soluta labore?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, minus aut. Unde, earum sequi ex
           iusto animi sed? Eius quidem illum at tempore, nemo ea consequuntur illo ex recusandae alias.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur odio molestias aperiam architecto ut 
           magnam fuga laudantium ullam,
            quisquam delectus sed ab quam quasi pariatur
            a voluptatem vitae soluta labore?</p>
      </div>
    </div>
  )
}

export default SinglePost

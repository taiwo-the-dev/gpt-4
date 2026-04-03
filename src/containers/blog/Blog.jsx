import React from 'react';
import { Articles } from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import';
import './Blog.css';

const Blog = () => {
  return (
    <div className='blog section_padding' id='blogs'>
      <div className="blog_heading">
        <h1 className='gradient_text'>
        A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="blog_container">
        <div className="blog_container_groupA">
          <Articles 
            imgUrl={blog01} 
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
            text="Feb 08, 2023"
          />
        </div>
        <div className="blog_container_groupB">
        <Articles 
            imgUrl={blog02} 
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
            text="Jul 03, 2023"
          />
          <Articles 
            imgUrl={blog03} 
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
            text="Aug 09, 2023"
          />
          <Articles 
            imgUrl={blog04} 
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
            text="Nov 03, 2023"
          />
          <Articles 
            imgUrl={blog05} 
            title="GPT-4 and Open  AI is the future. Let us exlore how it is?"
            text="Nov 12, 2023"
          />
        </div>
      </div>
    </div>
  )
}

export default Blog

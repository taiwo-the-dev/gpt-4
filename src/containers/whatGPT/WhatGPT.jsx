import React from 'react'
import { Features } from '../../components';
import './WhatGPT.css'

const WhatGPT = () => {
  return (
    <div className='whatgpt section_margin' id='whatgpt'>
      <div className='whatgpt_features'>
        <Features title="What is GPT-4" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='whatgpt_heading'>
        <h1 className='gradient_text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='whatgpt_container'>
        <Features title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Features title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
        <Features title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments" />
      </div>
    </div>
  )
}

export default WhatGPT;

import React from 'react';
import {Features} from '../../components';
import './Attributes.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly ',
    text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'
  },
  {
    title: 'Improving end distrusts instantly',
    text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'
  },
  {
    title: 'Message or am nothing',
    text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'
  },
  {
    title: 'Really boy law county',
    text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'
  }
];

const Attributes = () => {
  return (
    <div className='attributes section_padding' id='attributes'>
      <div className='attributes_heading'>
        <h1 className='gradient_text'>
        The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='attributes_features_container'>
        {featuresData.map((data, index) => (
          <Features key={data.title + index} title={data.title} text={data.text}/>
        ))}
      </div>
    </div>
  )
}

export default Attributes;
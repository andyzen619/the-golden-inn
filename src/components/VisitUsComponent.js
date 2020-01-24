import React from "react";

import {Header, List} from "semantic-ui-react";
import "./VisitUsComponent.css";

const VisitUsComponent = () => {

  const daysOfTheWeek = [
    'Mon. Closed', 
    'Tue. 11:30 a.m. – 09:00 p.m.', 
    'Wed. 11:30 a.m. – 09:00 p.m.',
    'Thurs. 11:30 a.m. – 09:00 p.m.',
    'Fri. 11:30 a.m. – 09:00 p.m.',
    'Sat. 11:30 a.m. – 09:00 p.m.',
    'Sun. 11:30 a.m. – 09:00 p.m.'
  ]

  return (
    <div className='visitUsDivStyle'>
      <Header size="large" style={{color: 'black'}}>VISIT US</Header>
      <Header size="tiny" style={{color: 'grey'}}>155 Main Street West, Picton, Prince Edward, ON, Canada</Header>
      <Header size = 'medium'>Hours of operation</Header>
      <List>
        {daysOfTheWeek.map((day) => {
          console.log(day);
        return <List.Item>{day}</List.Item>
        })}
      </List>
    </div>
  );
}

export default VisitUsComponent;
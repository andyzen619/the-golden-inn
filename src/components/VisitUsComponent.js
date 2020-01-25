import React from "react";

import { Header, Table, Image } from "semantic-ui-react";
import "./VisitUsComponent.css";

const VisitUsComponent = () => {
  const daysOfTheWeek = [
    { day: "Mon", hours: "Closed" },
    { day: "Tue", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Wed", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Thurs", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Fri", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Sat", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Sun", hours: "11:30 a.m. – 09:00 p.m." }
  ];

  return (
    <div className="visitUsDivStyle">
      <Header size="large" style={{ color: "black" }}>
        VISIT US
      </Header>
      <Header size="tiny" style={{ color: "grey" }}>
        155 Main Street West, Picton, Prince Edward, ON, Canada
      </Header>
      <Header size="medium">Hours of operation</Header>
      <Table basic="very" celled collapsing className='hoursOfOperationsStyle'>
        <Table.Body className='hoursOfOperationsTableBodyStyle'>
          {daysOfTheWeek.map((day, index) => {
            return (
              <Table.Row>
                <Table.Cell>
                  <div className='hoursOfOperationCellStyle'>
                    <span>{day.day}</span>
                    <span>{day.hours}</span>
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default VisitUsComponent;

import React from "react";

import { Header, Table, Button } from "semantic-ui-react";
import "./VisitUsComponent.css";

import media from 'react-media';

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
      <Header
        size="tiny"
        style={{ color: "black", fontWeight: "365", textShadow: "0 1px grey" }}
      >
        155 Main Street West, Picton, Prince Edward, ON, Canada
      </Header>
      <Header size="medium">613-476-7056</Header>
      <a href="tel:+613-476-7056">
        <Button color="google plus">Call to place your order</Button>
      </a>
      <Header size="medium">Hours of operation</Header>
      <Table basic="very" celled collapsing className="hoursOfOperationsStyle">
        <Table.Body className="hoursOfOperationsTableBodyStyle">
          {daysOfTheWeek.map(day => {
            return (
              <Table.Row key={day.day}>
                <Table.Cell>
                  <div className="hoursOfOperationCellStyle">
                    <span className="hoursFontDay">{day.day}</span>
                    <span
                      style={{
                        color: "black",
                        fontWeight: 365,
                        textShadow: "0 1px grey",
                        fontSize: "1em"
                      }}
                    >
                      {day.hours}
                    </span>
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

import React from "react";

import { Header, Table, Button } from "semantic-ui-react";

const DesktopVisitUsComponentStyle = {
  divStyle: {
    position: "relative",
    fontSize: "1.5em",
  },
  title: {
    color: "black"
  },
  address: {
    color: "black",
    fontWeight: "365",
    textShadow: "0 1px grey"
  },
  hours: {
    color: "black",
    fontWeight: 365,
    textShadow: "0 1px grey",
    fontSize: "1em"
  },
  table: {
    padding: 0,
    width: "50%",
    display: "inline-table"
  }
};

const DesktopVisitUsComponent = () => {
  const daysOfTheWeek = [
    { day: "Mon", hours: "Closed" },
    { day: "Tue", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Wed", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Thurs", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Fri", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Sat", hours: "11:30 a.m. – 09:00 p.m." },
    { day: "Sun", hours: "11:30 a.m. – 09:00 p.m." }
  ];

  const { divStyle, title, hours, address, table } = DesktopVisitUsComponentStyle;

  return (
    <div className="visitUsDivStyle" style={divStyle}>
      <Header size="large" style={title}>
        VISIT US
      </Header>
      <Header size="tiny" style={address}>
        155 Main Street West, Picton, Prince Edward, ON, Canada
      </Header>
      <Header size="medium">613-476-7056</Header>
      <a href="tel:+6134767056">
        <Button color="google plus">Call to place your order</Button>
      </a>
      <Header size="medium">Hours of operation</Header>
      <Table
        basic="very"
        celled
        collapsing
        style={table}
        size={"large"}
      >
        <Table.Body className="hoursOfOperationsTableBodyStyle">
          {daysOfTheWeek.map(day => {
            return (
              <Table.Row key={day.day}>
                <Table.Cell>
                  <div className="hoursOfOperationCellStyle">
                    <span className="hoursFontDay">{day.day}</span>
                    <span style={hours}>{day.hours}</span>
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

export default DesktopVisitUsComponent;

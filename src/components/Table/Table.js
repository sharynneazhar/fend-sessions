import React from "react";
import moment from "moment-recur";
import data from "../../sessions-c3";
import "./Table.css";

function Table() {
  const [showCompleted, setShowCompleted] = React.useState(true);

  const handleChange = () => {
    setShowCompleted(!showCompleted);
  };

  const getRows = () => {
    let rowsToDisplay = data.sessions;

    if (!showCompleted) {
      rowsToDisplay = rowsToDisplay.filter((row) => !row.complete);
    }

    const dates = moment(data.startDate)
      .recur(data.endDate)
      .every(1, "week")
      .all("L");

    return rowsToDisplay.map((week, index) => {
      const getRowClass = () => {
        if (week.title.toLowerCase() === "project walkthrough")
          return "project-walkthrough";
        else if (week.title.toLowerCase() === "no sessions")
          return "no-session";
        return "";
      };

      return (
        <tr key={`week-${index}`} className={getRowClass()}>
          <td className="date">
            {week.complete ? (
              <p className="complete">Complete</p>
            ) : (
              <p>{dates[index]}</p>
            )}
          </td>
          <td className="concept">
            <h3 className="concept-title">{week.title}</h3>
            <h4 className="concept-lesson">{week.lesson}</h4>
          </td>
          <td className="slides">
            <a href={week.slides.link} target="_blank" rel="noreferrer">
              {week.slides.name}
            </a>
          </td>
          <td className="activities">
            {week.activities?.[0]?.name ? (
              <ul>
                {week.activities.map((activity, index) => {
                  return (
                    <li key={`activity-${index}`}>
                      <a href={activity.link} target="_blank" rel="noreferrer">
                        {activity.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            ) : week.complete ? (
              <p>See Slides</p>
            ) : null}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="table-container">
      {/* <div className="table-alert">
        ANNOUNCEMENT FOR FRIDAY CREW: DUE TO LOW ATTENDANCE, THE FRIDAY SESSION
        WILL BE COMBINED WITH THE THURSDAY SESSION FROM NOW. SEE SESSION DETAILS
        ON THE LEFT.
      </div> */}
      <div className="table-controls">
        <label>
          Show Completed
          <input
            type="checkbox"
            checked={showCompleted}
            onChange={handleChange}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Week Starting</th>
            <th>Concepts</th>
            <th>Slides</th>
            <th>Activities</th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;

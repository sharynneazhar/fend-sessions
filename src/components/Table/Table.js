import React from 'react';
import moment from 'moment-recur';
import data from '../../sessions-c3';
import './Table.css';

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
      .every(1, 'week')
      .all('L');

    return rowsToDisplay.map((week, index) => {
      const getRowClass = () => {
        if (week.title.toLowerCase() === 'project walkthrough')
          return 'project-walkthrough';
        else if (week.title.toLowerCase() === 'no sessions')
          return 'no-session';
        return '';
      };

      return (
        <tr key={`week-${index}`} className={getRowClass()}>
          <td className='date'>
            {week.complete ? (
              <p className='complete'>Complete</p>
            ) : (
              <p>{dates[index]}</p>
            )}
          </td>
          <td className='concept'>
            <h3 className='concept-title'>{week.title}</h3>
            <h4 className='concept-lesson'>{week.lesson}</h4>
          </td>
          <td className='slides'>
            {!week.slides.link ? (
              <span>{week.slides.name}</span>
            ) : (
              <a href={week.slides.link} target='_blank' rel='noreferrer'>
                {week.slides.name}
              </a>
            )}
          </td>
          <td className='activities'>
            {week.activities?.[0]?.name ? (
              <ul>
                {week.activities.map((activity, index) => {
                  if (activity.link) {
                    return (
                      <li key={`activity-${index}`}>
                        <a
                          href={activity.link}
                          target='_blank'
                          rel='noreferrer'
                        >
                          {activity.name}
                        </a>
                      </li>
                    );
                  }
                  return <li key={`activity-${index}`}>{activity.name}</li>;
                })}
              </ul>
            ) : week.complete ? (
              <p>See Slides</p>
            ) : null}
          </td>
          <td className='career-sessions'>
            <a href={week.careerLink} target='_blank' rel='noreferrer'>
              {week.careerLink}
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className='table-container'>
      <div className='table-alert'>
        All sessions this week (1/14, 1/15, 1/18) rescheduled to Monday 1/16, 8-10pm EST!
        <br></br>
        <br></br>
        No session Sat. 1/21 sessions due to Lunar New Year. Please attend either Sun. 1/22 or Wed. 1/25 sessions.
      </div>
      <div className='table-controls'>
        <label>
          Show Completed
          <input
            type='checkbox'
            checked={showCompleted}
            onChange={handleChange}
          />
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th style={{width: '150px'}}>Week Starting</th>
            <th>Concepts</th>
            <th>Slides</th>
            <th>Activities</th>
            <th>Career Session Recordings</th>
          </tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
}

export default Table;

import React from 'react';
import data from './sessions';
import './Table.css';

function Table() {
  const getRows = () => {
    return data.map((week, index) => {
      return (
        <tr key={`week-${index}`}>
          <td className='date'>
            {week.complete ? (
              <p className='complete'>Complete</p>
            ) : (
              <p>{week.date}</p>
            )}
          </td>
          <td className='concept'>
            <h3 className='concept-title'>{week.title}</h3>
            <h4 className='concept-lesson'>{week.lesson}</h4>
          </td>
          <td className='slides'>
            <a href={week.slides.link} target='_blank' rel='noreferrer'>
              {week.slides.name}
            </a>
          </td>
          <td className='activities'>
            {week.activities?.[0]?.name && (
              <ul>
                {week.activities.map((activity, index) => {
                  return (
                    <li key={`activity-${index}`}>
                      <a href={activity.link} target='_blank' rel='noreferrer'>
                        {activity.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Concepts</th>
          <th>Slides</th>
          <th>Activities</th>
        </tr>
      </thead>
      <tbody>{getRows()}</tbody>
    </table>
  );
}

export default Table;

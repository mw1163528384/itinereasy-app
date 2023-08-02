import React from 'react';

const ActivitiesTemplate = ({ date, activities, food }) => {
    return (
        <div>
            {activities.map((activity, index) => {
                <div key={index}>
                    <span>{activity.startTime} - {activity.endTime}:</span>
                    <span>{activity.title}</span>
                </div>
            })}
        </div>
    )
}

export {ActivitiesTemplate} 
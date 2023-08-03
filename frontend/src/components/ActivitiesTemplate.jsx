import React from 'react';
import ActivityBox from './ActivityBox';

const ActivitiesTemplate = ({ date, activities, food }) => {
    return (
        <div>
            {activities.map((activity, index) => {
                // Calculate the duration of the activity in minutes
                const startTime = new Date(`1970-01-01T${activity.startTime}:00`);
                const endTime = new Date(`1970-01-01T${activity.endTime}:00`);
                const duration = (endTime - startTime) / 60000; // Convert milliseconds to minutes

                return (
                    <div key={index}>
                        <ActivityBox activityTime={duration} />
                        <span>{activity.startTime} - {activity.endTime}:</span>
                        <span>{activity.title}</span>
                    </div>
                );
            })}
        </div>
    )
}

export {ActivitiesTemplate}

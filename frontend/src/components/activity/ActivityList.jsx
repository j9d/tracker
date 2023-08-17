import axios from 'axios'
import { useState } from 'react';

import Activity from './Activity';
import { API_BASE } from '../../constants';


export default function ActivityList() {
    const [activities, setActivities] = useState([]);

    function getActivities() {
        axios.get(
            `${API_BASE}/activities`
        ).then(response => {
            setActivities(
                response.data.map((activity) => {
                    return (<li><Activity title={activity.title} />{activity.title}</li>)
                })
            );
        });
    }

    getActivities();
    console.log(activities);
    return (
        <ul>{activities}</ul>
    );
}

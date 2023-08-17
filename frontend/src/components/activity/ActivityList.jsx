import axios from 'axios'
import { useEffect, useState } from 'react';

import Activity from './Activity';
import { API_BASE } from '../../constants';


export default function ActivityList() {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        axios.get(
            `${API_BASE}/activities`
        ).then(response => {
            setActivities(
                response.data.map((activity) => {
                    return (
                        <li className='activity-li' key={activity.pk}>
                            <Activity title={activity.title} description={activity.description} />
                        </li>
                    )
                })
            );
        })
    }, []);
    return (
        <ul>{activities}</ul>
    );
}

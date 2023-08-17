import axios from 'axios';

import '../../styles.css';
import { API_BASE } from '../../constants';
import ActivityList from '../activity/ActivityList';
import { Link } from 'react-router-dom';

function hello() {
    axios.get(
        `${API_BASE}/hello`
    ).then((response) => {
        console.log(response.data.message);
    });
}

export default function Home() {
    return (
        <div className='container'>
            <h1>Activities</h1>
            <Link to='new/'>New Activity</Link>
            <hr />
            <ActivityList />
        </div>
    );
}


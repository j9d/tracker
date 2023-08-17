
import '../../styles.css';
import ActivityList from '../activity/ActivityList';
import { Link } from 'react-router-dom';


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


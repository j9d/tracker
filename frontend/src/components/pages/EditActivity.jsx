import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { API_BASE } from "../../constants";

export default function EditActivity() {
    const id = useParams()['id'];
    const [activity, setActivity] = useState([]);
    useEffect(() => {
        axios.get(`${API_BASE}/activities/${id}`).then((response) => {
            setActivity(response.data);
        }).catch((e) => {
            setActivity({ "error": true });
        });
    }, [id]);
    if (activity.error) {
        return (
            <div className="container">
                <p>Error fetching Activity.</p>
            </div>
        )
    }
    return (
        <div className="container">
            {activity.title}
        </div>
    )
}
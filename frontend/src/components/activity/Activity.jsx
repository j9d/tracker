export default function Activity({ title, description }) {
    return (
        <div className='activity-item'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

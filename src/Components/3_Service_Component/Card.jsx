import { NavLink } from 'react-router-dom'

function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top" alt="pic"/>
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                            <NavLink to="https://www.youtube.com" target="_blank" className="btn btn-primary">Click Me</NavLink>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card

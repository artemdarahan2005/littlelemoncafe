import { Link, Route, Routes } from "react-router-dom"

const Content = props => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.imageSrc} alt={props.alt} />
            <p>{props.description}</p>
            {props.linkText && <Link to={props.link} >{props.linkText}</Link>}
            <Routes>
                <Route path={props.link} element={null} />
            </Routes>
        </div>
    )
}

export default Content
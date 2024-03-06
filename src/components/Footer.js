import "./footer.css"
import src from "../assets/small_logo.png"

const Footer = () => {
    return (
        <footer className="container">
            <div>
                <img src={src} alt="Little Lemon small logo" width="60" />
            </div>
            <div>
                <hr />
                <p>Copyright Little Lemon</p>
            </div>
        </footer>
    )
}

export default Footer
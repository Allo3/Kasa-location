import logo from "../../../assets/homepage.png";
import "./index.sass"

function homepageLogo() {
    return (
        <div className="logo-homepage">
            <article className="homepage">
                <img src={logo} alt="Paysage"/>
                <h1 id="homepage-heading" className="homepage-text">
                    Chez vous, partout et ailleurs</h1>
            </article>
        </div>
    )
}
export default homepageLogo
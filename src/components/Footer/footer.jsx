import logo from "../../assets/logofooter.png"
import "./footer.sass"
function Footer() {
    return(
        <div className="footer">
            <img src={logo} alt='logo' />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
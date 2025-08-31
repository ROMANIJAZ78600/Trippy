import "./Footer.css"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div><h1>Trippy</h1>
        <p>Choose Your Favourite destination.</p>
        </div>
        <div>
            <Link to="/">
            <i className="fa-brands fa-facebook-square"></i>
            </Link>
            <Link to="/">
            <i className="fa-brands fa-instagram-square"></i>
            </Link>
            <Link to="/">
            <i className="fa-brands fa-whatsapp-square"></i>
            </Link>
            <Link to="/">
            <i className="fa-brands fa-twitter-square"></i>
            </Link>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Project</h4>
            <Link to="/">ChangeLog</Link>
            <Link to="/">Status</Link>
            <Link to="/">License</Link>
            <Link to="/">All Version</Link>
        </div>
        <div>
            <h4>Community</h4>
            <Link to="/">Github</Link>
            <Link to="/">Whatsapp</Link>
            <Link to="/">Project</Link>
            <Link to="/">Twitter</Link>
        </div>
        <div>
            <h4>Help</h4>
            <Link to="/">Support</Link>
            <Link to="/">TroubleShooting</Link>
            <Link to="/">Contact Us</Link>
        </div>
        <div>
            <h4>Others</h4>
            <Link to="/">Terms of Services</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">License</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer

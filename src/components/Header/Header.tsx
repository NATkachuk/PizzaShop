import { Link } from 'react-router-dom'
import './Header.scss'
import Cart from '../../assets/homepage/svg/Cart.svg'
function Header() {
  return (
    <header className="header">
        <Link to="/" className="logo">pizzashop</Link>
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/" className="nav__link">Home</Link>
                </li>
                <li className="nav__item">
                    <Link to="/" className="nav__link">Menu</Link>
                </li>
                <li className="nav__item">
                    <Link to="/" className="nav__link">Events</Link>
                </li>
                <li className="nav__item">
                    <Link to="/" className="nav__link">About Us</Link>
                </li>
            </ul>
        </nav>
        <div className="header-container">
            <button className="header-container__btn">
                <Link to="/" className="header-container__btn-link">Log in</Link>
            </button>
            <div className="button header-container__cart">
                <Link to="/" className="header-container__cart-link">
                    <img src={Cart} alt="Cart" className="header-container__cart-link-img" />
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
import { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png';
import CoinContext from '../../context/CoinContext';
import {Link} from 'react-router-dom';
const Navbar = () => {
  const {setCurrency} = useContext(CoinContext);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const currencyHandler = (e) => {
    switch(e.target.value){
      case "usd":
        setCurrency({ name: "usd", symbol: "$"});
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€"});
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹"});
        break;
      case "aud":
        setCurrency({ name: "aud", symbol: "A$"});
        break;
      case "cad":
        setCurrency({ name: "cad", symbol: "C$"});
        break;
      case "gbp":
        setCurrency({ name: "gbp", symbol: "£"});
        break;
      case "jpy":
        setCurrency({ name: "jpy", symbol: "¥"});
        break;
      default:
        setCurrency({ name: "usd", symbol: "$"});
        break;
    }
  }
  const handleAuthClick = () => {
    setShowAuthModal(true);
  }
  const closeAuthModal = () => {
    setShowAuthModal(false);
  }
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className="navbar">
        <Link to={'/'}>
            <img src={logo} alt="logo" />
        </Link>
        <ul>
          <Link to={'/'}>
            <li>Home</li>
          </Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
                <option value="aud">AUD</option>
                <option value="cad">CAD</option>
                <option value="gbp">GBP</option>
                <option value="jpy">JPY</option>
            </select>
            <button onClick={handleAuthClick}>Sign up <img src={arrow_icon} /></button>
        </div>
        {showAuthModal && (
          <div className="auth-modal-overlay" onClick={closeAuthModal}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
              <div className="auth-header">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                <button className="close-btn" onClick={closeAuthModal}>x</button>
              </div>
              <form action="auth-form">
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" placeholder="Enter your pasword" required />
                </div>
                {!isLogin && (
                  <div className="form-group">
                    <label>Confrim Password</label>
                    <input type="password" placeholder="Confirm your password" required />
                  </div>
                )}
                <button type="submit" className="auth-submit-btn">
                  {isLogin ? 'Login' : 'Sign Up'}
                </button>
              </form>
              <div className="auth-footer">
                <p>
                  {isLogin ? "Don't have an account?" : "Already have an account?"}
                  <button className="toggle-auth-btn" onClick={toggleAuthMode}>
                    {isLogin ? 'Sign Up' : 'Login'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
export default Navbar;
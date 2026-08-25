/**
 * Header Component
 * 
 * Renders the top navigation bar containing branding logo, search form,
 * voice search option, video creation trigger, notifications, and user profile.
 */
import { Link } from 'react-router-dom';
import './Header.css';
import profile_pic from '../../../assets/channel-images/profile.jpeg';

function Header({ searchQuery, setSearchQuery, onToggleSidebar }) {
  return ( 
    <header className="header">
      {/* Left Section: Menu Toggle & YouTube Logo */}
      <div className="header__left">
        <button
          className="sidebar__toggle"
          aria-label="toggle sidebar"
          onClick={onToggleSidebar}
        >
          <i className="material-icons">menu</i>
        </button>

        <Link to="/" className="logo" aria-label="YouTube Home">
          <img 
            src="/youtube-image.png"
            alt="YouTube Logo" 
            loading="lazy"
          />
        </Link>
      </div>

      {/* Center Section: Search Form & Voice Search */}
      <div className="header__center">
        <form className="header__search-form" onSubmit={(e) => e.preventDefault()}>
          <input 
            className="header__search-input"
            type="search"
            placeholder="Search"
            aria-label="Search videos"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />

          <button
            type="submit"
            className="header__search-button"
            aria-label="Submit search"
          >
            <i className="material-icons">search</i>
          </button>
        </form>

        <button className="header__voice-search-button" aria-label="voice search">
          <i className="material-icons">mic</i>
        </button>
      </div>

      {/* Right Section: Action Controls & User Profile */}
      <div className="header__right">
        <button className="create-button" aria-label="Create content">
          <i className="material-icons">add</i>
          <span>Create</span>
        </button>

        <button className="header__notification-button" aria-label="Notifications">
          <i className="material-icons">notifications</i>
        </button>

        <button className="profile-button" aria-label="User Profile">
          <img
            loading="lazy"
            src={profile_pic}
            alt="User profile avatar"
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
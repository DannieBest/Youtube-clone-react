import { Link } from 'react-router-dom';
import './Header.css';
import profile_pic from '../../../assets/channel-images/profile.jpeg';

function Header({searchQuery, setSearchQuery}) {
  return ( 
    <header className='header'>
      <div className="header__left">
        <button className="sidebar__toggle" aria-label='toggle sidebar'>
          <i className="material-icons">menu</i>
        </button>
        <Link to="/" className="logo">
          <img 
            src="/youtube-image.png" alt="Youtube-logo" 
            loading='lazy'
          />
        </Link>
      </div>

      <div className="header__center">
          <form className="header__search-form">
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
              aria-label="search"
            >
              <i className="material-icons">search</i>
            </button>
          </form>
          <button className="header__voice-search-button" aria-label='voice search'>
            <i className="material-icons">mic</i>
          </button>
      </div>

      <div className="header__right">
        <button className="create-button" aria-label='create'>
          <i className="material-icons">add</i>
          <span>Create</span>
        </button>
        <button className="header__notification-button" aria-label='profile'>
          <i className="material-icons">notifications</i>
        </button>
        <button className="profile-button" aria-label='profile'>
          <img
            loading='lazy'
            src={profile_pic}
            alt='profile img'
          />
        </button>
      </div>
    </header>
  );
}

export default Header;
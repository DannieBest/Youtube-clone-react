import './Sidebar.css';
import channel_1 from '../../../assets/channel-images/channel-1.jpeg';
import channel_2 from '../../../assets/channel-images/channel-2.jpeg';
import channel_3 from '../../../assets/channel-images/channel-3.jpeg';
import channel_4 from '../../../assets/channel-images/channel-4.jpeg';
import channel_5 from '../../../assets/channel-images/channel-5.jpeg';
import channel_6 from '../../../assets/channel-images/channel-6.jpeg';


function Sidebar () {
  return (
    <aside className="sidebar">

      <nav className="sidebar__navigation">

        <section className="sidebar__section">
          <a href="#home" className="sidebar__link active">
            <i className="material-icons">home</i>
            <span>Home</span>
          </a>
          <a href="#" className="sidebar__link active">
            <i className="material-icons">local_fire_department</i>
            <span>Shorts</span>
          </a>
        </section>

        <hr className="sidebar__divider" />

        <section className="sidebar__section">
          <a href="#" className="sidebar__link active">
            Subscriptions
            <i className="material-icons">keyboard_arrow_right</i>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_1}
              alt="MrBeast"
            />
            <span>MrBeast</span>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_2}
              alt="PewDiePie"
            />
            <span>PewDiePie</span>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_3}
              alt="Dude Perfect"
            />
            <span>Dude Perfect</span>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_4}
              alt="Dude"
            />
            <span>Dude</span>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_5}
              alt="Aproko"
            />
            <span>Aproko</span>
          </a>
          <a href="#" className="sidebar__link active">
            <img
              loading="lazy"
              src={channel_6}
              alt="JeaFX"
            />
            <span>JeaFX</span>
          </a>
          <a href="#" className="sidebar__link active">
            <i className="material-icons">keyboard_arrow_down</i>
            Show more
          </a>
        </section>    

        <hr className="sidebar__divider" />

        <section className="sidebar__section">
            <div className="sidebar__nav">
              <a href="#" className="sidebar__link active">
                <span>You</span>
                <i className="material-icons">keyboard_arrow_right</i>
              </a>
            </div>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">account_box</i>
              <span>Your channel</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">history</i>
              <span>History</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">playlist_play</i>
              <span>Playlists</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">schedule</i>
              <span>Watch Later</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">thumb_up</i>
              <span>Liked Videos</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">smart_display</i>
              <span>Your videos</span>
            </a>
            <a href="#" className="sidebar__link active">
              <i className="material-icons">download</i>
              <span>Downloads</span>
            </a>
            <div className="sidebar__nav">
              <a href="#" className="sidebar__link active">
                <i className="material-icons">keyboard_arrow_down</i>
                Show more
              </a>
            </div>
        </section> 

        

      </nav>

    </aside>
  );
}

export default Sidebar
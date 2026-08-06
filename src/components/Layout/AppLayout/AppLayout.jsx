import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className='app'>
      <Header />

      <div className='app-layout'>
        <Sidebar />

         <MainContent />
      </div>

    </div>
  )
}

export default AppLayout;
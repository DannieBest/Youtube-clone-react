import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import './AppLayout.css';

function AppLayout({children, showSidebar = false}) {
  return (
    <div className='app'>
      <Header />

      <div className='app-layout'>
        {showSidebar && <Sidebar />}
        {children}
      </div>

    </div>
  )
}

export default AppLayout;
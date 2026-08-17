import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';

import './AppLayout.css';

function AppLayout() {

  const location = useLocation();

  const showSidebar = location.pathname === '/';

  return (
    <div className="app">

      <Header />

      <div className="app-layout">

        {showSidebar && <Sidebar />}

        <Outlet />

      </div>

    </div>
  );
}

export default AppLayout;
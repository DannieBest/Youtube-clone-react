import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import './AppLayout.css';

function AppLayout() {

  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  const showSidebar = location.pathname === '/';

  return (
    <div className="app">

      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div className="app-layout">

        {showSidebar && <Sidebar />}

        <Outlet context={{ searchQuery }} />

      </div>

    </div>
  );
}

export default AppLayout;
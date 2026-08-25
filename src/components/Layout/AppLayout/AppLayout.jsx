import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import './AppLayout.css';

function AppLayout() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();

  const isWatchPage = location.pathname.startsWith('/watch');

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="app">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onToggleSidebar={toggleSidebar}
      />

      <div className={`app-layout ${!isSidebarOpen ? 'sidebar-closed' : ''} ${isWatchPage ? 'watch-mode' : ''}`}>
        {!isWatchPage && (
          <Sidebar isOpen={isSidebarOpen} />
        )}

        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
}

export default AppLayout;
/**
 * AppLayout Component
 * 
 * Serves as the primary structural shell for the YouTube clone application.
 * Manages global search state, responsive sidebar toggling, and route-specific layouts.
 */
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import './AppLayout.css';

function AppLayout() {
  // Global search input state passed down to pages via Outlet context
  const [searchQuery, setSearchQuery] = useState('');
  
  // Controls sidebar visibility state for responsive toggling
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const location = useLocation();
  const isWatchPage = location.pathname.startsWith('/watch');

  /**
   * Toggles the sidebar visibility when hamburger menu is clicked in Header
   */
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="app">
      {/* Fixed top navigation bar */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onToggleSidebar={toggleSidebar}
      />

      {/* Main body wrapper containing sidebar and active route content */}
      <div className={`app-layout ${!isSidebarOpen ? 'sidebar-closed' : ''} ${isWatchPage ? 'watch-mode' : ''}`}>
        {/* Render persistent sidebar on non-watch pages */}
        {!isWatchPage && (
          <Sidebar isOpen={isSidebarOpen} />
        )}

        {/* Dynamic child route content (HomePage / WatchPage) */}
        <Outlet context={{ searchQuery }} />
      </div>
    </div>
  );
}

export default AppLayout;
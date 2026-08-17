import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './AppLayout.css';

function AppLayout() {
  return (
    <div className="app">

      <Header />

      <div className="app-layout">
        <Outlet />
      </div>

    </div>
  );
}

export default AppLayout;
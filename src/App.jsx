import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AppLayout from './components/Layout/AppLayout/AppLayout';
import MainContent from './components/Layout/MainContent/MainContent';
import WatchPage from './pages/WatchPage/WatchPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <AppLayout showSidebar>
              <MainContent />
            </AppLayout>
          }
        />

        {/* Watch Page */}
        <Route
          path="/watch/:videoId"
          element={
            <AppLayout>
              <WatchPage />
            </AppLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
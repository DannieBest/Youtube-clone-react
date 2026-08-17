import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AppLayout from './components/Layout/AppLayout/AppLayout';
import MainContent from './components/Layout/MainContent/MainContent';
import WatchPage from './pages/WatchPage/WatchPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Shared application layout */}
        <Route element={<AppLayout />}>

          {/* Home */}
          <Route
            path="/"
            element={<MainContent />}
          />

          {/* Watch page */}
          <Route
            path="/watch/:videoId"
            element={<WatchPage />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import AppLayout from './components/Layout/AppLayout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import WatchPage from './pages/WatchPage/WatchPage';

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<AppLayout />}>

          <Route path="/" element={<HomePage />} />

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
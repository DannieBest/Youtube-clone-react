import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AppLayout from './components/Layout/AppLayout/AppLayout';
import WatchPage from './pages/WatchPage/WatchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/watch/:videoId" element={<WatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

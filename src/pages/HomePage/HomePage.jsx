/**
 * HomePage Component
 * 
 * Renders the main landing page view of YouTube clone.
 * Retrieves global searchQuery from Outlet context and renders MainContent.
 */
import { useOutletContext } from 'react-router-dom';

import MainContent from '../../components/Layout/MainContent/MainContent';

function HomePage() {
  const { searchQuery } = useOutletContext();

  return (
    <MainContent searchQuery={searchQuery} />
  );
}

export default HomePage;
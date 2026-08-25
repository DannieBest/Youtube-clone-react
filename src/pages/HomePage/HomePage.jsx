import { useOutletContext } from 'react-router-dom';

import MainContent from '../../components/Layout/MainContent/MainContent';

function HomePage() {

  const { searchQuery } = useOutletContext();

  return (
    <MainContent searchQuery={searchQuery} />
  );
}

export default HomePage;
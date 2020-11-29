import React from 'react';

import Sidebar from '../../components/Sidebar';
import Topbar from '../../components/Topbar';
import Banner from '../../components/Banner';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
    <Sidebar />
    <Topbar />
    <main>
      <Banner />
    </main>
  </Container>
  );
}

export default Home;
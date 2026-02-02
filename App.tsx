import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';

const App: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Philosophy />
      <Projects />
    </Layout>
  );
};

export default App;

import React from 'react';
import Layout from './Utils/Layout';
import Feed from './Components/Feed'; // Import the Feed component

const App = () => {
  return (
    <Layout>
      <Feed /> {/* Add the Feed component here */}
    </Layout>
  );
};

export default App;
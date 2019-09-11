import React from 'react';

import ArticlesListContainer from './scenes/articles/List/ArticlesListContainer';

import './common_styles/global.scss';
import './App.scss';

function App() {
  return (
    <div className="app-wrapper">
      <ArticlesListContainer />
    </div>
  );
}

export default App;

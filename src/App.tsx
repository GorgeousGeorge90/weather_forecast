import React from 'react';
import styles from './App.module.scss'
import Header from "./componets/Header/Header";
import Main from "./componets/Main/Main";

function App() {
  return (
      <div className={styles.appWrapper}>
            <Header/>
            <Main/>
      </div>
  );
}

export default App;

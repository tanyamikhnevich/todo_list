import React from "react";
import styles from "./app.module.scss";
import "./styles/index.scss";
import { Routing } from "../features/routing";
import { publicRoutes } from "features/routing/routes/routes";
import { Navbar } from "../widgets";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Navbar className={styles.navbar}>
          <Routing routes={publicRoutes} />
        </Navbar>
      </div>
    </div>
  );
}

export default App;

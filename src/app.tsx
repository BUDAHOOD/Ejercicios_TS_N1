import { FC } from 'react';
import styles from './app.module.css'
import { BrowserRouter, Link, Route } from "react-router-dom";
import { Lista }  from "./componentes/1-lista";
import { AumentaCont } from './componentes/2-btn-aumenta';
import { SoloConsonantes } from './componentes/3-solo-consonantes';
import { ActualizaTitulo } from './componentes/4-actualiza-fecha';
import { ContadorBoom } from './componentes/5-contador-boom';
import { GuardaLocalStore } from './componentes/6-input-local-store';

export const App: FC =() => (
  <BrowserRouter>
    <Route path="/" exact>
      <main className={styles.wrapper}>
        <header className={styles.wrapper}>
          <Link to="lista">1. Lista</Link>
          <Link to="aumentaCont">2. Aumenta Contador</Link>
          <Link to="soloConsonantes">3. Solo Consonantes</Link>
          <Link to="actualizaTitulo">4. Actualiza Título</Link>
          <Link to="ContadorBoom">5. Contador Boom</Link>
          <Link to="GuardaLocalStore">6. Guarda Local Store</Link>
        </header>
      </main>
    </Route>
    <Route path="/lista">
      <Lista />
    </Route>
    <Route path="/aumentaCont">
      <AumentaCont />
    </Route>
    <Route path="/soloConsonantes">
      <SoloConsonantes />
    </Route>
    <Route path="/actualizaTitulo">
      <ActualizaTitulo />
    </Route>
    <Route path="/contadorBoom">
      <ContadorBoom />
    </Route>
    <Route path="/guardaLocalStore">
      <GuardaLocalStore />
    </Route>
  </BrowserRouter>
)
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./styles.css";

export default function() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Link to="/jsx">JSX</Link>
        <Link to="/immutability1">Imutabilidade: Errado 1</Link>
        <Link to="/immutability2">Imutabilidade: Errado 2</Link>
        <Link to="/immutability3">Imutabilidade: Tudo certo</Link>
        <Link to="/use-effect-did-mount">useEffect: did mount</Link>
        <Link to="/use-effect-unmount">useEffect: unmount</Link>
        <Link to="/use-effect-reactive">useEffect: reactive</Link>
        <Link to="/use-effect-infinity-rendering">
          useEffect: infinity rendering
        </Link>
        <Link to="/conditional-rendering">Conditional Rendering</Link>
        <Link to="/use-memo">useMemo</Link>
        <Link to="/memo">memo</Link>
      </main>
    </div>
  );
}

import React from 'react';
import { render } from 'react-dom';
import './style.css';

const Application = () => (
  <main className="container">
    <section className="top-bar" />
    <section className="navigation" />
    <section className="sub-application" />
  </main>
);

render(<Application />, document.getElementById('root'));

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <section className="navigation">
    <ul>
      <li>
        <NavLink to="/email">Email</NavLink>
      </li>
      <li>
        <NavLink to="/flex">Flex</NavLink>
      </li>
      <li>
        <NavLink to="/voice">Voice</NavLink>
      </li>
      <li>
        <NavLink to="/messaging">Messaging</NavLink>
      </li>
    </ul>
  </section>
);

export default Navigation;

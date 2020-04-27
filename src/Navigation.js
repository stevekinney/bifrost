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
      <li>
        <NavLink to="/console/phone-numbers/incoming?iframe=true">Numbers</NavLink>
      </li>
      <li>
        <NavLink to="/console/phone-numbers/getting-started?iframe=true">Numbers - Getting Started</NavLink>
      </li>
      <li>
        <NavLink to="/console/phone-numbers/overview?iframe=true">Numbers - Overview</NavLink>
      </li>
      <li>
        <NavLink to="/console/chat/dashboard?iframe=true">Chat</NavLink>
      </li>
    </ul>
  </section>
);

export default Navigation;

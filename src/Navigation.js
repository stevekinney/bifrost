import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavUrl } from 'bifrost';

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
        <NavLink to={NavUrl({ url: "/console", consoleApp: true })}>Console Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/phone-numbers/incoming", consoleApp: true })}>Numbers</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/phone-numbers/getting-started", consoleApp: true })}>Numbers - Getting Started</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/phone-numbers/overview", consoleApp: true })}>Numbers - Overview</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/chat/dashboard", consoleApp: true })}>Chat</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/functions/manage", consoleApp: true })}>Functions</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/functions/api", consoleApp: true })}>Functions - API</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/debugger", consoleApp: true })}>Debugger</NavLink>
      </li>
      <li>
        <NavLink to={NavUrl({ url: "/console/debugger/alert-triggers", consoleApp: true })}>Debugger - Alert Triggers</NavLink>
      </li>
    </ul>
  </section>
);

export default Navigation;

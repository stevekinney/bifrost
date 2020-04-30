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
        <NavLink to="/console?disable_navigation=true">Console Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/console/phone-numbers/incoming?disable_navigation=true">Numbers</NavLink>
      </li>
      <li>
        <NavLink to="/console/phone-numbers/getting-started?disable_navigation=true">Numbers - Getting Started</NavLink>
      </li>
      <li>
        <NavLink to="/console/phone-numbers/overview?disable_navigation=true">Numbers - Overview</NavLink>
      </li>
      <li>
        <NavLink to="/console/chat/dashboard?disable_navigation=true">Chat</NavLink>
      </li>
      <li>
        <NavLink to="/console/functions/manage?disable_navigation=true">Functions</NavLink>
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

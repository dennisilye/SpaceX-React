import React from "react";
import { NavLink } from "react-router-dom";

export function MainHeader() {
  return (
    <header className="app-header">
      <section className="container">
        <NavLink to="/">
          <div className="flex justify-center">
            <h1>SpaceX</h1>
          </div>
        </NavLink>
      </section>
    </header>
  );
}

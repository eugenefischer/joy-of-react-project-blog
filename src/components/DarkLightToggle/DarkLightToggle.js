"use client";
import React from "react";
import { Sun, Moon } from "react-feather";
import Cookie from "js-cookie";
import {
  COLOR_THEME_COOKIE_NAME,
  DARK_TOKENS,
  LIGHT_TOKENS,
  LIGHT_COLORS,
  DARK_COLORS,
} from "@/constants";
import styles from "../Header/Header.module.css";
function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "light" ? "dark" : "light";

    // Update the state variable.
    // This causes the Sun/Moon icon to flip.
    setTheme(nextTheme);

    // Write the cookie for future visits
    Cookie.set(COLOR_THEME_COOKIE_NAME, nextTheme, {
      expires: 1000,
    });

    // Apply the new colors to the root HTML tag.
    const newTokens = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;
    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(newTokens).forEach(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }

  return (
    <button className={styles.action} onClick={handleClick}>
      {theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
    </button>
  );
}

export default DarkLightToggle;

export class Theme {
  constructor() {
    this.storedTheme = localStorage.getItem("theme");
    this.setTheme(this.getPreferredTheme());
    this.setupPrefChangeListener();

    this.showActiveTheme(this.getPreferredTheme());
    const themeToggleCheckbox = document.querySelector("#dark-theme");

    themeToggleCheckbox.addEventListener("change", () => {
      const theme = themeToggleCheckbox.checked === true ? "dark" : "light";
      localStorage.setItem("theme", theme);
      this.setTheme(theme);
      this.showActiveTheme(theme);
    });
  }

  setupPrefChangeListener() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        if (storedTheme !== "light" || storedTheme !== "dark") {
          this.setTheme(this.getPreferredTheme());
        }
      });
  }

  getPreferredTheme() {
    if (this.storedTheme) {
      return this.storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  setTheme(theme) {
    if (
      theme === "auto" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  }

  showActiveTheme(theme) {
    document.querySelector("#dark-theme").checked = theme === "dark";
  }
}

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {})();

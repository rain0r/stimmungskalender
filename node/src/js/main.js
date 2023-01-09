// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { SkCalendar } from "./sk.calendar";
import { MoodForm } from "./sk.mood.form";
import { Theme } from "./sk.theme";
import { Graph } from "./sk.graph";
import * as SkUtil from "./sk.util";

import "../scss/main.scss";

const loadTranslation = (baseUrl) => {
  const currentLanguage = JSON.parse(
    document.getElementById("current_language").textContent
  );
  return fetch(`${baseUrl}jsoni18n/?lang=${currentLanguage}`)
    .then((response) => response.json())
    .catch((err) => {
      console.error("Error", err);
    });
};

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
  const apiUrlsElem = document.querySelector("#api_urls");
  if (!apiUrlsElem) {
    return;
  }
  const apiUrls = JSON.parse(apiUrlsElem.textContent);
  const activeUrl = JSON.parse(
    document.querySelector("#active_url").textContent
  );

  SkUtil.enableToolTip();
  SkUtil.enableDatePicker();
  new Theme();

  loadTranslation(apiUrls["base-url"]).then((translation) => {
    switch (activeUrl) {
      case "calendar":
        new SkCalendar(apiUrls, translation["catalog"]);
        break;
      case "index":
        new MoodForm(apiUrls);
        break;
      case "graph":
        new Graph(apiUrls, translation["catalog"]);
        break;
    }
  });
});

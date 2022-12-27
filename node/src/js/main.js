// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

import { SkCalendar } from "./sk.calendar";
import { MoodForm } from "./sk.mood.form";
import { Theme } from "./sk.theme";
import * as SkUtil from "./sk.util";

import "../scss/main.scss";

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};
ready(() => {
  SkUtil.enableToolTip();
  SkUtil.enableDatePicker();
  new Theme();

  const apiUrls = JSON.parse(document.querySelector("#api_urls").textContent);
  const activeUrl = JSON.parse(
    document.querySelector("#active_url").textContent
  );

  switch (activeUrl) {
    case "calendar":
      new SkCalendar(apiUrls);
      break;
    case "index":
      new MoodForm(apiUrls);
      break;
  }
});

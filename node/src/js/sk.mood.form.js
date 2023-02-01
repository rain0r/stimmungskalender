import { Toast } from "bootstrap";

export class MoodForm {
  constructor(apiUrls) {
    this.apiUrls = apiUrls;

    if (document.querySelectorAll(".js-btn").length > 0) {
      this.loadEntries();
      this.addInputListener();
    }
  }

  loadEntries() {
    let url = this.apiUrls["api-mood-table"];
    const startDt = this.getQueryVariable("start_dt");
    if (startDt) {
      url = `${url}?start_dt=${startDt}`;
    }

    const request = new Request(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      mode: "same-origin", // Do not send CSRF token to another domain.
    });
    fetch(request)
      .then((response) => response.json())
      .then(function (response) {
        response.days_of_week.forEach((entry) => {
          for (let period of ["night", "day"]) {
            const key = `mood_${period}`;
            if (!entry[key]) {
              return;
            }
            const checkbox = document.querySelector(
              `[data-mood="${entry[key]}"][data-day="${entry.day}"][data-period="${period}"]`
            );
            checkbox.checked = true;
            checkbox.setAttribute("data-active", checkbox.checked);
            document.querySelector(
              `#label-${period}-${entry[key]}-${entry.day}`
            ).innerText = "X";
          }
        });
      });
  }

  addInputListener() {
    document.querySelectorAll(".mood-btn-label").forEach((label) => {
      label.addEventListener("click", () => {
        const checkbox = label.previousElementSibling;
        const csrfToken = document.querySelector(
          "[name=csrfmiddlewaretoken]"
        ).value;
        const request = new Request(this.apiUrls["api-entry-day"], {
          method: "POST",
          headers: {
            "X-CSRFToken": csrfToken,
            "content-type": "application/json",
          },
          mode: "same-origin", // Do not send CSRF token to another domain.
          body: JSON.stringify({
            period: checkbox.dataset.period,
            day: checkbox.dataset.day,
            mood: checkbox.dataset.mood,
          }),
        });
        fetch(request).then(function () {
          new Array(...label.parentElement.childNodes.entries())
            .map((elem) => elem[1])
            .filter((elem) => elem.nodeName === "LABEL")
            .forEach((elem) => (elem.innerHTML = "&nbsp;"));
          if (checkbox.dataset.active === "true") {
            // Remove entry
            checkbox.checked = false;
            checkbox.removeAttribute("checked");
            checkbox.dataset.active = "false";

            document.querySelector(
              "#mood-entry-posted-body"
            ).textContent = `Removed mood`;
          } else {
            // Set entry selected
            checkbox.setAttribute("data-active", true);
            label.innerText = "X";

            document.querySelector(
              "#mood-entry-posted-body"
            ).textContent = `Saved mood`;
          }
          // Display a toast to signal the entry has been saved
          new Toast(document.querySelector("#mood-entry-posted"), {
            delay: 1500,
          }).show();
        });
      });
    });
  }

  getQueryVariable(name) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      if (pair[0] == name) {
        return pair[1];
      }
    }
    return false;
  }
}

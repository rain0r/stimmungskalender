import Calendar from "js-year-calendar";
import { Popover } from "bootstrap";
import "js-year-calendar/dist/js-year-calendar.css";

const moodMapping = JSON.parse(
  document.getElementById("mood_mapping").textContent
);
const siteUrl = JSON.parse(document.getElementById("site_url").textContent);
const moodColors = JSON.parse(
  document.getElementById("mood_colors").textContent
);
const currentLanguage = JSON.parse(
  document.getElementById("current_language").textContent
);

const ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

function buildCalendarEntries(calendarData) {
  calendarData.entries.map((item) => {
    const parts = item.day.split("-");
    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
    // January - 0, February - 1, etc.
    const day = new Date(parts[0], parts[1] - 1, parts[2]);
    item.startDate = day;
    item.endDate = day;
    return item;
  });
  return calendarData;
}

function formatDate(dateStr) {
  const event = new Date(dateStr);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return event.toLocaleDateString(undefined, options);
}

function loadTranslation() {
  const jqxhr = fetch(`${siteUrl}jsoni18n/?lang=${currentLanguage}`)
    .then((response) => response.json())
    .catch((err) => {
      console.error("Error", err);
      document.getElementById("#error-card").classList.remove("invisible");
      document.getElementById("#error-msg").textContent = err.statusText;
    });
  return jqxhr;
}

function loadEntries() {
  const jqxhr = fetch(`${siteUrl}api/calendar/`)
    .then((response) => response.json())
    .catch((err) => {
      console.error("Error", err);
      document.getElementById("#error-card").classList.remove("invisible");
      document.getElementById("#error-msg").textContent = err.statusText;
    });
  return jqxhr;
}

function buildCalendar(translations, calendarData) {
  new Calendar("#calendar", {
    minDate: new Date(calendarData.first_day),
    maxDate: new Date(calendarData.last_day),
    style: "custom",
    customDataSourceRenderer: function (ele, renderDate, eventList) {
      let dayColor = "transparent";
      let nightColor = "transparent";
      ele = ele.parentElement; // We are passed the child of the element to be styled
      if (eventList[0].startDate.getTime() == renderDate.getTime()) {
        if (eventList[0].mood_day) {
          dayColor = moodColors[eventList[0].mood_day];
        }
        if (eventList[0].mood_night) {
          nightColor = moodColors[eventList[0].mood_night];
        }
      }
      ele.style.cssText = `border-bottom: 3px solid ${dayColor}; 
      border-left: 3px solid ${dayColor};
      border-top: 3px solid ${nightColor};
      border-right: 3px solid ${nightColor};
      `;
    },
    dataSource: calendarData.entries,
    mouseOnDay: function (e) {
      if (e.events.length > 0) {
        let content = "";

        for (let i in e.events) {
          content += `
          <div class="event-tooltip-content">
            <p>${formatDate(e.events[i].day)}</p>
            <ul>
              <li>
                ${translations.catalog["mood"]} ${
            translations.catalog["night"]
          }: ${moodMapping[e.events[i].mood_night]}
              </li>
              <li>
                ${translations.catalog["mood"]} ${
            translations.catalog["day"]
          }: ${moodMapping[e.events[i].mood_day]}
              </li>
            </ul>
          </div>
          `;
        }

        const popover = new Popover(e.element, {
          trigger: "manual",
          container: "body",
          html: true,
          content: content,
        });

        popover.show();
      }
    },
    mouseOutDay: function (e) {
      if (e.events.length > 0) {
        Popover.getInstance(e.element).hide();
      }
    },
    clickDay: function(e) {
      const skDateStr = e.date.getFullYear() + '-' + ('0' + (e.date.getMonth()+1)).slice(-2) + '-' + ('0' + e.date.getDate()).slice(-2);
      const url = `${siteUrl}?start_dt=${skDateStr}`      
      window.location.href=url;
    }
  });
}

ready(() => {
  Promise.all([loadTranslation(), loadEntries()]).then((values) => {
    const translations = values[0];
    const calendarData = buildCalendarEntries(values[1]);
    buildCalendar(translations, calendarData);
  });
});

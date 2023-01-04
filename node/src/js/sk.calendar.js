import Calendar from "js-year-calendar";
import { Popover } from "bootstrap";
import "js-year-calendar/dist/js-year-calendar.css";

export class SkCalendar {
  constructor(apiUrls, catalog) {
    this.apiUrls = apiUrls;
    this.catalog = catalog;
    this.moodMapping = JSON.parse(
      document.getElementById("mood_mapping").textContent
    );
    this.moodColors = JSON.parse(
      document.getElementById("mood_colors").textContent
    );
    this.loadEntries().then((response) => {
      const calendarData = this.buildCalendarEntries(response);
      this.buildCalendar(calendarData);
    });
  }

  buildCalendarEntries(calendarData) {
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

  formatDate(dateStr) {
    const event = new Date(dateStr);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return event.toLocaleDateString(undefined, options);
  }

  loadEntries() {
    return fetch(`${this.apiUrls["api-calendar"]}`)
      .then((response) => response.json())
      .catch((err) => {
        console.error("Error", err);
        document.getElementById("#error-card").classList.remove("invisible");
        document.getElementById("#error-msg").textContent = err.statusText;
      });
  }

  buildCalendar(calendarData) {
    new Calendar("#calendar", {
      minDate: new Date(calendarData.first_day),
      maxDate: new Date(calendarData.last_day),
      style: "custom",
      customDataSourceRenderer: (ele, renderDate, eventList) => {
        let dayColor = "transparent";
        let nightColor = "transparent";
        ele = ele.parentElement; // We are passed the child of the element to be styled
        if (eventList[0].startDate.getTime() == renderDate.getTime()) {
          if (eventList[0].mood_day) {
            dayColor = this.moodColors[eventList[0].mood_day];
          }
          if (eventList[0].mood_night) {
            nightColor = this.moodColors[eventList[0].mood_night];
          }
        }
        ele.style.cssText = `border-bottom: 3px solid ${dayColor}; 
      border-left: 3px solid ${dayColor};
      border-top: 3px solid ${nightColor};
      border-right: 3px solid ${nightColor};
      `;
      },
      dataSource: calendarData.entries,
      mouseOnDay: (e) => {
        if (e.events.length > 0) {
          let content = "";

          for (let i in e.events) {
            content += `
          <div class="event-tooltip-content">
            <p>${this.formatDate(e.events[i].day)}</p>
            <ul>
              <li>
                ${this.catalog["mood"]} ${this.catalog["night"]}: ${
              this.moodMapping[e.events[i].mood_night]
            }
              </li>
              <li>
                ${this.catalog["mood"]} ${this.catalog["day"]}: ${
              this.moodMapping[e.events[i].mood_day]
            }
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
      clickDay: (e) => {
        const skDateStr =
          e.date.getFullYear() +
          "-" +
          ("0" + (e.date.getMonth() + 1)).slice(-2) +
          "-" +
          ("0" + e.date.getDate()).slice(-2);
        const url = `${this.siteUrl}?start_dt=${skDateStr}`;
        window.location.href = url;
      },
    });
  }
}

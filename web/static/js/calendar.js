let calendar = null;
const calendarData = JSON.parse(document.getElementById("entries").textContent);
calendarData.entries.map((item) => {
  const parts = item.day.split("-");
  // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
  // January - 0, February - 1, etc.
  const day = new Date(parts[0], parts[1] - 1, parts[2]);
  item.startDate = day;
  item.endDate = day;
  return item;
});

function moodColors(mood) {
  let color;
  switch (mood) {
    case 1:
      color = "#dc3545";
      break;
    case 2:
      color = "#ffc107";
      break;
    case 3:
      color = "#9DB523";
      break;
    case 4:
      color = "rgba(40,167,69, 0.7)";
      break;
    case 5:
      color = "rgba(40,167,69, 1)";
      break;
    default:
      color = "white";
  }
  return color;
}

$(function () {
  const minDate = calendarData.first_day.split("-");
  const maxDate = calendarData.last_day.split("-");

  calendar = new Calendar(".calendar", {
    minDate: new Date(minDate[0], minDate[1] - 1, minDate[2]),
    maxDate: new Date(maxDate[0], maxDate[1] - 1, maxDate[2]),
    style: "custom",
    customDataSourceRenderer: function (ele, renderDate, eventList) {
      let dayColor = "red";
      let nightColor = "red";
      ele = ele.parentElement; // We are passed the child of the element to be styled
      if (eventList[0].startDate.getTime() == renderDate.getTime()) {
        if (eventList[0].mood_day) {
          dayColor = moodColors(eventList[0].mood_day);
        }
        if (eventList[0].mood_night) {
          nightColor = moodColors(eventList[0].mood_night);
        }
      }
      $(ele).css("border-bottom", "3px solid " + dayColor);
      $(ele).css("border-left", "3px solid " + dayColor);
      $(ele).css("border-top", "3px solid " + nightColor);
      $(ele).css("border-right", "3px solid " + nightColor);
    },
    dataSource: calendarData.entries,
    mouseOnDay: function (e) {
      if (e.events.length > 0) {
        var content = "";

        for (var i in e.events) {
          content += `
          <div class="event-tooltip-content">
          Mood night: ${e.events[i].mood_night}.
          Mood day: ${e.events[i].mood_day}.
          </div>
          `;
        }

        $(e.element).popover({
          trigger: "manual",
          container: "body",
          html: true,
          content: content,
        });

        $(e.element).popover("show");
      }
    },
    mouseOutDay: function (e) {
      if (e.events.length > 0) {
        $(e.element).popover("hide");
      }
    },
  });
});

/*
new Calendar(".calendar", {
  style: "background",
  displayHeader: false,
  // startDate: new Date(2022, 1, 1), // TODO
  numberMonthsDisplayed: 12,
  minDate: new Date(2022, 0, 1), // TODO erster eintrag
  maxDate: new Date(), // TODO heute
  language: "de", // TODO
  alwaysHalfDay: true,
});
*/

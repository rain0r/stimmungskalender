// const Plotly = require('plotly.js/lib/index-basic')

export class Graph {
  constructor(apiUrls, catalog) {
    this.apiUrls = apiUrls;
    this.catalog = catalog;
    this.moodMapping = JSON.parse(
      document.querySelector("#mood_mapping").textContent
    );
    this.graphBase = document.getElementById("sk-graph");
    this.textColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--bs-body-color");

    this.buildScatterPlot();

    this.getMoodColors().then((moodColors) => {
      // console.log(moodColors)
      this.buildPieChart(moodColors);
    });

    this.buildBarChart();
  }

  fetchScatterPlotData() {
    const url = `${this.apiUrls["api-scatter-plot"]}?start_dt=${this.graphBase.dataset.startDt}&end_dt=${this.graphBase.dataset.endDt}`;
    return fetch(url)
      .then((response) => response.json())
      .catch((err) => {
        console.error("Error", err);
      });
  }

  buildScatterPlot() {
    this.fetchScatterPlotData().then((data) => {
      const traces = [];
      for (let period of ["day", "night"]) {
        traces.push({
          name: this.catalog[period],
          x: data.map((elem) => elem["x"]),
          y: data.map((elem) => elem["y"][period]),
          mode:
            this.graphBase.dataset.isMarkers === "True" ? "markers" : "lines",
          type: "scatter",
          line: {
            shape: "spline",
          },
        });
      }
      const layout = {
        yaxis: {
          range: [0, 5],
          tickmode: "array",
          ticktext: Object.values(this.moodMapping),
          tickvals: Object.keys(this.moodMapping),
        },
        paper_bgcolor: "rgba(0,0,0,0)",
        plot_bgcolor: "rgba(0,0,0,0)",
        font: {
          color: this.textColor,
        },
        showlegend: false,
      };
      Plotly.newPlot("scatter-plot", traces, layout, { displayModeBar: false });
    });
  }

  buildPieChart(moodColors) {
    const requests = [];
    for (let period of ["mood_day", "mood_night"]) {
      const url = `${this.apiUrls["api-pie-chart"]}?start_dt=${this.graphBase.dataset.startDt}&end_dt=${this.graphBase.dataset.endDt}&period=${period}`;
      requests.push(fetch(url).then((response) => response.json()));
    }
    Promise.all(requests).then((responses) => {
      // console.log("responses", responses);
      const periods = ["day", "night"];
      for (let index in responses) {
        // console.log(this.catalog)
        // console.log(responses)
        // console.log(responses[index]);
        // console.log(responses[index]["label_numbers"])
        const data = {
          type: "pie",
          values: responses[index]["values"],
          labels: responses[index]["label_numbers"].map(
            (iter) => this.moodMapping[iter]
          ),
          textinfo: "label+percent",
          hole: 0.4,
          hoverinfo: "label+percent",
          domain: {
            row: 0,
            column: index,
          },
          name: this.catalog[periods[index]],
          marker: {
            colors: responses[index]["label_numbers"].map(
              (elem) => moodColors.find((i) => i.mood === elem)["color"]
            ),
          },
        };
        const layout = {
          annotations: [
            {
              text: this.catalog[periods[index]],
              showarrow: false,
              font: {
                size: 20,
              },
            },
          ],
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          font: {
            color: this.textColor,
          },
          showlegend: false,
        };
        Plotly.newPlot(`pie-chart-${index}`, [data], layout, {
          displayModeBar: false,
        });
      }
    });
  }

  buildBarChart() {
    const url = `${this.apiUrls["api-bar-chart"]}?start_dt=${this.graphBase.dataset.startDt}&end_dt=${this.graphBase.dataset.endDt}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const plotData = [
          {
            x: data["labels"],
            y: data["values"],
            type: "bar",
          },
        ];
        const layout = {
          yaxis: {
            range: [0, 5],
            tickmode: "array",
            ticktext: Object.values(this.moodMapping),
            tickvals: Object.keys(this.moodMapping),
          },
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          font: {
            color: this.textColor,
          },
          showlegend: false,
        };
        Plotly.newPlot("bar-chart", plotData, layout);
      });
  }

  getMoodColors() {
    return fetch(this.apiUrls["api-mood-colors"]).then((response) =>
      response.json()
    );
  }
}

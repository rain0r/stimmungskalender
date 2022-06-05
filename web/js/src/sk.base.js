import "popper.js/dist/popper.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
$('[data-toggle="tooltip"]').tooltip();

$('a[data-toggle="tab"]').on("shown.bs.tab", function (event) {
  window.location.hash = $(event.target).attr("id");
});

if (window.location.hash) {
  $("#pie-tab").tab("show");
}

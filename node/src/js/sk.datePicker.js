import Datepicker from "vanillajs-datepicker/Datepicker";

const datePickerTriggerList = document.querySelectorAll(
  '[data-provide="datepicker"]'
);
const options = {
  format: "yyyy-mm-dd",
  weekStart: 1,
};
const datePickerList = [...datePickerTriggerList].map(
  (tooltipTriggerEl) => new Datepicker(tooltipTriggerEl, options)
);
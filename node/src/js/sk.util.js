import Datepicker from "vanillajs-datepicker/Datepicker";
import { Tooltip } from "bootstrap";

export const enableDatePicker = function () {
  const datePickerTriggerList = document.querySelectorAll(
    '[data-provide="datepicker"]'
  );
  const options = {
    format: "yyyy-mm-dd",
    weekStart: 1,
  };
  [...datePickerTriggerList].map(
    (tooltipTriggerEl) => new Datepicker(tooltipTriggerEl, options)
  );
};

export const enableToolTip = function () {
  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
  );
};

export const enableToast = function () {
  // const toastElList = document.querySelectorAll(".toast");
  // const hugo = [...toastElList].map((toastEl) => new Toast(toastEl));
  // hugo.forEach((i) => i.show());
};

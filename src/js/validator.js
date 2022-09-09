import $ from "jquery";
import validator from "jquery-validation";

$.validator.setDefaults({
  debug: true,
  success: "valid",
});

$(".causebox-bottom__form").validate({
  rules: {
    field: {
      required: true,
      email: true,
    },
  },
});

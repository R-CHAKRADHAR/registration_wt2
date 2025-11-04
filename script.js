$(document).ready(function() {
  $("#regForm").on("submit", function(e) {
    let valid = true;

    // Basic client-side validation
    $("input, textarea, select").each(function() {
      if ($(this).val() === "") {
        $(this).css("border", "2px solid red");
        valid = false;
      } else {
        $(this).css("border", "1px solid #ccc");
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Please fill all the required fields!");
    }
  });
});


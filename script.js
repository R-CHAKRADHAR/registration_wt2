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
    const email = $("#email").val().trim();

    // ✅ Regex to allow any valid email ending with .com, .org, .in, etc.
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in)$/i;

    if (!emailPattern.test(email)) {
      alert("Invalid email! Please enter a valid email address ending with .com, .org, or .in");
      e.preventDefault(); // stop form submission
    }

    if (!valid) {
      e.preventDefault();
      alert("Please fill all the required fields!");
    }
  });
});



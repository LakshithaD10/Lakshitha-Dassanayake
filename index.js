$(".Contact_Me_Button.Styled").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".Contact_me-container").offset().top,
    },
    1000
  ); // Adjust the duration (in milliseconds) as needed
});

$(".Resume-Button").click(function () {
  // Replace 'path/to/your.pdf' with the actual path to your PDF file
  var pdfUrl = "./public/Resume - Lakshitha Dassanayake.pdf";

  // Create a hidden link to the PDF
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "Resume - Lakshitha Dassanayake.pdf"; // Set the desired file name

  // Simulate a click on the link to trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

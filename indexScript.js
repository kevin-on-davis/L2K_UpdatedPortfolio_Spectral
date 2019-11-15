var btn_AboutMe = $("#aboutme");
var btn_MyWork = $("#mywork");
var btn_ContactMe = $("#contactme");
var btn_MyResume = $("#myresume");
var btn_MyLinkedIn = $("#mylinkedin");
var btn_MyGitHub = $("#mygithub");

var pg_AboutMe = $("#abt_content");
var pg_MyWork = $("#mywork_content");
var pg_CntctMe = $("#contact_content");

var skill = [
  "PL/SQL",
  "T/SQL",
  "SQL",
  "Oracle",
  "SQL Server",
  "MySQL",
  "Oracle Apex",
  "Oracle Forms",
  "Oracle Reports",
  "Jasper Reports",
  "Crystal Reports",
  "HTML",
  "CSS",
  "Javascript",
  "APIs",
  "Node JS"
];
var skill_idx = 0;
$("#skill_descriptor").html(skill[skill_idx]);

var marquee = setInterval(function() {
  if (skill_idx < skill.length - 1) {
    skill_idx += 1;
  } else {
    skill_idx = 0;
  }

  let today = new Date();
  let start_prd = new Date("September 23 2019"); // Set day and month
  let end_prd = new Date("December 18 2019"); // Set day and month
  let msPerDay = 24 * 60 * 60 * 1000; // Number of milliseconds per day
  let days_elapsed = Math.round((today - start_prd) / msPerDay);
  let total_days = Math.round((end_prd - start_prd) / msPerDay);
  $("#completion_pct").css(
    "width",
    Math.floor((days_elapsed / total_days) * 100) + "%"
  );
  $("#completion_pct").css("text-center");
  $("#completion_pct").text(
    "Completion : " + Math.floor((days_elapsed / total_days) * 100) + "%"
  );

  $("#skill_descriptor").html(skill[skill_idx]);
}, 5000);

btn_AboutMe.on("click", function() {
  event.preventDefault();
  $("#delta_title").text("About Me");
  $("#delta_content").html(
    `<p style="width:100%">IT professional with extensive experience in Oracle technology and strengths in PL/SQL and SQL development, GUI development utilizing Oracle Application Express, Oracle Forms and Reports. Created complete end-to-end Oracle Apex commercial solution to replace obsolete application as well as modernizing business practices using a variety of tools. Experienced in design, development and implementation of solutions to solve complex challenges. Worked in a range of industries including education, HR, education, energy, shipping and manufacturing. Possess excellent writing, research and problem-solving skills in both functional and technical areas, demonstrated through the delivery of various projects as part of development teams, on solo and remote projects.</p>`
  );
});

btn_MyWork.on("click", function() {
  event.preventDefault();
  console.log($("#delta_content").html());
  $("#delta_title").text("My Work");
  $("#delta_content").html(
    `<div class="row">
    <div class="col-4">
    <a href="./assets/BookshelfApp.png" class="app_icon" target="#"><img src="./assets/BookshelfApp.png" width="100vw"></a>
    <p>Bookshelf<br/>
    <a href="https://kevin-on-davis.github.io/KLIP_Project/">Deployed Application</a><br/>
    <a href="https://github.com/kevin-on-davis/KLIP_Project">GitHub Repository</a></p>
    </div>
    <div class="col-4">
      <a href="./assets/WeatherDashboard.png" class="app_icon" target="#"><img src="./assets/WeatherDashboard.png" width="100vw"></a>
      <p>Weather Dashboard<br/>
      <a href="https://kevin-on-davis.github.io/L2K_WeatherDashboard/">Deployed Application</a><br />
      <a href="https://github.com/kevin-on-davis/L2K_WeatherDashboard">GitHub Repository</a></p>
    </div>
    <div class="col-4">
      <a href="./assets/RandomPasswordGenerator.png" class="app_icon" target="#"><img src="./assets/RandomPasswordGenerator.png" width="100vw"></a>
      <p>Random Password Generator<br/>
      <a href="https://kevin-on-davis.github.io/ResponsivePasswordGenerator/">Deployed Application</a><br />
      <a href="https://github.com/kevin-on-davis/ResponsivePasswordGenerator">GitHub Repository</a></p>
    </div>
    </div>`
  );
});

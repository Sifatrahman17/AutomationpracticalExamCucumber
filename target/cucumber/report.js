$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Change_The_ColorPage",
  "description": "Change The Screen color",
  "id": "change-the-colorpage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5132361600,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#@Scenario1"
    }
  ],
  "line": 5,
  "name": "Sky Blue BackGround",
  "description": "",
  "id": "change-the-colorpage;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on the changeTheColorPage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Set SkyBlue Background button exists",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_the_changeTheColorPage()"
});
formatter.result({
  "duration": 857675000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.set_SkyBlue_Background_button_exists()"
});
formatter.result({
  "duration": 254900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.before({
  "duration": 3220417900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sky White BackGround",
  "description": "",
  "id": "change-the-colorpage;sky-white-background",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Scenario2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The background color will change to sky white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.set_SkyWhite_Background_button_exists()"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.the_background_color_will_change_to_sky_white()"
});
formatter.result({
  "duration": 70400,
  "status": "passed"
});
});
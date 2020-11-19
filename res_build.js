// #############################################################################

/*
#### TO DO ####

- change validity checks for input (i.e telephone number can only receive
numbers and no letters), apply this to most inputs
- add a button to save past experiences, then in back end before creating
the resume with the final button, to be able to save and display all of
the experiences that the user has inputted
- create a hover functionality for both textareas and buttons
- fix the text in resizing
- fix the buttons, center them and fix dimensions

#### TO DO ####
*/

// #############################################################################

// #############################################################################
//                           FUNCTIONS AND VARIABLES
// #############################################################################
// this function takes the input of the github url and makes a button appear
// the button will lead to the inserted github

var gitHub;

function giveUrl() {
  var gitUrl = document.getElementById('website');
  console.log('inserted git url: ' + gitUrl.value);
  console.log(typeof gitUrl.value);
  if (gitUrl.value.length > 0) {
    var newGit = document.getElementById('git');
    newGit.href = gitUrl.value;
    console.log('new git url: ' + newGit.href);
    document.getElementById('gitHubLogo').style.display = 'inline-block';
  } else {
    document.getElementById('gitHubLogo').style.display = 'none';
  }
}

// #############################################################################
// this function checks how long the content of the textarea is
// and if its lower than a certain amount, then it will print an alert

var textField;

function checkLength() {
  var textField = document.getElementById('personalInfo').value;
  console.log(textField);
  console.log(textField.length);
  if (textField.length < 100) {
    alert('A minimum of 100 characters is required')
  }
}




// #############################################################################
// this function removes the experience banners in case its the users first job

var startDLabel;
var startD;
var endDLabel;
var endD;
var currEmpLab;
var currEmp;

function killSwitch() {
  var startDLabel = document.getElementById('startLab');
  var startD = document.getElementById('startDate');
  var endDLabel = document.getElementById('endLab');
  var endD = document.getElementById('endDate');
  var currEmpLab = document.getElementById('EmplLab');
  var currEmp = document.getElementById('employment');
  console.log(currEmp.value);
    startDLabel.style.display = 'none';
    startD.style.display = 'none';
    endDLabel.style.display = 'none';
    endD.style.display = 'none';
    currEmpLab.style.display = 'none';
    currEmp.style.display = 'none';
}

// #############################################################################
//







// #############################################################################
// main function

function createResume() {
    const fullName = document.getElementById("fullName").value;
    const fullAddress = document.getElementById("fullAddress").value;
    const phone = document.getElementById("telePhone").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const career = document.getElementById("careerSkills").value;
    const personal = document.getElementById("personalInfo").value;
    const education = document.getElementById("educationDeets").value;

    let startDate = document.getElementById("startDate").value;
    let endDate = document.getElementById("endDate").value;
    let employment = document.getElementById("employment").value;

    let myText =
        `<html>
          <head>
            <title>My Resume</title>
              <link rel='stylesheet' type='text/css' href='CSS/res_build.css' />
              </head>
         <body>
         `;

    myText += `
              <div class='name'>
                ${ fullName }
                 </div> `;
    myText += `<div>
                ${ fullAddress }   /  ${ phone }
                </div> `;
    myText += `<div>
                  ${ email }
                  </div>`;
    myText += `<div>
                 ${ website }
                </div>
                <br>
                <hr>`;

    myText +=
        `<div>
            <div class='left'> MY SKILLS </div>
            <div class='right'> ${ career }</div>
          </div>
              <br> `;
    myText +=
          `<div>
            <div class='left'> ABOUT ME </div>
            <div class='right'> ${ personal } </div>
          </div>
             <br>`;
  myText +=
       `<div>
          <div class='left'> EDUCATION </div>
          <div class='right'> ${ education } </div>
        </div>
          <br>`;

  if (startDate )
    {
    myText += `<div>
          <div class='left'> EMPLOYMENT </div>
          </div>
          <br>`;

    myText += `<div>
            <div class= 'left'> ${ startDate }  - ${ endDate } </div>
            <div class='right'> ${ employment }  </div>
            </div>
            <br>`
  }

  myText +=
          `<div class='right'>
            <br>
            <input type='button' id='download' name='download' value='Download' onclick='window.print()' />
            </div>
          </body>
          </html>`;


let flyWindow = window.open(
    "about:blank",
    "myResume",
    "width=800,height=800,left=200,top=200"
  );

  flyWindow.document.write(myText);
      }

// #############################################################################

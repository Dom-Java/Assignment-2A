Name: Dominic Holliday

Assignment 2A 

Architecture, User Journey & 

Semantic Component Decomposition for Student Assignment 2 

**System 2**: Greenhouse Sensor Logger UI (project name: agriculture watch)

Note to students: I have designed functionality of this assignment by using the following application as an inspiration: https\://www\.agrosense.com/ . However, you are not supposed to design anything mirroring the original site. Follow the instructions below to design what is outlined. The knowledge and skills required to complete this assignment is covered in Class Demo \#2. Follow the lessons and make your notes. 

**Assignment Category:** Architecture & UX Deconstruction Schematics 

**Deliverable Format:** 

GitHub Link: https\://github.com/Dom-Java/Assignment-2A.git 

**Total Points:** 30 Points 

**Prerequisites:** 

● Completion of Assignment 1A and 1B: Knowledge of HTML5 semantic tags, layout/anatomy of an HTML page and its styling implemented using CSS. ● JS: event handling concepts and persistent storage on client-side (instruction given through InClass Demo \#2) 

4\. Required Deliverable Sections  
Your submitted document must follow this exact section structure shown below. If you missing any of the section, you will receive appropriate penalties. Make sure to carefully go through these instructions. 

Section 4.1: The Less-than-equal-4-Click User Journey Funnel 

Deconstruct the primary user workflow into four discrete steps or fewer, starting from initial page load to final user output (to simplify the process, I have given the states along with hint for each step): 

● Starting State: What will your UI show when it loads? (one to two sentences) ● Action 1: Data Entry & Real-Time Constraint Check. Explain this process in one to two sentences. How will this happen using your page elements? 

* Upon the completion of the page loading process, the user will be able to see a navbar with a login and about use button, as well as a logo. The user will also see 2 sections, one containing the form for data entry and the other containing empty space to log future cards.

● Action 2: Log Submission. What will happen when user clicks submit button? 

* Upon making a submission the user data will be stored in javascript variables that will be located in the js file. These variables will represent different html element IDs.

● Action 3: Output Telemetry Inspection. How will your UI state change once it has received the submission? 

* The UI will output a new card onto the screen in the adjacent dashboard to the aside containing the form.  
  ● Action 4: Output Resolution. How can your users interact with the output portion of your UI?   
* The output will be viewable by the User.  
  ● Terminal State. What will the final state of your UI look-like after the user is done interacting with your app? Remember, the correct answer here is your ability to interpret what a ‘completed’ user interaction looks like and in response to that explain what the UI state will look like.   
* The User will see a completely cleared card containment section which will be triggered by clearing the cache for the web page via a button on the website. The page will return to its original state before the user entered form info.

Section 4.2: Don Norman Usability & Constraint Audit 

**Answer the questions listed in the third column of the table below in your own words**. The system context and Don Norman learning principles are given in the 2nd and 1st columns, respectively.

Norman Principle / Concept 

System Context 

Questions to Answer Using Concrete Implementation Mechanism (DOM / HTML / JS)

Gulf of Execution 

Typing numeric sensor 

metrics (pH, 

ElectricalConductivity\[EC\], Temp, Humidity)

How do field labels, units of measure, and placeholder attributes clarify expected formats to the user?

Field labels indicate whether or not inputs require text or numerical characters. Field labels, specifically placeholders, indicate the format in which to enter the data.

Gulf of Evaluation 

Ingesting sensor values after clicking "Record Reading"

How does the system immediately communicate whether the input given is in a normal, warning, or hazard state?

Through a predefined js function, the system has a set of ranges that are acceptable, and those acceptable ranges have classifications depending on the numbers in their range.

System Constraint 

E.g. Water pH Boundaries (0.0 \<= pH \<= 14.0)

What attributes and validation conditions prevent impossible scientific values from entering state?\* 

The min and max html attributes allow a developer to restrict which numbers are allowed to be submitted. Furthermore, the “type” attribute, allows developers to define whether text or numbers are allowed as inputs.

See hint after this 

table.

Visual Feedback State 

Real-Time Input Error / 

Out-of-Bounds

What visual property or class change alerts the user that a typed number is 

dangerous/wrong before submission?

Usually, a pop-up will appear below the input box, if the input is invalid. This is to warn the user that their input will not be taken.

Error Recovery 

Accidental or test data 

submissions

What affordance exists to clear bad records or 

accidental inputs from the active queue?

A “clear queue” button can be added to the page, which can connect to a js function that will clear the page’s cache.

Section 4.3: Component, DOM Tree & Event Target Architecture 

Deconstruct the full webpage UI document into a bulleted component tree modeling the DOM hierarchy. (using indentation as I have shown you in class demo). 

**Mandatory Rules for the Tree:** 

My code:  
\<\!doctype html\>\<static\>  
\<html lang\="en"\>\<static\>  
  \<head\>\<static\>  
    \<meta charset\="UTF-8" /\>\<static\>   
    \<meta name\="viewport" content\="width=device-width, initial-scale=1.0" /\>\<static\>  
    \<title\>Agriculture Watch\</title\>\<static\>  
    \<link rel\="stylesheet" href\="Assignment\_2A.css" /\>\<static\>  
  \</head\>  
  \<nav class\="nav"\>\<static\>  
   
      \<a href\="" class\="logo-container"\>\<static\>  
        \<img class\="logo" src\="logo.png" alt\="" /\>\<static\>  
      \</a\>  
    \</span\>

    \<h1 class\="nav-item site-heading site-text"\>Agriculture Watch\</h1\>\<static\>

    \<a href\="\#" class\="btn nav-item"\>About us\</a\>\<static\>  
    \<a href\="\#" class\="btn nav-item"\>login\</a\>\<static\>  
  \</nav\>  
  \<body class\="page-bg"\>\<static\>  
    \<main class\="main"\>\<static\>  
      \<aside class\="forms-side"\>\<static\>  
        \<header\>\<static\>  
          \<h2 class\="site-text"\>Input Telemetry Data:\</h2\>\<static\>  
        \</header\>  
        \<div\>  
          \<form \<static\>  
            class\="health-form" \<static\>  
            id\="tele\_form" \<static\>  
            action\="Assignment\_2A.html" \<static\>  
            method\="post" \<static\>  
             
          \>  
            \<label class\="form-element" for\="tele\_form" \<static\>  
              \>Bay Number \#\</label \<static\>  
            \>  
            \<input type\="number" class\="form-input-bg" id\="bay\_num" name\="bay\_num" min\="1" max\="50" placeholder\="\# between 1 and 50" required/\>  \<static\>

            \<label class\="form-element" for\="tele\_form"\>pH level \#\</label\> \<static\>  
            \<input type\="number" class\="form-input-bg" id\="pH\_num" name\="pH\_num" min\="0" max\="14" placeholder\="\# from 0 to 14, example: 6.4" required/\>  \<static\>

            \<label class\="form-element" for\="tele\_form" \<static\>  
              \>Temperature (F) \</label  
            \>  
            \<input type\="number" class\="form-input-bg" id\="temp\_num" name\="temp\_num" min\="45" max\="110" placeholder\="Temp between 45 and 110" required/\> 

            \<label class\="form-element" for\="tele\_form" \<static\>  
              \>Electrical conductivity mS/cm \</label  
            \>  
            \<input type\="number" class\="form-input-bg" id\="ec\_num" name\="ec\_num" min\=".05" max\="5.5" placeholder\="\# of ec between .5 and 5.5" required/\>

            \<label class\="form-element" for\="tele\_form" \<static\>  
              \>Relative Humidity (%)\</label  
            \>  
            \<input type\="number" class\="form-input-bg" id\="hum\_num" name\="hum\_num" min\="10" max\="110" placeholder\="Percent between 10 and 110" required/\>

             
            \<div class\="form-element"\> \<static\>  
              \<button class\="btn" for\="tele\_form" type\="submit" id\="submit\_btn" onclick\="newCard()"\>   
                Submit Form  
              \</button\> \<Dynamic\> \<Event Listener\>  
            \</div\>  
          \</form\>  
        \</div\>  
        \<\!-- This will be used for the user to fill out their info \--\>  
      \</aside\>

      \<section class\="dashboard-side"\> \<static\>  
        \<header\> \<static\>  
          \<h2 class\="site-text"\>Agricultural Health Dashboard: \</h2\> \<static\>  
          \<div\> \<button id\="purge" class\="btn dashboard-header" onclick\="clearCard()"\>Purge queue\</button\> \<Dynamic\> \<Event Listener\>  
\</div\>  
        \</header\> \<static\>  
          \<div id\="card"  class\="card"\> \<static\>  
            \<p\>Bay Number:\</p\> \<static\>  
            \<p id\="bay-num-out"\>\</p\> \<static\>  
            \<p\>Acidity:\</p\> \<static\>  
            \<p id\="pH-num-out"\>\</p\> \<static\>  
            \<p\>Temperature\</p\> \<static\>  
            \<p id\="temp-num-out"\>\</p\> \<static\>  
            \<p\>Electrical conductivity\</p\> \<static\>  
            \<p id\="ec-num-out"\>\</p\> \<static\>  
            \<p\>Relative Humidity\</p\> \<static\>  
            \<p id\="humidity-num-out"\>\</p\> \<static\>  
            \<p\>Criticality\</p\> \<static\>  
            \<p id\="Criticality"\>\</p\> \<static\>  
          \</div\>  
         
        \<\!-- This will display the users dashboard \--\>  
      \</section\>   
    \</main\>  
  \</body\>  
  \<script src\="Assignment\_2A.js"\>\</script\> \<Dynamic\>  
  \<footer class\="footer"\> \<static\>  
    \<p class\="site-text footer-text"\>\&copy; Agriculture Watch 2026\</p\> \<static\>  
  \</footer\>  
\</html\> \<static\>

●Section 4.4: Data Schema 

const healthProfile \= { 

bayName: int, // a number indicating which bay is being logged 

pHLevel: float, // a float indicating the acidity of the bay

temperature: int, // temperature of the bay (in fahrenheit)

ec: float, // a float that records the electrical conductivity of the bay

humidity: int, // a number denoting the humidity of the bay

}; 


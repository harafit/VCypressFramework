# VCypressFramework

Cypress Introduction
--------------------

Javascript/Typescript


VS Code 


What is Cypress?

->Frontend web automation testing tool
->Modern Web Application -(ReactJS, NodeJS, AngularJS, JavaScript, HTML, CSS)


->Not using Selenium ->JARs 

->Open Source -> Runner + Dashboard 

-> Into the cypress

->npm -> Node Package Manager 


Pre-requite
-----------

node installation
VS Code 
Cypress - Do the initial setup

Who can use Cypress
-------------------

End to End Test Cases
Integrated Test Cases
Unit test case

API Testing
-----------


Installation for Cypress
------------------------

1. Download and install node JS  -- https://nodejs.org/en/download/prebuilt-installer

2. Download and install visual studio code (VS Code) -- https://code.visualstudio.com/download

3. Create a new folder in machine and open that folder using vs code

-Open Terminal - npm -i init --> Create package.json file

4. To Install Cypress - npm install cypress --save -dev

5. Start Cypress - npx cypress open   /  node_modules/.bin/cypress open




Run Cypress Test
----------------

Using cypress runner
Using command terminal
npx cypress run --browser chrome --headed --spec "JS Path"


Run Specific File - yarn, npm 

npx cypress run --spec cypress/e2e/CypressPractice/FirstTestCase.cy.js

Run in Headed Mode

npx cypress run --spec cypress/e2e/CypressPractice/FirstTestCase.cy.js --headed

Run in Different Browser 

npx cypress run --spec cypress/e2e/CypressPractice/FirstTestCase.cy.js --browser chrome --headed




How to Stop Auto Rerun Test in Cypress
--------------------------------------
In cypress.config.js file

watchForFileChanges:false



IntelliSense Code Completion
----------------------------

There are 2 ways

1. Add below line in Javascript spec file - 
///<reference types = "Cypress"/>

2. Create jsconfig.json at root folder, add below code 
{
	"include":["./node_modules/cypress","cypress/**/*.js"]
}



Disable Fetch and XHR Logs
--------------------------
Need to add code under - 

Support> e2e.js -


const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
 const style = app.document.createElement("style");
 style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
 style.setAttribute("data-hide-command-log-request", "");
 app.document.head.appendChild(style); 
}


IntelliSense Code Completion
----------------------------

There are 2 ways

1. Add below line in Javascript spec file - 
///<reference types = "Cypress"/>

2. Create jsconfig.json at root folder, add below code 
{
	"include":["./node_modules/cypress","cypress/**/*.js"]
}


Locators - 
--------
AUT - https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

->SelectorHub
->ChroPath

1. CSS Selector - By default cypress CSS Selector 


-> id -- If you know the ID please use with #<idvalue>

-> class -- "oxd-input oxd-input--active" -- .oxd-input.oxd-input--active ->If you know the class name please start with .(dot) if there is space inbetween remove those space please put dot(.)

-> attribute -- [attribute="value"]

-> attribute with class -- class[attribute="value"]


<input data-v-1f99f73c="" class="oxd-input oxd-input--active" name="username" placeholder="Username" autofocus="" xpath="1">

input - tagName
class, name, placeholder, autofocus - attribute 




First Add to Cart  -  div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(3) button:nth-child(1)

Second Add to Cart -  div[id='content'] div:nth-child(1) div:nth-child(1) div:nth-child(3) button:nth-child(1)



Assertions - 
---------- 

Examples:

a) to.equal
cy.get('textarea[type="search"]').then((element)=>{
})
expect(element.text()).to.equal("cypress course");


b) have.text
cy.get('textarea[type="search"]').should ("have.text","cypress course")


c) contain
cy.get('textarea[type="search"]').should("contain","cypress course")


d) be.visible
cy.get('textarea[type="search"]').should("be.visible");


e) have.html
cy.get('textarea[type="search"]').should("have.html","cypress course")


f) have.attr
cy.get('textarea[type="search"]').should("have.html","cypress course").and("have.attr","value")


g) have.attr & include
cy.get('textarea[type="search"]').should("have.html","cypress course") .and("have.attr", "value").and("include","javascript by testers talk");


h) to.have.length
cy.get('textarea[type="search"]').then((element)=>{
})
expect(element.text()).to.have.length(26);

CSS Selector 
------------

Selectors Examples: 
------------------


a) Attribute
cy.get('textarea[type="search"]').then((element)=>{ cy.log("Text from Google 1: "+element.text());
})

b) Id

cy.get('#APjFqb').then((element)=>{
cy.log("Text from Google 2: "+element.text());

c) Class, First, Last, Index

cy.get('.IUOThf> a').first().click(); 
cy.get('.IUOThf> a').last().click()
cy.get('.IUOThf>a').eq(1).click();|

d) Starts-with & Ends-with

cy.get('button[type^="sub"]').click();
cy.get('button[type$="mit"]').click();

e) Contains - CSS Selector

cy.get('button[type*="ubmit"]').click()

f) Contains - Cypress

cy.contains("Cypress").click()

g) Tag Name

cy.get('tp-yt-paper-tab > div').eq(1).click()


XPath in Cypress
----------------

Xpath - 

1. Relative - It always start with - /
			

2. Absolute - It always start with - //
			Ex - //textarea[@id='APjFqb']

Step1 - Add Install cypress-xpath plugin, using below code 
	  - npm install -D cypress-xpath

Step2 - Add - require('cypress-xpath') line in e2e.js file

Step3 - Start using Xpath - cy.xpath('Locator');


Run Test From VS Code
---------------------

Cypress Runner Extension


DropDown List - RadioButton - Checkbox
--------------------------------------

https://example.cypress.io/commands/actions

There are 3 Ways to Handle the Dropdown in Cypress

1. Index
2. Visible Text
3. Value

- Static Dropdown
- Dynamic Dropdown
- Using Select Tag
- Without Select Tag
- each method in Cypress

RadioButton and Checkboxes -- type = 'radio' and type = 'checkbox'
- check()
- uncheck()
- be.checked
- not.be.checked
- be.visible

Navigation Commands 
- cy.go -- back
- cy.go -- forward
- cy.go -- -1
- cy.go -- +1
- cy.reload()



Query
-----
1. deep.equal - Assertion
2. Dynamic Value - Care during framework creation


<span#select2-billing_country-container.select2-selection__rendered> 
to deeply equal 
<span#select2-billing_country-container.select2-selection__rendered>

Sample Applications 

https://testautomationpractice.blogspot.com/
https://www.dummyticket.com/dummy-ticket-for-visa-application/
https://www.wikipedia.org/
https://www.zoho.com/commerce/free-demo.html



Mouse Operations
---------------

1. Mouse Hover
2. Double Click 
3. Right Click
4. Drag and Drop
5. Scrolling 

https://demo.opencart.com/. 
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3
http://swisnl.github.io/jQuery-contextMenu/demo.html
http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html
https://scroll.in/tag/Swiggy


2 Plugins
1. Cypress-Iframe
2. Cypress-Drag and Drop


Hooks and Tags in Cypress
-------------------------
 'beforeEach'
 'afterEach'
 'before'
 'after'


Alerts
------

1. JS Alert with only Ok option
2. JS Alert with Ok and Cancel option
3. Prompt Alert
4. Authenticated Alert

http://the-internet.herokuapp.com/javascript_alerts
https://the-internet.herokuapp.com/basic_auth




Handling Windows
----------------

1. Remove the 'target' attribute and perform the operation - Using invoke command in cy
2. Get the property of the webelement - href and store it in a variable and navigate to that url



CaptureScreenshots and Videos in Cypress
----------------------------------------



HTML Reports 
-----------

https://www.npmjs.com/package/cypress-mochawesome-reporter



Toast Messages 
--------------
https://primeng.org/toast



Handle Error which is not from Cypress - It is from application
---------------------------------------------------------------
https://www.ebay.com/


How to use viewport - in Cypress
--------------------------------


How to Upload the file in Cypress
---------------------------------
https://the-internet.herokuapp.com/upload


How to Download the file in Cypress
-----------------------------------


How to use Fixture in Cypress 
-----------------------------


How to create custom Commands in cypress
----------------------------------------

- Navigating to https://opensource-demo.orangehrmlive.com/
- Entering username
- Entering password
- Clicking on Login button
- Clicking on logout

TC1 
- Login()
- Dashboard()
- Logout()

TC2 
- Login()
- CreatingEmployee()
- Logout()

TC3
- Login()
- DeletingEmployee()
- Logout()


What is PageObjectModel (POM)

Core Benefit 
- Code Reuse
- Code Reliablity
- Code Read
- Code Main

3 Files --
1. Actual Test Cases
2. Web Element File 
3. Actions 

LoginPageTC
LogingPageWebElement
LoginPageAction

Create Below TCs - 
1. Login - 
2. ForgotPassword
3. Search for Admin - Count the number of Rows - Validate using assertion for the count - It should match 


Cypress Cloud - Cypress Dashboard
---------------------------------


npx cypress run --spec 'path of spec file'

Cloud - 

npx cypress run --record --key b484d95c-028f-4e69-8dad-2658699051fa


API Testing
-----------


Application Programming Interface - Testing - 

GET - To get the information.

POST - To create a new record. 

PUT - To update the existing record.

PATCH - To update single entity.

{
	"name":"abc"
	"email":
	"salary":

}

DELETE - To delete the record.

Client --------- Server 

URL --> Server --> Server will acknowlege --> Server will provide response --> UI will get loaded 

Flipkart --> Ecommerce --> BillDesk (APIs)

EndPoint - 
https://mapi.makemytrip.com/empeiria/api/v2/pwaflight?brand=mmt&profile=b2c&device=pwa&version=6.0&region=in&language=eng&currency=inr

Method Type - 
POST

Request Payload - JSON

Query Parameter - brand=mmt&profile=b2c&device=pwa&version=6.0&region=in&language=eng&currency=inr

{"user":{"deviceInfo":{"trafficSource":{"referringDomain":"https://www.google.com/"}}},"containerType":"FLIGHT"}






























































































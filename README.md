# Zwift_Automation_Test

Welcome to Zwift Automation test , let's get started with some testing. 

Step 1. 
- Clone the project to your desired project path.

Step 2.
Installing Cypress
- npm install
Install Cypress via npm:

cd /your/project/path
npm install cypress --save-dev ( I normally do this for my projects )
This will install Cypress locally as a dev dependency for your project. 

Step 3. 
Opening Cypress
If you used npm to install, Cypress has now been installed to your ./node_modules directory, with its binary executable accessible from ./node_modules/.bin.

Now you can open Cypress from your project root one of the following ways:

The long way with the full path

./node_modules/.bin/cypress open
Or with the shortcut using npm bin

$(npm bin)/cypress open
Or by using npx

note: npx is included with npm > v5.2 or can be installed separately.

npx cypress open ( I prefer this option )

I run Chrome as default , we can also set preferred browser setting in the cypress.json file or change it from the Test Runner it self see ex > https://www.dropbox.com/s/s1hma8qqrtf33c7/Screenshot%202020-07-17%2000.29.53.png?dl=0

Step 4. 
After you ran the last command to open the Cypress Test Runner your should see this window > https://www.dropbox.com/s/33b3aenzp7a1hn0/Screenshot%202020-07-17%2000.33.57.png?dl=0
- There is 1 test called Zwift_test.spec.js , if you click on it you will execute the 2 tests inside of the spec file. ( Chrome Automation instance will open )

Step 5. Grab a cup of coffee :) 

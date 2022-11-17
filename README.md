
# A History Quiz Game - Javascript
Developer: Philip Jambrisak

![Multi Device Screenshot](assets/docs/Am_I_Responsive.png)

[View Live Website Here](https://jambrisak.github.io/Quiz-Application/)

This is A History Game created as Portfolio project #2 (JavaScript Essentials) for Diploma in Full Stack Software Development at [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/).
It is an interactive front-end quiz app where user can test their knowledge about History. The application is easy to use for the user,
it is responsive across a range of devices and incorporates best practices regarding design and accessibility.

The project purpose is a presentation of interactive data. The site should respond to the users actions allowing users to actively
engage with data, alter the way the site displays the information to achieve their preferred goals.

## Table of content
1. [Project](#project)
	- [Strategy/Scope](#strategy-scope)
	- [Site Owner Goals](#site-owner-goals)
    - [Site User Goals](#site-user-goals)
2. [User Experience(UX/UI)](#user-experience)
	- [Color Scheme](#color-scheme)
    - [Typography](#typography)
	- [Structure](#structure)
3. [Technology](#technology)
    - [Languages used](#languages-used)
    - [Frameworks, libraries & software used](#frameworks-libraries-software-used)
4. [Testing](#testing)
    - [Accessibility](#accessibility)
    - [Performance](#performance)
    - [Validation](#validation)
    - [HTML](#html)
    - [CSS](#css)
    - [JavaScript](#javascript)
    - [Browser compatibility](#browser-compatibility)
    - [Platforms/devices](#platforms-devices)
    - [Bugs](#bugs)
    - [Responsiveness](#responsiveness)
    - [Peer Review](#peer-review)
5. [Deployment](#deployment)
6. [Credits](#credits)
    - [Learning resources](#learning-resources)
    - [Acknowledgements](#acknowledgements)

## Project
### Strategy/Scope
A History Game Quiz Game is an entertainment app intended for users who wanna test their History knowledge. The game contains the same questions, hard questions that will even stomp a history teacher. The game is aimed for testing your knowledge of world history and hopefully teaching you something you did not know.

The content is presented on a single page that interactively changes content depending on the users actions. The **primary goal**
is to entertain the user during the game. The **secondary objective** is to improve the users knowledge about History. With this in mind,
does the application provide the users a feedback after each game.

To achieve the strategy goals I implemented following features:
- Simple website layout with the content located in the center of the viewport.
- Easy to click buttons both on computers and mobile touch interfaces.
- Intuitive game interface that presents important information and controls in a clear way.
- Visual feedback to users actions.
- Eye-pleasing graphics to make the experience entertaining.

### Site owner goals
- Provide entertaining and an interactive experience for the users.
- Provide a game app with questions with a high difficulty level.
- Provide a link to linkedin and the project's GitHub repository, to interest users in the project and to obtain new followers.
- To provide a website that looks well across a range of devices and screen sizes.
- To provide an application that challenges the user with a set time per question.

### User goals
As a user I want to:
- Navigate easy throughout the page.
- See clean interface and be able to track progress/score.
- Know how many questions I have left to answer.
- Receive feedback for given answers.
- Learn something new about History.
- Enjoy the game.
- Be able to re-play the game without using "back" button in the browser.
- Follow the developer in social media.
## User Experience (UX/UI)
### Color Scheme
Color palette was selected using [Happy Hues](https://www.happyhues.co/) and has applied to the recommended UI elements.

For best readability and clean look was #004643 used for the background of the quiz. The buttons was given the color of #f9bc60
and the text color for the buttons was given #001e1d. For the headline the color of #fffffe was chosen because against the background,
that color was best because it stood out against that background. For when the user selects the correct option, the color to show that it was correct was given the color of #23903c.
And for showing when the user made the wrong selection of option, the color of that option was #a4283a.

When the user gets the right answer in the quiz the color of #28a745 and when the answer is incorrect they are shown the color #dc3545.
### Typography
- The [Poppins](https://fonts.googleapis.com/css?family=Poppins:weight@200;300;400;500;600;700&display=swap) is the font used throughout the whole website with Sans-serif as the
fallback. The Robot font is clean, modern looking and it is easy to the eyes. It is sourced from [Google Fonts](https://fonts.google.com/)
and it is imported in the CSS document via @import.

### Structure
Wireframes
I created Wireframes to help me visualize the design for the site and have a template to use when I started to build the site sections. 
- Home page [view](assets/docs/Home_Page_Wireframes.png) 
- Rules Page [view](assets/docs/Rule_Page_Wireframes.png)
- Game Page  [view](assets/docs/Game_Page_Wireframes.png)
- End Page [view](assets/docs/End_Page_Wireframes.png)


The page is designed in a very simple way. All pages shares the same color palette and the content is located in the center of the screen.
The content is changed dynamically by JavaScript.

### Start screen
The main menu was designed to provide an introduction to the application via an attractive logo and heading. 
All menu options are presented in this element with the Play button allowing new visitors to start a quiz immediately. But not before being shown the rules for the quiz. 
There is also a button that will take you back to my portfolio website.
![Home page](assets/docs/Home_Page.png)

### Rules page
When the user clicks the play button, the rules page is displayed and the user is prompted to read the rules. After the user has read the rules, the user can then start the quiz. 
![Rules Page](assets/docs/Rules_Page.png)

### Game page
The game page is designed to give clear information about what question the user is answering, and which are the choices.
It is also designed to give the user information about his/hers current score, and how many questions the user has answered.
![Game Page](assets/docs/Game_Page.png)

### Heads Up Display
The heads up display displayes the title of the quiz and also the timer and shows the user how much time he/her have left in the quiz.
![Heads up display](assets/docs/Heads_Up_Display.png)

### Questions
The user will have 30 questions to do and they will all display, question number and then the question itself.
![Questions](assets/docs/Game_Page.png)

### Visual feedback for correct and incorrect answer.
The choices is designed to show when the user gets the correct choice or the incorrect choice. The buttons also have a hover effect to show the user which button their mouse is on.
![Correct Answer And Incorrect Answer](assets/docs/Correct_Incorrect_Answers.png)

### Score page
When the quiz ends, the score of the game shows up.
The user also have a choice to play the quiz again or go back to the home page.
![End page](assets/docs/End_Page.png)

### Future Development
- Utilize more features of the API
    - The API offers a feature to generate and use a session token to prevent duplicate questions appearing until all have been exhausted from the database. I would like to utilize this to avoid repeated questions.
    - The API Database contains True or False questions and I would like to incorporate these in the quiz as currently this application only uses multiple choice questions.
- Leaderboard
    - Results are only displayed at the end of the quiz with no option to share or track progression over the session. I would like to implement a high score table where users could compare the number of questions they answered (per session) against each other.
- Statistics
    - More information could be gathered from the play session of a user such as their best and worst categories to further track progress and development.
- Sounds
    - Would be used to notify users of certain game events and help bring the application to life.
- Feedback form/prompts
    - This would allow users to submit bug reports and allow the collect of information regarding the questions content. The feedback would be reviewed and if valid later submitted to the API creator to help improve the questions database.

## Technology
### Languages Used
- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/CSS)
- [JavaScript ES6](https://en.wikipedia.org/wiki/JavaScript)
- [Markdown - language used to write this document.](https://en.wikipedia.org/wiki/Markdown)

### Frameworks, libraries & software used
- [Balsamiq](https://balsamiq.com/) - Balsamiq was used to create wireframes during the design process.
- [Coolers.co](https://coolors.co/) - Was used to find a color palette.
- [Google Fonts](https://fonts.google.com/) - Google Fonts were used to import the 'Poppins' font into the app.css file which is used on all pages throughout the project.
- [Font Awesome](https://fontawesome.com/) - Font Awesome was used on all pages throughout to add icons for the footer.
- [Git](https://git-scm.com/) - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
- [GitHub](https://github.com/) - GitHub is used to store the projects code after being pushed from Git.
- [VS Code](https://code.visualstudio.com/) - IDE used to code the project.
- [Gimp](https://github.com/) - GIMP was used to edit and resize photos for the readme.
- [Am i Responsive](https://ui.dev/amiresponsive) - Online tool used to create mockup to present responsive design of this project.
- [Lightshot](https://app.prntscr.com/en/index.html) - Google Chrome extension used to capture screenshots for this README document.
- [Lighthouse](https://web.dev/measure/?gclid=CjwKCAjwzNOaBhAcEiwAD7Tb6HRAAz5BpsJHUTZjbUjVem1pf9IRxhdD_eaBsI6zUzFgKYOPNUNYnhoCbuoQAvD_BwE) - Google WebDev tool used for performance/accessibility testing.
- [Icons8](https://icons8.com/icons/set/History) - Tool used to create favicon / Logo.

The following Visual Studio Code extensions were utilized in the production of this project:
- [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify) - Used for code formatting.
- [Rewrap](https://marketplace.visualstudio.com/items?itemName=stkb.rewrap) - Used to wrap comments and site text.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - Used to spell check content and commits.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Used to provide a locally hosted live preview of the site during development.
- [jshint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint) - JSHint is a linter for JavaScript.
- [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow) - Makes indentation easier to read.
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - Markdown linting and style checking for Visual Studio Code.

## Testing

### Performance
[Lighthouse](https://web.dev/measure/?gclid=CjwKCAjwzNOaBhAcEiwAD7Tb6HRAAz5BpsJHUTZjbUjVem1pf9IRxhdD_eaBsI6zUzFgKYOPNUNYnhoCbuoQAvD_BwE) - Google webdev tool used for performance testing showing near-maximum score.
- Desktop
![Desktop](assets/docs/Desktop_Lighthouse.png)
- Mobile
![Mobile](assets/docs/Mobile_Lighthouse.png)

### Validation
#### HTML5
- [W3c Markup Validator](https://validator.w3.org/) - Validation service used.
#### A History Quiz
In the Index.html no faults were shown and the HTMl code were green.
![Index.html](assets/docs/W3C_Validator.png)

#### CSS3
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload) - Validation service used.
#### style.css
In the W3C CSS validator check for app.css 5 errors 1 has been addressed, and the other 4 is not understood by the 
creater why they are showing up as an error.
![style.css](assets/docs/Css_validator_1.png)
![Style_css_errors](assets/docs/Style_css_errors_Lighthouse.png)

#### JavaScript ES6
[JS Hint](https://jshint.com/)
- JSHint shows 45 warnings and are warnings about the use of const
"Const is available in ES6 (use esversion: 6) or Mozilla JS extension (use moz)."
"let is available in ES6 (use esversion: 6) or Mozilla JS extension (use moz)".
"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6')."
- After a deep research i found out that you are allowed to use const and let for instance, and that the arrow function is allowed theese errors seem to only stem from JS Hint.
- No warning or errors reported using JSHint website when using the following parameters (entered at the top of the code section):
```// Use ECMAScript 8 
//jshint esversion:8
// Tell JSHint the currentQuiz global variable
// can be overwritten
/*global currentQuiz:true */
```

### Browser compatibility
Website was tested manually on following browsers:
- Google Chrome.
- Edge.
- Firefox.
- Safari.
- Opera/Opera GX.
The results were satisfactory on all browsers.

### Platforms/devices
Website was tested manually on:
- Apple Iphone X
- Apple Ipad.
- Apple MacBook Air.
- Samsung Galaxy Tab S7+
- Ultrawide display 3440x1440.
- Classic 16:9 2560x1440 display.
The results were satisfactory and proved good responsiveness on all screen sizes.

### Bugs
I encountered a problem when finishing the application when I was working on my restart button. It only did a partial reset, meaning that the application did not reset the player score or the correct / wrong answer.
Another bug i encountered and solved was the issue with next question button not working properly. It is now fixed thanks to some stackoverflow searching.
- There is one active bug: The timer is slow to start and wont start immediately you will have to wait a few seconds before it starts. I have tried fixing this but cant figure out how to do it.

### Per review
I asked my friends and fellow CI students to test the application and I received a lot of positive feedback, one issue was noticed
and it was that the text for questions and answers displayed some bugs.
Thanks to the feedback I implemented a new DB that shows no bugs in the text for either the questions or answers.

## Deployment
The project was deployed to GitHub Pages using the following steps:
- Log in to GitHub and locate the [quiz-game]() repository.
- Locate the "Settings" button on the menu.
- Scroll down the settings page until you locate "Pages" in "code and automation" section.
- Under "Source", click the dropdown called "Select branch:" and select "Main", click the dropdown called "Select folder" and select "/root".
- The page will automatically refresh and you receive message "Your site is published at ["https://jambrisak.github.io/My-JavaScript-Project/"]().
Result is below.

### Fork
If you want to fork this project with the intent to propose changes to the developer. It's good practice to regularly sync your fork with the original repository.
To do this, you'll need to use Git on the command line. 
- On GitHub.com, navigate to the [https://github.com/Jambrisak/My-JavaScript-Project](https://github.com/Jambrisak/My-JavaScript-Project) repository.
- In the top-right corner of the page, click **Fork**.
image
- Select an owner for the forked repository.
image
- By default, forks are named the same as their parent repositories. You can change the name of the fork to distinguish it further.
image
- Optionally, add a description of your fork.
image
- Choose whether to copy only the default branch or all branches to the new fork. For many forking scenarios, such as contributing to open source projects, you only need to copy the default branch. By default only the default branch is copied.
image
- Click **Create fork**
image

#### Cloning your forked repository
Right now, you have a fork of the My-JavaScript-Project repository, but you do not have the files in that repository locally on your computer.
- On Github.Com, navigate to your fork of the My-JavaScript-Project repository.
- Above the list of files, click **Code**.
image
- Copy the URL for the repository.
    - To clone the repository using HTTPS, under "HTTPS".
    - To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH.
    - To clone a repository using GitHub CLI, click GitHub CLi.
- Open Git Bash.
- Change the current working directory to the location where you want the cloned directory.
- Type git `git clone`, and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of `YOUR-USERNAME`: 
```$ git clone https://github.com/YOUR-USERNAME/My_JavaScript_Project```
- Press **Enter**. Your local clone will be created.
```$ git clone https://github.com/YOUR-USERNAME/Spoon-Knife
> Cloning into `Spoon-Knife`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remote: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

## Credits
### Learning resources
- [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI+-+SWE+-+Search+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=14660337051&hsa_grp=134087657984&hsa_ad=581817633086&hsa_src=g&hsa_tgt=aud-594467886660:kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwzNOaBhAcEiwAD7Tb6N3WGiztlBSEN8Er4wdekcvAJ_KwB8GUz1PJfQssgnTLnMNScuTcghoC8-UQAvD_BwE) - The JavaScript section and walkthrough project helped me alot in getting the knowledge needed.
- [W3C School](https://www.w3schools.com/) - When Code Institute could not give me the answer.
- [JavaScript and JQuery: Interactive Front-End Web Development by Jon Duckett](https://www.adlibris.com/se/bok/javascript-jquery---interactive-front-end-web-development-9781118871652) - When I needed to repeat or just see whatelse I could try when I was stuck.
- [GitHub Docs](https://docs.github.com/en/get-started/quickstart/fork-a-repo) was used when making the ### Fork section and ### Cloning your forked repository, the pictures and code is taken directly from there.
- [ianmeigh](https://github.com/ianmeigh/category-quiz) - His repo on how he did his category quiz helped me mainly with how he managed to do it all on one single page. 
- [Stackoverflow](https://stackoverflow.com/questions/15744736/stop-timer-in-the-middle-of-the-tick) - I used this site alot to help with fixing and figuring out how to achieve certain things, for instance how to fix the timer ticking down I used this to help me figuring out what I did wrong.
- [Udemy](https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649531?start=375#overview) - I have been doing this course over at Udemy, and it helped me along very well especially his Chapter(Section) 10 - 12.
### Acknowledgements
- My mentor Maranatha Ilesanmi for helpful feedback and guidance at all stages of the project.
- Niclas Tanskanen for being an amazing bouncing idea partner and an amazing tester.
- My girlfriend Maja Jönsson, for putting up with me working alot with my project and supplying me with coffee and snacks.

### Disclaimer
- A History Quiz was created for educational purposes only.
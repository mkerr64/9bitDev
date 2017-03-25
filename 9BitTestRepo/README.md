FROM MAIN REPOSITORY

GRAILS AND IntelliJ
- Download the most recent version of Grails and install: https://grails.org/download.html
- Download IntelliJ ultimate and install: https://www.jetbrains.com/idea/download/#section=windows
- To ensure that gradle is running properly on IntelliJ, 


TO CLONE PROJECT

OPTION 1
- Fork the project repository on GitHub
- Open IntelliJ and click VCS > Checkout from Version Control > GitHub
- You will be asked to sign in to your GitHub account, once you do so, enter the url 
of your fork of the project (i.e: https://github.com/username/9BitDev/master/9BitTestRepo.git)
	- Remember that the project is stored in the folder 9BitTestRepo
	- The parent directory and directory name can be changed if desired.
- Click clone, and if successful, you will be prompted to open a new IntelliJ project


OPTION 2
- Click on "clone or download" on code page of repository
- Download zip file and open it
- Find the folder called "9BitTestRepo", this folder holds the project.
- Move project file to directory of choice (preferably IdeaProjects or where you installed Grails), this where the project will be stored.
- Open IntelliJ. If Intellij Is not installed, download it - must be ultimate version
- Open IntelliJ, go to file, then open
- Find the project folder where you saved it on your computer, select it and click OK.
- You should be prompted to open a new IntelliJ project. 


BUILD THE PROJECT

OPTION 1 - IntelliJ
- CLick the green arrow button in the upper right next to the Grails configuration name
- Project should open a localhost:8080


OPTION 2 - Command Line
- Go to the folder where your project is stored and SHIFT + right-click and select "open a new command window here"
- run grails
- then run-app

Dependencies: merged pull requests from group member GitHub repositories

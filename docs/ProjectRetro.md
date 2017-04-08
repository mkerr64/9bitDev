# Project Retrospective
[Home](README.md)

### Workflow

The branching model we used was to separate dev branches for a few members, but eventually defaulted back to using the primary master branch. Pulling was usually down by 
cloning the repository as a zip, or through IntelliJ, and pushing was done by only a few members. 
Our team used IntelliJ Ultimate as our IDE, and relied upon Grails for our backend, React for our 
front end, and Spring Security for user authentication.    
  
Task distribution went smoothly and job delegation had no issues. Roles were assigned 
with discretion from leaders (JianPing on front-end, Danielle on back-end and overall), and suggested by the members themselves based on their skills. Emily, Nicole and Andrew worked 
on front-end pages, with Andrew also on design and Purvai on CSS/HTML, with JianPing helping and leading. The implementation of the  Google Charts API for the visualization of our 
data was handled by Purvai, Andrew and JP. Back end was handled by Mitchell, Danielle, Daniel and Khasir, with other members, notably JianPing, stepping in to assist occasionally. 
Database was primarily handled by Daniel, and Mitchell managed the website and Github. The front end was executed relatively easily, though the backend 
could have had more members. In retrospect, having a 60/40 split or similar, with one or two more people on backend would have 
been ideal.   

### MVC / Design Patterns

#### What is the relationship between user interfaces, application logic, and data in your project?  
  
The user interfaces in our project are the 5 pages on the app: login, signup, dashboard, transaction and settings. 
The application logic follows 4 main ideas: the user needs to be authenticated before any pages other than 
signup and login (using Spring Security Core), the user can add a transaction to his/her account (using a 
controller to add transactions to a database), the user can view transaction details on a dashboard (using 
Google Charts API) and the user can view his/her achievements (using a controller to analyse database 
contents). All of these actions are done by the user on one of the 5 interfaces. The main data in our project are 
the transactions input by the user which are stored in the GORM data base. Other data include the user who is 
authenticated during login. Data such as transaction details are entered by the user and used as parameters to 
create the Transaction Object.  

#### Which collection of classes serve as the M, V, and C in MVC?   

The Model classes are represented by the groovy classes. For example, Transaction.groovy is a domain for 
Transactions. The View classes are represented by the javascript files which manage the frontend for each page 
in the app. The javascript files include views for the dashboard page, transaction page, settings page, login 
page, and signup page. gsp files are also used for the View classes in order to implement the URL mappings 
and the template for all pages once the user has logged in.  The Controller class is represented by 
TransactionTestController, DashboardController and SettingsController. TransactionTestController class adds 
transactions, checks achievements and returns the transaction database. DashboardController and 
SettingsController do not have any functions but exist for the purposes of user authentication – the user is 
unable to access pages after logging in unless that page has a Controller.   

#### If you were to start the project again today, what aspects of code organization could be improved in your project?   

The team would create multiple controller classes instead of depending on a single controller class to connect all frontend to all backend components. For example, there is a function that checks if achievements are met in 
TransactionTestController. We would put this in a SettingsController instead since the function is used in the 
settings page of our app. Secondly, the team would implement a second domain called user, that has a ‘has many’ relationship with the transaction domain. This would allow TransactionTestController to be designed 
such that fetching transactions from the database would only return transactions from the current user, rather than all transactions in the database.   

#### Did you implement your server-side program as a REST API?  

Yes, we did implement our server-side program as a REST API. All communication between our front-end 
and back-end is done through a REST API so any changes in one does not affect the other. 
This can be seen in our TransactionTestController which responds in either JSON or XML format. The controller 
contains multiple methods such as addTransaction which takes in three parameters and uses them to 
create a new Transaction object which is stored in a database. The parameters are in the URL when the 
method is called from the front-end.  

#### How do these classes communicate with each other? Give an example based on a user action.   

They communicate with each other through the Controller classes. An example would be when a user 
wants to add a new transaction to keep track of. They would first navigate to the Transaction page and 
then fill out the boxes necessary. This information will be parsed into an URL to make a call to the REST 
API which will be processed by a method in TransactionTestController. After receiving the data, the 
controller will generate an appropriate Transaction object and store the result in the domain class 
Transaction which is acting as our database for all transactions.   

### Refractor Retrospective   

#### Areas of our design that we felt were strong: 

Our implementation of Google’s Visualization API was a strong aspect of our design because it allowed us to easily retrieve user transactions from the backend and display 
it back 
to the user 
in various ways 
on the dashboard, such 
as the pie chart, bar chart, and list view. Another strong 
area 
of our design was how the web application updated seamlessly without lagging or
producing 
any glitches. Using React allowed 
us
do this 
by efficiently updating and rendering the 
users input 
as the data was updated. 
Our 
URL mappings allowed users 
to switch between 
pages easily while also preventing them from accessing 
information 
in the application unless 
they were logged in. 
An issue our team discussed early 
on was how
we planned 
to implement 
user authentication 
so that only authorized users could access pages 
in the application. The implementation 
of spring security resolved this issue as
it included both authentication and 
authorization. Security was a crucial aspect 
of our design since the app handles user's personal 
data. Lastly, the design for logout was a necessary feature 
we added to further improve our 
security. Clicking the log 
out icon causes the user session to
be invalidated, directs the user back 
to the login page, and removes access 
to their accounts information pages until the user 
signs back in.  

#### Areas of our design that we felt were weak:   

One area 
our design could improve 
on
is how 
we handled the ownership between domain 
classes. The decision 
to use one controller class 
as a connection between all front-end and 
back-end components 
made
it difficult 
to
get the database working. This caused 
our team 
to
dedicate a large portion 
of
our time during stage 3 
to fix unexpected bugs 
in the database. This 
resulted 
in our team not having enough time 
to implement other features 
we had originally 
planned 
on such 
as personalized avatars 
or personalized advice. Implementing multiple 
controller classes would have allowed 
us
to add more users 
as well 
as have time 
to create a 
functional sign 
up page. Another area our design lacked 
in was the documentati
on
of our code. 
The lack 
of comments made 
it difficult 
to find unused functions 
we did not need. Additional 
commenting would have benefitted the group 
by making 
it easier 
to clean 
up files 
at the end, 
debug and fix issues 
in the database, and follow along files other members 
worked 
on. Since 
Grails helped manage the interfaces between front-e
nd and back-end, having a better 
understanding 
of how javascript interacted with Grails would have bene
fitted our team 
by
allowing 
us
to implement some 
of our extended features such 
as customization 
of avatars.  

### Project Perspective   

#### What did your group do well?  

We were very diligent in planning group meetings every week so that as 
many members as possible 
could attend and we had at least 2 hours of time per meeting. These 
meetings each had a specific goal 
that was determined at the previous meeting so everyone would know what to work to
wards after each 
meeting. We also maintained very good communication about what times work for each of us for 
meetings, project goals that we have met, and major issues that have come up with our assigned project 
features. The UI design looked clean and simple which was a strong point of 
our project along with 
having features that every member of the group approve of.  

#### What could you group have done better?  

We could have distributed roles more effectively to meet deadlines better. It turned out that we most 
likely needed more people working on back-end features, especially the database and database 
communication features because these were the most important and difficult features to implement. 
During stage 2 of the project, we could have gotten more work done during reading week since most of 
the work was done towards the end or after reading week. This resulted in us having very little time to 
deal with database issues that appeared unexpectedly.   

#### What did you like about the tools and frameworks you used?   

Setting up a database is relatively simple in Grails since database content is tied together with domain 
objects and reflects the relationships that the domains may share between each other. The URL 
mappings file made it easy for the website to switch between pages because to add a new page that can 
be switched to, it only requires one line of code to be written in the file. Additionally, authentication 
using Spring Security was fairly easy to implement with a bit of knowledge about Spring. Minimal 
modification to the project was required other than addition of users, roles 
and access restrictions to the controllers. React (which is used in place of Javascript to build the user interface) is very useful be
cause it allows us to display data that can changed without needing to refresh the page.   

#### What didn’t you like about the tools and frameworks you used?   

Grails was hard to learn on our own because there were a lot of new concepts we 
had to grasp along 
with new languages. Grails uses React which has many similarities to Javascript but since not all of us are 
experienced in Javascript, some of us had to learn an entirely new language to use React. 
We also were unclear about how domains and controllers worked at first so we ended up starting the project without 
fully understanding how Grails works which caused us problems later on. Ownership relations between 
domains made it hard to implement the database initially because we did 
not fully understand how they 
affect the way data is stored in the database. Since the relationships were already set before database 
implementation, we had no idea that the relationships were causing database setup issues until much later.   

[Home](README.md)

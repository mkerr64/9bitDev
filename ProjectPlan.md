# Project Planning Page
[Home](README.md)    

## Basic Features:

#### Visualization
This feature will provide the user with visual representations of their spending and saving habits in the form of charts and graphs.     

In order for this feature to be implemented we will need:   

* Data to create the visualizations. If the graphs and charts are specifically for the user, then these will be created by the data that the user provides when they use the app.     
* Conversion of the data into visuals such as charts and graphs. This will be done by grouping the data into relevant categories in a Javascript program. The categories will be pre-set and the user will enter amounts for each category and/or month.    
* An API to create comprehensive visuals. This will be done using Google Charts API.    

This feature is an important part of the app as it provides a visual guide to the user’s progress in their budgeting goals. Since failure to implement this feature would severely affect other features, it will be prioritized to ensure it is completed and successfully implemented.   


#### Gamification
This feature will provide users with goals and achievements for achieving certain financial and budgeting milestones during their use of the app. Depending on the level of gamification, this will influence how the app encourages users to save and budget their money.    

In order to implement this we will need:    

* A program that will set numerical values that will trigger achievements when reached. This will be done by one team member using a Java program.      
* Visual representation – a team member will work on integrating the achievements into the user interface so that the user can see what achievements they’ve earned. The achievements are represented by custom images.         

Since this feature relies on the user’s data and implementing a set of variables corresponding to amount for the back end and visuals for the front end, it should be fairly easily to implement. With the exception of the achievements feature, no other features will be affected should this feature not be completed.    

#### Basic User Input 
This feature allows the user to interact with the application. The application’s main source of data will be the users financial information provided through this feature.

This is a core feature for the app and will require standard input/output commands.   

This feature is crucial for the application as the purpose of the app is to provide information to the user based on their personal financial data. The following features rely on basic user input:    

* visualization, gamification, and achievement system.       


#### Analysis
This core feature will analyze the user’s inputs to give suggestions on how the user can improve their budget. This will be done by tracking the user’s spending in all categories such as food, housing, and leisure.    

In order for this feature to be implemented we will need:    

* Existing budgeting strategies that are taught in financial literacy courses such as the 50/30/20 rule in order to analyze the user’s spending habits.    
* User data to be analyzed which we will store in a database after being entered using the Basic User Input feature.   

The visualization and gamification will be dependent on this feature. This is because the data to be visualized includes this analyzed portion. Gamification requires this as this will be used to help rank the user in terms of their progress financially.     



## Extended Features

#### Achievement System    
This feature is an extension of the gamification feature. It will provide users with achievements for reaching milestones set by the application. We intend to incorporate time based milestones with this feature. For example, when the user logs their first transaction, they will receive an achievement within the application.    

To implement this feature we will be using all the implementation requirements of gamification with the only extra requirement being additional time to add an extensive achievement system.    

This feature is not an essential feature of the application. No other feature is dependent on this feature to work.    

[Home](README.md)   

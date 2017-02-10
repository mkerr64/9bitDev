# Project Planning Page
[Home](README.md)    

## Basic Features:

#### Visualization
This feature will provide the user with visual representations of their spending and saving habits in the form of charts and graphs.     

In order for this feature to be implemented we will need:   

* Data to create the visualizations. If the graphs and charts are specifically for the user, then these will be created by the data that the user provides when they use the app. If the user’s data is being compared to national spending trends, then additional data will be required. We will be using the Census Canada API for this.     
* Conversion of the data into visuals such as charts and graphs. This will be done by grouping the data into relevant categories (such as by month or what money is being spent on) in a Java program. The categories will be pre-set and the user will enter amounts for each category and/or month.    
* An API to create comprehensive visuals. This will be done using Google Charts API.    

This feature is an important part of the app as it provides a visual guide to the user’s progress in their budgeting goals. Since failure to implement this feature would severely affect other features, it will be prioritized to ensure it is completed and successfully implemented.   


#### Gamification
This feature will provide users with goals and rewards for achieving certain financial and budgeting milestones during their use of the app. Depending on the level of gamification, this will influence how the app encourages users to save and budget their money.    

In order to implement this we will need:    

* A program that will set numerical values that will trigger achievements/rewards when reached. This will be done by one team member using a Java program.      
* Visual representation – another team member will work on integrating the rewards into the user interface so that the user can see what achievements they’ve earned. This can be done either with visuals from Java, or if we choose to have more advanced visuals an API such as Google charts can be used.         

Since this feature relies on the user’s data and implementing a set of variables corresponding to amount for the back end and visuals for the front end, it should be fairly easily to implement. With the exception of the rewards feature, no other features will be affected should this feature not be completed.    


#### Avatars/Personalization
This feature would give users a basic form of personalization for their accounts on the app.    

In order for this feature to be implemented we will need:    

* A basic repository of images that the user can choose from for their avatar, or the ability to upload an image of their choosing. An API such as Avatars.io will be used for this.     
* Integration with user profile – this will be done by adding a method to the user profile class that creates an avatar and allows the user to choose one from the repository or upload their own.       

Since the API is free and we will likely be dealing with a small set of avatars, our team should be able to implement this feature. The rest of the project will not be affected if we are not able to implement this feature.    


#### Basic User Input 
This feature allows the user to interact with the application. The application’s main source of data will be the users financial information provided through this feature.

This is a core feature for the app and will require standard input/output commands.   

This feature is crucial for the application as the purpose of the app is to provide information to the user based on their personal financial data. The following features rely on basic user input:    

* analysis, comparison, visualization, gamification, and reward system.       


#### Comparison
This feature allows the user to see how their personal financial habits are compared to the rest of the populations.    

In order for this feature to be implemented we will need:  

* The data the user provides the application through basic user input.       
* We will use Census Canada API to gather data about Canada’s population.       

Our application is focused on providing the user with more than just a visual representation of their spending habits. This important feature will provide users with the ability to see how they compare to their peers. This feature relies on basic user input to work as well as the data provided by the Census Canada API. Although this feature is essential to the app, no feature is relying on this feature to run for them to work.      
      
#### Analysis
This core feature will analyze the user’s inputs to give suggestions on how the user can improve their budget. This will be done by tracking the user’s spending in all categories such as food, housing, and leisure.    

In order for this feature to be implemented we will need:    

* Existing budgeting strategies that are taught in financial literacy courses such as the 50/30/20 rule in order to analyze the user’s spending habits.    
* User data to be analyzed which we will store in a database after being entered using the Basic User Input feature.   

The visualization and gamification will be dependent on this feature. This is because the data to be visualized includes this analyzed portion. Gamification requires this as this will be used to help rank the user in terms of their progress financially.     



## Extended Features

#### Enhanced Avatars 
This feature allows the user to customize their personalized avatar. This feature will take the basic avatar previously mentioned in basic features and enhance it by being able to customize the colour and style of the avatars clothing and add accessories.   

In order for this feature to be implemented we will need:    

* The avatars/personalization feature.     
* A repository of images of specific clothing items such as shirts, pants, hats, shoes, etc. in different colours and images of accessories.      
* Integration with user profile — this will add an additional method to the user profile class, allowing the user to take one of the avatars from the repository and customize it further.       

This is a feature our team will implement if there is additional time. The rest of the project is not dependent on this feature.    

##### Definitions    
This feature will show definitions for every financial term that is relevant to the user once the user highlights over a relevant financial term. The aim is to develop financial literacy and allow the user to better understand financials.     

In order for this feature to be implemented we will need:     

* Integration with definitions from Wikipedia using the MediaWiki API.
* Integration with the Visualization, Comparison, and Analysis features as this will add supplementary information that would assist these features.    

This feature is not essential to the application and no other features rely on it to be implemented.    

#### Customize Appearance   
This feature will allow the user to customize the appearance of the application. Users will be able to change things like the applications background color, text color, and the interface color.    

In order for this feature to be implemented we will need:   

* The avatars/personalization feature and integration with it to change the relevant UI elements.    
* A repository of different text fonts. 

This is not essential to the rest of the application and no primary features rely on this to be implemented.    

#### Reward System    
This feature is an extension of the gamification feature. It will provide users with rewards for reaching milestones set by the application. We intend to incorporate time based milestones with this feature. For example, for every 6 months a user logs information, they will receive a reward within the application.    

To implement this feature we will be using all the implementation requirements of gamification with the only extra requirement being additional time to add an extensive rewards system.    

This feature is not an essential feature of the application. No other feature is dependent on this feature to work.    

[Home](README.md)   

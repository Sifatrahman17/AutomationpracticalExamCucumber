Feature: Change_The_ColorPage
 Change The Screen color

#@Scenario1
Scenario:  Sky Blue BackGround  
     Given  User is on the changeTheColorPage       
     When   Set SkyBlue Background button exists          
     When   I click on the button       
     Then   The background color will change to sky blue
  
 @Scenario2    
 Scenario:  Sky White BackGround  
     Given  Set SkyWhite Background button exists
     When   I click on the button  
     Then   The background color will change to sky white
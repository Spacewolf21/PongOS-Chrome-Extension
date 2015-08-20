# PongOS-Chrome-Extension
**PongOS alerts employees of Solstice Mobile to the current state of the Employee Lounge through the color of the ping pong paddle**
**Firebase is also required for this application to run correctly**

##Setup
  - manifest.json controls the entire chrome extension.
    - The popup template (yes.html) is initialized here
    - The background process (background.html) is also initialized here
    - The entension has permission to access the users current open tab on Chrome
  - In order to package and distribute this chrome extension you will need to either create or get ahold of a .pem file
  
## Functionality
  - When the ping pong paddle is red, the no.html file will be displayed when the paddle is clicked
    - The user has the option to click 'Notify me when open', and when the room is unoccupied, a popup will appear on screen
      notifying the user that room is now available.
  - When the ping pong paddle is green, the yes.html file will be displayed when the paddle is clicked
    - This template has no additional functionality
    
  - The background.html controls most of the functionality of the application
    - This file initializes the background.js file
    - background.js connects to Firebase and is alerted whenever a sensor detects movement in the Employee lounge
      - If the sensor detects movement, the ping pong paddle will turn red, otherwise it's green

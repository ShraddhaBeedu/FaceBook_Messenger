# FaceBook_Messenger

Usage_Facebook.js takes the input CSV (Shops.csv) as an input and fills the table with the information   
if they are using a Facebook Pixel or 
Facebook Messenger and also if they have integrated the Facebook Chat Bubble.

Working:  
1.  Reads the CSV file for the Webpage URL  
  
2.  Uses Web Scraping to get the Page Source of the Webpage  
  
3.  Checks for the following expressions  
    Facebook Pixel - "Facebook Pixel"  
    Facebook Messenger - "/connect.facebook.net/*/sdk.js"  
    Facebook Chat Bubble - "<div class=\"fb-customerchat\""  
  
4.  If present marks the respective field with 'X'.  
  
5.  Creates the new output file, output.csv with updated values.  


  


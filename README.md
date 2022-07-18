In order to run this locally you will need to clone the repo and then run an install:

npm i

then serve the project

ng serve

I had troubles with enabling CORS permissions, without which the API requests to reddit get rejected. I used the Chrome Extension:

Allow Cors
https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

In order to use the AngularRedditReader app, all you need to do is enter the name of a subreddit in the input box at the top and either press enter or click the button. This will retrieve the top posts from the subreddit of your choosing and display each post with its upvote/downvote count, thumbnail, titl, and author.

The title of the post and the author are both links that take you to the reddit website where the real post/user is located.


This project was definitely a stretch for me as far as learning how everything works in Angular. I am used to the Asynchronus flow of React and had never used Observables, so I did some research on how those worked. I am definitely not 100% happy with the look and feel of the website, production-ready for this would definitely have different colors and some slight animations so that new data being displayed isn't so poppy. Still, I learned quite a bit and I had my first introduction to angular and successfully made something that works! All in all, I think it was a good first start but still a long way to go.

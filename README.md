<p align='center'><img src='' width="250" ></p>
<h1 align='center'> Datebook</h1> 
<p align='center'> <a href="https://datebook-phi.vercel.app/">Deployed Link </a> | <a href="">Demo Link</a> </p>


## Introduction 🐱‍💻
- Datebook is a scheduling app that lets users **create** events and **schedule** meetings directly using the <a href="https://developers.google.com/calendar/api/guides/overview">**Google Calendar API**</a>. It offers a simple interface to streamline event management and time planning for both personal and professional needs.
- Datebook allows users to effortlessly schedule, update, and delete meetings and events across multiple time slots. It features dedicated pages for each event, enabling users to manage meetings seamlessly. Additionally, individual user pages showcase their public events, making it easy to share and organize schedules.
- Datebook allows users to **schedule**, **update**, and **delete** meetings, offering customizable time slots and durations for events. With dedicated pages for both events and user profiles showcasing public events, Datebook simplifies scheduling and event management.
- Our app uses <a href="https://clerk.com/">**Clerk**</a> for user authentication and <a href="https://www.prisma.io/">**Prisma**</a> and <a href="https://neon.tech/">**NeonDB**</a> for database operations.
## Tech Stack used 👨‍💻

- **HTML**
- **TailwindCSS** 
- **JavaScript** 
- **NeonDB**
- **React** 
- **Next.js**

## Features 🧰
- User **authentication** 🔒.
- **Create** and **delete** events and meetings 👨‍💻.
- **Seperate profile page** for each users 👤.
- **Change** username of a user 👥.
- **Edit** time slots and availability ⌚⌚.
- **Direct** meetings set up in Google Calendar of a user 🗓️.
- **Updates** about upcoming meetings in the dashboard 📃.

## Learnings 📝
  
- Learned how to integrate **NeonDB** and **Prisma** in the project.   
- Learned how to use **Google Calendar API** and **Cleark API** together to create seamless authentication for our application and its integration with the Google Calendar app. 
  
## Installation 🛠️
  **Step 1**: Fork the repository. You can fork the repository by clicking on the fork button on the right-hand side below the profile.<br> 

  **Step 2**: Clone your forked repository. Replace **yourusername** with your GitHub Username. 
  
  ```
[git clone "https://github.com/HarshitAditya27/Nexus.git"](https://github.com/HarshitAditya27/Datebook.git)
``` 
  **Step 3** : Go to the project folder and run npm i. It will install all the packages and dependencies used in the project. 
  
  ```
npm i
``` 
  **Step 4** : Run npm run dev. This will start the project in your local machine 🖥️.  
  
  ```
npm run dev
``` 
Hurray 🥳, you successfully deployed the project in your local machine 🎉.  

🚨But the app won't work because it will require **API keys** from various tools which are mentioned in **Setup .env file** section.

🚨<i>We won't be able to login in to the deployed version of our application because we haven't published our Google Calendar API for production as for production and public use a strict verification process is done so for the working of the project **please look into youtube demo**.</i>.

 ### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL
DATABASE_URL
``` 

  ## Screenshots  


  ## Loved the project 💖? 
  
  If you found the project intresting then please do give this project a star ⭐. 
  <br> <br> <br>
   <p align="center" width="100%">
   Made with 💖 by Harshit Aditya   
</p>




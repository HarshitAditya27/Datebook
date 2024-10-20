<p align='center'><img src='https://github.com/user-attachments/assets/48c77376-3a77-4260-9ffa-1f962bb99e3c' width="250" ></p>
<h1 align='center'> Datebook</h1> 
<p align='center'> <a href="https://datebook-phi.vercel.app/">Deployed Link </a> | <a href="https://youtu.be/NrJbv1m0pL0">Demo Link</a> </p>


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
https://github.com/HarshitAditya27/Datebook.git
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

🚨<i>We won't be able to login in to the deployed version of our application because we haven't published our Google Calendar API for production as for production and public use a strict verification process is done so for the working of the project <a href="https://youtu.be/NrJbv1m0pL0"> **please look into youtube demo**</a>.</i>.

 ### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL
DATABASE_URL
``` 

  ## Screenshots  

![1](https://github.com/user-attachments/assets/bf911281-5010-46f2-914b-2b31660b1792)
![2](https://github.com/user-attachments/assets/859f3d92-31e7-423a-8626-14199720f372)
![3](https://github.com/user-attachments/assets/299a3649-e20f-4303-95a0-0eb00b8aa505)
![4](https://github.com/user-attachments/assets/6e4b884b-849e-41b5-900c-4a7b25aab4f1)  
![5](https://github.com/user-attachments/assets/32fb2407-0a0b-45c3-bfbb-f264d76b1524)
![6](https://github.com/user-attachments/assets/2cf79dbb-a371-4951-ba99-42a4407b4720)
![7](https://github.com/user-attachments/assets/2bbf4746-ce08-43bd-a62f-75512cf15eae)
![8](https://github.com/user-attachments/assets/0f148445-336d-48d2-93de-36cbc9c3bad7)
![9](https://github.com/user-attachments/assets/6d921f97-c6c3-4e77-b4c3-35f247180136)
![10](https://github.com/user-attachments/assets/00699bc5-5f00-4490-b201-b4a9c10ffea3)
![11](https://github.com/user-attachments/assets/9b5c4365-33fd-4624-b2d7-5484349544b2)
![12](https://github.com/user-attachments/assets/cc4a4540-3d7d-42b0-9a86-2f0f6b76f19d)
![13](https://github.com/user-attachments/assets/a07c3660-5b55-4089-8e40-80e47729b156)
![14](https://github.com/user-attachments/assets/5d56a716-4782-4346-831d-faefb90cce2d)
![15](https://github.com/user-attachments/assets/f5e032dc-db9f-414f-b0e5-97b84d677ad3)
![16](https://github.com/user-attachments/assets/20e518f8-1f9a-4530-bfb6-c8670b7bbe5b)

  ## Loved the project 💖? 
  
  If you found the project intresting then please do give this project a star ⭐. 
  <br> <br> <br>
   <p align="center" width="100%">
   Made with 💖 by Harshit Aditya   
</p>




import placifyImage from '@/public/placify-img.png'
import fireChatImage from '@/public/fire-chat-img.png'
const projects = [{
    "name": "Placify Dashboard",
    "technologies": [
      "NextJS",
      "Material-UI",
      "Tailwind",
      "Firebase",
      "axios-Interceptor"
    ],
    "imageLink": placifyImage,
    "githubLink": "",
    "liveDemoLink": "",
    "description": "This is a live project made on request by the placement cell of St. Joseph's College, Devagiri"
  },
  {
    "name": "Fire-Chat",
    "technologies": [
      "ReactJS",
      "Firebase",
      "Tailwind",
    ],
    "imageLink": fireChatImage,
    "githubLink": "https://github.com/roshith2001/fire-chat",
    "liveDemoLink": "https://roshith-chat.web.app/",
    "description": "A Realtime chat room created with Firebase Realtime Database and Firebase authentication. ReactJS is used in the frontend."
  }
]
export default projects;
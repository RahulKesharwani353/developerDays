import KUGLogo from '../../assets/images/KUG_logo_white_tranparent.png'
import MozLogo from '../../assets/images/moxDurg.png'
import DSClogo from '../../assets/images/dcslogo.png'
import WebDev from '../../assets/images/Web_track.svg'
import UiUx from '../../assets/images/UI_track.svg'
import Android from '../../assets/images/android_track.svg'

const Track=[
  {
      title: "Web Development",
      offeredBy: "Track offered by Mozilla Durg",
      bgColor:'linear-gradient(202deg, #2C8BF7 0%, #EA5459 70%)',
      svgSrc: WebDev,
      about:"Are you still having trouble getting started with Web Development Journey?  No worries we got your back! So here we are with our Full Stack Web Development hands-on learning track exclusively designed for beginners to getting kick-started with tech journey from experienced speakers. Also, only learning and no implementing the concepts is simply a waste of time thereby we have daily, weekly and monthly challenges with exciting goodies for all active participants and winners.",
      org: MozLogo,
      skills_data:[{
          skill:"HTML"
      },
      {
          skill:"CSS"
      },
      {
        skill:"Javascript"
    },{
        skill:"React JS"
    }
    ,
    {
        skill:"Node.js"
    },
    {
      skill:"MongoDB"
  },{
      skill:"DevOps"
  },
  {
      skill:"Azure"
  },
  {
    skill:"Firebase"
},{
    skill:"SQL / MySQL"
}],
    SessionsDetail: [{
        session_1_head: "Basic frontend (HTML+CSS+Bootstrap) ",
        session_1_detail: "This will be a hands-on session in which we are going to understand how to start web development with HTML, CSS and bootstrap.",
        session_2_head: "1. Javascript\n2.Frontend with React",
        session_2_detail: "In this session, we will deep dive into the basics of javascript and try to implement it in our project, Managing several components in your website is chaotic, so in this session, we will guide you on how to tackle this problem using react.",
        challange_head: "Challenges",
        challange_detail: "Available Soon!",
        session_1_dates:"27 August, 2021",
        session_2_dates:"28 August, 2021 and 29 August, 2021"
    },
    {
        session_1_head: "Backend with Node.js ",
        session_1_detail: "After attending a week of frontend, now let's have a look towards the backstage of any web application. Let's go with the trend and start with Node.js",
        session_2_head: "Setting up Authentication using Sawo Labs API",
        session_2_detail: "Node.js is not the only thing you can do with a Web application, there are a ton more things you can do by integrating sawo lab APIs into your web application.",
        challange_head: "Challenges",
        challange_detail: "Available Soon!",
        session_1_dates:"3 September, 2021",
        session_2_dates:"4 September, 2021"
    } ,
    {
        session_1_head: "Hands-On with SQL / MySQL  ",
        session_1_detail: "Now it's time to collect some data with your web application. Let’s start with the basics i.e SQL and MySQL.",
        session_2_head: "Getting Started with MongoDB ",
        session_2_detail: "In this session, we will try to integrate MongoDB with our web application, make sure you get ready to attend",
        challange_head: "Challenges",
        challange_detail: "Available Soon!",
        session_1_dates:"9 September, 2021",
        session_2_dates:"11 September, 2021"
    },
    {
        session_1_head: "Fundamentals of DevOps",
        session_1_detail: "Let us deploy, operate, monitor, and release your code into the vast ocean of the internet.",
        session_2_head: "Getting Started with Azure",
        session_2_detail: "Let's us Invent with purpose, realise cost savings and make more efficient apps with Microsoft Azure's open and flexible cloud computing platform.",
        challange_head: "Challenges",
        challange_detail: "Available Soon!",
        session_1_dates:"17 September, 2021",
        session_2_dates:"18 September, 2021"
    },
    {
        session_1_head: "Hosting ",
        session_1_detail: "Let’s now have a final look at our project, \nif everything looks great let’s host your very own web application on your domain.",
        session_2_head: "Bonus Session",
        session_2_detail: "Detail Soon",
        challange_head: "Challenges",
        challange_detail: "Available Soon!",
        session_1_dates:"24 September, 2021",
        session_2_dates:"Soon"
    }],
    speakers:[{
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2FPraveen-Stage-Full-2K.jpg?alt=media&token=005e673e-1c24-4511-a878-cdcfa65ab2be",
        name:"Praveen Kumar",
        designation:"Fullstack JavaScript Developer",
        linkedIn:"https://www.linkedin.com/in/praveentech/",
        insta:"https://www.instagram.com/praveenscience/",
        twitter:"https://twitter.com/praveenscience"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fshivam.jpg?alt=media&token=3895ad44-4df0-42f8-a82e-92770676652d",
        name:"Shivam V.",
        designation:"Creative Engineer & Javascript Developer",
        insta:"https://www.instagram.com/jokershivam/",
        linkedIn:"https://www.linkedin.com/in/shivamjoker/",
        twitter:"https://twitter.com/ShivamJoker"
      },
    //   {
    //     image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2FRakshaa.png?alt=media&token=3be9a4ac-bce1-4749-be06-140cc5f47be1",
    //     name:"Rakshaa Viswanathan",
    //     designation:"SDE Intern at Microsoft",
    //     linkedIn:"https://www.linkedin.com/in/rakshaa-viswanathan-0aa891199/",
    //     insta:"",
    //     twitter:"https://twitter.com/RakshaaViswana1"
    //   },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fsoumaya.jpeg?alt=media&token=f485ad3f-dc6a-476f-95cb-7c61d6d8aa92",
        name:"Soumaya Ranjan",
        designation:"Founding Team | Engineering Lead at SAWO Labs",
        linkedIn:"https://www.linkedin.com/in/soumayaranjan/",
        twitter:"https://twitter.com/big_daddy2802"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2FUI%2FWhatsApp%20Image%202021-08-18%20at%2012.05.28%20PM.jpeg?alt=media&token=40ccd1b1-1eb8-465c-a19d-acc4709c0b6e",
        name:"Nishchal Singi",
        designation:"GSoC student",
        linkedIn:"https://www.linkedin.com/in/nishchal-singi-6b37901ab/",
        insta:"https://www.instagram.com/inishchal.phoenix/",
        twitter:"https://twitter.com/SingiNishchal"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fsreekaran.jpeg?alt=media&token=2499d30d-76a1-4030-a1fd-2a6a4602dfdd",
        name:"Sreekaran S.",
        designation:"Mentor @Major League Hacking | Software Engineer",
        linkedIn:"https://www.linkedin.com/in/sreekaransrinath/",
        insta:"https://www.instagram.com/skxrxn/",
        twitter:"https://twitter.com/skxrxn"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fmohitbhat_img.jpg?alt=media&token=639de79d-0fe0-4d9f-b355-ca62ca4a4c53",
        name:"Mohit Bhatt",
        designation:"Blockchain and Full stack developer | GSoC Student",
        linkedIn:"https://www.linkedin.com/in/mbcse/",
        insta:"https://www.instagram.com/mbmohit5/",
        twitter:"https://www.twitter.com/mbcse50"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fabir.jpeg?alt=media&token=88542122-011c-4bb3-87b4-3d652c94cca7",
        name:"Abir Pal",
        designation:"Engineering Intern at Affinidi | Fellow at M.L.H",
        linkedIn:"https://www.linkedin.com/in/imabp/",
        twitter:"https://twitter.com/imabptweets"
      },
      {
        image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fweb%2Fkuldeep.jpeg?alt=media&token=ab57263d-54df-4b7a-9514-dac2822518a2",
        name:"Kuldeep Patel",
        designation:"Technical Lead at TechnoHub and Developer Student Community",
        linkedIn:"https://www.linkedin.com/in/patelkuldeep/",
        twitter:"https://twitter.com/patelkuldeep0"
      }]
  },
  {
    title: "UI/UX Designing",
    offeredBy: "Track offered by Developer Student Community",
    bgColor:'linear-gradient(202deg, #57EBDE  0%, #123AA7 70%)',
    svgSrc : UiUx,
    about:"There are over 3 million apps and still counting but the apps that do well are ones which are well designed both in terms of User Interface and User Experience. That's why it is necessary to inculcate the design skills that will make your app stand out in a crowd ! User experience (UX) designers focus on the interaction that users have with products, like websites, apps, and physical objects. They make those everyday interactions useful, enjoyable, and accessible.",
    org: DSClogo,
    skills_data:[{
        skill:"Product design"
    },
    {
        skill:"User Experience"
    },
    {
      skill:"User Interface"
  },{
      skill:"Figma"
  },{
    skill:"UX Research"
}],
  SessionsDetail: [{
      session_1_head: "Introduction of UI/UX",
      session_1_detail: "What is it? Why is it important? Purpose?",
      session_2_head: "Ideation, Research",
      session_2_detail: " Target audience, goals & outcomes, User personas",
      challange_head: "Challenges",
      challange_detail: "Challenge of week 1 is out !",
      session_1_dates:"23 August, 2021",
      session_2_dates:"24 August, 2021",
      challenges_date:"Submit Before, 29 August",
      challenges_pdf:"https://docs.google.com/document/d/1e2yaK16ypbY4jAI3Va2L56dDL-XN7wnA0VJ0xNCJ0_M/edit",
      challenges_submit:"https://linktr.ee/DevDaysChallenges"
  },
  {
      session_1_head: "Non-visual prototyping",
      session_1_detail: "Non-visual prototyping, Sitemaps , Planning and strategies",
      session_2_head: "Visual research ",
      session_2_detail: "(preparing moodboard) + Heuristic evaluation",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"30 August, 2021",
      session_2_dates:"31 August, 2021"
  },
  {
      session_1_head: "Figma",
      session_1_detail: "Learn about responsive designs, tools, plugins",
      session_2_head: "Wireframes  ",
      session_2_detail: "Low fidelity & High fidelity + Developing UI",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"6 September, 2021",
      session_2_dates:"7 September, 2021"
  }
  ,
  {
      session_1_head: "Conversion of designs to code",
      session_1_detail: "Converting your beautiful UI into code",
      session_2_head: " Industrial talk session ",
      session_2_detail: "Ask your doubts",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"13 September, 2021",
      session_2_dates:"14 September, 2021"
  }],
  speakers: [{
    image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2FUI%2Fpunit%20chawla.jpg?alt=media&token=f8815a45-5be8-4ae5-8109-e4a3761c74dd",
    name:"Punit Chawla",
    designation:"Founder at DesignWings",
    youtube:"https://www.youtube.com/c/PunitChawla/featured",
    dribble: "https://dribbble.com/punitweb",
    behance:"https://www.behance.net/punitweb"
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2FUI%2Fvaishnavi_formal-min.jpg?alt=media&token=0be2e1e2-9eda-4036-9672-0d293323b381",
    name:"Vaishnavi Dwivedi",
    designation:"Product @ BottleHQ",
    linkedIn:"https://linkedin.com/dwvicy",
    insta:"https://instagram.com/dwvicy",
    twitter:"https://twitter.com/dwivivivi"
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2FUI%2FIMG_07389-min.jpg?alt=media&token=b0ec34ad-175c-4ed3-b365-f8367073e152",
    name:"Ameya Nikose",
    designation:"UX Designer at Jio",
    linkedIn:"https://www.linkedin.com/in/ameya-nikose-551938145",
    insta:"https://www.instagram.com/ameyanikose/",
    twitter:"https://www.twitter.com/ameyanikose"
  }]
},


{
    title: "Android Development",
    offeredBy: "Track offered by Kotlin User Group Durg",
    bgColor:'linear-gradient(202deg, #1BCCE1  0%, #471069 70%)',
    svgSrc: Android,
    about:"Android has dominated the global smartphone operating system market share for several years now. According to research company Gartner, in the second Quarter of 2016, Android led worldwide new smartphones sales by 86.2%. Kotlin is object-oriented and supports functional programming features. It is designed for the JVM (Java Virtual Machine). That is fully compatible with JAVA. Kotlin is Java with some extra pieces of stuff. You can easily use JAVA libraries in Kotlin’s project, but Kotlin gives you more out of the box. It is focused on interoperability, safety, clarity, and tooling support. You can use it to a code Back-end server, Android Apps or even iOS app using Kotlin Native. Another interesting fact is that you can compile Kotlin to JavaScript. In this course, you’ll learn building Android apps with the Kotlin programming language. Along the way, you'll develop a collection of apps to start your journey as an Android developer. This Boot-camp will kick start your journey as a android Developer. With the help of hands on Project, Daily & weekly challenges it will provide a perfect environment for Staring android Development.",
    org: KUGLogo,
    skills_data:[{
        skill:"Kotlin"
    },
    
    {
        skill:"Material Designing"
    },
    {
        skill:"XML"
    },
    {
        skill:"OOPS"
    },
    {
        skill:"Android"
    },
    {
        skill:"MVVM Architecture"
    },
    {
      skill:"Firebase"
  },
  {
      skill:"Authentication"
  },
  {
    skill:"Database"
},],
  SessionsDetail: [{
      session_1_head: "Introduction at Kotlin",
      session_1_detail: "This will be a hands-on session in which we are going to understand the basics of kotlin and important concepts of it.",
      
      session_2_head: "Getting Started With Android Development: Single page app",
      session_2_detail: "In this session, we will deep dive into the basics of Kotlin in android and try to implement it in our project",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"25 August, 2021",
      session_2_dates:"26 August, 2021"
  },
  {
      session_1_head: "Developing Multi-Pages Application",
      session_1_detail: "In this session, we will try our hands-on and build the projects with multiple pages.",
      session_2_head: "Hands-on of MVVM architecture & API calling",
      session_2_detail: "Recycler View plays the major role in development of any app, it is important to learn. In this session we will build projects using Recycler and Card View.",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"1 September, 2021",
      session_2_dates:"2 September, 2021"
  } ,
  {
      session_1_head: "Developing Fullstack Project For Resume- Frontend [Part I]",
      session_1_detail: "Now we will ready to develop a major project for our resume, we will implement Material UI, and some functionality to our app.",
      session_2_head: "Developing Fullstack Project For Resume- Frontend [Part II]",
      session_2_detail: "UI plays an important role for the user experience of any app. So, we will continue our implementations of UI in our app",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"8 September, 2021",
      session_2_dates:"9 September, 2021"
  },
  {
      session_1_head: "Developing Fullstack Project For Resume- Backend",
      session_1_detail: "Lets Make our app more dynamic, we will integrate Authentication System, Notification system and Connect it with Database using Firebase.",
      session_2_head: "Developing Fullstack Project For Resume- Managing Database ",
      session_2_detail: "Let's us Invent with purpose and wrap-up all whole project, and make it as ready to deploy.",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"15 September, 2021",
      session_2_dates:"16 September, 2021"
  },
  {
      session_1_head: "Bonus Sessions ",
      session_1_detail: "We have special surprise sessions for You.",
      session_2_head: "Bonus Sessions",
      session_2_detail: "Detail will available Soon",
      challange_head: "Challenges",
      challange_detail: "Available Soon!",
      session_1_dates:"22 September, 2021",
      session_2_dates:"23 September, 2021"
  }],
  speakers: [
{
  image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fandroid%2FIMG_20210506_100046_830.jpg?alt=media&token=11fd9216-d487-4712-a848-957af36f2f76",
  name:"Nitin Prakash",
  designation:"Android Developer at BYJUS",
  linkedIn:"https://www.linkedin.com/in/nitin-prakash9911/",
  insta:"https://www.instagram.com/nitin_prksh/",
  twitter:"https://twitter.com/coder_lane"
},
{
    image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fandroid%2FWhatsApp%20Image%202021-08-15%20at%2011.21.51%20PM.jpg?alt=media&token=18d3b9f4-996a-43ef-80a6-f612fb2e82f4",
    name:"Khushi Sharma",
    designation:"Generation Google Scholar’21",
    linkedIn:"https://in.linkedin.com/in/khushi-sharma-2201",
    insta:"https://www.instagram.com/_._khushi.sharma_._/",
    twitter:"https://mobile.twitter.com/khushisharma_22"
  },
{
    image:"https://firebasestorage.googleapis.com/v0/b/developerdays.appspot.com/o/speakers21%2Fandroid%2FWhatsApp%20Image%202021-08-15%20at%2012.28.07%20AM.jpg?alt=media&token=e2424c9b-522e-420e-9a12-8eb3e63416f5",
    name:"Akshay Sawant",
    designation:"Android Dev at Cloudwalker",
    linkedIn:"https://www.linkedin.com/in/akshay-sawant-a50a20137",
    insta:"https://www.instagram.com/akshaysawant003/",
    twitter:"https://twitter.com/imAkshaySawant"
  }]
},
];
export default Track;
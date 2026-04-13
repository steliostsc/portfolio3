import { VideoProject } from "@/types/videos";

export const allVideoProjects: VideoProject[] = [
  /*
  
  {
    id: "rVVeLdouViU",
    video_title: "একজন ফেসবুক ইঞ্জিনিয়ারের রিজিউমি কেমন হয়?",
    video_description: `How to Build Your Perfect Resume: Learn from a FAANG Employee Example! Are you ready to take your career to new heights and secure your dream job at a top tech company? Join us on this exclusive journey inside the mind of a FAANG employee as we unveil the secrets of their perfect resume! In this eye-opening video, you'll discover the exact strategies and tips used by the industry's finest to stand out from the crowd and impress recruiters.`,
    tags: ["Resume Tips", "FAANG Career", "Job Preparation", "Career Advice"],
    cover_image: "rVVeLdouViU",
    publish_date: "2024-08-04",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtu.be/rVVeLdouViU?si=LwWPmI4F34mwLNw8",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "6:32",
    software_used: ["DaVinci Resolve"],
  },
  {
    id: "JSZmQxg3fos",
    video_title: "Mastering DSA for Developers | Last Call to Join",
    video_description:
      "This workshop helps application developers explore DSA through real-world problems, connecting data structures to business challenges and fostering a problem-solving mindset for practical solutions.",
    tags: ["DSA", "Developer Skills", "Problem Solving", "Career Prep"],
    cover_image: "JSZmQxg3fos",
    publish_date: "2024-04-08",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtu.be/JSZmQxg3fos?si=NZYmG1g4mZiYx6Eb",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "10:12",
    software_used: ["Davinci Resolve", "After Effects"],
  },
  {
    id: "ufRtWGd0cXo",
    video_title:
      "Calm Your Nervous System in 60 Seconds with HeartMath Technique | Angela ORR",
    video_description: `Discover the powerful HeartMath technique to calm your nervous system in just 60 seconds! This quick and effective method can help reduce anxiety, stress, and feelings of overwhelm, promoting a sense of relaxation and calmness.`,
    tags: ["Stress Relief", "Mental Health", "Wellness", "HeartMath"],
    cover_image: "ufRtWGd0cXo",
    publish_date: "2025-06-06",
    client_name: "Growthleo",
    client_image: "/companies/growthleo.png",
    client_feedback: "",
    video_link: "https://youtu.be/ufRtWGd0cXo?si=kgVACrMZQ24tUook",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "7:18",
    software_used: ["Davinci Resolve"],
  },
  {
    id: "7OuSRaIPOds",
    video_title:
      "The Real Reason You Can’t Change (And How to Fix It in 21 Days) | Angela Orr",
    video_description: `You've tried every habit hack, diet, and self-help book—but real change still feels impossible. Why? Because you're trying to change your behavior without changing your identity.`,
    tags: ["Personal Growth", "Habits", "Mindset", "Self-Improvement"],
    cover_image: "7OuSRaIPOds",
    publish_date: "2025-06-20",
    client_name: "Growthleo",
    client_image: "/companies/growthleo.png",
    client_feedback: "",
    video_link: "https://youtu.be/7OuSRaIPOds?si=TYMRxpKAbbjU9edP",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "8:13",
    software_used: ["Davinci Resolve"],
  },
  {
    id: "esjJzKjx9Fo",
    video_title: "From Stuck to Strong: The Brain Reset You Need | Angela Orr",
    video_description: `Feeling stuck, lost, or like your best years are behind you? You're not alone and you're not too late.`,
    tags: ["Mental Health", "Brain Training", "Transformation", "Wellness"],
    cover_image: "esjJzKjx9Fo",
    publish_date: "2025-07-11",
    client_name: "Growthleo",
    client_image: "/companies/growthleo.png",
    client_feedback: "",
    video_link: "https://youtu.be/esjJzKjx9Fo?si=Z5IOTm-x-RAB018K",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "7:59",
    software_used: ["Davinci Resolve"],
  },
  {
    id: "Qwwgg_qt5ew",
    video_title: "Apply logic to simplify your conditional problems",
    video_description:
      "Apply logic to simplify your conditional problems. Watch the video to understand how!",
    tags: ["Coding Tips", "Conditional Logic", "Problem Solving", "Shorts"],
    cover_image: "Qwwgg_qt5ew",
    publish_date: "2024-01-16",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtube.com/shorts/Qwwgg_qt5ew?si=tTSoTUnuVPdjpc7y",
    project_images: [],
    category: ["Shorts", "Motion Graphics", "Explainer"],
    duration: "2:44",
    software_used: ["After Effects"],
  },
  {
    id: "TiZvFO99rpw",
    video_title: "HTTP Request Explained in 1 minute",
    video_description:
      "Every time you visit a website, your browser sends an HTTP request, and the server responds. But how does this process actually work?",
    tags: ["HTTP", "Web Basics", "Networking", "Shorts"],
    cover_image: "TiZvFO99rpw",
    publish_date: "2025-02-27",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtube.com/shorts/TiZvFO99rpw?si=vUl9yE-xeKhfq8gd",
    project_images: [],
    category: ["Shorts", "Explainer", "Motion Graphics"],
    duration: "1:10",
    software_used: ["After Effects"],
  },
  {
    id: "2esQF01ob78",
    video_title: "API & API Endpoints Explained with Simple Examples",
    video_description:
      "Every time you use an app or website, APIs are working behind the scenes to fetch data. But what exactly is an API, and how do API endpoints work? 🤔 Watch this video to learn with simple examples!",
    tags: ["API", "Web Basics", "Backend", "Shorts"],
    cover_image: "2esQF01ob78",
    publish_date: "2025-03-05",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtube.com/shorts/2esQF01ob78?si=SRi4j6f8LWlkHpKh",
    project_images: [],
    category: ["Shorts", "Explainer", "Motion Graphics"],
    duration: "1:24",
    software_used: ["After Effects"],
  },
  {
    id: "fH24XyxcfOc",
    video_title: "Granola to Nutritionist - Short 01",
    video_description:
      "",
    tags: ["API", "Granola", "Ecofaming", "Shorts"],
    cover_image: "fH24XyxcfOc",
    publish_date: "2025-03-06",
    client_name: "Eco Farming",
    client_image: "/companies/Ecofarming.png",
    client_feedback: "",
    video_link: "https://www.youtube.com/shorts/fH24XyxcfOc",
    project_images: [],
    category: ["Shorts", "Promo"],
    duration: "1:11",
    software_used: ["Davinci Resolve", "After Effects"],
  },
  {
    id: "wBrkYeMlh1U",
    video_title: "Granola to Nutritionist - Short 02",
    video_description:
      "",
    tags: ["API", "Granola", "Ecofaming", "Shorts"],
    cover_image: "wBrkYeMlh1U",
    publish_date: "2025-03-06",
    client_name: "Eco Farming",
    client_image: "/companies/Ecofarming.png",
    client_feedback: "",
    video_link: "https://www.youtube.com/shorts/wBrkYeMlh1U",
    project_images: [],
    category: ["Shorts", "Promo"],
    duration: "1:09",
    software_used: ["Davinci Resolve", "After Effects"],
  },
  {
    id: "A7O_MV3mgsI",
    video_title: "Granola to Nutritionist - Short 03",
    video_description:
      "",
    tags: ["API", "Granola", "Ecofaming", "Shorts"],
    cover_image: "A7O_MV3mgsI",
    publish_date: "2025-03-07",
    client_name: "Eco Farming",
    client_image: "/companies/Ecofarming.png",
    client_feedback: "",
    video_link: "https://www.youtube.com/shorts/A7O_MV3mgsI",
    project_images: [],
    category: ["Shorts", "Promo"],
    duration: "1:21",
    software_used: ["Davinci Resolve", "After Effects"],
  },
  {
    id: "kpJyIq-mvtc",
    video_title: "EduNurture360 কি? | Edu Bridge Academy",
    video_description: "শুরু হয়ে গেছে EduNurture360 এর ২০২৪ সালের ব্যাচ!",
    tags: [
      "Education",
      "Institute Promo",
      "Bangla Voiceover",
      "Brand Awareness",
    ],
    cover_image: "kpJyIq-mvtc",
    publish_date: "2024-02-01",
    client_name: "Edu Bridge Academy",
    client_image: "/companies/edu-bridge-academy.jpg",
    client_feedback: "",
    video_link: "https://youtu.be/kpJyIq-mvtc?si=wdURtwH9HI1FZmOR",
    project_images: [],
    category: ["Promo", "Motion Graphics"],
    duration: "1:28",
    software_used: ["After Effects"],
  },
  {
    id: "w72TzfYIsgU",
    video_title:
      "Bangladesh’s First Flexible Discount for EdTech – Learn Without Limits!",
    video_description: `Bangladesh's First Flexible Discount for EdTech – Learn Without Limits!`,
    tags: ["EdTech", "Product Launch", "Education Innovation", "Motion Promo"],
    cover_image: "w72TzfYIsgU",
    publish_date: "2025-01-19",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtu.be/w72TzfYIsgU?si=50Iu8TME6mC4iH8z",
    project_images: [],
    category: ["Promo", "Motion Graphics"],
    duration: "1:29",
    software_used: ["After Effect"],
  },
  {
    id: "Y3lWN7oFkpw",
    video_title: "EcoRevolution Documentary",
    video_description:
      "A compelling documentary exploring environmental sustainability and the revolution towards eco-friendly practices in modern society.",
    tags: ["Environment", "Sustainability", "Green Revolution", "Documentary"],
    cover_image: "Y3lWN7oFkpw",
    publish_date: "2024-04-12",
    client_name: "EcoRevolution",
    client_image: "/companies/eco-revolution.jpg",
    client_feedback: "",
    video_link: "https://youtu.be/Y3lWN7oFkpw",
    project_images: [],
    category: ["Documentary", "Motion Graphics"],
    duration: "3:51",
    software_used: ["After Effects"],
  },
  {
    id: "MCD9uyZT8Y0",
    video_title: "প্রোগ্রামিং এর ফান্ডামেন্টাল শেখা কেন জরুরী?",
    video_description: `ফান্ডামেন্টাল না শিখে কাজ শেখা শুরু করলে কেন সমস্যা হয়—এই ভিডিওতে জানুন।`,
    tags: [
      "Programming Basics",
      "Education",
      "Beginner Tips",
      "Explainer Video",
    ],
    cover_image: "MCD9uyZT8Y0",
    publish_date: "2024-01-19",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback:
      "Fantastic work! Made complex topics easy to understand with great visuals. The explainer video helped our students grasp fundamental concepts much better.",
    video_link: "https://youtu.be/MCD9uyZT8Y0?si=W6HDf429dZo7hSQM",
    project_images: [],
    category: ["Explainer", "Motion Graphics"],
    duration: "2:43",
    software_used: ["Davinci Resolve"],
  },
  {
    id: "i2JZPZ-a_tc",
    video_title: "Business Email Service",
    video_description: `একটি ভুল ইমেইল কনফিগারেশনের কারণে নষ্ট হতে পারে আপনার সবচেয়ে valuable ক্লায়েন্ট ও ব্যবসার সুনাম।`,
    tags: ["Business IT", "Email Setup", "IT Services", "Promo Video"],
    cover_image: "i2JZPZ-a_tc",
    publish_date: "2025-07-23",
    client_name: "Impel IT",
    client_image: "/companies/impel-it.png",
    client_feedback: "",
    video_link: "https://youtu.be/i2JZPZ-a_tc",
    project_images: [],
    category: ["Motion Graphics", "Promo"],
    duration: "1:28",
    software_used: ["After effects"],
  },
  {
    id: "H29MJ6vLbcg",
    video_title: "Stack Learner Brand Intro",
    video_description:
      "Professional brand introduction animation for Stack Learner with modern motion graphics and smooth transitions.",
    tags: [
      "Brand Animation",
      "Logo Reveal",
      "Motion Graphics",
      "Brand Identity",
    ],
    cover_image: "H29MJ6vLbcg",
    publish_date: "2024-04-12",
    client_name: "Stack Learner",
    client_image: "/companies/sl-logo.png",
    client_feedback: "",
    video_link: "https://youtu.be/H29MJ6vLbcg",
    project_images: [],
    category: ["Motion Graphics"],
    duration: "0:22",
    software_used: ["After Effects"],
  },
  {
    id: "TInQK-60l2A",
    video_title: "Web & E-commerce Store Development",
    video_description: `ওয়েবসাইট হতে হয় ফাস্ট, স্মার্ট, ও ইনটুইটিভ — যাতে বাড়ে ব্যবসার conversion.`,
    tags: ["Web Development", "E-commerce", "Business Website", "Promo"],
    cover_image: "TInQK-60l2A",
    publish_date: "2025-07-24",
    client_name: "Impel IT",
    client_image: "/companies/impel-it.png",
    client_feedback: "",
    video_link: "https://youtu.be/TInQK-60l2A",
    project_images: [],
    category: ["Motion Graphics", "Promo"],
    duration: "1:21",
    software_used: ["After effects"],
  },
  {
    id: "byQmrdAwFK8",
    video_title: "Digital Marketing",
    video_description: `ভিজিটর আসছে, কিন্তু কাস্টমার হচ্ছে না? সমস্যা প্রোডাক্টে না, মার্কেটিং সিস্টেমে।`,
    tags: [
      "Marketing Strategy",
      "Conversion Optimization",
      "Business Growth",
      "Ads",
    ],
    cover_image: "byQmrdAwFK8",
    publish_date: "2025-07-25",
    client_name: "Impel IT",
    client_image: "/companies/impel-it.png",
    client_feedback: "",
    video_link: "https://youtu.be/byQmrdAwFK8",
    project_images: [],
    category: ["Motion Graphics", "Promo"],
    duration: "1:22",
    software_used: ["After effects"],
  },
  {
    id: "M9znCGjupcY",
    video_title: "Cyber Security",
    video_description: `জাস্ট একটা wrong ক্লিক, অথবা unknown  লিংক… আর মুহূর্তেই আপনার বিজনেস হতে পারে সাইবার হ্যাকের এর  শিকার।`,
    tags: [
      "Cyber Security",
      "Protection",
      "Ads",
    ],
    cover_image: "M9znCGjupcY",
    publish_date: "2025-08-01",
    client_name: "Impel IT",
    client_image: "/companies/impel-it.png",
    client_feedback: "",
    video_link: "https://youtu.be/M9znCGjupcY",
    project_images: [],
    category: ["Motion Graphics", "Promo"],
    duration: "1:30",
    software_used: ["After effects"],
  },
  {
    id: "ppcZHepW7ak",
    video_title:
      "The Power of Asking Better Questions | Angela ORR",
    video_description: `Do you often find yourself stuck in a situation where you're not getting the answers you need because you're not asking the right questions?`,
    tags: ["Stress Relief", "Mental Health", "Wellness"],
    cover_image: "ppcZHepW7ak",
    publish_date: "2025-08-02",
    client_name: "Growthleo",
    client_image: "/companies/growthleo.png",
    client_feedback: "",
    video_link: "https://youtu.be/ppcZHepW7ak",
    project_images: [],
    category: ["Talking Head", "Explainer"],
    duration: "8:22",
    software_used: ["Davinci Resolve"],
  },  */


  //------------------------------------------------------------------------------------------------------------------------------------

/* 

 

 


 













*/


























  {
  id: "lmSAfFDe2oI",
  video_title: "Pozar Thermal Baths - Four Seasons, One Destination",
video_description: `Τέσσερις εποχές. Ένας προορισμός.
Κάθε εποχή, ένα νέο πρόσωπο της φύσης.
Κάθε σταγόνα, μια ιστορία που ψιθυρίζει μέσα στους ατμούς των Λουτρών Πόζαρ. 💧

Εδώ ο χειμώνας καίει με τη ζεστασιά του νερού.
Η άνοιξη ανθίζει μέσα στον ήχο του ποταμού.
Το καλοκαίρι λάμπει κάτω από το φως των βράχων.
Και το φθινόπωρο ντύνει τα πάντα με χρυσό. 🍁

Αυτό δεν είναι απλώς ένας τόπος.
Είναι μια εμπειρία που σε καλεί να την ζήσεις — ξανά και ξανά.
Λουτρά Πόζαρ. Τέσσερις εποχές, ένας προορισμός. 🌿`,
  tags: [],
  cover_image: "lmSAfFDe2oI",
  publish_date: "2025-10-15",
  client_name: "inPozar “Οδηγός Λουτρών Πόζαρ” ",
  client_image: "/companies/inpozarlogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/lmSAfFDe2oI?si=rQR1AbODfU1S-XSI",
  project_images: [],
  category: ["Cinematic","Tourism"],
  duration: "2:09",
},



{
  id: "a8r2VgXw6pg",
  video_title: "Wedding - Μανώλης & Ειρήνη",
  video_description: "Το βίντεο γάμου του Μανώλη και της Ειρήνης",
  tags: [],
  cover_image: "a8r2VgXw6pg",
  publish_date: "2025-10-16",
  client_name: "Studio Pantelidis",
  client_image: "/companies/studiopatelidislogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/a8r2VgXw6pg?si=kRLkOdVMYuyDNPiH",
  project_images: [],
  category: ["Cinematic",],
  duration: "2:52",
},



{
  id: "yj_v3cj3VPI",
  video_title: "Hotel Filoxenia - Λουτρά Πόζαρ",
video_description: `Σήμερα ο τουριστικός οδηγός inpozar.net σας μεταφέρει στο Hotel Filoxenia στα Λουτρά Πόζαρ, ένα πλήρως ανακαινισμένο ξενοδοχείο που βρίσκεται κυριολεκτικά σε απόσταση αναπνοής από τις ιαματικές πηγές 🌿💦

Ακολουθήστε μας σε ένα όμορφο tour στους ανανεωμένους χώρους και τα δωμάτια, και ανακαλύψτε έναν ιδανικό προορισμό για χαλάρωση και ξεκούραση στη φύση των Πόζαρ ✨

Αν ψάχνεις την επόμενη απόδρασή σου… μόλις τη βρήκες 😉`,
  tags: [],
  cover_image: "yj_v3cj3VPI",
  publish_date: "2026-04-02",
  client_name: "inPozar “Οδηγός Λουτρών Πόζαρ” ",
  client_image: "/companies/inpozarlogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/yj_v3cj3VPI?si=UC4ERy1yk2W5cdYX",
  project_images: [],
  category: ["Cinematic","Tourism"],
  duration: "2:16",
},




{
  id: "D2Z3HYvFUIs",
  video_title: "Wedding - Λευτέρης & Αναστασία",
  video_description: "Το βίντεο γάμου του Λευτέρη και της Αναστασίας",
  tags: [],
  cover_image: "D2Z3HYvFUIs",
  publish_date: "2026-01-31",
  client_name: "Studio Pantelidis",
  client_image: "/companies/studiopatelidislogo.jpg",
  client_feedback: "",
  video_link: "https://www.youtube.com/watch?v=D2Z3HYvFUIs",
  project_images: [],
  category: ["Cinematic",],
  duration: "1:54",
},


  


{
  id: "5mTsyNG1U38",
  video_title: "Εστιατόριο Άσσωρος - Λουτρά Πόζαρ",
video_description: `🍷 Άσσωρος Πόζαρ - Εκεί που η γεύση συναντά την απόλαυση!
Στην καρδιά της λουτρόπολης των Λουτρών Πόζαρ, ο Άσσωρος σε προσκαλεί σε ένα ταξίδι γεύσεων που δεν ξεχνιέται!
Κάθε πιάτο, μια μικρή ιστορία… μαγειρεμένη με μεράκι, φαντασία και τα πιο αγνά υλικά.
Από τις παραδοσιακές συνταγές μέχρι τις πιο δημιουργικές προτάσεις, εδώ η κάθε μπουκιά γίνεται εμπειρία!
Ζήσε την αυθεντική φιλοξενία, απόλαυσε τα αρώματα, και άσε τη γεύση να σε μαγέψει.`,
  tags: [],
  cover_image: "5mTsyNG1U38",
  publish_date: "2025-10-29",
  client_name: "Άσσωρος Restaurant",
  client_image: "/companies/asswroslogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/5mTsyNG1U38?si=00g2NU52X1u1PjUD",
  project_images: [],
  category: ["Cinematic","Tourism"],
  duration: "1:34",
},



{
  id: "TyRgeD3ZJg8",
  video_title: "hyCleaners Hellas - Tif Helexpo",
video_description: `Μια σύγχρονη και καινοτόμα παρουσίαση για την Hy Cleaners Hellas, μια εταιρεία που φέρνει το μέλλον στον καθαρισμό φωτοβολταϊκών με προηγμένα ρομποτικά πλυστικά συστήματα. ⚙️☀️

Ένα project που αναδεικνύει την τεχνολογία, την εξέλιξη και την ουσιαστική συμβολή στην απόδοση των ηλιακών πάνελ, με εικόνα που αποτυπώνει ακριβώς αυτή τη φιλοσοφία.`,
  tags: [],
  cover_image: "TyRgeD3ZJg8",
  publish_date: "2026-03-5",
  client_name: "hyCleaners Hellas",
  client_image: "/companies/hycleanrslogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/TyRgeD3ZJg8?si=qpNYjGeqgxucXFx_",
  project_images: [],
  category: ["Advertisement","Cinematic"],
  duration: "1:37",
},


{
    id: "CQIgelbnrwU",
    video_title: "Capriccioza! Αυτό το εστιατόριο θα σε ταξιδέψει στην Ιταλία!",
    video_description: `Απολαύστε ένα αυθεντικό food review στο ιταλικό εστιατόριο Capriccioza, όπου δοκιμάζουμε φρεσκοψημένη πίτσα, λαχταριστά ζυμαρικά και παραδοσιακές ιταλικές γεύσεις. 

    Δείτε την προσωπική μας εμπειρία και ανακαλύψτε αν το Capriccioza είναι πραγματικά η καλύτερη επιλογή για ιταλικό φαγητό στην πόλη. 

    Ιδανικό βίντεο για όλους τους λάτρεις της ιταλικής κουζίνας και όσους ψάχνουν το επόμενο αγαπημένο τους στέκι!`,
    tags: [],
    cover_image: "CQIgelbnrwU",
    publish_date: "2025-09-19",
    client_name: "Dimitris Michailidis",
    client_image: "/companies/dimitrismichailidislogo.png",
    client_feedback: "",
    video_link: "https://youtu.be/CQIgelbnrwU?si=AbbBDPjF8mot369C",
    project_images: [],
    category: ["Food"],
    duration: "1:47",
    //software_used: ["Davinci Resolve"],
  },

 
{
  id: "eckjkdO4aRU",
  video_title: "Thermes Resort - Λουτρά Πόζαρ",
  video_description: `Το Thermes Resort σας περιμένει σε απόσταση αναπνοής από τα μαγευτικά Λουτρά Πόζαρ, για στιγμές χαλάρωσης και απόλυτης ηρεμίας μέσα στη φύση 🌿💧

  Ένας προορισμός ιδανικός για μια γρήγορη απόδραση… ή για να χαθείς για λίγο από την καθημερινότητα.`,
  tags: [],
  cover_image: "eckjkdO4aRU",
  publish_date: "2026-03-29",
  client_name: "inPozar “Οδηγός Λουτρών Πόζαρ” ",
  client_image: "/companies/inpozarlogo.jpg",
  client_feedback: "",
  video_link: "https://youtu.be/eckjkdO4aRU?si=I0dTj6qQkgVE1Yqp",
  project_images: [],
  category: ["Cinematic", "Tourism"],
  duration: "2:18",
},



{
  id: "FQdtcZgipOg",
  video_title: "Τραγανή Μπαγκέτα - Pesto Barilla alla Genovese",
video_description: `Απόλαυσε μια τραγανή μπαγκέτα με κρεμώδη pesto Barilla alla Genovese, φρέσκια μπουράτα, ρόκα, ψητά ντοματίνια και μια πινελιά μπαλσάμικο.

Μια ιδέα γεμάτη άρωμα βασιλικού, ιδανική για κάθε στιγμή της ημέρας.

Αναβάθμισε το σνακ σου με γεύση Ιταλίας σε κάθε μπουκιά!`,
  tags: [],
  cover_image: "FQdtcZgipOg",
  publish_date: "2025-09-18",
  client_name: "Dimitris Michailidis",
  client_image: "/companies/dimitrismichailidislogo.png",
  client_feedback: "",
  video_link: "https://www.youtube.com/watch?v=FQdtcZgipOg",
  project_images: [],
  category: ["Food"],
  duration: "1:21",
},



{
  id: "7gNm8POM6QI",
  video_title: "Surfshark VPN Ad",
video_description: `Κατέβασε το Surfshark εδώ: https://surfshark.com/onlyskillz

Βάλτε τον κωδικό ONLYSKILLZ στο checkout και θα πάρετε 4 extra μήνες Surfshark VPN!`,
  tags: [],
  cover_image: "7gNm8POM6QI",
  start_time: 345, // Start at specific seconds
  publish_date: "2025-10-13",
  client_name: "ItsOnlySkillz",
  client_image: "/companies/itsonlyskillzlogo.png",
  client_feedback: "",
  video_link: "https://youtu.be/7gNm8POM6QI?si=D5Gc5-Sc0QOq-x3e&t=345",
  project_images: [],
  category: ["Advertisement",],
  duration: "0:44",
},

{
  id: "AR4nC1nQr4g",
  video_title: "Playmobil Skytrails Ad",
  video_description: `@playmobil.gr

#Skytrails #playmobil #playmobilgreece 

Μην ξεχάσεις να κάνεις LIKE, ΚΟΙΝΟΠΟΙΗΣΗ και ΕΓΓΡΑΦΗ στο κανάλι!`,
  tags: [],
  cover_image: "AR4nC1nQr4g",
  start_time: 28, // Start at specific seconds
  publish_date: "2025-10-09",
  client_name: "ItsOnlySkillz",
  client_image: "/companies/itsonlyskillzlogo.png",
  client_feedback: "",
  video_link: "https://youtu.be/AR4nC1nQr4g?si=XSvbqyutk7eUTzlY&t=28",
  project_images: [],
  category: ["Advertisement",],
  duration: "1:03",
},

{
  id: "tP42CKqrMlA",
  video_title: "Eldorado Ad",
  video_description: "Πάρε πράματα για το GTA ONLINE ΕΔΩ : https://www.eldorado.gg/SKILLZ",
  tags: [],
  cover_image: "tP42CKqrMlA",
  start_time: 233, // Start at specific seconds
  publish_date: "2025-11-20",
  client_name: "ItsOnlySkillz",
  client_image: "/companies/itsonlyskillzlogo.png",
  client_feedback: "",
  video_link: "https://youtu.be/tP42CKqrMlA?si=mlIgv5-iYunyseBA&t=233",
  project_images: [],
  category: ["Advertisement",],
  duration: "0:42",
},





{
  id: "7626774653356215585",
  video_title: "Φοίβος Δουκανάρης",
  video_description: "Γνωρίστε τον Φοίβο Δουκανάρη, υποψήφιος της Άμεσης Δημοκρατίας Κύπρου📍Λάρνακας.",
  tags: [],
  cover_image: "7626774653356215585",
  publish_date: "2026-04-10",
  client_name: "Άμεση Δημοκρατία Κύπρου",
  client_image: "/companies/amesidimokratialogo.jpg",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@amesidimokratia_cy/video/7626774653356215585",
  project_images: [],
  category: ["Politics"],
  duration: "3:11",
},





{
  id: "Ahr4Emcxeb0",
  video_title: "Νταιάνα Κωνσταντινίδη - Υποψήφια Αμμοχώστου ",
  video_description: "Υποψήφια Αμμοχώστου - Νταιάνα Κωνσταντινίδη με το κόμμα Άμεσης Δημοκρατίας Κύπρου",
  tags: [],
  cover_image: "Ahr4Emcxeb0",
  publish_date: "2026-04-13",
  client_name: "Άμεση Δημοκρατία Κύπρου",
  client_image: "/companies/amesidimokratialogo.jpg",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/Ahr4Emcxeb0",
  project_images: [],
  category: ["Politics"],
  duration: "2:09",
},


{
  id: "7525030482887691553",
  video_title: "Η σχέση μου με τον Ίλον Μασκ",
  video_description: "Ανακαλύψτε τη μοναδική σχέση μου με τον Ίλον Μασκ. Ποιες είναι οι σκέψεις και τα συναισθήματά μου;",
  tags: [],
  cover_image: "https://www.tiktok.com/@fidiaspanayiotou/video/7525030482887691553",
  publish_date: "2025-07-09",
  client_name: "Fidias Panayiotou",
  client_image: "/companies/fidiaspanayiotoulogo.png",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@fidiaspanayiotou/video/7525030482887691553",
  project_images: [],
  category: ["Politics",],
  duration: "2:58",
},



{
  id: "7616479630068862230",
  video_title: "Travel Mashup",
  video_description: "It’s your time ! #giannelis #koupi",
  tags: [],
  cover_image: "7616479630068862230",
  publish_date: "2026-03-12",
  client_name: "Giannelis",
  client_image: "/companies/giannelislogo.png",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@giannelis_/video/7616479630068862230",
  project_images: [],
  category: ["Tourism", "Cinematic"],
  duration: "0:26",
},


 


 





{
  id: "I7RP4A3PAGc",
  video_title: "Buvanha Advertisment",
  video_description: "Buvanha Meta Advertisment Video",
  tags: [],
  cover_image: "I7RP4A3PAGc",
  publish_date: "2025-10-15",
  client_name: "Buvanha",
  client_image: "/companies/buvanhalogo.jpg",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/I7RP4A3PAGc?si=ft3ohdoCqKLBgDDl",
  project_images: [],
  category: ["Tourism", "Cinematic"],
  duration: "0:20",
},



{
  id: "7495431764522028310",
  video_title: "Paros Super Trips - Promo",
  video_description: `Private sunset ride in Paros. Would you do it like this?
  Tag your travel buddy. #ParosSuperTrips #LuxuryTransfers #GreekIslandLife #ExploreParos #TravelGreece #TravelGoals #ConSantanderConecto`,
  tags: [],
  cover_image: "https://www.tiktok.com/@dimitris__michailidis/video/7550391559695387926",
  publish_date: "2025-04-20",
  client_name: "Paros Super Trips",
  client_image: "/companies/parossupertripslogo.png",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@paros.super.trips/video/7495431764522028310",
  project_images: [],
  category: ["Tourism", "Promo"],
  duration: "0:38",
  //software_used: ["CapCut"],
},




{
  id: "_QHWkaTGCqo",
  video_title: "Taco Mazama - Food Review",
  video_description: `Αυθεντικό μεξικάνικο street food ❤️
Tacos, burritos, quesadilla, fajitas and frozen margarita!`,
  tags: [],
  cover_image: "_QHWkaTGCqo",
  publish_date: "2026-04-13",
    client_name: "Dimitris Michailidis",
    client_image: "/companies/dimitrismichailidislogo.png",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/_QHWkaTGCqo",
  project_images: [],
  category: ["Food"],
  duration: "1:17",
},



{
  id: "7542191501661539606",
  video_title: "August Offer Promo",
  video_description: `⚠️❗️SUMMER SALE 5 € ❗️⚠️ 
  Enjoy the summer with taste and offer at TAZ ❗️ 
  Single cheeseburger, medium crispy potatoes and soft drink 330ml, only for 5 € 
  The offer is valid for the whole of August in e-food and in our stores outside Mykonos ❗️ 
  The offer is valid for these stores: 
  📍 Pericleous 2, Maroussi (opposite the electric one) ☎️ Phone: + 30 210 8025002 📍 Perikli Stavrou 3, Athens (Katechaki) ☎️ Phone: + 30 210 6998986 📦 E-food: Taz smash burger #tazsmashburgers#burgerlover#tastethebest#bestburger#bestburgerintown`,
  tags: [],
  cover_image: "https://www.tiktok.com/@taz_smash_burgers/video/7542191501661539606",
  publish_date: "2025-08-24",
  client_name: "Taz Smash Burger",
  client_image: "/companies/tazsmashburgerslogo.png",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@taz_smash_burgers/video/7542191501661539606",
  project_images: [],
  category: ["Food", "Promo"],
  duration: "0:30",
},
  

  {
    id: "7546680709956652310",
    video_title: "Αυγόφετες - Lidl Ad",
    video_description: `Αυγόφετες στον Φούρνο!
    Η πιο εύκολη συνταγή για το πρωινό σου! 
    Κάνε like άμα σου άρεσε το βίντεο και ακολούθησέ με για περισσότερες εύκολες συνταγές ❤️

Απόλαυση στο φούρνο! 😍🍳 Φρεσκοψημένες αυγοφέτες με αγαπημένα υλικά από τη @Lidl Hellas ιδανικές για πρωινό ή κολατσιό στο σχολείο και στο γραφείο. 
Θέλεις γεύση και άρωμα που ξεχωρίζει; Δοκίμασέ τες τώρα! ✨ `,
    tags: [],
    cover_image: "https://www.tiktok.com/@dimitris__michailidis/video/7546680709956652310",
    publish_date: "2025-09-05",
    client_name: "Dimitris Michailidis",
    client_image: "/companies/dimitrismichailidislogo.png",
    client_feedback: "",
    video_link: "https://www.tiktok.com/@dimitris__michailidis/video/7546680709956652310",
    project_images: [],
    category: ["Food", "Advertisement"],
    duration: "0:55",
    //software_used: ["Davinci Resolve"],
  },







{
  id: "UpkbGY0xZ8g",
  video_title: "Black Friday Giveaway",
  video_description: `Η μεγαλύτερη προσφορά της χρονιάς είναι εδώ! 
  -70% σε όλες τις θήκες, δώρο με κάθε παραγγελία και ευκαιρία να κερδίσεις ένα Mustang. 
  Κάτι τέτοιο δεν έχει ξαναγίνει στην Ελλάδα!`,
  tags: [],
  cover_image: "UpkbGY0xZ8g",
  publish_date: "2025-11-28",
  client_name: "Mobilfox Gr",
  client_image: "/companies/mobilfoxlogo.jpg",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/UpkbGY0xZ8g?feature=share",
  project_images: [],
  category: ["Advertisement"],
  duration: "0:23",
},


{
  id: "7615917827534392598",
  video_title: "GymBeam - RawKoupi",
  video_description: `Βρες το pre workout μου 🚣🏾‍♀️ ! Gymbeam.gr και παρτο με έκπτωση με κωδικό Giannelis5! 
  Στείλε μου και την παραγγελία σου με τον κωδικό Giannelis5 Για την κλήρωση των 100€ voucher που πληρώνω κάθε μήνα ! 
  #giannelis #koupi #rawkoupi @gymbeam.gr `,
  tags: [],
  cover_image: "7615917827534392598",
  publish_date: "2026-03-11",
  client_name: "Giannelis",
  client_image: "/companies/giannelislogo.png",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@giannelis_/video/7615917827534392598",
  project_images: [],
  category: ["Advertisement"],
  duration: "0:41",
},



{
  id: "TZVGmyn7owA",
  video_title: "Christmas Ad",
  video_description: `#ad Το γράμμα μου στον 🎅 είχε μόνο Old Spice!
Ο It’s Only γράφει γράμμα στον Άγιο Βασίλη, όταν ξαφνικά χτυπάει συναγερμός. 
Ένας μυστηριώδης τύπος του έχει αφήσει ένα δέμα, που τελικά αποκαλύπτεται ότι περιέχει gift sets Old Spice από τον Skunk 
#unbelievablyfresh247 #kanelevelup`,
  tags: [],
  cover_image: "TZVGmyn7owA",
  publish_date: "2025-12-20",
  client_name: "Old Spice Greece ",
  client_image: "/companies/oldspicelogo.jpg",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/TZVGmyn7owA",
  project_images: [],
  category: ["Advertisement"],
  duration: "1:54",
},



{
  id: "LgbZIfzdhYo",
  video_title: "Smokeisland - Entertainment Sketch",
  video_description: `🔜 Σύντομα στο site μας 👀🔥
➡️ Κάνε follow & μείνε συντονισμένος 🚀
#fy #greece #fyp #reel #follow`,
  tags: [],
  cover_image: "LgbZIfzdhYo",
  publish_date: "2025-09-15",
  client_name: "Smoke Island",
  client_image: "/companies/smokeislandlogo.png",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/LgbZIfzdhYo",
  project_images: [],
  category: ["Sketch"],
  duration: "0:28",
},


{
  id: "7624457543712017686",
  video_title: "Ο Chef μας, πάλι σώζει την κατάσταση!!! 😎",
  video_description: "🍝 Cosa nostra fresca pasta! Κλασικές και μοντέρνες Ιταλικές συνταγές με φρέσκα χειροποίητα ζυμαρικά.",
  tags: [],
  cover_image: "7624457543712017686",
  publish_date: "2026-04-03",
  client_name: "Cosa Nostra Fresca Pasta",
  client_image: "/companies/cosanostralogo.jpg",
  client_feedback: "",
  video_link: "https://www.tiktok.com/@cosa_nostra_fresca_pasta/video/7624457543712017686",
  project_images: [],
  category: ["Sketch"],
  duration: "0:59",
},



{
  id: "-KJq4K1-wKM",
  video_title: "First Day at Work",
  video_description: "Εσύ τι θα έκανες στη θέση του; 😂",
  tags: [],
  cover_image: "-KJq4K1-wKM",
  publish_date: "2025-10-15",
  client_name: "Burger Lab Heraklion",
  client_image: "/companies/burgerlablogo.jpg",
  client_feedback: "",
  video_link: "https://youtube.com/shorts/-KJq4K1-wKM?feature=share",
  project_images: [],
  category: ["Sketch"],
  duration: "0:46",
},




















];

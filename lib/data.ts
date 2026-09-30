export const categories = ["Featured","Music","Drawing & Painting","Marketing","Animation","Social Media","UI/UX Design","Creative Marketing","Digital Illustration","Film & Video","Crafts","Freelance & Entrepreneurship","Graphic Design","Photography","Productivity","Web Development","Data Science","Cooking"];

export const courses = [
  { title: "Learn Figma from Basic", image: "/images/learn-figma_basic.jpg" },
  { title: "Build Digital Asset", image: "/images/build-digital-asset.jpg" },
  { title: "The Power of Big Data", image: "/images/learn-from-bd-data.jpg" },
  { title: "Balancing Productivity and Life", image: "/images/balancing_productivity.jpg" },
  { title: "Mastering Money Management", image: "/images/mastering-money_management.jpg" },
  { title: "From Idea to Startup Success", image: "/images/from_idea_to_startup.jpg" },
].map((c) => ({ ...c, lessons: 17, duration: "2 hours 16 mins", comments: 59, rating: 4.5, level: "Beginner", author: "pumpnet studio", price: 25 }));

export const paths = ["Design", "Development", "IT & Software", "Business", "Marketing", "Photography"];

export const testimonials = [
  { name: "Sarah M.", role: "Enthusiastic Learner", tint: "bg-amber-300", text: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning." },
  { name: "James L.", role: "Lifelong Learner", tint: "bg-zinc-700", text: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development." },
  { name: "Alex B.", role: "Inspired Creator", tint: "bg-zinc-300", text: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally." },
];

export const footerLinks = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];
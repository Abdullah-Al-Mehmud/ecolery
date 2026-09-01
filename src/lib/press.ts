export type PressCategory = "Award" | "Press" | "Community";

export interface PressArticle {
  id: string;
  category: PressCategory;
  date: string;
  headline: string;
  excerpt: string;
  body: string[];
}

export const pressCategoryStyles: Record<PressCategory, string> = {
  Award: "bg-primary text-cream",
  Press: "bg-cork text-cream",
  Community: "bg-rust text-cream",
};

export const pressArticles: PressArticle[] = [
  {
    id: "ysali-peer-leadership-circles",
    category: "Press",
    date: "March 2025",
    headline: "Ecolery joins the YSALI Peer Leadership Circles",
    excerpt:
      "Our founder joins a regional cohort of young Southeast Asian leaders strengthening civic leadership and peer mentorship across borders.",
    body: [
      "In March 2025, Ecolery founder Nafesa Anzum Helaly joined the Young Southeast Asian Leaders Initiative (YSALI) Peer Leadership Circles, a regional program run by the U.S. State Department that connects emerging leaders across Southeast Asia.",
      "Across several weeks of virtual sessions, participants shared how their ventures were tackling everything from plastic waste to energy poverty. More importantly, they shared what was working.",
      "For Ecolery, the value was twofold: honest lessons from founders a few steps ahead, and a peer network that now reaches well beyond Dhaka. The circles continue to meet quarterly, with members swapping playbooks on funding, hiring and local manufacturing.",
      "Peer leadership, we learned, is less about mentorship from above and more about standing shoulder to shoulder. That is exactly how we want to grow.",
    ],
  },
  {
    id: "unesco-nestle-youth-impact-grant",
    category: "Award",
    date: "December 2024",
    headline: "Backed by the UNESCO x Nestlé Youth Impact Grant",
    excerpt:
      "Ecolery is named a winner of the global youth impact grant, funding education programs that turn classrooms into climate action.",
    body: [
      "Ecolery has been named a winner of the UNESCO x Nestlé Youth Impact Grant, a global initiative supporting young entrepreneurs whose work delivers real, measurable impact in their communities.",
      "The grant recognises our Green Generation school program, which pairs plastic-free products with classroom education. It helps students understand why the everyday choices they make matter for the planet.",
      "Support from the grant is already funding new teaching materials and visits to more schools across Dhaka, with a target of reaching 2,500 students by the end of the year.",
      "It is validation that impact and business can share the same sentence, and that the work is worth scaling.",
    ],
  },
  {
    id: "orange-corners-incubation",
    category: "Press",
    date: "June 2023",
    headline: "Selected for the Orange Corners incubation program",
    excerpt:
      "The team enters the Netherlands-backed incubator, building the business case behind a plastic-free Dhaka.",
    body: [
      "Ecolery was selected for the Orange Corners incubation program, the Netherlands-backed initiative that supports young entrepreneurs in building sustainable, job-creating businesses.",
      "Over the course of the program, the team worked with experienced mentors to sharpen the business model, tighten operations and prepare for growth beyond the first thousand cups.",
      "The program's emphasis on circular economy thinking shaped our product roadmap, from how cups are sourced to how they decompose at the end of their life.",
      "Being part of a cohort of like-minded founders made the early days feel a little less lonely, and a lot more ambitious.",
    ],
  },
  {
    id: "sme-fair-participation",
    category: "Community",
    date: "July 2024",
    headline: "Taking the mission to the SME Fair",
    excerpt:
      "Thousands of visitors try our cups for the first time at Bangladesh's biggest SME showcase, and the waitlist grows.",
    body: [
      "Ecolery took its cups to the SME Fair, Bangladesh's largest platform for small and medium enterprises, where thousands of visitors encountered a plastic-free cup for the first time.",
      "The booth became a classroom. Visitors tested the cups, asked about pricing, and left with a simple question answered: yes, an affordable alternative exists.",
      "Foot traffic converted into real orders and, more importantly, into conversations that travel further than any stall.",
      "For a young brand, the fair was a reminder that the mission sells itself once people can see and touch the product.",
    ],
  },
  {
    id: "generation-hope-thailand-win",
    category: "Award",
    date: "October 2025",
    headline: "Champions at Generation Hope Goals in Thailand",
    excerpt:
      "Ecolery takes top honours at the regional Generation Hope competition, bringing the climate action trophy home to Bangladesh.",
    body: [
      "Ecolery has been crowned champion at the Generation Hope Goals competition in Thailand, taking top honours in a regional field of climate-focused startups.",
      "The win follows a year of preparation that tested everything from the pitch to the business plan, and a belief that Bangladesh can build and export climate solutions, not just consume them.",
      "Judges praised the model's clarity: a product that replaces single-use plastic today, while education programs compound the impact for the next generation.",
      "The trophy now sits in our Dhaka office, a reminder that the work is being seen, and that there is plenty more to do.",
    ],
  },
  {
    id: "green-generation-school-visit",
    category: "Community",
    date: "February 2025",
    headline: "Green Generation visits 1,500 students",
    excerpt:
      "Our school program touches classrooms across Dhaka, teaching a generation of students why their cup of chai doesn't need plastic.",
    body: [
      "Ecolery's Green Generation campaign took the plastic-free message into classrooms this February, visiting schools across Dhaka and reaching more than 1,500 students.",
      "Each session pairs a short, interactive lesson on plastic waste with a live demonstration. Students watch a cup decompose, and learn why it matters that it does.",
      "The students' questions are the best part: Where does plastic go? Why doesn't everyone use these? What can I do tomorrow?",
      "The campaign continues through the year, with new school visits planned every month and a curriculum pack teachers can keep long after we leave.",
    ],
  },
];

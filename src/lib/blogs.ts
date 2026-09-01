export type BlogCategory = "Award" | "Impact" | "Innovation" | "Community" | "Program";

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  coverImage: string;
  content: string[];
}

export const blogCategoryStyles: Record<BlogCategory, string> = {
  Award: "bg-primary text-cream",
  Impact: "bg-moss text-cream",
  Innovation: "bg-ink text-cream",
  Community: "bg-cork text-cream",
  Program: "bg-primary-dark text-cream",
};

export const blogs: BlogPost[] = [
  {
    slug: "ecolery-wins-generation-hope-goals",
    category: "Award",
    date: "October 2025",
    readTime: "6 min read",
    title: "Champion at the UN: How Ecolery Won the Generation Hope Goals Climate Innovation Competition",
    excerpt:
      "236 applicants. 19 countries. One team from Bangladesh walked away with the win.",
    coverImage: "https://picsum.photos/seed/ecolery-hope/1200/700",
    content: [
      "Ecolery was named Champion of the Generation Hope Goals Climate Innovation Competition, held during the 12th Asia-Pacific Forum on Sustainable Development in Bangkok. Our co-founder Nafesa Anzum Helaly and Chief Sustainability Officer Rakib Hassan Siam represented Ecolery and Bangladesh on the ground, and it is one of the proudest milestones in our journey so far, a stage shared with some of the biggest names in international development.",
      "Getting here wasn't quick, and it certainly wasn't easy. Our team spent eight months refining our pitch, sharpening our product, and preparing to represent Bangladesh on an international platform. Standing out against that global field meant proving that edible cutlery wasn't just a clever idea, but a real, scalable answer to plastic pollution, backed by data, a working product, and a business model that could actually hold up under scrutiny. In the end, our edible cups spoke for themselves, and Ecolery was named the winning team.",
      "The competition opened with remarks from Ms. Armida Salsiah Alisjahbana, Executive Secretary of ESCAP, whose words set the tone for the day: that the world's youth aren't just the future of climate action, they're already leading it in the present. That message resonated deeply with our team. Ecolery began as a group of young people who couldn't unsee the plastic pollution around us, and this competition was proof that youth-led solutions are being taken seriously on the world stage.",
      "Alongside the recognition, Ecolery received a $5,000 USD prize to directly support scaling edible, biodegradable alternatives to single-use plastic in Bangladesh and beyond. For a young team still building its production capacity, that kind of investment means real progress, not just a symbolic gesture.",
      "None of this would have been possible without the people who backed us along the way. Our thanks go to coordinator Zakia Neela, Kim Sebastian Rodriguez and Christian Mortelliti of ESCAP, and the Youth Empowerment in Climate Action Platform (YECAP), UNFCCC RCC AP, and ESCAP Innovation Team for believing in youth-led innovation.",
      "Congratulations also to our fellow winners: Care For Coral, Eco-Sentinels, Eco-Stove, and the Tzu Chi Foundation. Together, we are proof that young innovators across the region aren't waiting for permission to build a sustainable future. We're already building it.",
      "This recognition is more than a trophy. It's validation that edible cutlery is a viable, scalable solution to plastic pollution, and that Bangladesh has a real role to play in the global green economy. As we look ahead, this milestone fuels our next steps: scaling production, expanding into new markets, and proving that sustainability doesn't have to be complicated. Sometimes, it just has to be edible.",
      "Here's to representing Bangladesh on the world stage, and to proving that small, sustainable choices can add up to something big.",
    ],
  },
  {
    slug: "feminist-green-action-award-2025",
    category: "Award",
    date: "May 2025",
    readTime: "5 min read",
    title: "Ecolery Wins the Feminist Green Action Award 2025",
    excerpt:
      "Honoured with the first-ever Feminist Green Action Award by ActionAid Bangladesh for leading a just, feminist green climate transition.",
    coverImage: "https://picsum.photos/seed/feminist-green/1200/700",
    content: [
      "Ecolery Bangladesh has been honoured with the first-ever Feminist Green Action Award 2025, launched by ActionAid Bangladesh to celebrate and encourage a just, feminist green climate transition. The award recognises small and medium enterprises and corporate entities leading the way in sustainable, inclusive environmental practices, and this year, Ecolery was one of only two SME winners selected, alongside Tripty Boutique House under the Centre for Development and Peace. Aman Spinning Mills Ltd. was recognised in the corporate category.",
      "Our co-founder Nafesa Anzum Helaly received the award on behalf of the team at a ceremony held on the evening of 14 May at a hotel in Dhaka, attended by diplomats, civil society representatives, corporate stakeholders, and fellow SME entrepreneurs.",
      "Reaching this stage was not a small feat. Applications were submitted online and reviewed by an expert panel before three finalists were shortlisted from the pool. The jury, comprising leaders from the Women Entrepreneurs Association of Bangladesh, suPPPort, eCourier Limited, ActionAid International, and ActionAid Bangladesh, judged entries on sustainable production and supply chains, environmentally responsible infrastructure, just transition and green employment, and gender-sensitive innovation, the very principles Ecolery has built its business around.",
      "At the event, we were thrilled to serve our edible cups to all the guests, and the feedback we received was incredibly encouraging. Watching people taste, and eat, the very product we built to fight plastic waste was a moment we won't forget.",
      "Country Director Farah Kabir, who moderated the evening, called the award \"a significant step towards achieving an equitable and sustainable world,\" while jury member Nasreen Fatema Awal spoke to the role SMEs play in driving that change, noting their unique ability to foster innovation and lead on environmentally friendly, gender-sensitive practices. The evening closed with remarks from AAIBS Chairperson Ibrahim Khalil Al-Zayad, alongside special guests Belinda Morrissey and Kristina Stefanova of ActionAid Australia, and was elevated by classical and jazz performances from a lineup of talented young musicians, all set in a venue designed entirely with recycled materials.",
      "This recognition means a lot for the entire Ecolery team working tirelessly to build a more sustainable, inclusive future. It strengthens our resolve to keep innovating for climate action, green entrepreneurship, and women's empowerment, and it is a reminder that sustainability and inclusion aren't separate goals. They grow together, and Ecolery is proud to be part of that story.",
      "Here's to more moments like this, and to building a future where sustainability and inclusion grow side by side.",
    ],
  },
  {
    slug: "women-entrepreneur-of-the-year-restoration-factory",
    category: "Award",
    date: "April 2025",
    readTime: "6 min read",
    title: "Women Entrepreneur of the Year: Ecolery's Night at the Restoration Factory Program",
    excerpt:
      "Named Women Entrepreneur of the Year at the closing event of the Restoration Factory Program at BRAC University.",
    coverImage: "https://picsum.photos/seed/restoration-factory/1200/700",
    content: [
      "Ecolery has been named Women Entrepreneur of the Year at the closing event of the Restoration Factory Program in Bangladesh, held at BRAC University in the heart of Dhaka. Founders from over 30 startups gathered to showcase their work across climate-smart agriculture, renewable energy, waste and circularity, nature-based solutions, and sustainable manufacturing, with 17 entrepreneurs pitching for recognition across four impact categories. The program itself exists to identify and back the ventures with the strongest potential to restore ecosystems and build climate resilience, so simply being selected to pitch was already a milestone in its own right.",
      "The room was full of people who take this work seriously: entrepreneurs, mentors, investors, development partners, private sector leaders, senior government officials, and representatives from UNEP. Being chosen among that crowd, and among a genuinely strong field of climate ventures, is a recognition we don't take lightly.",
      "Dhaka generates hundreds of tonnes of plastic waste every single day, yet affordable, scalable alternatives to single-use plastics remain limited and often out of reach for everyday businesses. That is the gap Ecolery was built to close, offering biodegradable cutlery that replaces plastic while creating green jobs for marginalized communities along the way. This award is proof that the model works, and that solving an environmental problem and creating economic opportunity don't have to be separate missions. For a company built and led by women in a sector where that is still far too rare, it is also a recognition of the path we've had to carve for ourselves.",
      "Congratulations to our co-founders, Shabiha Sultana Nuha and Nafesa Anzum Helaly, and to Rakib Hassan Siam, Chief Sustainability Officer, whose work made this recognition possible. Their persistence over the past year, through pilot production runs, partnership negotiations, and countless pitch rooms, is what carried Ecolery to this stage.",
      "Three other teams were recognised in the remaining categories that night. Bortoni took home the Environmental Impact Award for their solar-powered lighting solution for fish farmers, Eko Leven won the Social Impact Award for turning construction waste into eco-bricks, and Countree Agro received the Innovation Award for building a traceable local supply chain for quinoa and chia. Seeing this many homegrown, climate-focused startups in one room is a reminder of just how much talent and ambition exists in Bangladesh right now.",
      "Our thanks go to the mentors who supported us throughout the program, guiding us through the parts of scaling a green business that no pitch deck can fully prepare you for, and to iDE Bangladesh and Bridge for Billions, whose partnership made this program and event possible, alongside the UN Decade on Ecosystem Restoration for backing this kind of work at scale.",
      "This recognition pushes us to keep going, not just as a business solving plastic pollution, but as a team proving that women-led, purpose-driven ventures belong at the center of Bangladesh's green economy.",
    ],
  },
  {
    slug: "icddrb-world-environment-day-research",
    category: "Impact",
    date: "June 2025",
    readTime: "5 min read",
    title: "Ecolery's Research Named Top 3 at icddr,b's World Environment Day 2025 Competition",
    excerpt:
      "Selected among the top 3 out of more than 600 submissions at the World Environment Day 2025 Research Abstract Competition.",
    coverImage: "https://picsum.photos/seed/icddrb-research/1200/700",
    content: [
      "Ecolery Bangladesh was selected among the top 3 research presentations out of more than 600 submissions at the World Environment Day 2025 Research Abstract Competition, organised by icddr,b's Environmental Health and WASH Research Group. For a team that started out solving a plastic problem with edible cups, being recognised on a research stage of this scale, at one of the region's most respected health research institutions, was a proud and humbling experience. It also marked a shift for us, from being known purely as a product company to being taken seriously as a research-driven one.",
      "Our research, titled \"From Waste to Worth: Innovating Biodegradable Cutlery from Food Waste,\" explored transforming food waste, like banana peels, rice husks, and jackfruit seeds, into durable, biodegradable, and edible cutlery. This is not just an academic exercise for us. It is the same R&D work behind our next generation of edible cups, and it represents the direction we believe the entire industry needs to move in: turning what we throw away into something genuinely useful, without relying on virgin raw materials that come with their own environmental cost.",
      "Out of over 600 submissions, being shortlisted into the top 3 meant our work was reviewed alongside some of the strongest environmental health research in the country. Getting the chance to defend it in front of a research-focused audience pushed us to sharpen our thinking on where this technology can realistically go, from lab-scale prototypes to something that can be manufactured at volume.",
      "The research was led by Shabiha Sultana Nuha, CEO of Ecolery, whose commitment to climate-conscious innovation and circular economy solutions continues to inspire our team every day. Her oral presentation stood out for its clarity, impact, and real-world relevance, and we're incredibly proud to have her at the forefront of our mission representing not just Ecolery, but a wider movement of youth-led, science-backed climate solutions coming out of Bangladesh.",
      "This hands-on research gave us insights that continue to shape our work. It is proof that the ingredients for a circular economy are often closer than we think, sometimes sitting right in our kitchen waste bins.",
      "We're grateful to icddr,b for recognising our work and for providing a platform to amplify climate innovation through youth-led, impact-driven research. Recognition like this reminds us why we started Ecolery in the first place: not just to build a product, but to prove that sustainability and rigorous science can move forward together.",
    ],
  },
  {
    slug: "green-entrepreneurship-bootcamp-2",
    category: "Program",
    date: "November 2025",
    readTime: "5 min read",
    title: "Building Greener Futures: Ecolery's Time at Green Entrepreneurship Bootcamp 2.0",
    excerpt:
      "Selected to attend ActionAid Bangladesh's residential bootcamp alongside a select group of green entrepreneurs from across the country.",
    coverImage: "https://picsum.photos/seed/bootcamp-green/1200/700",
    content: [
      "Every founder knows this: the right environment can shift your thinking, sharpen your mission, and strengthen your resolve. That is exactly what the Green Entrepreneurship Bootcamp 2.0 by ActionAid Bangladesh offered, a rare blend of structure, warmth, and genuine community, and we're grateful to share that Ecolery was selected to attend alongside a select group of green entrepreneurs from across the country.",
      "Held from 16 to 19 November 2025 at Global Platform Bangladesh, the residential bootcamp brought together a small group of green entrepreneurs for four days of focused, hands-on work. It was one of the most thoughtfully designed programs we've experienced. The space felt homely, safe, and quiet in all the right ways, the kind of environment where real creativity flows and founders can work at full productivity without the usual distractions of running a business day to day.",
      "For a young team like ours, that kind of space is rare and valuable. Most of our time is spent solving immediate problems, from production runs to partnership calls, and it's easy to lose sight of the bigger picture. A few days away, surrounded by other founders wrestling with the same questions around scaling sustainably and building businesses that genuinely serve their communities, gave us the room to think longer term about where Ecolery is headed next.",
      "A huge appreciation goes to ActionAid Bangladesh for crafting a platform that truly supports green entrepreneurs, not just with funding or exposure, but with the kind of thoughtful, structured environment that helps ideas actually mature into workable strategies. And heartfelt gratitude to our co-founder Shabiha Sultana Nuha, whose leadership guided our participation with clarity, compassion, and purpose throughout the bootcamp.",
      "We also want to extend a special note of thanks to Alokananda Datta, Senior Programme Officer at ActionAid Bangladesh, whose warm communication and guidance made the entire experience smoother and more meaningful from start to finish. The small, human touches, clear updates, genuine check-ins, made a real difference in how comfortable and supported everyone felt.",
      "Being part of this bootcamp reaffirmed something we already believed: that building a green business in Bangladesh doesn't have to be a solitary, uphill climb. When founders are given the right space, the right mentorship, and a community of peers who understand the specific pressures of this work, from sourcing sustainable materials to convincing customers that eco-friendly doesn't mean lower quality, the ideas that come out of it are sharper and more resilient. We left the bootcamp not just with new frameworks and connections, but with a renewed sense of clarity about the road ahead for Ecolery.",
      "Here's to building greener futures together, one idea, one collaboration, and one courageous step at a time.",
    ],
  },
  {
    slug: "ysali-peer-leadership-circles",
    category: "Community",
    date: "March 2025",
    readTime: "5 min read",
    title: "Driving Sustainable Change: Ecolery Joins the YSALI Peer Leadership Circles",
    excerpt:
      "A rare regional platform for collaboration, mutual learning, and genuine community where emerging changemakers from across South Asia came together.",
    coverImage: "https://picsum.photos/seed/ysali-circles/1200/700",
    content: [
      "Every regional breakthrough begins exactly like this: a dynamic network, a clear strategic vision, and the collective momentum of leaders who refuse to let local impact stop at national borders. That is precisely what the YSALI Peer Leadership Circles offered — a rare regional platform for collaboration, mutual learning, and genuine community where emerging changemakers from across South Asia came together to scale grassroots climate action into long-term regional solutions. Sponsored by the U.S. Department of State's Bureau of South and Central Asian Affairs and implemented by the University of Nebraska Omaha's Center for Afghanistan and Regional Studies alongside the East-West Center, the initiative provided the perfect environment for Ecolery to exchange ideas and share our zero-waste vision with fellow visionaries.",
      "For a scaling enterprise like ours, being immersed in a space dedicated to cross-border collaboration is incredibly powerful. Much of our everyday energy goes into the hyper-local work of expanding our presence, partnering with local cafes, and ensuring our production loops remain perfectly sustainable. However, spending time alongside regional peers who are navigating similar challenges — from natural resource management to designing circular economies — gave us the essential room to think larger and structure our strategies for a global audience. It served as a powerful reminder that our mission to eradicate single-use plastic waste and replace over 500 billion disposable cups worldwide is a shared journey that requires collective regional strength.",
      "A profound appreciation goes to the YSALI organizers and partners for crafting a network that empowers youth entrepreneurship, driving the kind of deep, peer-led mentorship that helps mature local business models into resilient strategic frameworks. We are incredibly proud of our Chief Strategy Officer, Rakib Hassan Siam, whose dedicated leadership guided Ecolery's representation with sharp purpose and a commitment to shared growth throughout the peer circles. His dedication to building sustainable dining alternatives and empowering marginalized rural communities was at the heart of every discussion, proving that economic growth and environmental justice go hand in hand.",
      "Participating in the YSALI Peer Leadership Circles reaffirmed our deepest conviction: solving global issues like Bangladesh's annual 87,000 tonnes of single-use plastic waste cannot be achieved in isolation. When young leaders are given a collaborative space to swap insights, the solutions that emerge are inherently stronger, more scalable, and uniquely adapted to our regional realities. We emerged from this experience with a renewed sense of clarity and an expanded community of allies ready to push boundaries. Here is to shaping a plastic-free future across South Asia and beyond, one edible cup, one collaboration, and one bold leadership step at a time.",
    ],
  },
  {
    slug: "unesco-nestle-youth-impact-grant",
    category: "Impact",
    date: "December 2024",
    readTime: "5 min read",
    title: "From Local Zero-Waste Vision to Global Impact: Ecolery Selected for the UNESCO x Nestlé Youth Impact Grant",
    excerpt:
      "Selected as part of a prestigious international initiative joining a global cohort of 100 youth-led projects dedicated to environmental sustainability.",
    coverImage: "https://picsum.photos/seed/unesco-nestle/1200/700",
    content: [
      "Every milestone achieved by a young, green enterprise carries a profound realization: the quiet power of having your vision validated by global institutions that believe in the capacity of youth to shape a better tomorrow. That is exactly what being recognized by the UNESCO x Nestlé \"Youth Impact: Because You Matter\" Global Youth Grant Scheme has brought to Ecolery — an incredible sense of validation, regional pride, and a renewed drive to accelerate our circular mission. Selected as part of this prestigious international initiative, Ecolery joins a global cohort of 100 youth-led projects dedicated to environmental sustainability, packaging innovations, and grassroots climate action.",
      "For a dedicated startup navigating the uphill battles of green entrepreneurship in Bangladesh, this global support is transformative. While our day-to-day focus is often consumed by the immediate demands of production, local distribution, and community-level education, being backed by organizations like UNESCO and Nestlé opens up a whole new horizon of possibility. It transitions our edible, zero-waste cutlery from a localized solution into a globally recognized climate mitigation strategy, granting us access to a six-month journey of specialized immersion training, project development workshops, and direct executive mentorship. It provides the exact structure and resource platform a young team needs to turn bold ideas into highly resilient, scalable market solutions.",
      "A deep, heartfelt thank you goes to UNESCO and Nestlé for designing a grant scheme that does not just distribute resources, but actively cultivates the leadership potential of young changemakers. We are immensely grateful to our co-founder, Shabiha Sultana Nuha, whose visionary leadership, academic depth, and unwavering focus on sustainable impact spearheaded this application and continues to guide Ecolery's trajectory with purpose and clarity.",
      "This milestone stands as a beautiful reminder that our collective dream of plastic-free oceans and thriving circular economies is not a solitary endeavor. With the right support, the right mentorship, and a global community of innovators standing alongside us, the path forward becomes clearer, sharper, and incredibly inspiring. We step into this next chapter ready to take on the challenge, continuing to build greener futures, one delicious, zero-waste step at a time.",
    ],
  },
  {
    slug: "orange-corners-incubation-program",
    category: "Program",
    date: "June 2023",
    readTime: "4 min read",
    title: "From Grassroots Innovation to Global Scale: Ecolery Joins the Orange Corners Incubation Program",
    excerpt:
      "Selected for the Netherlands-backed incubator, building the business case behind a plastic-free Dhaka.",
    coverImage: "https://picsum.photos/seed/orange-corners/1200/700",
    content: [
      "Scaling a green enterprise requires a unique combination of passion, structured mentorship, and an ecosystem that believes in sustainable transformation. For Ecolery, being selected for the Orange Corners Incubation Program represents a monumental step forward — a valuable validation of our circular mission and a strategic launchpad to transition from a growing startup into a resilient, market-ready enterprise.",
      "In the day-to-day rush of managing circular manufacturing, coordinating café partnerships, and driving environmental impact, it is easy to get caught up in immediate operations. This incubation program gives our team the essential space to step back and focus on the bigger picture. Through rigorous training, financial resources, and access to seasoned business experts, we are equipping ourselves to optimize our supply chain, scale production, and expand our footprint both locally and internationally with absolute clarity.",
      "We extend our deepest gratitude to the Orange Corners team, the Kingdom of the Netherlands, and the implementing partners for designing a platform that genuinely understands the distinct pressures faced by young entrepreneurs. We are also incredibly proud of our leadership team, whose clear strategic vision and dedication throughout the selection process have successfully guided us into this new chapter of growth.",
      "Entering this incubation journey is a powerful reminder that tackling Bangladesh's pressing plastic waste challenges does not have to be a solitary climb. Surrounded by a network of peers and mentors who share our determination to eliminate single-use plastics, we are more prepared than ever to refine our strategies, push boundaries, and build a cleaner, greener future — one delicious, zero-waste step at a time.",
    ],
  },
  {
    slug: "sme-fair-showcasing-impact",
    category: "Community",
    date: "July 2024",
    readTime: "4 min read",
    title: "Where Innovation Meets Opportunity: Ecolery at the SME Fair",
    excerpt:
      "Proudly participated in the SME Fair organised by Truvalu Bangladesh with support from the Embassy of Switzerland.",
    coverImage: "https://picsum.photos/seed/sme-fair-ecolery/1200/700",
    content: [
      "Ecolery Bangladesh proudly participated in the SME Fair: Showcasing Impact, organised by Truvalu Bangladesh with support from the Embassy of Switzerland in Bangladesh. The event brought together promising SMEs, investors, and financial institutions, with a strong focus on businesses led by or empowering women.",
      "At the fair, Ecolery shared its journey in green innovation, highlighting its environmentally friendly edible cups and efforts to create sustainable livelihood opportunities for rural women. The platform also enabled meaningful engagement with entrepreneurs, partners, and stakeholders committed to inclusive and impact-driven growth.",
      "We extend our sincere thanks to Sabbir Ahmed for the invitation and continued support. Events like this play a vital role in strengthening Bangladesh's entrepreneurial ecosystem, and we are grateful to be part of a community driving sustainable and inclusive change.",
      "Our time at the SME Fair reaffirmed that the appetite for green innovation in Bangladesh is growing rapidly. It proved that when people are presented with a choice that is both high-quality and genuinely sustainable, they are eager to embrace it. We left the fair with a renewed drive to scale our production, ready to weave our zero-waste cups into the daily fabric of cafes and communities across the nation one delicious, conscious step at a time.",
    ],
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getFeaturedBlogs(count = 3): BlogPost[] {
  return blogs.slice(0, count);
}

export function getRelatedBlogs(currentSlug: string, count = 3): BlogPost[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return blogs.slice(0, count);
  return blogs
    .filter((b) => b.slug !== currentSlug && b.category === current.category)
    .slice(0, count);
}

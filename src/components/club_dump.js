const clubsData = [
  {
    id: 1,
    title: "180 Degrees Consulting",
    description:
      "180 Degrees Consulting is the premier consulting organization at UCLA for socially-driven clients. We boast a group of students who possess intelligent business minds and unparalleled passion for solving some of the world’s greatest socio-economic problems. Equipped with consistent training, our student consultants are committed to making a meaningful impact on our clients and ensuring that their project objectives are achieved. Our team is made up of individuals from diverse backgrounds, allowing us to offer fresh perspectives and foster a tight-knit community of open minded people.",
    RecommendedInterest: [
      "Business",
      "Service",
      "Consulting",
      "Socio-Economics",
    ],
    rating: 3.6,
    numReviews: 18,
    imageURL:
      "https://static.wixstatic.com/media/af12eb_1e3d5508b0f14419bb91c815ba97e2da~mv2.png/v1/fill/w_522,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/180DC_LOGO%20BRANCHES_Horizontal.png",
  },
  {
    id: 2,
    title: "1girl at UCLA",
    description:
      "1girl is a nonprofit all girls organization that allows dedicated college women to mentor middle school girls towards becoming successful and confident women in the future. 1girl provides a unique, proven curriculum that empowers girls from underserved areas to develop the skills they will need to be successful. 1girl operates through pre-existing afterschool programs and Boys and Girls Clubs. The programs are facilitated by UCLA students, providing our facilitators an opportunity to develop their skills through a real world leadership role. The program is designed around five core skills: Public Speaking, Creative Problem Solving, Critical Thinking, Goal Setting, and Conflict Resolution.",
    RecommendedInterest: [
      "Outreach",
      "Service",
      "Women",
      "Boys and Girls Club",
    ],
    rating: 3.8,
    numReviews: 7,
    imageURL:
      "https://static.wixstatic.com/media/43f05b_16e8825db3f74882916baaa795f08068~mv2.png/v1/fill/w_152,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1girl-logo-640x480_edited.png",
  },
  {
    id: 3,
    title: "4Corners Christian Fellowship",
    description:
      "4Corners is a Christian fellowship of UCLA undergraduate students that meets weekly for bible study & fun activities. Throughout the week, we gather in smaller groups to hang out, eat together, play sports, or just enjoy each other's company. So, whether you’re a Christian, or someone who’s just curious about finding out what Christians believe, we welcome you! For everyone, from everywhere!",
    RecommendedInterest: ["Religious", "Christian", "Bible", "God"],
    rating: 4.2,
    numReviews: 12,
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/612db0ca0c923963b9dff05d/f6e85d44-78dd-4900-9231-63c9de4939a4/4Corners+-+Logo+White.png?format=1500w",
  },
  {
    id: 4,
    title: "AAPI Pre-Law Society",
    description:
      "APS is an undergraduate Pre-Law society that aims to not only empower the AAPI community but also build the next generation of UCLA lawyers. We are passionate about promoting safety and justice for marginalized communities. Throughout the year, we will host workshops, networking events, and fireside chats to connect members with graduate students, professors, and leaders in the legal field. Members will also have the opportunity to conduct their own research and receive peer reviews before publication.",
    RecommendedInterest: ["Law", "Safety", "Justice", "Pre-Law"],
    rating: 4.9,
    numReviews: 20,
    imageURL:
      "https://assets.zyrosite.com/mePXRQNNVlI34DMN/logo_simple-AoPQRbP8qkSDM6z7.png",
  },
  {
    id: 5,
    title: "Abundant Housing at UCLA",
    description:
      "Abundant Housing at UCLA is an alliance of student advocates fighting for housing access, availability, and affordability at UCLA, in Westwood, and across Los Angeles.",
    RecommendedInterest: [
      "Social Activism",
      "Housing",
      "Accessibility",
      "Affordability",
    ],
    rating: 3.5,
    numReviews: 5,
    imageURL:
      "https://abundanthousingla.org/wp-content/uploads/2021/08/ahla-logo-revised-300-transp-02-821.png",
  },
  {
    id: 6,
    title: "ACM Teach LA",
    description:
      "ACM Teach LA is a nonprofit organization dedicated to making CS education more equitable in LA! We teach weekly classes focusing on a variety of topics (from Introduction to Scratch and Python all the way to AI & Machine Learning) and have a development team that writes education support software. No previous experience is required, and we love anybody and everybody who has a passion for teaching! If you're interested, feel free to reach out!",
    RecommendedInterest: [
      "Computer Science",
      "Software Engineering",
      "Tech",
      "Coding",
    ],
    rating: 3.8,
    numReviews: 52,
    imageURL: "https://teachla.uclaacm.com/img/teachLA_wordmark_gradient.svg",
  },
  {
    id: 7,
    title: "Acts2Fellowship",
    description:
      "Acts2fellowship is a Christian student group on the UCLA campus. We meet every week on campus to study the Bible and find out God's perspective. College is the perfect time to explore the big questions of life and here at A2F, it's a safe place to ask them.",
    RecommendedInterest: ["Religion", "Christian", "God", "Bible"],
    rating: 5.8,
    numReviews: 17,
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/5d72a6426b29cc0001f4aa63/9c65d31a-b3a6-4075-96b6-14618775c0b9/a2flogo-04.png?format=1500w",
  },
  {
    id: 8,
    title: "Advanced Degree Consulting Club",
    description:
      "Advanced Degree Consulting Club (ADCC) serves advanced degree candidates (with a specific focus on PhD and Master students) that are passionate about pursuing management consulting as their career path. Our Goals are: 1. Serve advanced degree candidates (with a specific focus on PhD and Master students) that are passionate about pursuing management consulting as their career path. 2. Create a community of future consultants and business leaders with advanced degrees and provide a platform for information exchange and networking. 3. Bridge the gap between the academic world and the business consulting industry by hosting consulting career events, career fairs, workshops and other related events. 4. Develop partnerships and share resources with other consulting organizations and groups.",
    RecommendedInterest: [
      "Business",
      "Career Planning",
      "Consulting",
      "Academia",
    ],
    rating: 4.2,
    numReviews: 20,
    imageURL:
      "https://adccucla.org/wp-content/uploads/2021/10/cropped-11903716_947910941914592_2196623485663523096_n-56x47.png",
  },
  {
    id: 9,
    title: "Advocating Intersectional Medicine",
    description:
      "Advocating Intersectional Medicine (AIM) is dedicated to educating one another on social justice issues regarding healthcare and medicine, while promoting advocacy skills in writing, graphics, and other forms of communication. We focus our understanding of healthcare through a lens of intersectionality. We work to provide resources through education and social media, while also creating fundraising, outreach, and volunteering events in order to achieve equitable and accessible medicine. Our goal is to promote advocacy and empower others to critically examine ways to make healthcare more equitable by putting them to practice.",
    RecommendedInterest: [
      "Social Activism",
      "Medicine",
      "Volunteering",
      "Healthcare",
    ],
    rating: 6.7,
    numReviews: 65,
    imageURL:
      "https://aimatucla.weebly.com/uploads/1/3/2/8/132834536/new-aim-logo_orig.png",
  },
  {
    id: 10,
    title: "AI Robotics Ethics Society",
    description:
      "As technology advances at an exponential rate, it is imperative that we begin thinking about how Artificial Intelligence (AI) will interact with and impact society at different facets of daily life, with the focus on ethical implication and its implementation within AI systems. Notably, the development and involvement in AI ethics by students and professionals has been relatively nascent. The foresight of how important it is to regulate AI through the lens of ethical discussion and implementation is of paramount significance within the setting of the rapid development of AI and how it has already permeated of our daily lives. As such, the AI Robotics Ethics Society was founded in 2018 at UCLA by Aaron Hui to promote the awareness and importance of ethical implementation/regulation of AI. AIRES achieves its mission of ensuring AI is created both ethically and responsibly through a three-pronged approach: 1. To host a series of intra- and inter-departmental discussions at universities on AI and Robotics ethics. 2. To create a network and promote such awareness through hosting discussions and conferences with chapters of the AI Robotics Ethics Society. 3. To create a small lecture series on the latest breakthroughs and achievements in AI and Robotic ethics.",
    RecommendedInterest: [
      "AI",
      "Robotics",
      "Computer Science",
      "Software Engineering",
    ],
    rating: 8.2,
    numReviews: 64,
    imageURL:
      "https://static.wixstatic.com/media/c57e34_226b202dd0f44150b58dbe87a8aef231~mv2.png/v1/fill/w_920,h_920,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/AIRES%20LOGO%20(Without%20Words)_edited.png",
  },
  {
    id: 11,
    title: "AI Safety at UCLA",
    description:
      "AI Safety at UCLA researches the impact of increasingly powerful AI systems. We promote the development of fair, secure, and useful AI tools. Join us if you'd like to learn about AI Safety and research how we can use AI to build a better future. http://aisafetyatucla.org/",
    RecommendedInterest: ["AI", "Robotics", "CS", "Software Engineering"],
    rating: 6.3,
    numReviews: 45,
    imageURL: "http://aisafetyatucla.org/assets/logo-5122d258.png",
  },
  {
    id: 12,
    title: "AIESEC",
    description:
      "AIESEC at UCLA is a local chapter of one of the world's largest nonprofit with over 200 chapters existing worldwide. We in AIESEC are dedicated to fostering youth leadership by facilitating global exchanges and promoting cross-cultural understanding. If you are interested in promoting youth activism and coordinating global operations, please contact vptm-ucla@aiesecus.org!",
    RecommendedInterest: [
      "Youth Leadership",
      "Community Service",
      "Global Exchange",
      "Culture",
    ],
    rating: 3.5,
    numReviews: 23,
    imageURL:
      "https://uploads-ssl.webflow.com/61b75739938e76387d26d613/6258375d22d2c582bf1b9e4f_Blue-Logo.png",
  },
  {
    id: 13,
    title:
      "Aleph: Undergraduate Research Journal for the Humanities and Social Sciences",
    description:
      "Aleph (pronounced “ah-lef”) is UCLA’s only official journal publishing undergraduate research in the humanities, social sciences, and behavioral sciences. Run by undergraduates who review submissions, Aleph publishes select submissions on-line, and in an annual “best of” print journal, with the support of our sponsor, the UCLA Undergraduate Research Center. Our goal is to disseminate a diverse group of papers that reflects the quality and breadth of undergraduate research at UCLA. Aleph offers an opportunity for motivated UCLA undergraduates to have their academic work published online and in print. By making UCLA’s undergraduate research available to a larger audience, we hope to broaden the impact and appeal of undergraduate research. As a student-run journal, Aleph provides all UCLA undergraduates the chance to join its staff and gain volunteer experience in publicizing, editing, and publishing.",
    RecommendedInterest: ["Academic", "Journalism", "Publishing", "Printing"],
    rating: 4.5,
    numReviews: 15,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/299669821_592235122243117_2766277647589080191_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=x4QtOYFJF88AX9smtKu&_nc_ht=scontent-lax3-1.xx&oh=00_AfBmVixQpERZKIi2y3J5n-ZhhFW7sTY1uCrc7o4DSMXWTQ&oe=6474833B",
  },
  {
    id: 14,
    title: "Alpha Chi Sigma, Beta Gamma Chapter",
    description:
      "We are a professional and social fraternity for men and women in the chemical sciences. All members are bound by three fraternal objects: To bind its members with a tie of true and lasting friendship. To strive for the advancement of chemistry both as a science and as a profession. To aid its members by every honorable means in the attainment of their ambitions as chemists throughout their mortal lives. We are a very active chapter at the University of California, Los Angeles partaking in various academic, philanthropic, and social events. We encourage all students interested in science (not just in the field of chemistry) to explore what our fraternity has to offer and consider pledging Alpha Chi Sigma.",
    RecommendedInterest: [
      "Community Involvement",
      "Fraternity",
      "Science",
      "Philanthropy",
    ],
    rating: 3.2,
    numReviews: 16,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/305293346_416409250478890_8264908394476468499_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=o4oxv41C0JwAX9sT4t1&_nc_ht=scontent-lax3-2.xx&oh=00_AfCVbXWzg6hqlQd1b2FISu-gaAa4e4wHrU_C8bX520FCSg&oe=6474EAC4",
  },
  {
    id: 15,
    title: "Alpha Delta Pi Sorority",
    description: "Be the First.",
    RecommendedInterest: [
      "Sorority",
      "Academic",
      "Community Involvement",
      "Women",
    ],
    rating: 5.5,
    numReviews: 16,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/271747154_10159164415852098_2294470892016819674_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xFmeIhhIXY4AX9OdnNd&_nc_ht=scontent-lax3-2.xx&oh=00_AfAoMqOntE-43XEqNVk6VSmAEbp6cLjhVCchSVhEgYRGZQ&oe=6474EF47",
  },
  {
    id: 16,
    title: "Alpha Epsilon Delta - The Health Pre-Professional Honor Society",
    description:
      "The object of this society shall be: 1. To encourage excellence in prehealth scholarship. 2. To stimulate an appreciation of the importance of prehealth education in the study of medicine and all of the relating health fileds. 3. To promote cooperation and contacts between health professional and prehealth students and educators in developing an adequate program of prehealth education. 4. To bind together similarly interested students. 5. To use its knowledge for the benefit of health organizations, charities, and the community.",
    RecommendedInterest: ["Pre-health", "Fraternity", "Medicine", "Healthcare"],
    rating: 5.4,
    numReviews: 12,
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/62ba867d90a0970ee1fd65bd/2f6dd0cc-d4b2-4a71-91ea-b502b47f2711/Screen+Shot+2022-07-01+at+1.49.22+PM.png?format=1500w",
  },
  {
    id: 17,
    title: "Alpha Epsilon Pi Fraternity",
    description:
      "Alpha Epsilon Pi, the Jewish Fraternity of North America, was founded to provide opportunities for a Jewish man seeking the best possible college and fraternity experience. We have maintained the integrity of our purpose by strengthening our ties to the Jewish community and serving as a link between high school and career. Alpha Epsilon Pi develops leadership for the North American Jewish community at a critical time in a young man's life.",
    RecommendedInterest: [
      "Jewish",
      "services",
      "Community Involvement",
      "Fraternity",
    ],
    rating: 7.2,
    numReviews: 11,
    imageURL:
      "https://www.aepiucla.com/uploads/1/3/0/9/130966101/published/esponda.png?1582521397",
  },
  {
    id: 18,
    title: "Alumni Scholars Club",
    description:
      "To promote service, leadership and community among all Alumni Scholars, and to bridge the gap between Alumni and students around campus and across the world. ASC's signature projects include UCLA Locks of Love, My Last Lecture, UCLA Alumni Mentor Program, and much more.",
    RecommendedInterest: ["Leadership", "Alumni", "Scholar", "Mentor"],
    rating: 6.1,
    numReviews: 56,
    imageURL:
      "https://alumnischolarsclub.alumni.ucla.edu/resources/images/logo.png",
  },
  {
    id: 19,
    title: "American Academy for Medicine and Surgery at UCLA",
    description:
      "Opportunities to learn and practice basic, intermediate, and advanced surgical skills can significantly enhance medical students’ preparation for clinical clerkships and residency programs in surgical fields. The goal of AAMS at UCLA is to empower students at DGSOM to gain confidence and fluency in their surgical skills by providing consistent and frequent opportunities to practice through our monthly surgery workshops. We are collaborating with an amazing group of physicians through AAMS and UCLA who will teach skills ranging from knot-tying, suturing, and instrument handling to essential cardiothoracic surgery procedures.",
    RecommendedInterest: ["Medicine", "Surgery", "Clinical", "Residency"],
    rating: 3.1,
    numReviews: 23,
    imageURL: "https://aamedsurg.org/static/aams-logo.png",
  },
  {
    id: 20,
    title: "American Cancer Society On Campus",
    description:
      "American Cancer Society On Campus (ACS) is a collegiate branch of the American Cancer Society that brings the fight against cancer directly to college students by planning Relay for Life at UCLA, encouraging education, inspiring advocacy, and celebrating survivorship. Mainly, we aim to build a community for those affected by cancer and work so that one day, no one has to hear the dreaded words 'you have cancer.' Relay for Life is a 24-hour fundraising festival held at Drake Stadium to celebrate survivors, remember those we've lost, and fight back against a disease that affects and connects us all in some way! The event includes inspiring ceremonies, our Mr. Relay Pageant, talented performers, a silent rave, and so much more. In the past five years, we raised over $1,000,000 for the American Cancer Society to fund cancer research and patient services to support those battling, making us the largest college Relay West of the Mississippi! Throughout the year, in addition to planning Relay, we also plan education rallies on Bruin Walk for various types of cancers, organize hospital visits to bring cards to patients on the Oncology floor, and host fundraising events such as comedy shows and concerts! Since our start 20 years ago, American Cancer Society On Campus has been recognized with the Leaders of Hope award three years in a row, Survivor & Caregiver Engagement Chapter of the Year three years in a row, Advocacy Chapter of the Year, and Top Fundraiser of the year.",
    RecommendedInterest: ["Healthcare", "Science", "Cancer", "Medicine"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/326259828_581626346719516_4330066905185523653_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AA2w0addbCsAX-0Ke6u&_nc_ht=scontent-lax3-1.xx&oh=00_AfDh796va1OfSNudrNUHeMg0-a4rk9Lmrht0aTiqQesJlA&oe=64735845",
  },
  {
    id: 21,
    title: "American Indian Graduate Student Association",
    description:
      "As an official campus-based student organization, AIGSA recognizes its responsibility to support and uphold Indigenous scholarship, foster student retention, and collaborate with the Los Angeles Native American Indian community. AIGSA advocates for all American Indian, Indigenous, Native American, Alaska Native, Native Hawaiian, Pacific Islander, Afro-Indigenous, Aboriginal, First Nations, and Two-Spirit, Indigiqueer or LGBTQIA+ students at UCLA. AIGSA strives to create community and empower Native graduate students through academic opportunities with the involvement of UCLA faculty. Membership comprises Native scholars from all academic disciplines, students of American Indian studies, and allies.",
    RecommendedInterest: [
      "Indian",
      "Native American",
      "Indigenous",
      "Cultural",
    ],
    rating: 6.7,
    numReviews: 21,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/300442130_581448560100819_5226119457214064677_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TjIzhcbKkbIAX-Aa3DU&_nc_ht=scontent-lax3-1.xx&oh=00_AfBflaGazZ4A16nlu1l4YfOarU6NPz0scjTOcCypdt-11A&oe=647492C3",
  },
  {
    id: 22,
    title: "American Indian Science and Engineering Society (AISES)",
    description:
      "AISES Mission Statement: The American Indian Science and Engineering Society (AISES) is a national, nonprofit organization focused on substantially increasing the representation of American Indians, Alaska Natives, Native Hawaiians, Pacific Islanders, First Nations and other indigenous peoples of North America in science, technology, engineering and math (STEM) studies and careers.",
    RecommendedInterest: ["Indian", "Engineering", "Indigenous", "Cultural"],
    rating: 6.2,
    numReviews: 30,
    imageURL:
      "https://lh3.googleusercontent.com/wfSlv4pmwFmkfQSG7eo6SfTCJCs1pGqVkhAQPbQiLW9t5y0irp0zcABsmHniEyafSMhg-cy-qoRX2nu1hJcrb-c=w16383",
  },
  {
    id: 23,
    title: "American Institute of Aeronautics and Astronautics at UCLA",
    description:
      "AIAA is the world’s largest technical society dedicated to the global aerospace profession. Created in 1963 by the merger of the two great aerospace societies of the day, the American Rocket Society (founded in 1930 as the American Interplanetary Society), and the Institute of the Aerospace Sciences (established in 1933 as the Institute of the Aeronautical Sciences), AIAA carries forth a proud tradition of more than 80 years of aerospace leadership. AIAA currently has more than 240 student branches, including 40+ international student branches, with a total active membership of over 7,500 students worldwide. The UCLA student branch of AIAA will be your base of operations during your college years. Meet fellow students who share your passion and commitment to aerospace. Student branches foster opportunities for growth by allowing members to engage with real world engineering projects, networking with fellow students and faculty interested in aerospace, and providing professional development resources. AIAA at UCLA is home to four unique engineering student projects: Design Build Fly, Uncrewed Aerial Systems, Bruin Spacecraft Group and Rocket Project.",
    RecommendedInterest: ["Engineering", "Science", "Aerospace", "Space"],
    rating: 8.1,
    numReviews: 89,
    imageURL: "http://aiaa.seas.ucla.edu/assets/img/AIAA_logo.png",
  },
  {
    id: 24,
    title: "American Institute of Chemical Engineers",
    description:
      "The American Institute of Chemical Engineers (AIChE) is a professional organization for chemical engineers. AIChE was established in 1908 with the purpose of establishing chemical engineers as a profession independent from chemists and mechanical engineers. The mission of the AIChE student chapter at UCLA is to promote excellence in the Chemical Engineering Department of the School of Engineering and Applied Science by providing resources and support to the undergraduate students so that they can succeed academically and advance professionally. AIChE's vision is to provide value as the global leader of the chemical engineering profession and be the lifetime center for professional and personal growth. In 1908 a small group of chemical engineers formed a professional society to promote and improve chemical engineering as a discipline. At first, the American Institute of Chemical Engineers (AIChE) met with strong resistance, especially from the American Chemical Society (ACS), which claimed control over all pure and applied chemistry in the United States. In response, AIChE adopted a number of conservative measures, including strict membership criteria to keep membership low and avoid competition with ACS. Nonetheless, the value of AIChE was realized by the entire discipline in 1925, when chemical engineering became the first profession to use scholastic accreditation to ensure the consistency and quality of academic chemical engineering courses. The conservative attitude paid off when peace was made between ACS and AIChE around 1930. The membership criteria were lifted and chemical engineers joined in droves. Today AIChE remains the principal chemical engineering professional society in the United States. Currently about 57,000 (~70%) of American chemical engineers are members.",
    RecommendedInterest: ["Engineering", "Technology", "Science", "Chemistry"],
    rating: 7.6,
    numReviews: 54,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/300411771_504546601477661_932714118794191418_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DoS8qFSDibUAX81Rvqo&_nc_ht=scontent-lax3-2.xx&oh=00_AfBC6LqcHmJo3R1VFdFs4pN8TVgBzeEKRtkiPogbrk5VZw&oe=647338DB",
  },
  {
    id: 25,
    title: "American Medical Student Association (AMSA)",
    description:
      "The American Medical Student Association, Premedical Chapter at UCLA, is committed to improving health care and healthcare delivery to all people; involving its members in the social, moral and ethical obligations of the profession of medicine; assisting in the improvement and understanding of world health problems; actively supplementing premedical education with a broader perspective and understanding of their chosen profession; contributing to the welfare of premedical students; and empowering the physician leaders of tomorrow.",
    RecommendedInterest: ["Academic", "Medicine", "Pre-Medicine", "Healthcare"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/29790136_1685097471586284_159850650658867850_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9s8SjAScQ0QAX-iMsP9&_nc_oc=AQkPEI7SSZJuvQ5k0-MZ_JbcZwWaef7KyyGldYMiUfjf_fRFIewgp99UJbGfoe0lrZYwunyO0gybgh9_T9CfkgrV&_nc_ht=scontent-lax3-1.xx&oh=00_AfDird-a3W5jfCZPfZs4HGZz1hZbG1Z0N8DNK-7jdNru6Q&oe=649691A6",
  },
  {
    id: 26,
    title: "ACM Hack",
    description:
      "Our mission is to help students build amazing things and encourage them to explore the limits of what is possible through code. We want to make coding accessible to absolute beginners of all majors. We host workshops and courses that teach students how to build things like websites and mobile apps.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 9.5,
    numReviews: 325,
    imageURL:
      "https://hack.uclaacm.com/static/db30fdb987ecfe4303c671f6c37009f9/df9ef/acm-hack-logo.webp",
  },
  {
    id: 27,
    title: "ACM Studio",
    description:
      "Our mission is to teach skills revolving around video game development such as computer science, game design and art in order to help usher students into the game development industry.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 8.7,
    numReviews: 246,
    imageURL: "https://www.uclaacm.com/images/committees/studio_wordmark.svg",
  },
  {
    id: 28,
    title: "ACM ICPC",
    description:
      "Our mission is to promote algorithmic thinking and help build proficient problem solvers.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 8.5,
    numReviews: 167,
    imageURL: "https://www.uclaacm.com/images/committees/icpc_wordmark.svg",
  },
  {
    id: 29,
    title: "ACM Design",
    description:
      "Our mission is to design, manage, and support the visual identity of ACM at UCLA. We create the club's branding, event banners, and more elements, while also doing workshops to teach UI/UX to the UCLA community.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 8.6,
    numReviews: 213,
    imageURL: "https://www.uclaacm.com/images/committees/design_wordmark.svg",
  },
  {
    id: 30,
    title: "ACM Cyber",
    description:
      "Our mission is to create a community in which both experts and beginners alike can grow in the field of cybersecurity skills and knowledge. We want to make cybersecurity simple and accessible for everyone.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 8.3,
    numReviews: 210,
    imageURL: "https://www.uclaacm.com/images/committees/cyber_wordmark.svg",
  },
  {
    id: 31,
    title: "ACM W",
    description:
      "Our goal is to promote diversity in tech through mentorship, networking, and professional development opportunities. We’re a safe space for everyone interested in computer science. :)",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "Tech",
      "Coding",
    ],
    rating: 8.5,
    numReviews: 119,
    imageURL: "https://www.uclaacm.com/images/committees/w_wordmark.svg",
  },
  {
    id: 32,
    title: "ACM AI",
    description:
      "Our mission is to grow and develop a community of students interested in Artificial Intelligence (AI) at UCLA, Los Angeles, and beyond. Our initiatives aim to serve everyone who has an interest in AI regardless of background, including people with no prior experience or knowledge in AI and non-CS majors.",
    RecommendedInterest: [
      "Computer Science",
      "Software engineering",
      "AI",
      "Coding",
    ],
    rating: 8.4,
    numReviews: 213,
    imageURL: "https://www.uclaacm.com/images/committees/ai_wordmark.svg",
  },
  {
    id: 33,
    title: "College Bowl Club at UCLA, The",
    description:
      "The College Bowl Club at UCLA is an organization of UCLA undergraduate and graduate students who compete in and host academic trivia (i.e. quiz bowl) competitions. The purpose of the College Bowl Club at UCLA is to promote and encourage participation in quiz bowl events, academic competitions, and trivia games, and the accumulation of academic trivia and knowledge; to host on-campus and interscholastic quiz bowl tournaments; and to recruit, train, and support the quiz bowl teams which represent UCLA in intercollegiate competition.",
    RecommendedInterest: ["Quiz", "Gameshow", "Trivia", "College Bowl"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/304790219_489586996509845_3090995013337305657_n.png?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=xgev4C83k_4AX9HdAYs&_nc_ht=scontent-lax3-2.xx&oh=00_AfCxMdQRFAwgKGMfDVN8aZivcuYX9BE9XtaIu0Yg6AwJTQ&oe=64739BDA",
  },
  {
    id: 34,
    title: "DevX",
    description:
      "DevX is UCLA's premier software project club, where we help to form and guide student-led software projects in improving the livelihoods of their fellow bruins. We pride ourselves on our usage of real-world applications of development practices, giving our members valuable experiences that directly translate to skills in the industry.",
    RecommendedInterest: [
      "Computer Science",
      "Software Development",
      "Technology",
      "Coding",
    ],
    rating: 8.5,
    numReviews: 127,
    imageURL:
      "https://static.wixstatic.com/media/1efdb3_78d9dde89bd64c96b8528ed77961e1a5~mv2.png/v1/fill/w_445,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%201.png",
  },
  {
    id: 35,
    title: "Latin American Student Organization (LASO)",
    description:
      "LASO is an organization that seeks to generate a space for Latin American students to feel welcome at UCLA through social and cultural interaction. LASO, as the Spanish word suggests, is a bond that we hope is established among our members despite physical and cultural boundaries between our home countries.",
    RecommendedInterest: [
      "Social",
      "Latinx",
      "Spanish",
      "Student Organization",
    ],
    rating: 6.5,
    numReviews: 20,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/107268404_724878798328450_3084870611791430931_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tpNuzBG1cHIAX8MsvCg&_nc_ht=scontent-lax3-1.xx&oh=00_AfDHq14ewi2Y1OlZDO0wS6CRxR_XQDN_NbtsFoL-QrTShw&oe=649663EC",
  },
  {
    id: 36,
    title: "Nova",
    description:
      "We are a team of students at UCLA who aim to create high-impact technology that empowers nonprofits to better serve their communities.",
    RecommendedInterest: ["Technology", "Science", "Community", "Engineering"],
    rating: 8.5,
    numReviews: 50,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/306144127_1036126513796279_5814599999089760744_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_sme5jSiwaoAX_XkvoW&_nc_ht=scontent-lax3-2.xx&oh=00_AfCwn-W2GEa7GJze5UC2S2ZXxXQ1XmHtEQehlxoZVKKUpw&oe=64736361",
  },
  {
    id: 37,
    title: "SOLES (Society of Latinx Engineers)",
    description:
      "To address the issue of the low number of Latinx students enrolling in four-year universities, especially in the area of engineering, as well as to provide support for the Latinx community at UCLA. We seek to provide the resources necessary to help Latinx students achieve high academic success and receive internship/full-time job opportunities at an increased rate.",
    RecommendedInterest: ["Engineering", "Science", "Mechanical", "Latinx"],
    rating: 6.7,
    numReviews: 10,
    imageURL: "https://uclasoles.org/static/media/solesshpe.c17a0951.svg",
  },
  {
    id: 38,
    title: "UCLA Club Baseball",
    description:
      "Competitive baseball team practicing 2-3 times per week with 2 tournaments and a scheduled 3-game series in the Fall. Winter/Spring season consists of 2-3 practices per week, a complete conference schedule, and potential non-conference games scheduled at will.",
    RecommendedInterest: ["Sports", "Baseball", "Club", "Competitive"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/300375391_957811838456506_9089307937404360477_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mLdvfnAtnS8AX_dE9hL&_nc_ht=scontent-lax3-1.xx&oh=00_AfDnPCzzw4plrvvqgubdDt_wOcB4NWuhlPR5K-fUQLTXBQ&oe=6473CB23",
  },
  {
    id: 39,
    title: "Brazilian Jiu-Jitsu",
    description:
      "The UCLA Brazilian Jiu Jitsu Club (UCLA BJJ) is open to all experience levels and provides optional competition opportunities. Practices are free and open to all for Week 1 and Week 2 of every quarter. Brazilian Jiu-Jitsu is a martial art and combat sport based on ground fighting and submission holds. BJJ focuses on the skill of taking an opponent to the ground, controlling one's opponent, gaining a dominant position, and using a number of techniques to force them into submission via joint locks or chokeholds. Here at UCLA, we train primarily Nogi and encourage Gi participation.",
    RecommendedInterest: ["Jiu Jitsu", "Martial Arts", "MMA", "Wrestling"],
    rating: 8.5,
    numReviews: 43,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/302142333_514103497382457_2203137677966140819_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K7GA2XVpzx4AX9PlAb5&_nc_ht=scontent-lax3-2.xx&oh=00_AfAeoZllo9tDgfkdxl3Sd_OeBUJ9JXLHCz0Wo0wCQOt4YQ&oe=647472FD",
  },
  {
    id: 40,
    title: "Dragon Boat",
    description:
      "UCLA Dragon Boat is a student-run competitive Club Sports team. We are 50 paddlers strong, making up two race crews: Blue and Gold. Through hard work and dedication, our team not only helps its members develop as paddlers, but also as students, athletes, and leaders. Above all else, UCLA Dragon Boat strives to be competitive, passionate, and fun.",
    RecommendedInterest: ["Sports", "Rowing", "Paddling", "Club Sports"],
    rating: 6.5,
    numReviews: 32,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/302089777_515192777276964_490985415690436234_n.png?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=TW-q7VrAjUsAX-tAsBI&_nc_ht=scontent-lax3-1.xx&oh=00_AfC6IQRPHD6XxOLjO4xsHIrYofQwaNqDUP5ewMDDYqa4qg&oe=64735768",
  },
  {
    id: 41,
    title: "Equestrian",
    description:
      "The UCLA Equestrian Team is a horseback riding program involving both practice and shows. We have a hunt seat team and compete in the Intercollegiate Horse Show Association (IHSA).",
    RecommendedInterest: ["Sports", "Horses", "Riding", "Horseback Riding"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://static.wixstatic.com/media/88d84d_511a8bf9b64a4bea84788a5256d4516d~mv2.jpg/v1/fill/w_80,h_80,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/sfFwMSWA.jpg",
  },
  {
    id: 42,
    title: "Esports",
    description:
      "Esports division of Club sports featuring 50+ athletes in 8+ different teams across 8 titles.",
    RecommendedInterest: ["Gaming", "Esports", "Club", "Video Games"],
    rating: 7.2,
    numReviews: 61,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/298116678_489438609851362_9092893540370354777_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=aCmS9cm2PtAAX_-RSyq&_nc_oc=AQmur1yvcTIzNPqUBlr8EaZm5sbIpDErpBvx1qybpSZGU16rb5Mj2RjlHUWqKY-ayP0asY2aEsjtcUbuMG5w1wAk&_nc_ht=scontent-lax3-2.xx&oh=00_AfBYj3U9cEvD6K8rkfK0wxhJD3BRKlO0sgLLMvVcNOSCEg&oe=647443CB",
  },
  {
    id: 43,
    title: "Golf",
    description:
      "We are a club for golfers of all levels to improve their skills. We have weekly practices, and offer casual and competitive playing opportunities.",
    RecommendedInterest: ["Club Sport", "Sport", "Golf", "Golfing"],
    rating: 6.5,
    numReviews: 20,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/301365996_587738016376714_1644478353041228295_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8gRvdlkWbzEAX8cV9Dj&_nc_ht=scontent-lax3-1.xx&oh=00_AfARryNoH1biE5X0BDo0kI7J1l1_er4vpky1CPTG6XEkWg&oe=64734218",
  },
  {
    id: 44,
    title: "Gymnastics",
    description: "UCLA Club Gymnastics",
    RecommendedInterest: ["Sport", "Gymnastics", "Tumbling", "Club Gymnastics"],
    rating: 7.5,
    numReviews: 30,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/301803603_512169780911738_7858171122847351496_n.png?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GE4_-gSS2woAX8UXrwJ&_nc_ht=scontent-lax3-1.xx&oh=00_AfAzAJEYMtQA1wnwD-las0w3pH5EKwlkaWWEQtmiubwr4w&oe=64739B68",
  },
  {
    id: 45,
    title: "Judo",
    description:
      "Judo is best known for its throwing techniques but also includes numerous techniques for controlling an opponent while on the ground. A good judoka, one who practices Judo, will first use timing and leverage to bring his opponent off balance and execute a throw, and then immobilize with grappling maneuvers or submit with arm locks and choke holds. This class will foster general fitness and well-being, and develop real-world safety and self-defense strategies, all while improving physical fitness, flexibility, strength, coordination, and agility.",
    RecommendedInterest: ["MMA", "Judo", "Judoka", "Sport"],
    rating: 7.5,
    numReviews: 40,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/305575312_450406940438427_4782974143409791421_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mQoYVZochXYAX84mao9&_nc_ht=scontent-lax3-1.xx&oh=00_AfCjdFEmEZ2rZFpXdvUHNyhAm4bV0Spekjfh94YDqX_duQ&oe=6474C1F6",
  },
  {
    id: 46,
    title: "Powerlifting",
    description:
      "UCLA Powerlifting is dedicated to fostering a supportive and inclusive environment for lifters of all levels to come together, gain skills and knowledge, get stronger, and build a sense of community.",
    RecommendedInterest: ["Gym", "Lifting", "Powerlifting", "Working Out"],
    rating: 5.5,
    numReviews: 43,
    imageURL:
      "https://uclaclubsports.com/images/2019/2/27/UCLA_W_Powerlifting_Story_New.jpg?width=1128&height=635&mode=crop&scale=both&format=jpg&quality=80",
  },
  {
    id: 47,
    title: "Swim",
    description:
      "California's first Club Swimming team! We train Mondays, Wednesdays, and Fridays from 7-8:30pm at the Student Activities Center Pool. We have a coach who is a very experienced swim coach and an overall chill, funny guy. He gives us the sets to swim during practice and alters them according to swimmers' skill levels. We take all skill levels: swimmers who join just for recreation to swimmers who compete at nationals. In terms of meets, we have around 2 meets per quarter. One travel meet and one home meet at Spieker (where the NCAA team competes!). All meets are optional but you are highly encouraged to represent us and compete! We will also be having free practices during Week 1 to allow you to get a feel if you would want to join us before paying. If you haven't already, please like our facebook page: UCLA Club Swimming! Dues are $70 per quarter, making us one of the cheapest club sports.",
    RecommendedInterest: ["Swimming", "Sports", "Team", "Swimmer"],
    rating: 6.5,
    numReviews: 30,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/300373578_502083878588068_2328878472774966007_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=F7oyhWtkC6AAX80muJa&_nc_ht=scontent-lax3-2.xx&oh=00_AfCf4VhNRM8mzNgMgs31fhDwfaqjJP0w0KJr5qryGi0ADQ&oe=6473757F",
  },
  {
    id: 48,
    title: "Wushu",
    description:
      "Wushu refers to Chinese Martial Arts. In modern or sport Wushu, taolu (forms) are commonly practiced. Forms practiced include various empty fist and weapon types, and are practiced for competition and performance, but also for martial application and health. UCLA Wushu is the official Wushu team of the University of California, Los Angeles. Since its founding in 1986, it has established itself as one of the most prominent Wushu teams in the United States collegiate scene. Athletes and alumni from UCLA Wushu have competed in the World Wushu Championships, World Junior Wushu Championships, Pan-American Wushu Championships, and the World Traditional Wushu Championships. UCLA Wushu trains weekly with people of all experience, annually participates in the Collegiate Wushu Tournament and performs at select events, notably the Chinese American Cultural Night at Royce Hall.",
    RecommendedInterest: ["Martial Arts", "Wushu", "Chinese", "Art"],
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/291611356_443873724411650_3728257439661732546_n.png?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LpHZ4X9Gcz8AX_RIffP&_nc_ht=scontent-lax3-1.xx&oh=00_AfC-8sO8vkf75gQxa11BmcTuRwy3W8nQcJO2Yuu5DWybkA&oe=6473DE69",
  },
  {
    id: 49,
    title: "SWC Sexperts",
    description:
      "Dedicated to increasing the awareness and education of sexual health through exciting campus-wide events at UCLA. Focusing on the pillars of communication, consent, sexual-health, and pleasure.",
    RecommendedInterest: [
      "Sexual-Awareness",
      "LGBTQ",
      "Pleasure",
      "Communication",
    ],
    rating: 3.7,
    numReviews: 5,
    imageURL:
      "https://uclasexperts.files.wordpress.com/2021/08/img_4808-5.png?w=161",
  },
  {
    id: 50,
    title: "BROAD SPECTRUM",
    description:
      "Statement of purpose: BROAD SPECTRUM is a social support network for LGBTQIA+ students and allies. BROAD SPECTRUM strives to promote education and understanding of culture and issues within the LGBTQIA+ community with a focus on an inclusive, culturally-sensitive nursing environment. Mission statement: BROAD SPECTRUM works toward a more inclusive and accepting environment for LGBTQIA+ students, faculty and patients through education, support, social action, and advocacy. BROAD SPECTRUM provides a platform for students to advocate the needs of LGBTQIA+ patients through equality in nursing care. BROAD SPECTRUM fosters a greater sense of community for LGBTQIA+ identified students, faculty, and allies within the SON and between SON and the broader UCLA student body through education, outreach, and community service.",
    RecommendedInterest: ["Sexuality", "LGBTQ", "Gender", "Inclusivity"],
    rating: 6.5,
    numReviews: 354,
    imageURL:
      "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/309201230_157950873537264_8005913059246946549_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lo5iiJOUgpsAX-O2Aza&_nc_ht=scontent-lax3-1.xx&oh=00_AfB0C5Vg7SkIvZPpyzrVXaaA2GdbfT58N1JCdANVaW5FLA&oe=64741ECC",
  },
  {
    id: 51,
    title: "OutWrite Newsmagazine",
    description:
      "OutWrite Newsmagazine is the official queer newsmagazine of the University of California, Los Angeles. OutWrite strives to build a growing educational platform through a multi-media approach that uplifts and empowers the often silenced voices of the incredibly diverse queer community. We aim to challenge dominant cisheteronormative narratives through an unapologetically anti-queerphobic, anti-racist, and progressive lens. OutWrite was established in 1979 under its original title TenPercent, becoming the first queer college publication in the country. The name TenPercent was chosen from the Alfred Kinsey’s study Sexual Behavior in the Human Male which stated that 10% of men identified as homosexual. In 2005, the newsmagazine’s staff petitioned to change the name to OutWrite to decenter the white, cis, gay male identity and use a name which better represents the queer community’s vast spectrum of identities. Throughout the years, the newsmagazine referred to itself as a 'gay and lesbian' newsmagazine, slowly adding more identities to its moniker just as the mainstream community did in the late 20th century. Our label has since been changed to 'queer' newsmagazine to recognize both the importance of inclusivity in our community and the inherent radical nature of our mission; queer is a verb and political statement as much as it is an umbrella descriptor encompassing the ever-growing LGBTQ+ acronym. OutWrite is proud to transform and adapt itself to better represent and serve queer people, changing its own identity as our community grows and changes.",
    RecommendedInterest: ["Sexuality", "LGBTQ", "Gender", "Inclusivity"],
    rating: 6.5,
    numReviews: 210,
    imageURL:
      "https://d1fdloi71mui9q.cloudfront.net/l9fFX2MTxW4zldKfESVu_X6ZwuTNCobsDMiCu",
  },
  {
    id: 52,
    title: "Queer Alliance",
    description:
      "Queer Alliance at UCLA was formed to provide a bridge between all progressive LGBTQ+ organizations dealing with issues that touch people who are traditionally disadvantaged on the basis of sexual orientation, romantic attraction, gender expression, and/or gender identity. Queer Alliance recognizes the existence of past conflicts and tension amongst groups of various cultures and seeks to address these issues by serving as a bastion of greater understanding to which all interested parties can look towards as an example of the true spirit of cooperation through facilitation. The alliance looks forwards to maintaining its commitment to respect, understanding, equity, and equality while underscoring the need for the eradication of heteronormativity, queerphobia, and cisheterosexism outside and within the community at UCLA. These goals are achieved by fostering spaces wherein community can thrive, and engaging in social programming and advocacy efforts.",
    RecommendedInterest: ["Sexuality", "LGBTQ", "Gender", "Inclusivity"],
    rating: 6.5,
    numReviews: 70,
    imageURL:
      "https://uclaqueeralliance.weebly.com/uploads/1/2/2/0/122064318/qa-logo-3_orig.png",
  },
  {
    id: 53,
    title: "Bruin Sports Analytics",
    description:
      "A student run sports statistics organization which serves as a platform for sports research, data journalism, consulting, and machine learning applications. Bruin Sports Analytics is the only club at UCLA where you can actively practice your data science skills throughout the year. Through professional development opportunities and hands on applications, we aim to prepare our members for a successful career in the sports analytics industry.",
    RecommendedInterest: ["Sports", "Statistics", "Analytics", "Research"],
    rating: 4.5,
    numReviews: 24,
    imageURL:
      "https://static.wixstatic.com/media/d20f08_1036cd3668cb4022a60961c35ea36b10~mv2.png/v1/fill/w_47,h_47,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo_1.png",
  },
  {
    id: 54,
    title: "Bruin Stock Group",
    description:
      "Bruin Stock Group (BSG) is a student-run fund with over $600,000+ in Assets Under Management. Analysts work with and are mentored by experienced portfolio managers to gain real-world investing experience. In addition to working together to conscientiously evaluate investments for a maximal annual return, our members create a forum and supportive environment for individuals from all backgrounds who are interested in investing. We also have a quantitative trading division, that uses quantitative research and works to develop trading algorithms that will then be used allocate assets from our main fund into good investments and trades.",
    RecommendedInterest: ["Stocks", "Investment", "Business", "Banking"],
    rating: 5.5,
    numReviews: 65,
    imageURL:
      "https://static.wixstatic.com/media/43e067_b9607247770b4d47b586c94a0b94f000~mv2.jpg/v1/fill/w_93,h_88,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9417.jpg",
  },
  {
    id: 55,
    title: "Bruin Visual Arts Club",
    description:
      "The Bruin Visual Arts Club is the largest student organization for artists of all skill levels at UCLA. We aim to provide resources for artists in the form of accessible supplies, educational workshops, and community service opportunities. We are creating a community for students with an interest in the visual arts by hosting activities that work with a variety of mediums, which includes traditional forms such as painting and pencil to other forms such as digitally-produced art and photography.",
    RecommendedInterest: [
      "Visual Arts",
      "Art",
      "Digital Art",
      "Photography",
      "Painting",
    ],
    rating: 5.5,
    numReviews: 78,
    imageURL:
      "https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/71937697_513602562530278_7412299334470860800_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=yPS1qGDfOywAX-tQhcW&_nc_ht=scontent-lax3-2.xx&oh=00_AfChse-udzjJ-sYU3T8H2wp1QIVKQcknmXzcQ625iZCKMg&oe=64967229",
  },
];

export default clubsData;

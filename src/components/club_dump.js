const clubsData = [
  {
    id: 1,
    title: "180 Degrees Consulting",
    description:
      "180 Degrees Consulting is the premier consulting organization at UCLA for socially-driven clients. We boast a group of students who possess intelligent business minds and unparalleled passion for solving some of the world’s greatest socio-economic problems. Equipped with consistent training, our student consultants are committed to making a meaningful impact on our clients and ensuring that their project objectives are achieved. Our team is made up of individuals from diverse backgrounds, allowing us to offer fresh perspectives and foster a tight-knit community of open minded people.",
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://static.wixstatic.com/media/af12eb_1e3d5508b0f14419bb91c815ba97e2da~mv2.png/v1/fill/w_522,h_192,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/180DC_LOGO%20BRANCHES_Horizontal.png",
  },
  {
    id: 2,
    title: "1girl at UCLA",
    description:
      "1girl is a nonprofit all girls organization that allows dedicated college women to mentor middle school girls towards becoming successful and confident women in the future. 1girl provides a unique, proven curriculum that empowers girls from underserved areas to develop the skills they will need to be successful. 1girl operates through pre-existing afterschool programs and Boys and Girls Clubs. The programs are facilitated by UCLA students, providing our facilitators an opportunity to develop their skills through a real world leadership role. The program is designed around five core skills: Public Speaking, Creative Problem Solving, Critical Thinking, Goal Setting, and Conflict Resolution.",
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
    rating: 4.5,
    numReviews: 10,
    imageURL: "https://teachla.uclaacm.com/img/teachLA_wordmark_gradient.svg",
  },
  {
    id: 7,
    title: "Acts2Fellowship",
    description:
      "Acts2fellowship is a Christian student group on the UCLA campus. We meet every week on campus to study the Bible and find out God's perspective. College is the perfect time to explore the big questions of life and here at A2F, it's a safe place to ask them.",
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/5d72a6426b29cc0001f4aa63/9c65d31a-b3a6-4075-96b6-14618775c0b9/a2flogo-04.png?format=1500w",
  },
  {
    id: 8,
    title: "Advanced Degree Consulting Club",
    description:
      "Advanced Degree Consulting Club (ADCC) serves advanced degree candidates (with a specific focus on PhD and Master students) that are passionate about pursuing management consulting as their career path. Our Goals are: 1. Serve advanced degree candidates (with a specific focus on PhD and Master students) that are passionate about pursuing management consulting as their career path. 2. Create a community of future consultants and business leaders with advanced degrees and provide a platform for information exchange and networking. 3. Bridge the gap between the academic world and the business consulting industry by hosting consulting career events, career fairs, workshops and other related events. 4. Develop partnerships and share resources with other consulting organizations and groups.",
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://adccucla.org/wp-content/uploads/2021/10/cropped-11903716_947910941914592_2196623485663523096_n-56x47.png",
  },
  {
    id: 9,
    title: "Advocating Intersectional Medicine",
    description:
      "Advocating Intersectional Medicine (AIM) is dedicated to educating one another on social justice issues regarding healthcare and medicine, while promoting advocacy skills in writing, graphics, and other forms of communication. We focus our understanding of healthcare through a lens of intersectionality. We work to provide resources through education and social media, while also creating fundraising, outreach, and volunteering events in order to achieve equitable and accessible medicine. Our goal is to promote advocacy and empower others to critically examine ways to make healthcare more equitable by putting them to practice.",
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://aimatucla.weebly.com/uploads/1/3/2/8/132834536/new-aim-logo_orig.png",
  },
  {
    id: 10,
    title: "AI Robotics Ethics Society",
    description:
      "As technology advances at an exponential rate, it is imperative that we begin thinking about how Artificial Intelligence (AI) will interact with and impact society at different facets of daily life, with the focus on ethical implication and its implementation within AI systems. Notably, the development and involvement in AI ethics by students and professionals has been relatively nascent. The foresight of how important it is to regulate AI through the lens of ethical discussion and implementation is of paramount significance within the setting of the rapid development of AI and how it has already permeated of our daily lives. As such, the AI Robotics Ethics Society was founded in 2018 at UCLA by Aaron Hui to promote the awareness and importance of ethical implementation/regulation of AI. AIRES achieves its mission of ensuring AI is created both ethically and responsibly through a three-pronged approach: 1. To host a series of intra- and inter-departmental discussions at universities on AI and Robotics ethics. 2. To create a network and promote such awareness through hosting discussions and conferences with chapters of the AI Robotics Ethics Society. 3. To create a small lecture series on the latest breakthroughs and achievements in AI and Robotic ethics.",
    rating: 4.5,
    numReviews: 10,
    imageURL:
      "https://static.wixstatic.com/media/c57e34_226b202dd0f44150b58dbe87a8aef231~mv2.png/v1/fill/w_920,h_920,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/AIRES%20LOGO%20(Without%20Words)_edited.png",
  },
];

export default clubsData;

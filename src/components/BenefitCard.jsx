import img1 from '../assets/icon.png';

const benefits = [
  {
    icon: img1,
    title: "Access to Cutting-edge Resources",
    description: "Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field."
  },
  {
    icon: img1,
    title: "Early Access to Opportunities",
    description: "Be the first to hear about new opportunities, and initiatives within the OxETHDao network, giving you a competitive edge."
  },
  {
    icon: img1,
    title: "Recognition and Visibility",
    description: "Showcase your expertise and contributions within the OxETHDao community, and visibility for your achievements through awards."
  },
  {
    icon: img1,
    title: "Networking Opportunities",
    description: "Connect with a diverse community of industry experts, thought leaders, and online forums, valuable relationships and collaborations."
  },
  {
    icon: img1,
    title: "Project Collaboration",
    description: "Collaborate on innovative projects and initiatives within the OxETHDao ecosystem, creativity of the community to drive meaningful change."
  },
  {
    icon: img1,
    title: "Governance Participation",
    description: "Participate in the governance process of OxETHDao, decision-making of the organization through voting rights."
  }
];

export default function BenefitCard({ theme }) {
  return (
    <div className={`${theme === "dark" ? "text-white" : "text-black"} py-16 px-6 text-center`}>
      <small className={`${theme === "dark" ? "text-white" : "text-black"} uppercase text-lg`}>Benefits of TruChain</small>
      <h2 className={`${theme === "dark" ? "text-white" : "text-black"} text-5xl font-bold my-4`}>Unlock Exclusive Opportunities</h2>
      <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} max-w-3xl text-lg mx-auto mb-10`}>
        As a member of the OxETHDao community, you gain access to a world of exclusive opportunities that empower you to thrive personally and professionally.
      </p>
      <div className="grid md:grid-cols-3 gap-6 p-10 px-20 text-white w-5/6 mx-auto">
        {benefits.map((benefit, index) => (
          <div key={index} className={`${theme === "dark" ? "bg-gray-800" : "bg-gray-200"} p-6 rounded-3xl shadow-lg text-center`}>
            <div className="flex justify-center mb-4">
              <img src={benefit.icon} alt={benefit.title} className="w-20 h-20 object-contain shadow-lg rounded-lg bg-gray-700 boxshadow" />
            </div>
            <h3 className={`${theme === "dark" ? "text-white" : "text-black"} text-xl font-semibold mb-2`}>{benefit.title}</h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-sm`}>{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

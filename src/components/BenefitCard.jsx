import img1 from "../assets/icon.png";
import Card from "./Card";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Access to Cutting-edge Resources",
      description:
        "Gain exclusive access to a curated repository of resources, including research papers and toolkits, to stay ahead of the curve in your field.",
      icon: img1,
    },
    {
      title: "Early Access to Opportunities",
      description:
        "Be the first to hear about new opportunities and initiatives within the OxETHDao network, giving you a competitive edge.",
      icon: img1,
    },
    {
      title: "Recognition and Visibility",
      description:
        "Showcase your expertise and contributions within the OxETHDao community, and gain visibility for your achievements through awards.",
      icon: img1,
    },
    {
      title: "Recognition and Visibility",
      description:
        "Showcase your expertise and contributions within the OxETHDao community, and gain visibility for your achievements through awards.",
      icon: img1,
    },
    {
      title: "Recognition and Visibility",
      description:
        "Showcase your expertise and contributions within the OxETHDao community, and gain visibility for your achievements through awards.",
      icon: img1,
    },
    {
      title: "Recognition and Visibility",
      description:
        "Showcase your expertise and contributions within the OxETHDao community, and gain visibility for your achievements through awards.",
      icon: img1,
    }
  ];

  return (
    <div className="text-white py-16 px-6 text-center">
      <small className="uppercase text-lg">Benefits of TruChain</small>
      <h2 className="text-5xl font-bold my-4">Unlock Exclusive Opportunities</h2>
      <p className="text-gray-300 max-w-3xl text-lg mx-auto mb-10">
        As a member of the OxETHDao community, you gain access to a world of exclusive opportunities that empower you to thrive personally and professionally.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <Card key={index} title={benefit.title} description={benefit.description} icon={benefit.icon} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;

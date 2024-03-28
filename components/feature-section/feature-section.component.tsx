import BarsUpIcon from "@icons/bars-up.icon.tsx";
import BoltIcon from "@icons/bolt.icon.tsx";
import CircleStack from "@icons/circle-stack.icon.tsx";
import Cog6Icon from "@icons/cog-6.icon.tsx";
import LightbulbIcon from "@icons/lightbulb.icon.tsx";
import PuzzleIcon from "@icons/puzzle.icon.tsx";
import RectangleGroupIcon from "@icons/rectangle-group.icon.tsx";
import ShieldCheckIcon from "@icons/shield-check.icon.tsx";

const features = [
  {
    title: "Simplicity at Its Core",
    description:
      "One quick HTTP request is all it takes to get the essential data you need for an effective screening. Forget deciphering cryptic responses and navigating through complicated, multi-step processes. Focus on building great apps.",
    icon: <LightbulbIcon className="w-6 h-6 fill-white" />,
  },
  {
    title: "Seamless integration",
    description:
      "Integrating with our REST API is a breeze. You can connect to it with a few lines of code in any programming language or framework that supports HTTP requests. No need for custom connectors, complex configurations, or in-depth technical knowledge.",
    icon: <PuzzleIcon className="w-6 h-6 fill-white" />,
  },
  {
    title: "Uncompromising speed",
    description:
      "We know that speed is key to a great user experience. That’s why our API delivers blazing-fast responses - get the data you need within a fraction of a second of sending your request, every single time.",
    icon: <BoltIcon className="w-6 h-6 fill-white" />,
  },
  {
    title: "Flexibility from the get-go",
    description:
      "Say goodbye to rigid, all-or-nothing solutions. Our API design is modular, providing great flexibility. Think of our endpoints like LEGO blocks, allowing you to request resources in any order and combination you want.",
    icon: <RectangleGroupIcon className="w-6 h-6 fill-white" />,
  },
  {
    title: "Fresh, clean and reliable data",
    description:
      "Our database is being updated multiple times a day from reputable sources worldwide, such as governments and recognized international bodies. We follow best practices, implement the latest recommendations from financial regulators, and process the obtained information into easy-to-understand and readily usable data.",
    icon: <CircleStack className="w-6 h-6 fill-white" />,
  },
  {
    title: "Privacy and security",
    description:
      "We rigorously authenticate every request using API keys. Once generated, even we cannot retrieve your key if forgotten. We refrain from storing personal customer data and limit information on sanctioned individuals and PEPs to what is strictly necessary. Additionally, we continuously update our security measures to mitigate ever-evolving cyber threats.",
    icon: <ShieldCheckIcon className="w-6 h-6 fill-white" />,
  },
  {
    title: "Effortlessly scalable",
    description:
      "Whether you’re starting small or serving millions already, you can rest assured that our API can accommodate your growth. Our cloud-based infrastructure ensures 99.99% uptime and on demand horizontal and vertical scalability.",
    icon: <BarsUpIcon className="w-6 h-6 fill-white" />,
  },

  {
    title: "On-demand features",
    description:
      "We aim to work together with our customers, not just provide them with information. In order to better support your expansion or specific needs, we more than welcome requests for specific features that make sense for our offering.",
    icon: <Cog6Icon className="w-6 h-6 fill-white" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="px-16 py-20 mx-auto border-b-2 border-off-black">
      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight">
          Key Features at a Glance
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Dive into the details below and discover why our API is the smart
          choice to meet your specific needs while saving valuable development
          time.
        </p>
      </div>
      <dl className="grid gap-8 mt-16 text-base leading-7 md:grid-cols-2">
        {features.map(({ title, description, icon }, index) => (
          <div key={index} className="relative pl-16 text-base leading-7">
            <dt className="font-semibold">
              <div className="absolute top-0 left-0 flex items-center justify-center w-10 h-10 rounded-lg bg-off-black">
                {icon}
              </div>
              {title}
            </dt>
            <dd className="mt-2">{description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

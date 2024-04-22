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
      "Forget deciphering cryptic responses and navigating through complicated, multi-step processes. One HTTP request is all it takes to get the essential data you need for an effective screening.",
    icon: <LightbulbIcon className="h-6 w-6 fill-white" />,
  },
  {
    title: "Seamless integration",
    description:
      "Plugging into our API takes as little as a few lines of code in your favorite programming language. No need for custom connectors, complex configurations, or in-depth technical knowledge.",
    icon: <PuzzleIcon className="h-6 w-6 fill-white" />,
  },
  {
    title: "Uncompromising speed",
    description:
      "We know that speed is key - that’s why our API delivers the data you need within a fraction of a second of sending your request, every single time.",
    icon: <BoltIcon className="h-6 w-6 fill-white" />,
  },
  {
    title: "Flexibility from the get-go",
    description:
      "Say goodbye to rigid, all-or-nothing solutions. Our API design is modular, allowing you to request resources in any order and combination you want.",
    icon: <RectangleGroupIcon className="h-6 w-6 fill-white" />,
  },
  {
    title: "Fresh, clean and reliable data",
    description:
      "We update our database multiple times a day from reputable sources worldwide, follow best practices, and implement the latest recommendations from financial regulators. We also process the data, so that it becomes easy to diges.",
    icon: <CircleStack className="h-6 w-6 fill-white" />,
  },
  {
    title: "Privacy and security",
    description:
      "We authenticate every request using API keys, which you can rest assured that can't ever be accessed from our end, not even by us. We limit the information that we store to what is strictly necessary. And of course, we keep up with the latest security measures.",
    icon: <ShieldCheckIcon className="h-6 w-6 fill-white" />,
  },
  {
    title: "Effortlessly scalable",
    description:
      "Whether you’re starting small or serving millions already, you can rest assured that our API can accommodate your growth - our cloud infrastructure ensures 99.99% uptime and on-demand scalability.",
    icon: <BarsUpIcon className="h-6 w-6 fill-white" />,
  },

  {
    title: "Custom features",
    description:
      "Our main goal is to support your business, not just provide information. If there's some functionality you need, which makes sense for our offering, we're more than happy to work together and implement it.",
    icon: <Cog6Icon className="h-6 w-6 fill-white" />,
  },
];

export default function FeatureSection() {
  return (
    <section className="flex h-screen flex-col justify-center px-8 font-mono">
      <div className="mb-4 max-w-3xl">
        <h2 className="mb-6 text-4xl font-bold tracking-tight">
          Key Features at a Glance
        </h2>
        {/* <p className="text-base">
          Dive into the details below and discover why our API is the smart
          choice to meet your specific needs while saving valuable development
          time.
        </p> */}
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
        {features.map(({ title, description, icon }, index) => (
          <div
            key={index}
            className="flex max-w-xl gap-x-4 text-base">
            <div className="h-fit w-fit rounded-xl bg-black p-2">{icon}</div>
            <dl>
              <dt className="mb-2 font-semibold">{title}</dt>
              <dd className="">{description}</dd>
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

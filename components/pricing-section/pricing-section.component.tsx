import PriceCard from "./price-card.component";

const subscriptions = [
  {
    title: "Pay-as-you-go",
    description: "Enjoy flexible access, paying only for what you use",
    price: 0,
    benefits: ["€0.15 per API call"],
  },
  {
    title: "Essential",
    description:
      "Get the essentials for businesses starting out or with a smaller customer base",
    price: 99,
    benefits: ["1,000 calls included", "€0.10 per API call afterwards"],
  },
  {
    title: "Growth",
    description:
      "Maintain cost-effectiveness while scaling your rapidly growing business",
    price: 499,
    benefits: ["10,000 calls included", "€0.05 per API call afterwards"],
  },
  {
    title: "Enterprise",
    description:
      "Tell us more about your business and we'll create a pricing structure around your specific needs",
    benefits: ["all the API usage you need", "priority customer support"],
  },
];

const pricingIntro =
  "Whether you're just starting out or a seasoned veteran in your field, our diverse range of options caters to a variety of needs and budgets. Take a look at our plans below to discover the perfect fit for you.";

export default function PricingSection() {
  return (
    <section className="flex flex-col items-center h-screen px-16 py-20 border-b-2 border-slate-900">
      <h2 className="text-base font-bold leading-7">Pricing</h2>
      <h1 className="mt-2 font-bold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
        Choose the right plan for you
      </h1>
      <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 lg:leading-8 lg:text-lg">
        {pricingIntro}
      </p>
      <div className="grid gap-8 pt-8 xl:grid-cols-4">
        {subscriptions.map((subscription, index) => (
          <PriceCard key={index} {...subscription} />
        ))}
      </div>
    </section>
  );
}

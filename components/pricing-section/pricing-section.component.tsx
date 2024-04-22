import { SubscriptionPlan } from "models/subscription.model.ts";
import PriceCard from "./price-card.component.tsx";

const subscriptions: SubscriptionPlan[] = [
  // {
  //   title: "Pay-as-you-go",
  //   description: "Enjoy flexible access, paying only for what you use",
  //   price: 0,
  //   benefits: ["€0.15 per API call"],
  //   ctaText: "Start Now",
  // },
  {
    title: "Essential",
    description:
      "Get the essentials for starting out your business or a smaller customer base",
    price: 99,
    benefits: ["1,000 calls included", "€0.10 per API call afterwards"],
    ctaText: "Get Essential",
  },
  {
    title: "Growth",
    description:
      "Maintain cost-effectiveness while scaling your rapidly growing business",
    price: 499,
    benefits: ["10,000 calls included", "€0.05 per API call afterwards"],
    ctaText: "Grow with Us",
  },
  {
    title: "Enterprise",
    description:
      "Reach out to us and we'll create a pricing structure around your specific needs",
    benefits: ["all the API usage you need", "priority customer support"],
    ctaText: "Explore Enterprise",
  },
];

const pricingIntro =
  "Whether you're just starting out or a seasoned veteran in your field, our flexible pricing model caters to a variety of needs and budgets.";

export default function PricingSection() {
  return (
    <section className="flex h-screen flex-col items-center justify-center px-8 font-mono">
      <h2 className="mb-4 text-base font-bold leading-7">Pricing</h2>
      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight">
        Choose the Right Plan for You
      </h1>
      <p className="mx-auto max-w-3xl text-center text-base">{pricingIntro}</p>
      <div className="lg:mx-0 mx-auto grid max-w-5xl grid-cols-3 gap-8 pt-8">
        {subscriptions.map((subscription, index) => (
          <PriceCard
            key={index}
            {...subscription}
          />
        ))}
      </div>
    </section>
  );
}

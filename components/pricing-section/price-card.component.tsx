import Button from "@components/button/button.component.tsx";
import CheckmarkIcon from "@icons/checkmark.icon.tsx";
import { SubscriptionPlan } from "models/subscription.model";

export default function PriceCard({
  title,
  description,
  price,
  benefits,
  ctaText,
}: SubscriptionPlan) {
  const hasPrice = !!price && price !== 0;

  return (
    <div className="grid grid-rows-12 rounded-2xl p-6 ring-1 ring-gray-200">
      <h3 className="row-span-2 text-base font-semibold leading-8">{title}</h3>
      <p className="row-span-4 text-sm leading-6">{description}</p>
      <p className="row-span-2 flex items-baseline gap-x-1">
        <span className="text-2xl font-bold tracking-tight">
          {hasPrice ? `€${price}` : "custom"}
        </span>
        {hasPrice && (
          <span className="ms-2 text-sm font-semibold leading-6">/month</span>
        )}
      </p>

      <div className="row-span-2">
        <Button>{ctaText}</Button>
      </div>

      <ul className="row-span-3 text-xs leading-6">
        {benefits.map((benefit, index) => (
          <li
            className="flex items-center gap-x-2"
            key={index}>
            <CheckmarkIcon className="h-3 w-4" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

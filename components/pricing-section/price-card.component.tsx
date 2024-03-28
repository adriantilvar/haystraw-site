import Button from "@components/button/button.component.tsx";
import CheckmarkIcon from "@icons/checkmark.icon.tsx";
import { Subscription } from "models/subscription.model";

export default function PriceCard({
  title,
  description,
  price,
  benefits,
  ctaText,
}: Subscription) {
  return (
    <div className="grid p-8 text-base grid-rows-10 max-h-96 max-w-72 ring-1 ring-gray-200 rounded-3xl">
      <h3 className="row-span-1 font-semibold lg:text-lg lg:leading-8">
        {title}
      </h3>

      <p className="row-span-3 text-sm lg:leading-6">{description}</p>

      <p className="flex items-baseline row-span-2 gap-x-1">
        {!price && price !== 0 ? (
          <span className="text-4xl font-bold tracking-tight">custom</span>
        ) : (
          <>
            <span className="text-4xl font-bold tracking-tight">€{price}</span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /month
            </span>
          </>
        )}
      </p>

      <div className="row-span-2">
        <Button>{ctaText as string}</Button>
      </div>

      <ul className="row-span-3 text-sm leading-6">
        {benefits.map((benefit, index) => (
          <li className="flex items-center gap-x-2" key={index}>
            <CheckmarkIcon className="w-4 h-3" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

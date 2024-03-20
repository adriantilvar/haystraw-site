import Button from "../button/button.component";
import Image from "next/image";

import check from "../../public/check.svg";

import CheckmarkIcon from "../icons/checkmark-icon.component";

export default function PriceCard({
  title,
  description,
  price,
  benefits,
}: {
  title: string;
  description: string;
  price?: number;
  benefits: string[];
}) {
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
            <span className="text-4xl font-bold tracking-tight">
              €{price}
            </span>
            <span className="text-sm font-semibold leading-6 text-gray-600">
              /month
            </span>
          </>
        )}
      </p>

      <div className="row-span-2">
        <Button type="solid"> Get plan </Button>
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

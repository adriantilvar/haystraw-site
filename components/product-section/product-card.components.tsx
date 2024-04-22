import ArrowLongRight from "@icons/arrow-long-right.icon";

export default function ProductCard({
  title,
  description,
  functions,
  type,
}: {
  title: string;
  description: string;
  functions: string[];
  type: string;
}) {
  return (
    <div className="flex overflow-hidden rounded-2xl ring-1 ring-gray-200 even:flex-row-reverse">
      <div className="flex-auto p-8 text-start">
        <h3 className="mb-4 text-xl font-bold tracking-tight">{title}</h3>
        <p className="mb-4 text-base">{description}</p>
        <div className="flex items-center">
          <h4 className="mb-4 flex-none text-base font-bold leading-6">
            {`What's included`}
          </h4>
        </div>
        <ul className="grid max-w-14 grid-cols-2 gap-2 text-sm leading-6">
          {functions.map((fun, index) => (
            <li
              className="flex items-center gap-x-3"
              key={index}>
              <ArrowLongRight className="h-6 w-5" />
              {fun}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-md lg:flex-shrink-0">
        <div className="flex h-full flex-col justify-center bg-gray-100 py-6 text-center">
          <p className="text-4xl font-semibold text-gray-600">{type}</p>
        </div>
      </div>
    </div>
  );
}

import ProductCard from "./product-card.components";

const products = [
  {
    title: "REST API",
    description:
      "Our RESTful API facilitates the quick identification of a potential high-risk customer. To initiate a check, send an HTTP request containing the customer’s name to one of the endpoints we expose. The response will be a JSON object, either indicating no matches were found or containing all relevant customer information otherwise.",
    functions: ["PEP screening", "Sanctions screening", "All-in-One screening"],
    type: "REST",
  },
  // {
  //   title: "Data Dumps (Coming Soon)",
  //   description:
  //     "We understand that individual background checks can become time-consuming  as your customer base grows. To significantly reduce your workload, we're developing a feature that allows you to upload batches of customer names for screening at once. Right now, we’re experimenting with various file formats to find the most suitable one for most businesses.",
  //   functions: [
  //     "Same screening options as individual checks",
  //     "bulk screening of a JSON object",
  //     "bulk screening of a plain text file",
  //     "bulk screening of an Excel file",
  //   ],
  //   type: "JSON / TXT / CSV",
  // },
];

export default function ProductSection() {
  return (
    <section className="mt-8 flex h-screen flex-col justify-center px-8">
      <div className="mx-auto max-w-7xl text-center font-mono">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Our Product in a Nutshell
          </h2>
          <p className="mb-8 text-base">
            No made-up words. No empty promises. No exaggerated claims.
            <br />
            Our service focuses on one thing and does it well - checking your
            customers against official lists and databases for potential
            conflicts of interest and sanctions.
          </p>
        </div>
        <div className="flex max-w-none flex-col gap-y-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

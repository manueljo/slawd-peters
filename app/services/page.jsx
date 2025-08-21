import MinimalCard, { MinimalCardDescription, MinimalCardImage, MinimalCardTitle } from "@/components/ui/minimal-card";
import React from "react";

const Services = () => {
  const serviceList = [
    {
      title: "Metal Fabrication",
      description:
        "Expertise in creating custom metal structures and components.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Construction Works",
      description: "Comprehensive vehicle repair and maintenance services.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Recruitment",
      description: "Specialized in arc and gas welding techniques.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Proocurement",
      description: "Professional electrical installation and repair services.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Maintenance",
      description: "Precision machining for various industrial applications.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Millwrighting",
      description: "Expert drilling services for water boreholes.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Welding Services",
      description: "Comprehensive services for the oil and gas industry.",
      imageUrl: "/images/hero.jpg",
    },
    {
      title: "Training",
      description: "Comprehensive services for the oil and gas industry.",
      imageUrl: "/images/hero.jpg",
    },
  ];

  return (
    <>
      <section>
        <div className="h-full w-full flex flex-col items-center justify-center bg-blue-100 min-h-[20rem] relative text-gray-800 p-4">
          {/* Concentric Squares - Light Pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
              `,
            }}
          />

          <h2 className="text-3xl md:text-5xl font-bold mb-2">Our Services</h2>
          <p className="text-lg">Engineering Excellence Since 1970</p>
        </div>
      </section>
      <section className="max-w-[1024px] mx-auto px-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-3">
        {serviceList.map((service, index) => (
          <MinimalCard key={index}>
            <MinimalCardImage src={service.imageUrl} alt={service.title} />
            <MinimalCardTitle>{service.title}</MinimalCardTitle>
            <MinimalCardDescription>
              {service.description}
            </MinimalCardDescription>
          </MinimalCard>
        ))}
      </section>
    </>
  );
};

export default Services;

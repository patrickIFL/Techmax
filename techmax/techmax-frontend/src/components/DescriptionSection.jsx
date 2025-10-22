import DescriptionCard from "./DescriptionCard";

function DescriptionSection() {
  const descriptionArr = [
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content:
        "We provide the most responsive and functional IT design for companies and businesses worldwide",
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content:
        "We provide the most responsive and functional IT design for companies and businesses worldwide",
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content:
        "We provide the most responsive and functional IT design for companies and businesses worldwide",
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content:
        "We provide the most responsive and functional IT design for companies and businesses worldwide",
    },
  ];

  return (
    <div className="block max-w-6xl mx-auto relative px-4">
      {/* Wrapper div controls height so layout stays intact */}
      <div className="relative min-h-[360px]">
        <div
          className="absolute inset-0 grid grid-cols-1 sm:grid-cols-2 
          xl:grid-cols-4 gap-5 -top-20"
        >
          {descriptionArr.map((item, index) => (
            <DescriptionCard
              key={index}
              imgsrc={item.imgsrc}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;

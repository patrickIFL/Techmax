import DescriptionCard from "./DescriptionCard"

function DescriptionSection() {
  const descriptionArr = [
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content: "We provide the most responsive and functional IT design for companies and businesses worldwide"
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content: "We provide the most responsive and functional IT design for companies and businesses worldwide"
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content: "We provide the most responsive and functional IT design for companies and businesses worldwide"
    },
    {
      imgsrc: "/service-1.png",
      title: "Strategy & Discovery",
      content: "We provide the most responsive and functional IT design for companies and businesses worldwide"
    },
  ]

  return (

    <div className="flex max-w-6xl mx-auto gap-5 relative px-4">
      <div className="absolute grid grid-cols-1 sm:grid-cols-2 
      xl:grid-cols-4 gap-5 -top-20">
        {descriptionArr.map((item, index) => {
          return <DescriptionCard key={index}
            imgsrc={item.imgsrc}
            title={item.title}
            content={item.content}
          />;
        })}
      </div>

    </div>
  )
}

export default DescriptionSection

import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const galleries = {
    healthCamps: [
      { id: 1, title: "Annual Health Camp 2024", location: "Ernakulam District", image: "/images/hc1.png" },
      { id: 2, title: "Mobile Clinic Visit", location: "Thrissur", image: "/images/hc2.png" },
      { id: 3, title: "Health Screening Drive", location: "Kozhikode", image: "/images/hc3.png" },
      { id: 4, title: "Community Health Workshop", location: "Kottayam", image: "/images/hc4.png" },
      { id: 5, title: "First Aid Training Session", location: "Kannur", image: "/images/hc5.png" },
      { id: 6, title: "Nutrition Awareness Program", location: "Palakkad", image: "/images/hc6.png" },
    ],
    vaccination: [
      { id: 1, title: "COVID-19 Vaccination Drive", location: "Multiple Centers", image: "/images/vaccine1.png" },
      { id: 2, title: "Seasonal Flu Campaign", location: "Thiruvananthapuram", image: "/images/vaccine2.png" },
      { id: 3, title: "Tetanus Immunization", location: "Kollam", image: "/images/vaccine3.png" },
      { id: 4, title: "Hepatitis B Vaccination", location: "Malappuram", image: "/images/vaccine4.png" },
      { id: 5, title: "Child Immunization Day", location: "Wayanad", image: "/images/vaccine5.png" },
      { id: 6, title: "Typhoid Prevention Drive", location: "Alappuzha", image: "/images/vaccine6.png" },
    ],
    facilities: [
      { id: 1, title: "Main Health Center", location: "Kochi", image: "/images/facility1.png" },
      { id: 2, title: "Digital Records Room", location: "Headquarters", image: "/images/facility2.png" },
      { id: 3, title: "Telemedicine Station", location: "Thrissur", image: "/images/facility3.png" },
      { id: 4, title: "Laboratory Facility", location: "Kozhikode", image: "/images/facility4.png" },
      { id: 5, title: "Waiting Area", location: "Ernakulam Center", image: "/images/facility5.png" },
      { id: 6, title: "Consultation Rooms", location: "Main Branch", image: "/images/facility6.png" },
    ],
  };

  const renderCarousel = (items: typeof galleries.healthCamps) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -400 : 400,
          behavior: "smooth",
        });
      }
    };

    return (
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scrollable Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth px-10 scrollbar-hide"
        >
          {items.map((item) => (
            <Card
              key={item.id}
              className="min-w-[300px] border-2 border-black overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="h-56 border-b-2 border-black overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-black rounded-full p-2 shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-[80vh] bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our health initiatives, facilities, and community programs through images
          </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="healthCamps" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 border-2 border-black bg-white p-1">
            <TabsTrigger
              value="healthCamps"
              className="data-[state=active]:bg-black data-[state=active]:text-white font-medium"
            >
              Health Camps
            </TabsTrigger>
            <TabsTrigger
              value="vaccination"
              className="data-[state=active]:bg-black data-[state=active]:text-white font-medium"
            >
              Vaccination
            </TabsTrigger>
            <TabsTrigger
              value="facilities"
              className="data-[state=active]:bg-black data-[state=active]:text-white font-medium"
            >
              Facilities
            </TabsTrigger>
          </TabsList>

          <TabsContent value="healthCamps">{renderCarousel(galleries.healthCamps)}</TabsContent>
          <TabsContent value="vaccination">{renderCarousel(galleries.vaccination)}</TabsContent>
          <TabsContent value="facilities">{renderCarousel(galleries.facilities)}</TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;

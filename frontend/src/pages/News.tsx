import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

// Images
import healthScreenImg from "@/assets/health-screen.jpg";
import teleImg from "@/assets/tele.jpg";
import vaccineImg from "@/assets/vaccine.jpg";
import mhImg from "@/assets/mh.jpg";
import digimedrecImg from "@/assets/digimedrec.jpg";
import hospitalsImg from "@/assets/Hospitals.jpg";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New Health Screening Program Launched for Migrant Workers",
      date: "March 15, 2024",
      author: "KerMedix Health Team",
      summary:
        "KerMedix Health Services introduces a comprehensive screening program for early detection and prevention of common health issues among migrant workers.",
      image: healthScreenImg,
    },
    {
      id: 2,
      title: "Telemedicine Services Now Available 24/7",
      date: "March 10, 2024",
      author: "Dr. Sarah Johnson",
      summary:
        "Round-the-clock telemedicine consultation services now accessible to all registered workers, providing immediate medical advice and support.",
      image: teleImg,
    },
    {
      id: 3,
      title: "Vaccination Drive: 5000+ Workers Immunized",
      date: "March 5, 2024",
      author: "Public Health Division",
      summary:
        "Successful completion of seasonal vaccination drive across multiple districts, ensuring protection for migrant worker communities.",
      image: vaccineImg,
    },
    {
      id: 4,
      title: "Mental Health Support Program Expansion",
      date: "February 28, 2024",
      author: "Counseling Services",
      summary:
        "Mental health and counseling services expanded to include multilingual support in 5 languages, making care more accessible.",
      image: mhImg,
    },
    {
      id: 5,
      title: "Digital Health Records Reach 10,000 Users",
      date: "February 20, 2024",
      author: "KerMedix Health Team",
      summary:
        "Platform milestone achieved with over 10,000 migrant workers now maintaining comprehensive digital health records",
      image: digimedrecImg,
    },
    {
      id: 6,
      title: "Partnership with Local Hospitals Announced",
      date: "February 15, 2024",
      author: "Administration",
      summary:
        "New partnerships with 15 hospitals across Kerala to provide seamless healthcare access and priority services for registered workers.",
      image: hospitalsImg,
    },
  ];

  return (
    <div className="min-h-[80vh] bg-[#F9EFE3] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000000] mb-4">
            Latest News & Updates
          </h1>
          <div className="h-1 w-16 bg-[#FFCC33] rounded-full mx-auto mb-6" />
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Stay informed about health initiatives, programs, and services for migrant workers
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-24">
          <Card className="overflow-hidden rounded-[32px] border-2 border-black bg-white shadow-[0_25px_60px_rgba(0,0,0,0.15)]">
            <div className="grid md:grid-cols-2">
              <div className="relative h-72 md:h-full overflow-hidden">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <CardHeader className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-6 text-sm text-black/60 mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-[#402EE6]" />
                    {newsArticles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4 text-[#402EE6]" />
                    {newsArticles[0].author}
                  </span>
                </div>

                <CardTitle className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {newsArticles[0].title}
                </CardTitle>

                <CardDescription className="text-base text-black/70 leading-relaxed">
                  {newsArticles[0].summary}
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {newsArticles.slice(1).map((article) => (
            <Card
              key={article.id}
              className="group rounded-[24px] border-2 border-black bg-white overflow-hidden
              transition-all duration-300 hover:-translate-y-1
              hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardHeader>
                <div className="flex items-center gap-2 text-xs text-black/60 mb-3">
                  <Calendar className="h-3 w-3 text-[#402EE6]" />
                  {article.date}
                </div>

                <CardTitle className="text-lg font-semibold text-black mb-2 group-hover:text-[#402EE6] transition-colors">
                  {article.title}
                </CardTitle>

                <CardDescription className="text-sm text-black/70">
                  {article.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-28">
          <Card className="rounded-[32px] border-2 border-black bg-[#FFCC33]/20 shadow-[0_30px_70px_rgba(0,0,0,0.2)]">
            <CardHeader className="text-center p-12">
              <CardTitle className="text-3xl font-bold text-black mb-3">
                Stay Updated
              </CardTitle>
              <CardDescription className="text-base text-black/70 mb-8">
                Subscribe to receive the latest health news and updates
              </CardDescription>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3 border-2 border-black rounded-xl
                  focus:outline-none focus:ring-2 focus:ring-[#402EE6]"
                />
                <button
                  className="px-8 py-3 bg-[#402EE6] text-white font-semibold rounded-xl
                  hover:bg-[#2f21c7] hover:scale-105 transition-all"
                >
                  Subscribe
                </button>
              </div>
            </CardHeader>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default News;

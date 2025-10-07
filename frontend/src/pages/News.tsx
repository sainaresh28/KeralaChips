import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";

// Import images from src/assets
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
      summary: "KerMedix Health Services introduces comprehensive health screening program aimed at early detection and prevention of common health issues among migrant workers.",
      image: healthScreenImg
    },
    {
      id: 2,
      title: "Telemedicine Services Now Available 24/7",
      date: "March 10, 2024",
      author: "Dr. Sarah Johnson",
      summary: "Round-the-clock telemedicine consultation services now accessible to all registered workers, providing immediate medical advice and support.",
      image: teleImg
    },
    {
      id: 3,
      title: "Vaccination Drive: 5000+ Workers Immunized",
      date: "March 5, 2024",
      author: "Public Health Division",
      summary: "Successful completion of seasonal vaccination drive across multiple districts, ensuring protection for migrant worker communities.",
      image: vaccineImg
    },
    {
      id: 4,
      title: "Mental Health Support Program Expansion",
      date: "February 28, 2024",
      author: "Counseling Services",
      summary: "Mental health and counseling services expanded to include multilingual support in 5 languages, making care more accessible.",
      image: mhImg
    },
    {
      id: 5,
      title: "Digital Health Records Reach 10,000 Users",
      date: "February 20, 2024",
      author: "KerMedix Health Team",
      summary: "Platform milestone achieved with over 10,000 migrant workers now maintaining comprehensive digital health records.",
      image: digimedrecImg
    },
    {
      id: 6,
      title: "Partnership with Local Hospitals Announced",
      date: "February 15, 2024",
      author: "Administration",
      summary: "New partnerships with 15 hospitals across Kerala to provide seamless healthcare access and priority services for registered workers.",
      image: hospitalsImg
    }
  ];

  return (
    <div className="min-h-[80vh] bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay informed about health initiatives, programs, and services for migrant workers
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <Card className="border-2 border-black overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="h-64 md:h-auto w-full overflow-hidden">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="p-8">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{newsArticles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{newsArticles[0].author}</span>
                  </div>
                </div>
                <CardTitle className="text-2xl mb-4">{newsArticles[0].title}</CardTitle>
                <CardDescription className="text-base">
                  {newsArticles[0].summary}
                </CardDescription>
              </CardHeader>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="border-2 border-black hover:shadow-lg transition-shadow">
              <div className="h-48 w-full overflow-hidden border-b-2 border-black">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                <CardDescription className="text-sm">
                  {article.summary}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="border-2 border-black bg-gray-50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-2">Stay Updated</CardTitle>
              <CardDescription className="text-base">
                Subscribe to our newsletter for the latest health news and updates
              </CardDescription>
              <div className="mt-6 flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border-2 border-black rounded-none focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button className="px-6 py-2 bg-black text-white font-medium hover:bg-gray-900 transition-colors border-2 border-black">
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

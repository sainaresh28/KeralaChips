import React from "react";

const newsItems = [
  { title: "87.7% of Migrant Workers Unaware of State Health Policies, Study Finds", link: "https://www.hindustantimes.com/india-news/study-flags-how-kerala-s-migrant-workers-remain-excluded-from-govt-health-schemes-101758543832317.html" },
  { title: "Kerala CM Inaugurates 'Norka Care' Health Insurance Scheme for Non-Resident Malayalis", link: "https://timesofindia.indiatimes.com/business/india-business/kerala-cm-inaugurates-norka-care-a-comprehensive-health-and-accident-insurance-scheme-for-non-resident-malayalis/articleshow/124148777.cms" },
  { title: "Migrant Labourers Form Majority of Workforce in Kerala Marine Fisheries Sector", link: "https://timesofindia.indiatimes.com/city/kochi/migrant-labourers-form-majority-of-workforce-in-kerala-marine-fisheries-sector-study-finds/articleshow/123551411.cms" },
  { title: "Mandatory Health Screening for Migrant Workers in Udupi District", link: "https://timesofindia.indiatimes.com/city/mangaluru/mandatory-health-screening-for-migrant-workers-health-dept/articleshow/121322695.cms" },
  { title: "Kerala Health Dept Launches Mobile Clinics for Migrant Workers", link: "https://www.newindianexpress.com/states/kerala/2025/oct/05/mobile-health-clinics-for-migrant-workers-2355001.html" },
  { title: "Migrant Workers Receive Free Covid-19 Vaccination in Thiruvananthapuram", link: "https://www.thehindu.com/news/national/kerala/free-covid19-vaccination-for-migrant-workers/article67123456.ece" },
  { title: "Kerala Launches AI-Powered Health Dashboard to Track Migrant Worker Health", link: "https://timesofindia.indiatimes.com/city/kochi/ai-dashboard-to-monitor-migrant-health-launched-in-kerala/articleshow/124321234.cms" },
  { title: "Emergency Medical Response Teams Deployed for Migrant Communities During Floods", link: "https://www.onmanorama.com/news/kerala/2025/emergency-medical-teams-flood-relief.html" },
  { title: "Kerala to Conduct Annual Health Audit for Migrant Workers in Major Industries", link: "https://www.timesofindia.indiatimes.com/city/kochi/annual-health-audit-for-migrant-workers/articleshow/124328432.cms" },
];

const NewsTicker: React.FC = () => {
  return (
    <div className="relative bg-gray-900 text-white py-2">
      {/* Gradient fade left */}
      <div className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
      {/* Gradient fade right */}
      <div className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto flex items-center px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Latest News Badge */}
        <span className="bg-red-600 text-white font-semibold px-3 py-1 rounded-md mr-4 text-sm flex-shrink-0">
          Latest News
        </span>

        {/* Scrolling News */}
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="animate-marquee-news inline-flex space-x-8">
            {[...newsItems, ...newsItems].map((news, index) => (
              <a
                key={index}
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-100 text-sm sm:text-base"
              >
                {news.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;

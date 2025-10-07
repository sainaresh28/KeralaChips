import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import AnimatedCounter from './AnimatedCounter';
import { Card, CardContent } from '@/components/ui/card';

const StatsSection = () => {
  const visibleElements = useScrollAnimation();

  const stats = [
    { label: 'Registered Workers', value: 1100, suffix: '+' },
    { label: 'Healthcare Providers', value: 80, suffix: '' },
    { label: 'Digital Health Records', value: 2400, suffix: '+' },
    { label: 'Vaccinations Tracked', value: 750, suffix: '+' },
  ];

  return (
    <section className="relative py-20 bg-secondary overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-16 fade-in-up ${visibleElements.has('stats-header') ? 'visible' : ''}`}
          data-animate="stats-header"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Making Healthcare Accessible
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform has empowered thousands of migrant workers with digital health records, 
            ensuring healthcare continuity across Kerala.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`hover-lift grid-item ${visibleElements.has(`stat-${index}`) ? 'reveal' : ''}`}
              data-animate={`stat-${index}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-foreground mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
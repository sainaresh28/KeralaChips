import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const TestimonialSection = () => {
  const visibleElements = useScrollAnimation();

  const testimonials = [
    {
      name: 'Dr. Priya Nair',
      role: 'Healthcare Provider, Kochi',
      quote: 'KerMedix Health has revolutionized how I access patient records. The digital system saves time and ensures accuracy.',
    },
    {
      name: 'Ramesh Kumar',
      role: 'Construction Worker',
      quote: 'Having my health records on my phone gives me confidence. Doctors can access my vaccination history instantly.',
    },
    {
      name: 'Dr. Mohammed Salim',
      role: 'Public Health Officer',
      quote: 'The multilingual support and comprehensive tracking help us serve diverse communities effectively.',
    },
  ];

  return (
    <section className="relative py-20 bg-muted overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div 
          className={`text-center mb-16 fade-in-up ${visibleElements.has('testimonials-header') ? 'visible' : ''}`}
          data-animate="testimonials-header"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            See what healthcare providers and workers say about our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className={`hover-lift slide-in-up ${visibleElements.has(`testimonial-${index}`) ? 'visible' : ''}`}
              data-animate={`testimonial-${index}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <Quote className="text-muted-foreground mb-4" size={32} />
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

const About = () => {
  return (
    <div className="min-h-[80vh] bg-background py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About KerMedix
          </h1>
          <p className="text-xl text-muted-foreground">
            Digital Health Record Management System for Migrant Workers
          </p>
        </div>

        <div className="space-y-8">
          <section className="bg-card border border-border p-8 rounded-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Project Purpose
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kerala hosts a significant population of migrant workers who contribute immensely to the state's economy. 
              However, these workers often face challenges in accessing proper healthcare services and maintaining 
              consistent health records. Our Digital Health Record Management System aims to bridge this gap by 
              providing a centralized, accessible platform for managing health information.
            </p>
          </section>

          <section className="bg-card border border-border p-8 rounded-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Why Migrant Workers Need Health Records
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>• <strong>Continuity of Care:</strong> Maintaining medical history across different healthcare providers</p>
              <p>• <strong>Emergency Access:</strong> Quick access to critical health information during emergencies</p>
              <p>• <strong>Disease Prevention:</strong> Tracking vaccinations and preventive care measures</p>
              <p>• <strong>Treatment Compliance:</strong> Ensuring proper follow-up and medication adherence</p>
              <p>• <strong>Legal Documentation:</strong> Providing proof of medical treatments for insurance and legal purposes</p>
            </div>
          </section>

          <section className="bg-card border border-border p-8 rounded-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Supporting United Nations Sustainable Development Goals
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border p-6 rounded-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  SDG 3: Good Health & Well-being
                </h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring healthy lives and promoting well-being for all migrant workers at all ages through 
                  accessible healthcare records and improved medical care continuity.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  SDG 10: Reduced Inequalities
                </h3>
                <p className="text-sm text-muted-foreground">
                  Reducing inequality within and among communities by providing equal healthcare access 
                  and eliminating discrimination in medical services for migrant populations.
                </p>
              </div>

              <div className="border border-border p-6 rounded-sm">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  SDG 16: Peace, Justice & Strong Institutions
                </h3>
                <p className="text-sm text-muted-foreground">
                  Building effective, accountable and inclusive healthcare institutions that ensure 
                  transparent health governance and protect the rights of all workers.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-card border border-border p-8 rounded-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              System Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">For Workers:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Access to personal health history</li>
                  <li>• Portability across healthcare providers</li>
                  <li>• Emergency medical information access</li>
                  <li>• Vaccination and checkup reminders</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">For Healthcare Providers:</h4>
                <ul className="space-y-1 text-sm">
                  <li>• Complete patient medical history</li>
                  <li>• Improved diagnosis accuracy</li>
                  <li>• Reduced duplicate testing</li>
                  <li>• Better treatment outcomes</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
import SectionHeading from '@/frontend/components/section-heading/SectionHeading';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-700/10 blur-[150px]" />
      <div className="container-narrow relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together."
          description="Have a role, a project, or just want to say hi? My inbox is always open."
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-5">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

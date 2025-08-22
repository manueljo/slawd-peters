import { Mail, MapPinHouse, PhoneOutgoing } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import { Resend } from "resend";
import Map from "@/components/map";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

const Contact = () => {
  async function sendEmail(formData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    await resend.emails.send({
      from: "slawd@resend.dev",
      to: "mikebillyy@gmail.com",
      subject: `${subject}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p> <p>Message: ${message}</p>`,
    });
  }

  return (
    <>
      <section>
        <div className="h-full w-full flex flex-col items-center justify-center bg-blue-100 min-h-[20rem] relative text-gray-800 p-4">
          {/* Concentric Squares - Light Pattern */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
                repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
                repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
              `,
            }}
          />

          <h2 className="text-3xl md:text-5xl font-bold mb-2">Contact us</h2>
          <p className="text-lg">Engineering Excellence Since 1970</p>
        </div>
      </section>
      <section className="max-w-[1024px] mx-auto px-4 py-8">
        <Map/>
      </section>
      <section className="max-w-[1024px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            For inquiries, feedback, or to learn more about our services, please
            reach out to us through the following contact details:
          </p>
          <ul className="list-none pl-5 text-lg mb-4">
            <li className="">
              <Mail className="inline-block mr-4" />
              <Link href="mailto:slawdpetersgroup.org@gmail.com">
                slawdpetersgroup.org@gmail.com
              </Link>
            </li>
            <li>
              <PhoneOutgoing className="inline-block mr-4" />{" "}
              <Link href="tel:+2348063081565">+234 806 308 1565</Link>
            </li>
            <li>
              <MapPinHouse className="inline-block mr-4" /> #11 Joshua Obot
              Street, Ikot Ekang, Etinan, Akwa Ibom State, Nigeria
            </li>
          </ul>
          <p className="text-lg mb-4">
            We value your feedback and are here to assist you with any questions
            or concerns you may have. Your input helps us improve and continue
            providing quality services.
          </p>
          <p className="text-lg mb-4">
            Thank you for your interest in Slawd Peters Engineering. We look
            forward to hearing from you!
          </p>
        </div>
        <ContactForm sendEmail={sendEmail} />
      </section>
    </>
  );
};

export default Contact;

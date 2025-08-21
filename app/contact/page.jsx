import { Button } from "@/components/ui/button";
import { Mail, MapPinHouse, PhoneOutgoing } from "lucide-react";
import Link from "next/link";

const Contact = () => {
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2003.7378142382372!2d7.851907258085891!3d4.8527078309803615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067fd39642d14a3%3A0x7a08a78660c32885!2sSLAWD%20PETERS%20Engineering%20Limited!5e1!3m2!1sen!2sng!4v1755785116306!5m2!1sen!2sng" width="100%" height="450" style={{border:0}} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
        <div>
          <form className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border-1 border-black  rounded"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border-1 border-black rounded"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                className="w-full h-full p-2 border-1 border-black  rounded"
                rows="10"
                required
              ></textarea>
            </div>
            <Button
              className=" bg-blue-950 text-white hover:bg-blue-700 transition-colors w-full"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

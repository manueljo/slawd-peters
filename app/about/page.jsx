import React from "react";

const About = () => {
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

          <h2 className="text-3xl md:text-5xl font-bold mb-2">About us</h2>
          <p className="text-lg">Engineering Excellence Since 1970</p>
        </div>
      </section>
      <section className="max-w-[1024px] mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">A brief profile</h2>
        <p className="text-lg mb-4">
          Slawd Peters Engineering Limited was established in 1970 by its
          Founder and Proprietor, Elder Okon Joshua Obot. The company was
          formally registered and commissioned in 1973 under the name Peters
          Engineering and Construction Works. After gaining extensive training
          and professional experience with various organizations both within
          Nigeria and abroad, Elder Obot returned home to apply his wealth of
          knowledge in service to his community in Etinan and Akwa Ibom State at
          large. Today, his vision continues to benefit the entire nation
          through the enduring legacy of Slawd Peters Engineering.
        </p>
        <p className="text-lg mb-4">
          From the very start of its operations, parents, academic institutions,
          companies, and organizations quickly recognized the quality and
          potential of the company. Many sent their wards, employees, and
          students for apprenticeship training. The overwhelming demand for
          these training opportunities, combined with high levels of youth
          unemployment in rural areas, led to the establishment of the Slawd
          Peters Engineering Training Centre — a dedicated facility for
          equipping young men and women with technical education and trade
          skills.
        </p>
        <p className="text-lg mb-4">
          The Training Centre specializes in metal fabrication, auto-mechanics,
          arc and gas welding, pipe welding, oilfield services, electrical
          wiring, machining, and water borehole drilling and development. Elder
          Obot applied to the relevant government ministry for assessment and
          approval, which was duly granted with commendation following a
          comprehensive evaluation of the Centre's facilities. Supporting
          reports from the Federal Industrial Training Fund and the Inspectorate
          Department of the Akwa Ibom State Ministry of Education further
          confirmed the Centre's excellence.
        </p>
        <p className="text-lg mb-4">
          Over the years, Slawd Peters Engineering and its Technical Development
          Institute have grown to remarkable heights. The institution boasts
          fully equipped workshops, modern classrooms, a laboratory, a clinic,
          and most recently, a state-of-the-art Computer Section. The
          organization has partnered with various bodies including the College
          of Education, Afaha Nsit, the National Directorate of Employment
          (NDE), Elf Nigeria Ltd, Mobil Producing Nigeria Unlimited, the
          Industrial Training Fund (ITF), NDDC, and several higher institutions
          of learning.
        </p>
        <p className="text-lg mb-4">
          We are also an accredited center for NABTEB, WAEC, and the Government
          Trade Test Examinations, consistently delivering credible results and
          producing skilled professionals. Since inception, Slawd Peters
          Engineering has trained more than 4,000 trainees in various technical
          skills. Many of these graduates are now employed in oil companies,
          technical organizations, and government establishments, while others
          have become successful entrepreneurs. Attached commendations,
          including a memo from Mobil Nigeria Plc praising the performance of
          one of our trainees during industrial attachment, bear testimony to
          our impact.
        </p>
        <p className="text-lg mb-4">
          Our contributions to Nigeria&apos;s technological development have
          earned numerous commendations and awards from community leaders,
          government officials, state governors, academic institutions,
          accreditation teams, corporate organizations, international bodies,
          and individuals.
        </p>
        <p className="text-lg mb-4">
          The late Founder, Elder O. J. Obot, demonstrated a lifelong commitment
          to youth empowerment and social development. Through scholarships and
          sponsorship programs, he supported orphans and underprivileged youths,
          helping them achieve self-reliance through skills acquisition — in
          full alignment with the organization’s objectives.
        </p>
        <p className="text-lg mb-4">
          In recognition of his outstanding contributions, Elder Obot received
          several honors, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>African International Award of Merit</li>
          <li>
            Certificate of Excellence from the Nigerian Youth Organization for
            Technical Research and Environmental Protection
          </li>
          <li>
            Merit Award from the Raw Materials and Research Development Council
          </li>
          <li>
            Excellence Award for Educational Advancement from Mboho Mkparawa
            Ibibio
          </li>
          <li>And many other accolades.</li>
        </ul>
        <p className="text-lg mb-4">
          The Paramount Ruler of Etinan further conferred on him the exalted
          Chieftaincy title “Obong Uforo Iman Ibom”, meaning{" "}
          <em>Chief Responsible for Progress and Enrichment</em>.
        </p>
        <p className="text-lg mb-4">
          Government leaders also recognized his achievements. On November 27,
          1987, the Military Administrator of Akwa Ibom State,{" "}
          <strong>Col. Godwin Abbe</strong>, visited SLAWD Peters Engineering
          and remarked: “
          <em>
            It is very encouraging to see this patriotic effort of an individual
            towards the development of Akwa Ibom State and Nigeria. You deserve
            support if you must strive to sustain your present struggle.
          </em>
          ”
        </p>
        <p className="text-lg mb-4">
          Similarly, on October 23, 1990, <strong>Mr. L. A. Anyanwu</strong> of
          the ITF Headquarters noted: “
          <em>
            SLAWD Peters Technical School is a potential engineering development
            springboard for Akwa Ibom State. Both the State and Federal
            Government should endeavor to support this organization through
            financial and management assistance. I am impressed by what an
            individual can contribute to national development.
          </em>
          ”
        </p>
        <p className="text-lg mb-4">
          The Minister of Employment, Labour, and Productivity,{" "}
          <strong>Alhaji Abubakar Umar</strong>, also observed: “
          <em>
            I am highly impressed by the enthusiasm of the Founder and his
            staff. It is clear to see how this Centre demonstrates Nigerian
            ingenuity, creating alternatives to imported machinery and spare
            parts. This Centre has a lot to offer the country and deserves both
            Federal and State support.
          </em>
          ”
        </p>
      </section>
    </>
  );
};

export default About;

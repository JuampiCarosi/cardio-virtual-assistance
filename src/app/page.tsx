import { ContactForm } from "@/components/contact-form";
import { Circles } from "@/components/svg/circles";
import { CirclesFilled } from "@/components/svg/circles-filled";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <section
        id="start"
        className="relative h-[900px] overflow-x-clip bg-[url(/bg-main.png)] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute bottom-50 left-32 z-20 flex h-full items-end">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-semibold text-rose-950">
              cardio virtual assistance
            </h1>
            <h2 className="text-4xl font-medium text-rose-900">
              remote cardiology service
            </h2>
            <Link
              href="#contact"
              className="mt-10 max-w-32 rounded-full border border-[#D3C4C4] bg-[#EFE3E3] py-1 text-center text-[22px] font-medium text-[#891C1C] hover:bg-[#e0d5d5]"
            >
              Contact
            </Link>
          </div>
        </div>
        <CirclesFilled className="absolute -top-10 -left-[70%] z-10 h-auto w-[2800px] overflow-hidden" />
      </section>
      <section className="relative z-20 h-[800px]">
        <div className="flex h-full flex-col items-center justify-center gap-25 text-rose-950">
          <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
            <h3 className="text-2xl font-medium">Mission</h3>
            <p className="text-lg">
              The mission of CardioVirtualAssistance is to provide high-quality,
              remote cardiology assistance to medical institutions and medical
              doctors worldwide, enhancing access to superior care and improving
              patient outcomes through our commitment to excellence.
            </p>
          </div>

          <div className="flex max-w-2xl flex-col items-center gap-3 text-center">
            <h3 className="text-2xl font-medium">About Us</h3>
            <p className="text-lg">
              We are a team of highly trained cardiologists from Argentina, all
              affiliated with a prestigious university hospital accredited by
              the Joint Commission International. Our expertise spans a wide
              range of cardiology subfields, including preventive cardiology,
              cardiovascular imaging, critical care cardiology,
              electrophysiology, heart failure, pulmonary hypertension,
              cardiomyopathies, valvular heart disease, and interventional
              cardiology. Our commitment to excellence ensures that we
              consistently meet the highest international standards of care.
            </p>
          </div>
        </div>
      </section>
      <section className="relative z-20 bg-[oklch(94.1%_0.02_12.58)]">
        <section
          id="what-we-offer"
          className="absolute -mt-10 w-full"
        ></section>
        <div className="flex h-full flex-col items-center justify-center gap-25 py-20 text-rose-900">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <div className="grid grid-cols-3 gap-x-30 gap-y-20">
            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image
                src="/cost-savings.png"
                alt="cost-savings"
                width={80}
                height={80}
              />
              <h4 className="text-xl font-medium">Cost Savings</h4>
              <p className="text-lg">
                Reduce costs by up to 70% without compromising quality.
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image
                src="/time-zone.png"
                alt="time-zone"
                width={80}
                height={80}
              />
              <h4 className="text-xl font-medium">Time Zone Advantage</h4>
              <p className="text-lg">
                Seamless collaboration with the U.S. and Europe.
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image src="/fast.png" alt="fast" width={80} height={80} />
              <h4 className="text-xl font-medium">Fast & Reliable</h4>
              <p className="text-lg">
                High-quality cardiac reports delivered within 24 hours.
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image
                src="/integration.png"
                alt="integration"
                width={80}
                height={80}
              />
              <h4 className="text-xl font-medium">Smooth Integration</h4>
              <p className="text-lg">
                Adapts to your systems or trusted partner solutions.
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image
                src="/scalable.png"
                alt="scalable"
                width={80}
                height={80}
              />
              <h4 className="text-xl font-medium">Scalable Solutions</h4>
              <p className="text-lg">
                Expand reporting volume or areas as needed.
              </p>
            </div>

            <div className="flex max-w-64 flex-col items-center gap-1 text-center text-rose-950">
              <Image src="/experts.png" alt="experts" width={80} height={80} />
              <h4 className="text-xl font-medium">Expert Insights</h4>
              <p className="text-lg">
                Access top cardiology experts for second opinions instantly.
              </p>
            </div>
          </div>
          <p className="text-center text-xl text-rose-950">
            We handle the complexities of cardiology reporting so you can focus
            on delivering exceptional patient care
          </p>
        </div>
      </section>
      <section className="py-20">
        <h2 className="text-center text-2xl font-semibold text-rose-900">
          Why Choose CardioVirtual Assistance?
        </h2>
        <div className="mx-auto mt-16 flex max-w-5xl flex-wrap items-center justify-center gap-12 px-8 2xl:max-w-[1540px]">
          <WhyChooseBubble
            title="Cost-Effective Service"
            description="Significantly reduce your cardiology reporting expenses, with the flexibility to discontinue at any time."
          />
          <WhyChooseBubble
            title="High-Quality Reports"
            description="Receive professional, accurate, and reliable preliminary reports crafted by highly trained cardiologists."
          />
          <WhyChooseBubble
            title="Commitment to Timely Delivery"
            description="We ensure that all reports are delivered within 24 hours, maintaining the highest standards of professionalism."
          />
          <WhyChooseBubble
            title="Customized Solutions"
            description="Our services are tailored to meet the specific needs of your clinic, whether integrating with your existing systems or providing our own."
          />
          <WhyChooseBubble
            title="Scalable Service"
            description="Easily expand the volume of reports or broaden the range of cardiac imaging services as your clinic grows."
          />
        </div>
      </section>
      <section className="relative bg-[#d8c0c0] py-36">
        <div className="flex flex-col items-center gap-20">
          <h2 className="text-center text-2xl font-semibold text-rose-900">
            What Service Do We Offer?
          </h2>

          <div className="flex flex-col items-center gap-16 px-8">
            <div className="flex max-w-6xl flex-col items-center gap-3 text-center">
              <h3 className="text-xl font-semibold text-black">
                Comprehensive Assistance
              </h3>
              <p className="text-lg text-black">
                We provide support to physicians, cardiologists, and medical
                institutions to help them achieve better patient outcomes by
                enhancing their efficiency and focusing on direct patient care.
              </p>
            </div>

            <div className="flex max-w-6xl flex-col items-center gap-3 text-center">
              <h3 className="text-xl font-semibold text-black">
                Medical Virtual Scribe
              </h3>
              <p className="text-lg text-black">
                We assist with preliminary cardiology reporting, accurately
                documenting medical visits, diagnoses, procedures, and
                transcribing patient orders, ensuring precise and timely
                documentation for the treating physician.
              </p>
            </div>

            <div className="flex max-w-6xl flex-col items-center gap-3 text-center">
              <h3 className="text-xl font-semibold text-black">
                Tailored Support Services
              </h3>
              <p className="text-lg text-black">
                We offer flexible assistance for various administrative and
                clinical needs.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <Circles className="absolute top-20 -left-[60%] z-10 h-auto w-[2300px]" />
        </div>
      </section>
      <section id="contact" className="relative z-20 py-20">
        <h2 className="text-center text-2xl font-semibold text-[#891C1C]">
          Work with CardioVirtual Assistance
        </h2>
        <div className="justiy-center mx-auto mt-16 flex max-w-7xl items-center gap-20 px-8">
          <div className="w-[500px] rounded-lg bg-[#F8F1F1]/70 p-10">
            <h3 className="text-xl font-medium text-gray-900">Contact Us</h3>
            <h4 className="pt-1 pb-3 text-2xl font-medium text-gray-900">
              Get In Touch
            </h4>
            <ContactForm
              sendEmail={async (formData) => {
                "use server";
                formData.forEach((value, key) => {
                  console.log(key, value);
                });
              }}
            />
          </div>

          <div className="flex max-w-xl flex-col rounded-lg bg-[#F8F1F1]/70 p-10 text-rose-950">
            <div>
              <span className="font-medium">SCHEDULE A CONSULTATION</span> to
              discuss your clinic&apos;s needs and discover how we can enhance
              your operations.
            </div>

            <div className="flex flex-col">
              <a
                href="mailto:contact@cardiovirtual.com"
                className="flex items-center hover:underline"
              >
                <Image src="/email.png" alt="email" width={86} height={86} />
                <span className="-ml-3">contact@cardiovirtual.com</span>
              </a>
              <a
                href="tel:+5491133333333"
                className="flex items-center hover:underline"
              >
                <Image src="/phone.png" alt="phone" width={86} height={86} />
                <span className="-ml-3">+54 9 11 3333 3333</span>
              </a>
              <a
                href="https://linkedin.com/company/cardiovirtual"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:underline"
              >
                <Image
                  src="/linkedin.png"
                  alt="linkedin"
                  width={86}
                  height={86}
                />
                <span className="-ml-3">@cardiovirtual</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function WhyChooseBubble({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full w-64 flex-col items-center gap-4">
      <h3 className="h-13 text-center text-xl font-medium text-rose-900">
        {title}
      </h3>
      <div className="aspect-square w-full rounded-full border border-[oklch(94.1%_0.02_12.58)] bg-[#F8F1F1] p-8 text-center shadow-md shadow-rose-950/20">
        <p className="flex h-full items-center justify-center text-rose-950">
          {description}
        </p>
      </div>
    </div>
  );
}

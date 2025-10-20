import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="space-y-12">
      <section className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg animate-fadeIn">
        <Image
          src="/office2.jpg"
          alt="Brend Tech Office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Brend Tech</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Innovating the future through technology and collaboration.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          Founded in 2020, <span className="font-semibold text-blue-700">Brend Tech</span> has been
          at the forefront of digital innovation, helping businesses embrace technology to improve
          efficiency and drive growth. Our passionate team of engineers, designers, and strategists
          work together to deliver impactful solutions that transform the way our clients operate.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We specialize in areas such as cloud infrastructure, AI automation, and digital product
          development — empowering organizations to scale securely and intelligently in an
          ever-evolving digital landscape.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800">Our Mission & Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple: to empower organizations through intelligent, data-driven
          solutions. We believe that technology should make life easier, smarter, and more
          sustainable for everyone involved.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Looking ahead, Brend Tech aims to be a global leader in digital transformation —
          continuously pushing the boundaries of innovation while maintaining a strong commitment
          to ethics, inclusivity, and environmental responsibility.
        </p>
      </section>

      <div className="relative max-w-6xl mx-auto px-6">
        <hr className="border-t-2 border-blue-200 my-10" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-4 text-blue-600 font-semibold text-sm">
          💙
        </div>
      </div>

      <section className="bg-blue-50 py-10 rounded-2xl shadow-inner animate-fadeIn">
        <div className="max-w-5xl mx-auto text-center px-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-800">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-blue-700 mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We continuously explore new technologies and ideas to create smarter solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-blue-700 mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We value honesty and transparency in every partnership and project we undertake.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-blue-700 mb-2">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                Great things happen when talented minds work together toward a shared goal.
              </p>
            </div>
          </div>
          <div className="mt-10 max-w-3xl mx-auto animate-fadeIn">
            <p className="text-gray-700 leading-relaxed text-lg">
              At <span className="font-semibold text-blue-700">Brend Tech</span>, we believe that
              success is built on trust, creativity, and the drive to make a difference. Every
              project we take on is guided by these principles, ensuring that our solutions not only
              meet expectations but also inspire progress.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              As we continue to grow, we invite you to join us on this journey — to explore new
              possibilities, embrace innovation, and shape the digital future together.
            </p>
          </div>
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto px-6">
        <hr className="border-t-2 border-blue-200 my-10" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-4 text-blue-600 font-semibold text-sm">
        </div>
      </div>

      <section className="text-center py-16 bg-blue-900 text-white rounded-2xl shadow-lg animate-fadeIn">
        <div className="max-w-3xl mx-auto space-y-6 px-6">
          <h2 className="text-3xl font-bold">Interested in Working With Us?</h2>
          <p className="text-lg text-gray-200">
            Let's start a conversation and discover how we can help your business grow through
            innovative technology.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
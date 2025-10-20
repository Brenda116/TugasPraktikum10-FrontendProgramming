import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-20">
      <section className="relative w-full h-[80vh] flex items-center justify-center text-center rounded-2xl overflow-hidden shadow-lg">
        <Image
          src="/office.jpg"
          alt="Brend Tech Office"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/60 to-blue-950/80" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl animate-pulse delay-300" />

        <div className="relative z-10 px-6 text-white max-w-3xl animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Empowering <span className="text-blue-300">Innovation</span> <br/> for the Digital Future
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10">
            Brend Tech helps businesses grow through technology — from web development to AI solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Why Choose Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          We combine creativity, technology, and strategy to deliver impactful solutions that help your business grow faster and smarter.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our professionals are skilled in the latest technologies to deliver the best results.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">
              We design creative and future-ready solutions that set your business apart.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              We listen and adapt to your goals, ensuring our solutions fit your unique needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Reliable Support</h3>
            <p className="text-gray-600">
              We provide continuous support to help your systems run smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      <div className="relative max-w-6xl mx-auto px-6">
        <hr className="border-t-2 border-blue-200 my-10" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-4 bg-white px-4 text-blue-600 font-semibold text-sm">
          💙
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-6 text-center animate-fadeIn">
        <h2 className="text-3xl font-semibold text-blue-800 mb-6">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
          We provide cutting-edge digital solutions to help businesses adapt and thrive in the modern world.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Web Development</h3>
            <p className="text-gray-600">
              Building responsive, scalable, and secure web platforms tailored to your business goals.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">AI & Automation</h3>
            <p className="text-gray-600">
              Harness the power of artificial intelligence to automate tasks and improve decision-making.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">Cloud Solutions</h3>
            <p className="text-gray-600">
              Scalable, secure, and efficient cloud infrastructure for modern business operations.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16 text-center rounded-2xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-semibold mb-4">Let's Build the Future Together</h2>
        <p className="text-gray-200 mb-8 max-w-2xl mx-auto text-lg">
          Partner with Brend Tech to transform your business with smart and sustainable technology solutions.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
import Image from "next/image";

export default function Contact() {
  return (
    <div className="space-y-16">
      <section className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg animate-fadeIn">
        <Image
          src="/office.jpg"
          alt="Brend Tech Contact"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Get in Touch</h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            We're here to answer your questions and help you connect with our team.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center px-6 space-y-6 animate-fadeIn">
        <h2 className="text-2xl font-semibold text-blue-800">Why Contact Us?</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          At <span className="font-semibold text-blue-700">Brend Tech</span>, we value open
          communication and collaboration. Whether you're a potential client, a technology partner,
          or simply curious about our work, we're always excited to connect. Our team is ready to
          discuss your ideas, answer your questions, and explore how we can create innovative
          solutions together.
        </p>
        <p className="text-gray-700 leading-relaxed text-justify">
          By reaching out to us, you'll be connected directly to our dedicated support and business
          teams. We strive to respond promptly and provide clear, helpful information so that your
          experience with us is seamless from the very first message. Let's start a conversation and
          turn your ideas into real-world impact.
        </p>
      </section>

      <section className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">Contact Us</h2>
        <p className="text-center text-gray-600 mb-6">
          Have questions? Fill out the form below and we'll get back to you soon.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
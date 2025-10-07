import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="text-center text-gray-600 mt-2">Have a project in mind? Let's talk.</p>

        <form className="mt-10 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input className="border rounded-xl p-3" type="text" placeholder="Your Name" required />
            <input className="border rounded-xl p-3" type="email" placeholder="Your Email" required />
          </div>
          <input className="border rounded-xl p-3" type="text" placeholder="Subject" />
          <textarea className="border rounded-xl p-3 min-h-[140px]" placeholder="Message"></textarea>
          <button className="px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition w-full md:w-auto">Send Message</button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Or email me at <a className="underline" href="mailto:you@example.com">you@example.com</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

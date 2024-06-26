import React from 'react';

const Contact = () => {
  return (
    <section id='contact' className="   ring-opacity-50 container mx-auto mt-8 px-4 py-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-4">
        Feel free to reach out to me using the form below or via email at adityapatil9537@gmail.com.
      </p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
          <textarea id="message" name="message" rows="4" className="mt-1 block w-full border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>
        <button type="submit" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition duration-300">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;

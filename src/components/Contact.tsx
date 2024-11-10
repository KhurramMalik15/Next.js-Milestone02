// // components/Contact.tsx

export default function Contact() {
  return (
    <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-sans font-bold mb-8"><span className="text-red-900">C</span>ontact Me</h2>
        <p className="text-gray-400 mb-8">
          Feel free to reach out if you have any questions, collaborations, or
          project inquiries!
        </p>

        <form className="bg-slate-800 p-6 rounded-lg shadow-md">
          {/* name input */}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-300 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-800"
              placeholder="Enter your email"
              required 
            />
          </div> 

          {/* message input */}
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-300 text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border border-gray-300 text-slate-600 rounded-lg focus:outline-none focus:border-red-800"
              placeholder="Type your message here"
              required
            ></textarea>
          </div>

          {/* submit Button */}
          <button
            type="submit"
            className="w-full bg-red-800 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition duration-200">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

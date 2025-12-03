export default function ContactPage() {
    return (
        <section className="pt-32 px-6">
            <h1 className="text-4xl font-bold text-blue-700 mb-8">
                Contact Us
            </h1>

            <form
                className="bg-white backdrop-blur-xl shadow-xl rounded-3xl 
        p-10 max-w-xl mx-auto border border-gray-200 space-y-6"
            >
                <div>
                    <label className="block mb-1 text-gray-700 font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full p-4 rounded-xl border border-gray-300 bg-gray-100 
            focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-gray-700 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full p-4 rounded-xl border border-gray-300 bg-gray-100 
            focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                </div>

                <div>
                    <label className="block mb-1 text-gray-700 font-medium">
                        Message
                    </label>
                    <textarea
                        rows="4"
                        placeholder="Write your message..."
                        className="w-full p-4 rounded-xl border border-gray-300 bg-gray-100 
            focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    ></textarea>
                </div>

                <button
                    className="w-full py-4 rounded-xl text-lg font-semibold text-white 
          bg-blue-600 hover:bg-blue-700 transition shadow-md"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
}

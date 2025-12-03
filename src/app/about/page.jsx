export default function AboutPage() {
    return (
        <section className="pt-32 px-6 max-w-5xl mx-auto">

            {/* HEADER */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
                <h1 className="text-4xl font-bold text-blue-700">
                    About StudentMS
                </h1>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                    StudentMS is a modern and intuitive web application designed to simplify and
                    streamline student information management. Built using Next.js and Tailwind CSS,
                    the platform focuses on speed, responsiveness, and user-friendly interaction.
                    Our goal is to empower academic institutions with a reliable dashboard that offers
                    quick access to student records, academic performance, and department data.
                </p>
            </div>

            {/* MISSION & VISION */}
            <div className="mt-12 grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        Our Mission
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        To create a seamless digital ecosystem for institutions where managing student
                        data becomes effortless, structured, and insightful. We aim to deliver tools
                        that enhance academic decision-making and improve workflow productivity.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-semibold text-blue-600">
                        Our Vision
                    </h2>
                    <p className="mt-3 text-gray-700 leading-relaxed">
                        To evolve StudentMS into a fully scalable academic assistant powered by AI —
                        enabling analytics, personalized insights, and automated reporting for institutions
                        of all sizes.
                    </p>
                </div>
            </div>

            {/* TECHNOLOGY STACK */}
            <div className="mt-12 bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
                <h2 className="text-3xl font-bold text-blue-700">
                    Technology Stack
                </h2>

                <div className="mt-6 grid sm:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-gray-100 rounded-xl shadow">
                        <h3 className="text-xl font-bold">Next.js</h3>
                        <p className="text-gray-600 mt-2">
                            App Router, Dynamic Routing, SSR
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-xl shadow">
                        <h3 className="text-xl font-bold">Tailwind CSS</h3>
                        <p className="text-gray-600 mt-2">
                            Utility-first responsive design
                        </p>
                    </div>

                    <div className="p-6 bg-gray-100 rounded-xl shadow">
                        <h3 className="text-xl font-bold">JavaScript / TypeScript</h3>
                        <p className="text-gray-600 mt-2">
                            Scalable and modern development
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

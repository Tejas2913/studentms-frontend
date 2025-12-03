export default function Home() {
  return (
    <section className="pt-32 text-center">

      {/* HERO SECTION */}
<div className="relative max-w-5xl mx-auto px-6">
  
  {/* Gradient background blob (decorative) */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 to-blue-50 
                  blur-2xl opacity-60 rounded-3xl"></div>

  <div className="bg-white shadow-2xl rounded-[2rem] p-14 border border-gray-200 
                  hover:shadow-3xl transition-all duration-500">

    <h1 className="text-6xl font-extrabold text-blue-700 drop-shadow-md leading-tight">
      Student Management <br /> System
    </h1>

    <p className="mt-5 text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
      A clean, modern, and responsive platform to manage students, grades, and departments — 
      built with speed, simplicity, and usability in mind.
    </p>

    {/* Highlight strip */}
    <div className="mt-6 inline-block bg-blue-50 px-6 py-2 rounded-full text-blue-700 
                    font-semibold shadow-sm border border-blue-100">
      Modern • Fast • User-Friendly
    </div>

    <button className="mt-8 px-12 py-4 text-xl bg-blue-600 text-white rounded-2xl 
                       hover:bg-blue-700 transition shadow-lg hover:shadow-2xl">
      Get Started →
    </button>
  </div>
</div>


      {/* HIGHLIGHTS */}
      <div className="mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 px-6 gap-8">
        {[
          { count: "1200+", label: "Students Managed" },
          { count: "25+", label: "Departments" },
          { count: "98%", label: "User Satisfaction" },
        ].map((stat) => (
          <div key={stat.label} className="p-4">
            <h2 className="text-4xl font-extrabold text-blue-700">{stat.count}</h2>
            <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      
      <div className="mt-10 border-t border-gray-300 w-3/4 mx-auto"></div>

      

      {/* FEATURES SECTION */}
      <div className="mt-20 max-w-6xl mx-auto px-6 text-left">
        <h2 className="text-3xl font-bold text-blue-700 mb-10 text-center">
          What You Can Do With StudentMS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { title: "📚 Student Records", desc: "Manage and organize all student details easily." },
            { title: "🏆 Grades & Performance", desc: "Track academic performance semester-wise." },
            { title: "🏫 Departments", desc: "Administrate and categorize departments." },
            { title: "🔍 Powerful Search", desc: "Find students instantly using filters & keywords." },
            { title: "📊 Analytics Ready", desc: "Extendable for insights, graphs, and reporting." },
            { title: "⚡ Fast Interface", desc: "Optimized for speed using Next.js." },
          ].map((card) => (
            <div key={card.title} className="flex gap-4">
              <div className="text-4xl">{card.title.split(" ")[0]}</div>
              <div>
                <h3 className="text-xl font-semibold">{card.title.replace(/^[^\s]+/, "")}</h3>
                <p className="text-gray-600 mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-24 max-w-5xl mx-auto bg-white border border-gray-200 shadow-md rounded-3xl p-12 text-left">
        <h2 className="text-3xl font-bold text-blue-700">Why Choose StudentMS?</h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          StudentMS provides a simple and efficient way to manage the academic ecosystem. 
          Whether it's tracking grades, organizing departments, or maintaining student records, 
          the platform is designed for ease of use and scalability.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700 text-lg">
          <li>✔ Clean & modern UI for better usability.</li>
          <li>✔ Perfect for schools, colleges, and coaching institutes.</li>
          <li>✔ Built using reliable technologies like Next.js.</li>
          <li>✔ Fully responsive design for mobile and desktop users.</li>
        </ul>
      </div>

      {/* CALL TO ACTION */}
      <div className="mt-20 mb-16 bg-blue-600 text-white py-14 px-6 rounded-3xl shadow-xl max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold">Get Started with StudentMS</h2>
        <p className="mt-4 text-lg opacity-90">
          Take your student management experience to the next level.
        </p>
        <button className="mt-6 px-8 py-3 text-lg bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-200 transition shadow-lg">
          Explore Now →
        </button>
      </div>
    </section>
  );
}

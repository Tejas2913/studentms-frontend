export default function Footer() {
    return (
        <footer className="mt-20 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo + Description */}
                <div>
                    <h2 className="text-2xl font-extrabold text-blue-700">
                        StudentMS
                    </h2>
                    <p className="text-gray-600 mt-3">
                        A clean and modern student management platform built with Next.js & Tailwind.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Quick Links
                    </h3>
                    <ul className="space-y-2">
                        {["Home", "Students", "About", "Contact"].map((link) => (
                            <li key={link}>
                                <a
                                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                                    className="text-gray-600 hover:text-blue-600 transition"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Contact
                    </h3>
                    <p className="text-gray-600">Email: support@studentms.com</p>
                    <p className="text-gray-600">Phone: +91 98765 43210</p>
                    <p className="text-gray-600 mt-2">Bangalore, India</p>
                </div>

                {/* Social */}
                <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                        Follow Us
                    </h3>
                    <div className="flex space-x-4 text-2xl">
                        <a className="hover:text-blue-600 transition">🌐</a>
                        <a className="hover:text-blue-600 transition">📘</a>
                        <a className="hover:text-blue-600 transition">🐦</a>
                        <a className="hover:text-blue-600 transition">📸</a>
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-200 text-center py-4 text-gray-600 text-sm">
                © {new Date().getFullYear()} StudentMS. All rights reserved.
            </div>
        </footer>
    );
}

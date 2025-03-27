import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
    return (
        <div className="bg-white text-gray-800 min-h-screen font-sans">
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-b from-blue-100 to-white">
                <motion.img
                    src="/profile.jpg"
                    alt="Keerthana Pyata"
                    className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                />
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    Keerthana Pyata
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-xl md:text-2xl italic"
                >
                    Turning data into insight, and code into impact.
                </motion.p>
                <motion.div
                    className="mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                >
                    <a href="#projects" className="bg-blue-600 text-white px-4 py-2 rounded-full mx-2 hover:bg-blue-700">View Projects</a>
                    <a href="/resume.pdf" download className="border border-blue-600 text-blue-600 px-4 py-2 rounded-full mx-2 hover:bg-blue-100">Download Resume</a>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 px-6 max-w-4xl mx-auto">
                <h2 className="text-3xl font-semibold mb-4">Behind the Code</h2>
                <p className="text-lg leading-relaxed">
                    I'm a results-driven software engineer with hands-on experience in full-stack development, data analytics, and cloud computing. With a Master's degree in Computer Science from The University of Texas at Arlington, I specialize in building scalable applications, designing real-time data pipelines, and automating cloud-native deployments.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Proficient in Java, Python, SQL, and modern web technologies, I thrive on solving complex problems and delivering efficient, high-quality solutions.
                </p>
            </section>

            {/* Projects Section */}
            <section id="projects" className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">Social Distance Monitoring App</h3>
                            <p className="text-gray-700 mb-2 italic">Kivy, PyBluez, NumPy</p>
                            <p>Built a real-time tracker for user distance monitoring with PyBluez and integrated CI/CD pipelines for seamless deployment.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">Mercado Escolar</h3>
                            <p className="text-gray-700 mb-2 italic">HTML, CSS, MySQL, JavaScript, NodeJS, React, Laravel, PHP</p>
                            <p>Developed a marketplace for students/faculty to buy/sell securely and boosted user engagement by 30% with UI/UX enhancements.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md">
                            <h3 className="text-xl font-bold mb-2">Stock Market Trend Forecasting</h3>
                            <p className="text-gray-700 mb-2 italic">Apache Spark, PySpark, Google Cloud Dataproc</p>
                            <p>Implemented ARIMA and LSTM models for stock prediction, improving data pipeline efficiency by 30% and accuracy by 14%.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 px-6 max-w-5xl mx-auto">
                <h2 className="text-3xl font-semibold mb-8 text-center">Skills</h2>
                <div className="grid md:grid-cols-2 gap-8 text-lg">
                    <div>
                        <h3 className="font-bold mb-2">Languages & Frameworks</h3>
                        <p>Java, Python, SQL, JavaScript, Spring, Node.js, AngularJS, Hibernate, Shell Scripting</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Cloud & DevOps</h3>
                        <p>AWS, Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, Helm</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Data & Tools</h3>
                        <p>PySpark, Kafka, Oracle, SQL Server, PostgreSQL, MongoDB, Apache Airflow, Sqoop, PowerBI, Tableau</p>
                    </div>
                    <div>
                        <h3 className="font-bold mb-2">Software & Platforms</h3>
                        <p>Adobe Campaign, Visual Studio, Android Studio, MATLAB, REST/SOAP APIs, Linux/Unix</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-16 px-6">
                <div className="max-w-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
                    <p className="text-lg mb-6">
                        Whether you want to collaborate, have a question, or just want to say hello—I'd love to hear from you!
                    </p>
                    <a
                        href="mailto:keerthanapyata23@gmail.com"
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-6 rounded-full transition"
                    >
                        Say Hello
                    </a>
                </div>
            </section>
        </div>
    );
}

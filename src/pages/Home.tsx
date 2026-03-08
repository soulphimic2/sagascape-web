import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-norse-paper">
            {/* Navigation */}
            <nav className="bg-norse-dark text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-2xl font-serif font-bold">
                        Saga<span className="text-norse-gold">Scape</span>
                    </h1>
                    <Link
                        to="/reader"
                        className="bg-norse-gold text-norse-dark px-4 py-2 rounded hover:bg-opacity-90 transition"
                    >
                        Start Reading
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-5xl font-serif font-bold mb-6">
                    Explore the <span className="text-norse-gold">Old Norse</span> Sagas
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Read ancient texts from the Viking Age with interactive word definitions.
                    Click any word to see its meaning.
                </p>
                <Link
                    to="/reader"
                    className="inline-block bg-norse-gold text-norse-dark px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition"
                >
                    Begin Your Journey →
                </Link>
            </div>

            {/* Features */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Original Texts", desc: "Read the Poetic Edda in Old Norse" },
                        { title: "Click Any Word", desc: "Instant definitions as you read" },
                        { title: "Responsive Design", desc: "Study on any device" }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
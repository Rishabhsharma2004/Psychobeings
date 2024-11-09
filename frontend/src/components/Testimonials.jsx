import React from 'react';
import TCard from './TCard';

const Testimonials = () => {
    return (
        <section className="bg-gray-100 py-12 sm:py-16 px-4">
            <div className="container mx-auto max-w-screen-xl text-center">
                <h1 className="text-primary-600 font-bold text-2xl sm:text-3xl md:text-5xl mb-4">Don't take our word for it</h1>
                <h2 className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12">Hear from those who trust us</h2>
            </div>
            
            <div className="container mx-auto max-w-screen-xl space-y-8 sm:space-y-10">
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="w-full">
                        <TCard content="This is a sample testimonial just to see how everything looks on the actual site and nothing else. I just want to see how things are moving around." />
                    </div>
                    <div className="w-full">
                        <TCard content="The support and guidance I received have been incredible. Psychobeings truly cares about mental well-being, and I felt that in every session I attended." />
                    </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="w-full">
                        <TCard content="I've found a safe space at Psychobeings. Every session helps me to understand myself better, and I am beyond grateful for this experience." />
                    </div>
                    <div className="w-full">
                        <TCard content="Psychobeings has changed my outlook. They genuinely care about each individual, and that compassion shines through in their approach and support." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

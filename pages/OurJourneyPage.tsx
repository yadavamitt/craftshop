import React from 'react';
import type { TeamMember, TimelineEvent } from '../types';
import { TEAM_MEMBERS, TIMELINE_EVENTS } from '../constants';

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* <!-- Icon --> */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-brand-accent bg-brand-light shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            {/* <!-- Card --> */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-lg shadow-md border">
                <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-brand-dark">{event.title}</div>
                    <time className="font-caveat font-medium text-brand-accent">{event.date}</time>
                </div>
                <div className="text-gray-600">{event.description}</div>
            </div>
        </div>
    );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <img src={member.imageUrl} alt={member.name} className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-4" />
        <h3 className="font-semibold text-lg text-brand-dark">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.role}</p>
    </div>
);


const OurJourneyPage: React.FC = () => {
    return (
        <div>
            <div className="relative bg-brand-light py-20 md:py-32">
                 <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://placehold.co/1920x1080/FFF7F0/3A3A3A?text=Craftshop+Workspace')` }}></div>
                <div className="container mx-auto px-6 text-center relative">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-dark">Our Journey</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-gray-700">From a hostel room dream to a community-driven brand. Pre-order the Ultimate Unwinding Kit and be part of our next chapter.</p>
                </div>
            </div>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl font-bold">How It All Started</h2>
                        <p className="mt-2 text-gray-600">A timeline of our passion, perseverance, and progress.</p>
                    </div>
                    <div className="relative">
                        {/* <!-- Vertical Line --> */}
                        <div className="absolute left-5 md:left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div>
                        <div className="space-y-12">
                            {TIMELINE_EVENTS.map((event, index) => (
                                <TimelineItem key={index} event={event} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-full md:w-1/3">
                            <img src="https://placehold.co/500x600/FFF7F0/3A3A3A?text=Mitali+Sharma" alt="Mitali Sharma, Founder" className="rounded-lg shadow-xl w-full" />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h2 className="font-serif text-4xl font-bold">Meet the Founder</h2>
                            <h3 className="text-2xl text-brand-accent mt-2">Mitali Sharma</h3>
                            <p className="mt-4 text-gray-700 leading-relaxed">
                                Mitali, a final-year MBBS student and content creator, is the heart behind craftshop. Fueled by her passion for a 'holistic hustle', she blends self-care with productivity. Mitali's vision is to build a community that values authentic, thoughtfully-created products that genuinely make a difference in people's lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl font-bold">Meet the Team</h2>
                        <p className="mt-2 text-gray-600">The passionate individuals who bring craftshop to life.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {TEAM_MEMBERS.map(member => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurJourneyPage;
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  const benefits = [
    '100% Open Source',
    'No vendor lock-in',
    'Setup in under 10 minutes',
    'Community-driven development'
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Ready to Try Open Source Infrastructure Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join the growing community of teams using OpsiMate's open source platform. 
              Deploy, customize, and contribute to the future of infrastructure management.
            </p>
            
            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg">
                Get Started Now
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 text-lg">
                View on GitHub
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Dashboard Preview Placeholder */}
              <div className="aspect-video bg-white/5 rounded-lg border border-white/20 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="bg-white/20 p-4 rounded-full inline-block mb-4">
                    <div className="w-8 h-8 bg-white/30 rounded animate-pulse"></div>
                  </div>
                  <p className="text-white/80 font-medium">
                    Dashboard Preview
                  </p>
                  <p className="text-sm text-white/60 mt-2">
                    Upload screenshot of your dashboard here
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">10K+</div>
                  <div className="text-sm text-white/80">Services Monitored</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">500+</div>
                  <div className="text-sm text-white/80">Happy Teams</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-white/80">Uptime</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-green-400 text-green-900 rounded-lg shadow-lg p-3 font-medium text-sm">
              ✓ Trusted by Enterprise
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 rounded-lg shadow-lg p-3 font-medium text-sm">
              🚀 Quick Setup
            </div>
          </div>
        </div>

        {/* Bottom Section - Social Proof */}
        <div className="mt-16 pt-12 border-t border-white/20 text-center">
          <p className="text-blue-200 mb-8">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Placeholder for company logos */}
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white/20 h-12 w-32 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

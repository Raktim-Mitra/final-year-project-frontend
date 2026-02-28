import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#ECEEDF] border-t border-[#D9C4B0]/30 mt-24">
      <div className="container mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Modu<span className="text-[#8fbbc7]">Learn</span>
            </h2>
            <p className="text-gray-600 max-w-sm">
              Transform your syllabus into smart learning modules using AI-powered academic structuring.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'How it Works'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-[#8fbbc7] transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Kolkata</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">modulearn.ai@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#D9C4B0]/30 mt-8 pt-6 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} ModuLearn. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
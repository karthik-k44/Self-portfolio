import { Download, FileText, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import karthik from "./Assets/karthik-image.png"
import { openAndDownloadResume } from '../constants/resume';

const Home = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center py-20">
          {/* Profile Image */}
          <div className="mb-12">
            <img
              src={karthik}
              alt="Profile"
              className="rounded-full w-90 h-80 md:w-100 md:h-80 object-cover shadow-lg ring-4 ring-gray-200 dark:ring-gray-700 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Name and Role */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Karthik </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Full Stack Developer
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Passionate about creating beautiful and functional web applications
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/karthik-k44"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <GitHub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-k-7340342aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:your.karthikkarunakaran444@gmail.com"
              className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors hover:scale-110 transform duration-200"
            >
              <Mail size={28} />
            </a>
          </div>

          {/* Resume Card */}
          <div className="w-full max-w-3xl mt-14">
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    <FileText size={16} />
                    Resume
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    View My Professional Profile
                  </h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Open the PDF in a new tab and download it in one click.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={openAndDownloadResume}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium"
                  >
                    <Download size={18} />
                     Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

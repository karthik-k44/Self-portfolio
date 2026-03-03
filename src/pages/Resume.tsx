import { Download, FileText } from 'lucide-react';
import { openAndDownloadResume } from '../constants/resume';

const Resume = () => {
  return (
    <div className="py-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
            <section className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl p-6 md:p-8 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    <FileText size={16} />
                    Resume
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                    Karthik K
                  </h1>
                  <p className="mt-3 text-gray-600 dark:text-gray-300">
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
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Resume;

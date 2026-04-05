export const resumeConfig = {
  url: '/Karthik-CV.pdf',
  fileName: 'Karthik-CV.pdf',
};

export const openAndDownloadResume = () => {
  if (typeof window === 'undefined') {
    return;
  }

  window.open(resumeConfig.url, '_blank', 'noopener,noreferrer');

  const downloadLink = document.createElement('a');
  downloadLink.href = resumeConfig.url;
  downloadLink.download = resumeConfig.fileName;
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
};

export default function ResumePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-900 text-white px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Resume</h1>
  
          <p className="text-gray-400 mb-8">
            Download my resume below.
          </p>
  
          <a
  href="/Luciano_Paoletta_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition transform hover:scale-105 cursor-pointer inline-block"
>
  Open PDF
</a>
        </div>
      </main>
    );
  }
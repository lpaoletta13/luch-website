export default function ContactPage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-blue-900 text-white px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Contact</h1>
  
          <p className="text-gray-400 mb-8">
            Feel free to reach out.
          </p>
  
          <div className="space-y-4 text-lg">
            <p>
              Email: <a href="mailto:lucianopaoletta13@gmail.com" className="text-blue-400 hover:underline">
                lucianopaoletta13@gmail.com
              </a>
            </p>
  
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/luciano-paoletta-a39968243" target="_blank" className="text-blue-400 hover:underline">
              linkedin.com/in/luciano-paoletta-a39968243
              </a>
            </p>
  
            
          </div>
        </div>
      </main>
    );
  }
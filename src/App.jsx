export default function BrianPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-100">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-3xl font-bold text-cyan-400 neon">
          Brian | Security & Cloud
        </h1>
        <div className="flex gap-4">
          <a href="https://github.com/briadvic" target="_blank" rel="noopener noreferrer" className="neon">GitHub</a>
          <a href="https://linkedin.com/in/briadvic" target="_blank" rel="noopener noreferrer" className="neon">LinkedIn</a>
          <a href="mailto:brian.koske@example.com" className="neon">Email</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold text-cyan-300 mb-4 neon">
          Securing the Cloud, Building the Future
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          I’m Brian, an Information Systems Auditor passionate about <span className="text-cyan-400">Cybersecurity</span>, <span className="text-blue-400">Cloud Computing</span>, and <span className="text-cyan-300">AI-driven security</span>. I combine audit skills with hands-on security practice to safeguard digital systems.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/Brian_CV.pdf" download className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-6 py-2 btn-neon">Download CV</a>
          <a href="mailto:brian.koske@example.com" className="bg-gray-700 hover:bg-gray-600 text-white rounded-2xl px-6 py-2 btn-neon">Hire Me</a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6 neon">About Me</h3>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1 flex justify-center">
            <img
              src="/brian-photo.jpg"
              alt="Brian Kibet"
              className="w-48 h-48 rounded-full object-cover border-2 border-gray-700 neon"
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/vite.svg'; }}
            />
          </div>
          <div className="md:col-span-2 text-gray-300">
            <p className="leading-relaxed">
              Hi — I'm Brian. I focus on information security, cloud architecture, and audit-driven compliance. I combine auditing experience with hands-on cloud security practices to help teams reduce risk and scale securely.
            </p>
            <p className="mt-4 text-gray-400">
              To update the photo, place your actual headshot in the project's `public/` folder and name it <code>brian-photo.jpg</code>. The site will automatically use that image on the about section.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="grid md:grid-cols-2 gap-6 px-8 py-16">
        <div className="glass flex flex-col items-center p-6">
          <div className="text-cyan-400 text-4xl mb-4 neon">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
          <p className="text-gray-400">I help organizations uncover vulnerabilities before attackers do, using ethical hacking and automated tools.</p>
        </div>
        <div className="glass flex flex-col items-center p-6">
          <div className="text-blue-400 text-4xl mb-4 neon">☁️</div>
          <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
          <p className="text-gray-400">From AWS to Azure, I design secure cloud architectures with identity, compliance, and monitoring in mind.</p>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 neon">Highlighted Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass p-6">
            <h4 className="font-semibold text-lg mb-2">Pentester AI</h4>
            <p className="text-gray-400">An AI-driven assistant for penetration testing workflows, built on LLMs and local lab environments.</p>
          </div>
          <div className="glass p-6">
            <h4 className="font-semibold text-lg mb-2">Cloud Compliance Toolkit</h4>
            <p className="text-gray-400">Automating compliance checks across Microsoft Purview, AWS Security Hub, and Azure Policy.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 border-t border-gray-800 text-center text-gray-500">
        © {new Date().getFullYear()} Brian | Securing the Cloud
      </footer>
    </div>
  );
}

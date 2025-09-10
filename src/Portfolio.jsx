import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Shield, Cloud, FileDown, MapPin, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-gray-100">
      <header className="sticky top-0 z-40 p-6 bg-black/40 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold text-cyan-400">
          Brian | Security & Cloud
        </motion.h1>
        <nav className="hidden md:flex items-center gap-6 text-gray-300">
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#skills" className="hover:text-cyan-300">Skills</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-300">Experience</a>
          <a href="#education" className="hover:text-cyan-300">Education</a>
          <a href="#certifications" className="hover:text-cyan-300">Certifications</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com/briadvic" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
          <a href="https://www.linkedin.com/in/brian-kibet-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href="mailto:briadrik@gmail.com" aria-label="Email"><Mail /></a>
        </div>
        </div>
      </header>

      <section className="text-center py-20 px-6">
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-4xl font-bold text-cyan-300 mb-4">
          Securing the Cloud, Building the Future
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          Internal Audit Assistant (ICT) specializing in IT audits, cybersecurity risk management, and fraud analytics within financial systems. I assess IT controls, identify risks, and apply data-driven techniques to enhance compliance and security.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="/Brian_CV.pdf" download className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-6 py-2 inline-flex items-center gap-2 btn-neon">
            <FileDown className="w-4 h-4" />
            <span>Download CV</span>
          </a>
          <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white rounded-2xl px-6 py-2 inline-flex items-center gap-2 btn-neon">
            <Mail className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.5fr] gap-8 items-center">
          <img src="/brian-photo.jpg" alt="Brian avatar" className="w-40 h-40 mx-auto md:mx-0 rounded-full ring-2 ring-cyan-500/40 object-cover" />
          <div>
            <h3 className="text-2xl font-bold text-cyan-300 mb-3">About Me</h3>
            <p className="text-gray-300 leading-relaxed">
              Beyond traditional audit, I bring a strong foundation in data analytics, AI applications, and cybersecurity intelligence — including an OCR prototype powered by large language models (LLMs) to securely extract data from confidential documents. I bridge governance and technology to deliver secure, compliant, and innovative business solutions.
            </p>
            <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-gray-400 text-sm">
              <li>• ISO 27001 | NIST CSF | SOC 2</li>
              <li>• Azure | AWS | Microsoft Purview</li>
              <li>• Threat modeling | Pentesting basics</li>
              <li>• SIEM + Automation with AI</li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" /> Nairobi, Kenya</span>
              <a href="tel:+254719342725" className="inline-flex items-center gap-1 hover:text-cyan-300"><Phone className="w-4 h-4" /> +254 719 342 725</a>
              <a href="mailto:briadrik@gmail.com" className="inline-flex items-center gap-1 hover:text-cyan-300"><Mail className="w-4 h-4" /> briadrik@gmail.com</a>
              <a href="https://www.linkedin.com/in/brian-kibet-" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-cyan-300"><Linkedin className="w-4 h-4" /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 md:px-12 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8 text-center">Skills</h3>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            'ITGC / SDLC Audits', 'Cybersecurity Audits', 'Risk & Governance', 'GDPR / KDPA',
            'Azure Security', 'AWS Security', 'Identity & Access', 'Network Segmentation',
            'SQL / Power BI / ACL', 'Fraud Analytics', 'Python (basics)', 'Purview / DLP / Insider Risk',
          ].map((skill) => (
            <div key={skill} className="rounded-full border border-cyan-500/30 text-cyan-200/90 bg-cyan-500/5 px-4 py-2 text-sm text-center">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 px-8 py-16">
        <div className="glass bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-lg rounded-2xl p-6">
          <Shield className="text-cyan-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Penetration Testing</h3>
          <p className="text-gray-400">I help organizations uncover vulnerabilities before attackers do, using ethical hacking and automated tools.</p>
        </div>

        <div className="glass bg-gray-800/60 backdrop-blur-md border border-gray-700 shadow-lg rounded-2xl p-6">
          <Cloud className="text-blue-400 w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Cloud Security</h3>
          <p className="text-gray-400">From AWS to Azure, I design secure cloud architectures with identity, compliance, and monitoring in mind.</p>
        </div>
      </section>

      <section id="projects" className="px-6 md:px-12 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8">Highlighted Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=1200&auto=format&fit=crop" alt="Pentester AI" className="w-full h-40 object-cover bg-slate-900/60 border-b border-gray-700" />
            <div className="p-6">
            <h4 className="font-semibold text-lg mb-2">Pentester AI</h4>
            <p className="text-gray-400">An AI-driven assistant for penetration testing workflows, built on LLMs and local lab environments.</p>
            <div className="mt-4 flex gap-3 text-xs text-gray-400">
              <span className="px-2 py-1 rounded border border-gray-700">LLMs</span>
              <span className="px-2 py-1 rounded border border-gray-700">Automation</span>
              <span className="px-2 py-1 rounded border border-gray-700">Pentest</span>
            </div>
            </div>
          </div>

          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop" alt="Cloud Compliance Toolkit" className="w-full h-40 object-cover bg-slate-900/60 border-b border-gray-700" />
            <div className="p-6">
            <h4 className="font-semibold text-lg mb-2">Cloud Compliance Toolkit</h4>
            <p className="text-gray-400">Automating compliance checks across Microsoft Purview, AWS Security Hub, and Azure Policy.</p>
            <div className="mt-4 flex gap-3 text-xs text-gray-400">
              <span className="px-2 py-1 rounded border border-gray-700">Azure</span>
              <span className="px-2 py-1 rounded border border-gray-700">AWS</span>
              <span className="px-2 py-1 rounded border border-gray-700">Policy-as-code</span>
            </div>
            </div>
          </div>
          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" alt="OCR with LLMs" className="w-full h-40 object-cover bg-slate-900/60 border-b border-gray-700" />
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">OCR Tool (LLMs)</h4>
              <p className="text-gray-400">Prototype that securely extracts sensitive data from documents using large language models.</p>
              <div className="mt-4 flex gap-3 text-xs text-gray-400">
                <span className="px-2 py-1 rounded border border-gray-700">LLMs</span>
                <span className="px-2 py-1 rounded border border-gray-700">OCR</span>
                <span className="px-2 py-1 rounded border border-gray-700">Security</span>
              </div>
            </div>
          </div>

          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" alt="Superset Dashboards" className="w-full h-40 object-cover bg-slate-900/60 border-b border-gray-700" />
            <div className="p-6">
              <h4 className="font-semibold text-lg mb-2">Apache Superset Dashboards</h4>
              <p className="text-gray-400">Interactive dashboards to visualize risk exposure and performance for subsidiaries.</p>
              <div className="mt-4 flex gap-3 text-xs text-gray-400">
                <span className="px-2 py-1 rounded border border-gray-700">BI</span>
                <span className="px-2 py-1 rounded border border-gray-700">SQL</span>
                <span className="px-2 py-1 rounded border border-gray-700">Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="px-6 md:px-12 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-8">Experience</h3>
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <div className="flex flex-wrap justify-between gap-3">
              <h4 className="font-semibold">Platcorp Holdings – Internal Audit Assistant (ICT)</h4>
              <span className="text-gray-400">Feb 2025 – Present</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              <li>Planned and executed IT audits across subsidiaries, aligning with policies, cybersecurity measures, and regulation.</li>
              <li>Implemented analytics-driven audits using SQL, Power BI, and Excel to detect anomalies and potential fraud.</li>
              <li>Assessed IT General Controls and reported findings to management.</li>
              <li>Collaborated with IT to strengthen security controls for loan processing, USSD, and digital lending platforms.</li>
              <li>Prepared detailed audit reports and recommendations for executive and board-level review.</li>
            </ul>
          </div>

          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <div className="flex flex-wrap justify-between gap-3">
              <h4 className="font-semibold">Platcorp Holdings – Internal Audit / Risk Intern</h4>
              <span className="text-gray-400">Jun 2024 – Feb 2025</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              <li>Supported audits across finance and ICT, testing controls in Revenue, Payroll, Expenditures, Inventory, and IT.</li>
              <li>Performed compliance reviews across subsidiaries, improving audit coverage and reducing control weaknesses.</li>
              <li>Assisted in planning, fieldwork, and reporting with actionable recommendations.</li>
            </ul>
          </div>

          <div className="glass bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
            <div className="flex flex-wrap justify-between gap-3">
              <h4 className="font-semibold">Teach For Kenya – Fellow (EdTech & Leadership)</h4>
              <span className="text-gray-400">Nov 2023 – May 2024</span>
            </div>
            <ul className="mt-3 list-disc pl-5 text-gray-300 space-y-1">
              <li>Designed and implemented teaching and EdTech strategies that improved engagement and performance.</li>
              <li>Used data-driven assessment tools and collaborated with schools and communities.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="px-6 md:px-12 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-4">Education</h3>
        <div className="max-w-5xl mx-auto glass bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
          <div className="flex flex-wrap justify-between gap-3">
            <h4 className="font-semibold">BSc in Business Information Technology</h4>
            <span className="text-gray-400">Graduated 2023</span>
          </div>
          <p className="text-gray-300">Dedan Kimathi University of Technology – Second Class Upper Division</p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="px-6 md:px-12 py-16">
        <h3 className="text-2xl font-bold text-cyan-300 mb-6">Certifications</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {[
            'Cyber Shujaa Program – SC-900, SC-401, GDPR, KDPA, DLP, Insider Risk, eDiscovery, AI Governance (12 weeks)',
            'Microsoft – Security, Compliance, and Identity Fundamentals (SC-900)',
            'Microsoft – Information Protection and Compliance Administrator (SC-400)',
            'Cisco – Introduction to Cybersecurity | IoT | Packet Tracer',
          ].map((cert) => (
            <div key={cert} className="glass bg-gray-800/60 border border-gray-700 rounded-2xl p-4 text-gray-300">
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 md:px-12 py-16">
        <div className="max-w-3xl mx-auto glass bg-gray-800/60 border border-gray-700 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-cyan-300 mb-4">Contact</h3>
          <p className="text-gray-300">Open to security roles, audits, or consulting. Let’s talk.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="mailto:briadrik@gmail.com" className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-2xl px-4 py-2 inline-flex items-center gap-2 btn-neon">
              <Mail className="w-4 h-4" /> briadrik@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/brian-kibet-" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 text-white rounded-2xl px-4 py-2 inline-flex items-center gap-2 btn-neon">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href="https://github.com/briadvic" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-4 py-2 inline-flex items-center gap-2 border border-gray-700">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="tel:+254719342725" className="bg-gray-800 hover:bg-gray-700 text-white rounded-2xl px-4 py-2 inline-flex items-center gap-2 border border-gray-700">
              <Phone className="w-4 h-4" /> +254 719 342 725
            </a>
          </div>
        </div>
      </section>

      <footer className="p-6 border-t border-gray-800 text-center text-gray-500">
        © {new Date().getFullYear()} Brian | Securing the Cloud
      </footer>
    </div>
  );
}



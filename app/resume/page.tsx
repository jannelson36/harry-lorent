'use client';

import { personalInfo, experiences, education, skills, certifications, references } from '@/data/portfolio-data';

export default function ResumePage() {
  const groupedSkills = skills.reduce((acc, s) => {
    acc[s.category] = acc[s.category] || [];
    acc[s.category].push(s.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <main className="min-h-screen bg-white text-gray-900 print:bg-white print:text-black">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold">{personalInfo.name}</h1>
            <p className="text-gray-700">{personalInfo.title}</p>
          </div>
          <button onClick={() => window.print()} className="no-print inline-block bg-gray-900 text-white rounded-md px-4 py-2 text-sm hover:bg-gray-800">Print / Save as PDF</button>
        </div>

        <div className="mt-4 text-sm text-gray-700">
          <p>
            <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a> · <a href={`tel:${personalInfo.phone}`} className="underline">{personalInfo.phone}</a> · {personalInfo.address}
          </p>
        </div>

        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Summary</h2>
          <p className="mt-2 text-sm leading-relaxed">
            Dynamic entrepreneur and customer experience specialist combining data analysis, coaching, and operational rigor to drive measurable improvements in CSAT, efficiency, and first-contact resolution. Known for clear communication and building enablement programs that raise team performance.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Experience</h2>
          <div className="mt-3 space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="break-inside-avoid">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-semibold text-sm">{exp.title} · <span className="text-gray-700">{exp.company}</span></h3>
                  <span className="text-xs text-gray-600">{exp.duration}</span>
                </div>
                {exp.technologies && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-gray-100 text-gray-700">{t}</span>
                    ))}
                  </div>
                )}
                <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
                  {exp.achievements.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Education</h2>
          <div className="mt-3 space-y-2 text-sm">
            {education.map((edu) => (
              <div key={edu.id} className="flex items-baseline justify-between">
                <div>
                  <span className="font-semibold">{edu.degree}</span> · <span className="text-gray-700">{edu.institution}</span>
                </div>
                <span className="text-xs text-gray-600">{edu.duration}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Skills</h2>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {Object.entries(groupedSkills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold capitalize">{category}</h3>
                <p className="mt-1 text-gray-800">{items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        {certifications.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-bold border-b pb-1">Certifications</h2>
            <ul className="mt-3 text-sm list-disc list-inside">
              {certifications.map((c) => (
                <li key={c.name}><span className="font-medium">{c.name}</span>{c.issuer ? ` · ${c.issuer}` : ''}</li>
              ))}
            </ul>
          </section>
        )}

        {references.length > 0 && (
          <section className="mt-6">
            <h2 className="text-lg font-bold border-b pb-1">References</h2>
            <ul className="mt-3 text-sm">
              {references.map((r) => (
                <li key={r.name} className="mb-1">
                  <span className="font-medium">{r.name}</span> · {r.title}, {r.company} · <span className="text-gray-700">{r.contact}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-10 text-xs text-gray-500 no-print">Last updated {new Date().toLocaleDateString()}</div>
      </div>
    </main>
  );
}
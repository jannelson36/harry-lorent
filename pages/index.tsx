// pages/index.tsx
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const LINKEDIN = 'https://www.linkedin.com/in/harry-lorent-8962a320a/';

const chapters = [
  {
    year: '2019',
    kicker: 'Chapter One',
    title: 'Learning to tell the story',
    role: 'Administrative & PR Assistant',
    company: 'CLYKAY Ultimate Water Experts',
    date: 'Oct 2019 – Jun 2021',
    story:
      'Fresh from a Marketing degree at Daystar University, I learned that every brand is a story waiting to be told well. I wrote the press releases, ran the social channels and stood behind product launches — learning how a single message can shape how people feel.',
    wins: ['Integrated PR & marketing strategy', 'Press releases, pitches & newsletters', 'Social campaigns & launch events'],
  },
  {
    year: '2021',
    kicker: 'Chapter Two',
    title: 'Becoming the voice on the line',
    role: 'Customer Service Representative',
    company: 'Majorel Kenya',
    date: 'Jun 2021 – Aug 2022',
    story:
      'Then I moved to the front line. Phone, email, chat — billing questions, broken products, frustrated people. I discovered that customer experience is storytelling in real time: every conversation either earns trust or loses it.',
    wins: ['Multichannel support', 'Orders, returns & billing resolution', 'Clean CRM records for follow-through'],
  },
  {
    year: '2022',
    kicker: 'Chapter Three',
    title: 'From one voice to a whole team',
    role: 'Operations Supervisor',
    company: 'Teleperformance Kenya',
    date: 'Sep 2022 – Oct 2024',
    story:
      'Leadership came next. I onboarded and coached agents, watched the metrics that matter and owned client relationships. My job shifted from solving problems to building people who solve them.',
    wins: ['Team supervision & daily coaching', 'Onboarding & training programs', 'QA, performance metrics & client reporting'],
  },
  {
    year: '2024',
    kicker: 'Chapter Four',
    title: 'Guarding the reputation',
    role: 'Reviews Management Specialist',
    company: 'TalentPop',
    date: 'Oct 2024 – Present',
    story:
      'Today I bring it all together — PR instincts, frontline empathy and operational discipline — to protect brands where customers speak loudest: their reviews. I respond, flag fraud, spot patterns and turn feedback into strategy.',
    wins: ['Google review analysis & response', 'Fraud & compliance screening', 'Feedback trends reported to leadership'],
  },
];

const toolkit = [
  'Team Leadership', 'Operations', 'Customer Success', 'Quality Assurance', 'Public Relations',
  'Content & Social', 'Data & Reporting', 'Zendesk', 'Salesforce', 'Gorgias', 'Shopify',
  'Review Tracker', 'BBB', 'Asana', 'Slack', 'Loom', 'HubStaff', 'Beehiiv', 'MS Office',
];

const Portfolio = () => {
  const { basePath } = useRouter();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Harry Lorent — Customer Experience & Operations Leader</title>
        <meta name="description" content="The story of Harry Lorent: from PR storyteller to customer experience and operations leader, based in Nairobi, Kenya." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Harry Lorent — Customer Experience & Operations Leader" />
        <meta property="og:image" content={`${basePath}/IMG_7163.jpeg`} />
        <meta name="theme-color" content="#0c0a09" />
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
      </Head>

      <main className="bg-stone-950 text-stone-200 antialiased selection:bg-amber-300 selection:text-stone-900">
        <nav className="fixed inset-x-0 top-0 z-50 backdrop-blur-md bg-stone-950/70 border-b border-white/5">
          <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between text-sm">
            <a href="#top" className="font-serif text-lg text-white">Harry Lorent</a>
            <div className="flex gap-6">
              <a href="#story" className="hover:text-amber-300 transition-colors">Story</a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">Contact</a>
            </div>
          </div>
        </nav>

        {/* Prologue */}
        <header id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-amber-500/20 blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-6 grid md:grid-cols-[1.4fr_1fr] gap-12 items-center pt-20">
            <div className="reveal">
              <p className="uppercase tracking-[0.3em] text-xs text-amber-300 mb-6">Prologue · Nairobi, Kenya</p>
              <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-white">
                Every customer has a story. <span className="italic text-amber-300">I make sure it ends well.</span>
              </h1>
              <p className="mt-8 text-lg text-stone-400 max-w-xl">
                I&apos;m Harry — a customer experience and operations leader who started out in public relations.
                This is how a storyteller became the person brands trust with their reputation.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#story" className="rounded-full bg-amber-300 text-stone-900 px-7 py-3 font-semibold hover:bg-amber-200 transition">Read the story ↓</a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-7 py-3 hover:border-amber-300 hover:text-amber-300 transition">LinkedIn</a>
              </div>
            </div>
            <div className="reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${basePath}/IMG_7163.jpeg`} alt="Portrait of Harry Lorent" className="mx-auto aspect-square w-full max-w-sm object-contain grayscale-[30%] drop-shadow-[0_25px_25px_rgba(0,0,0,0.3)]" />
            </div>
          </div>
        </header>

        {/* Chapters */}
        <section id="story" className="mx-auto max-w-5xl px-6 py-24">
          {chapters.map((c) => (
            <article key={c.year} className="reveal relative grid md:grid-cols-[10rem_1fr] gap-6 md:gap-12 py-16 border-t border-white/10">
              <div className="font-serif text-6xl md:text-7xl text-stone-800 md:sticky md:top-24 self-start">{c.year}</div>
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-amber-300">{c.kicker}</p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">{c.title}</h2>
                <p className="mt-2 text-sm text-stone-500">{c.role} · {c.company} · {c.date}</p>
                <p className="mt-6 text-lg leading-relaxed text-stone-300 max-w-2xl">{c.story}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.wins.map((w) => (
                    <li key={w} className="text-sm rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-1.5">{w}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* The toolkit */}
          <div className="reveal py-16 border-t border-white/10">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-300">Along the way</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">The toolkit I picked up</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {toolkit.map((t) => (
                <span key={t} className="rounded-full border border-white/10 px-4 py-1.5 text-sm hover:border-amber-300 hover:text-amber-300 transition">{t}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Epilogue */}
        <section id="contact" className="border-t border-white/10">
          <div className="reveal mx-auto max-w-3xl px-6 py-28 text-center">
            <p className="uppercase tracking-[0.3em] text-xs text-amber-300">Epilogue</p>
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-4">The next chapter could be yours.</h2>
            <p className="mt-6 text-lg text-stone-400">Looking for someone to lead your CX team, protect your reputation or build a support operation that customers love? Let&apos;s talk.</p>
            <a href="mailto:harrylorent@gmail.com" className="inline-block mt-10 rounded-full bg-amber-300 text-stone-900 px-8 py-4 font-semibold hover:bg-amber-200 transition">harrylorent@gmail.com</a>
            <div className="mt-8 flex justify-center gap-6 text-sm text-stone-400">
              <a href="tel:+254799946097" className="hover:text-amber-300">+254 799 946 097</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="hover:text-amber-300">LinkedIn</a>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
          <footer className="text-center text-xs text-stone-600 pb-10">© {new Date().getFullYear()} Harry Lorent</footer>
        </section>
      </main>
    </>
  );
};

export default Portfolio;

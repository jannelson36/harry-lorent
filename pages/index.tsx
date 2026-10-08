// pages/index.tsx
import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const LINKEDIN = 'https://www.linkedin.com/in/harry-lorent-8962a320a/';

const chapters = [
  {
    year: '2020',
    kicker: 'Chapter One',
    title: 'Building a foundation in business',
    role: 'Business Development Consultant · Intern',
    company: 'Kenya Power',
    date: 'May 2020 – Aug 2021',
    story:
      'My early experience at Kenya Power introduced me to business development and gave me a practical foundation for working with customers and organizations.',
    wins: ['Business development', 'Product marketing', 'Customer service management'],
  },
  {
    year: '2022',
    kicker: 'Chapter Two',
    title: 'Developing an eye for detail',
    role: 'Internal Auditor',
    company: 'Mijesh Construction LTD Company',
    date: 'Feb 2022 – Nov 2023',
    story:
      'Internal audit strengthened my attention to detail and analytical approach—skills I continue to bring to customer-facing and executive support work.',
    wins: ['Internal audits', 'Data analysis', 'Problem solving'],
  },
  {
    year: '2023',
    kicker: 'Chapter Three',
    title: 'Putting customers first',
    role: 'Customer Service Specialist',
    company: 'Teleperformance',
    date: 'Nov 2023 – Jul 2026',
    story:
      'At Teleperformance, I supported customers and built the service mindset I now bring to proactive executive support: listening carefully, following through, and anticipating what people need.',
    wins: ['Customer service', 'Customer education', 'Customer-first communication'],
  },
  {
    year: '2026',
    kicker: 'Chapter Four',
    title: 'Making the shift from response to foresight',
    role: 'Executive Assistant',
    company: 'Athena',
    date: 'Sep 2026 – Present',
    story:
      'I’m excited to support executives with the dedication, precision, and client-first mindset developed in customer service. I’ve moved from solving problems in the moment to managing priorities, anticipating needs, and creating the structure that lets leaders focus on what matters.',
    wins: ['Executive administrative assistance', 'Virtual assistance', 'Market research'],
  },
];

const toolkit = [
  'Executive Administrative Assistance', 'Virtual Assistance', 'Customer Service',
  'Market Research', 'Search Engine Optimization (SEO)', 'Product Marketing',
  'Customer Education', 'Data Analysis', 'Problem Solving',
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
        <title>Harry Lorent — Executive Assistant</title>
        <meta name="description" content="Harry Lorent is an Executive Assistant at Athena in Nairobi, Kenya, bringing a customer-first mindset and experience in customer service, business development, and internal audit." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Harry Lorent — Executive Assistant" />
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
                Great support is proactive. <span className="italic text-amber-300">I help make it happen.</span>
              </h1>
              <p className="mt-8 text-lg text-stone-400 max-w-xl">
                I&apos;m Harry, an Executive Assistant at Athena. I bring a client-first approach shaped by
                customer service, business development, and internal audit experience.
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
            <p className="uppercase tracking-[0.3em] text-xs text-amber-300">The foundation</p>
            <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">Education & skills</h2>
            <p className="mt-4 text-stone-400">Bachelor of Commerce (BCom), Marketing · Daystar University · 2017–2021</p>
            <p className="mt-3 text-stone-400">Problem Solving · 100th percentile, TestGorilla · May 2026</p>
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
            <h2 className="font-serif text-4xl md:text-6xl text-white mt-4">Let&apos;s make work run smoothly.</h2>
            <p className="mt-6 text-lg text-stone-400">For executive assistance, virtual support, market research, or customer service, let&apos;s connect.</p>
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

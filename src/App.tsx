import { useEffect, useState } from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { portfolio } from './data/portfolio';

const p = portfolio.personal;
const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <header className="topbar">
    <a className="wordmark" href="#home" aria-label="Amoghavarsha K A home">AMOGHAVARSHA<span>.</span></a>
    <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {navLinks.map(link => <a href={link.href} key={link.label} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
      <span className="nav-divider" />
      <a className="nav-social" href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
      {p.linkedin && <a className="nav-social" href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>}
    </nav>
  </header>;
}

function ProjectVisual({ visual }: { visual: string }) {
  return <div className={`project-visual visual-${visual}`} aria-hidden="true">
    <div className="visual-label"><span>PROJECT STUDY</span><span>AM / {visual === 'records' ? '02' : '01'}</span></div>
    {visual === 'records' ? <div className="record-composition"><div className="record-sheet"><span>HOSPITAL / INDEX</span><i /><i /><i /><i /><i /><b>DATABASE STUDY</b></div><span className="record-number">02</span></div> : <div className="signal-composition"><div className="signal-circle signal-one" /><div className="signal-circle signal-two" /><div className="signal-circle signal-three" /><div className="signal-center">MZ</div><span>ARDUINO · SENSOR STUDY</span></div>}
    <div className="visual-bottom"><span>{visual === 'records' ? 'INFORMATION SYSTEMS' : 'ROAD SAFETY'}</span><span>AMOGH / K A</span></div>
  </div>;
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="site-shell">
    <Header />
    <main id="home">
      <section className="hero page-wrap">
        <div className="hero-copy reveal">
          <div className="hero-overline"><span className="status-dot" /> <span className="section-no">01</span> / INTRO <span className="hero-role-label">COMPUTER SCIENCE &amp; ENGINEERING STUDENT</span></div>
          <h1>Amoghavarsha<br /><span>K A</span></h1>
          <div className="hero-bottom">
            <div className="hero-intro-wrap"><p>Building practical software, exploring intelligent systems, and turning ideas into working solutions.</p><a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={15} /></a></div>
            <div className="hero-meta"><span>Based in</span><b>Shivamogga, Karnataka</b><span>Currently</span><b>B.E. CSE · 3rd Year</b><span>CGPA</span><b>{p.cgpa}</b></div>
          </div>
        </div>
        <figure className="hero-photo-wrap reveal"><img className="hero-photo" src="/images/hero-white.jpeg" alt="Amoghavarsha in a white shirt outdoors" fetchPriority="high" /><figcaption>AMOGH · SHIVAMOGGA</figcaption></figure>
        <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDown size={14} /></a>
      </section>

      <section className="work-section page-wrap" id="work">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>02</span> / Selected work</span><div className="section-heading-row"><h2>Selected work<span className="heading-period">.</span></h2><p>Ideas explored through software, databases, embedded systems, and communication concepts.</p></div></div>
        <div className="projects-list">{portfolio.projects.map((project, index) => <article className={`project-row project-${index + 1} reveal`} key={project.number}>
          <a className="project-image" href={p.github} target="_blank" rel="noreferrer" aria-label={`Visit GitHub profile for ${project.title}`}>
            {project.image ? <img className="project-media" src={project.image} alt={project.imageAlt} loading="lazy" /> : <ProjectVisual visual={project.visual} />}
            <span className="project-image-index">{project.number} / 03</span><span className="project-image-arrow"><ArrowUpRight size={17} /></span>
          </a>
          <div className="project-copy"><div className="project-topline"><span>PROJECT {project.number}</span><span>{project.category}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.technologies.map(technology => <span key={technology}>{technology}</span>)}</div><a className="project-link" href={p.github} target="_blank" rel="noreferrer">View GitHub profile <ArrowUpRight size={14} /></a></div>
        </article>)}</div>
      </section>

      <section className="about-section page-wrap" id="about">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>03</span> / About</span><h2 className="section-heading">About<span className="heading-period">.</span></h2></div>
        <div className="about-grid reveal"><div className="about-photo-frame"><img src="/images/about-white.jpeg" alt="Amoghavarsha outdoors in a white shirt" loading="lazy" /><span className="photo-caption">A MOMENT BETWEEN CLASSES</span></div><div className="about-copy"><h3>Curious about how things work. Interested in making them work better.</h3><p>I'm Amoghavarsha K A, a Computer Science and Engineering student at Alva's Institute of Engineering and Technology. I enjoy building practical software, working with databases and web technologies, and exploring intelligent systems through hands-on projects.</p><p>I learn by building — taking ideas, understanding problems, and turning them into working solutions.</p><div className="about-location"><span>BASED IN</span><b>Shivamogga, Karnataka, India</b></div></div></div>
      </section>

      <section className="education-section page-wrap" id="education">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>05</span> / Education</span><h2 className="section-heading">Education<span className="heading-period">.</span></h2></div>
        <article className="education-entry reveal"><div className="edu-main"><h3>{portfolio.education.institution}</h3><p>{portfolio.education.degree}</p></div><div className="edu-meta"><span>{portfolio.education.university}</span><span>{portfolio.education.status}</span></div><div className="edu-score"><span>CGPA</span><b>{portfolio.education.cgpa}</b></div></article>
      </section>

      <section className="skills-section page-wrap" id="skills">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>04</span> / Capabilities</span><div className="section-heading-row"><h2>Capabilities<span className="heading-period">.</span></h2><p>Technologies I use across coursework, projects, and this portfolio.</p></div></div>
        <div className="capability-list reveal">{portfolio.skills.map(skillGroup => <article className="capability" key={skillGroup.number}><span className="cap-number">{skillGroup.number}</span><h3>{skillGroup.title}</h3><div className="cap-items">{skillGroup.items.map(item => <span key={item}>{item}</span>)}</div><ArrowUpRight className="cap-arrow" size={15} /></article>)}</div>
      </section>

      <section className="learning-section page-wrap" id="learning">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>06</span> / Learning</span><h2 className="section-heading">Currently learning<span className="heading-period">.</span></h2><p className="learning-lead">Learning through coursework and hands-on projects.</p></div>
        <div className="learning-list reveal">{portfolio.focus.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3><ArrowUpRight size={15} /></div>)}</div>
      </section>

      <section className="beyond-section page-wrap" id="personal">
        <div className="section-intro reveal"><span className="eyebrow section-label"><span>07</span> / Beyond code</span><div className="section-heading-row"><h2>Beyond code<span className="heading-period">.</span></h2><p>People, creative ideas, college activities, and new experiences are part of how I keep learning.</p></div></div>
        <div className="photo-story reveal"><figure className="story-photo story-a"><img src={portfolio.photos[0]} alt="Amoghavarsha in a black shirt" loading="lazy" /><figcaption>01 / A CHANGE OF PACE</figcaption></figure><figure className="story-photo story-b"><img src={portfolio.photos[1]} alt="Amoghavarsha in a maroon shirt among greenery" loading="lazy" /><figcaption>02 / OUTSIDE THE CLASSROOM</figcaption></figure><figure className="story-photo story-c"><img src={portfolio.photos[2]} alt="Amoghavarsha in a maroon shirt outdoors" loading="lazy" /><figcaption>03 / A MOMENT BETWEEN</figcaption></figure></div>
      </section>

      <section className="contact-section" id="contact"><div className="contact-inner page-wrap reveal"><span className="eyebrow section-label"><span>08</span> / Contact</span><h2>Let's build<br />something<span className="heading-period">.</span></h2><p>I'd be happy to connect.</p><div className="contact-links"><a href={`mailto:${p.email}`}>Email me <ArrowUpRight size={15} /></a><a href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>{p.linkedin && <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15} /></a>}</div></div></section>
    </main>
    <footer className="footer page-wrap"><a className="footer-name" href="#home">AMOGHAVARSHA K A<span>.</span></a><p>{p.role}<br />{p.location}</p><div className="footer-links"><a href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>{p.linkedin && <a href={p.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>}<a href={`mailto:${p.email}`}>Email <ArrowUpRight size={12} /></a></div><span className="copyright">© 2026 {p.name}</span></footer>
  </div>;
}

export default App;

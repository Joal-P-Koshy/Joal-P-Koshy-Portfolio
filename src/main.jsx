import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Phone, Instagram, Menu, X, Plus } from 'lucide-react';
import { profile, sections, toc } from './data/portfolio';
import './styles.css';

const pageImage = (n) => `/portfolio-pages/page-${String(n).padStart(2,'0')}.jpg`;

function Header(){
  const [open,setOpen] = React.useState(false);
  const links = [{id:'home',label:'Home'}, {id:'client-projects',label:'Client work'}, {id:'contents',label:'Contents'}, {id:'contact',label:'Contact'}];
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="AMEND Designs home">AMEND<span>®</span></a>
    <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav open':'nav'}>{links.map(l=><a key={l.id} href={`#${l.id}`} onClick={()=>setOpen(false)}>{l.label}</a>)}<a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15}/></a></nav>
  </header>
}
function Hero(){return <section className="hero section-wrap" id="home">
  <div className="hero-topline"><span>GRAPHIC DESIGN PORTFOLIO</span><span>2026 / SELECTED WORK</span></div>
  <div className="hero-grid">
    <div className="hero-copy"><p className="eyebrow"><span className="live-dot"/> INDEPENDENT GRAPHIC DESIGNER <span className="eyebrow-line"/></p>
      <h1>Designs that<br/><em>make a mark.</em></h1>
      <p className="hero-intro">I’m <strong>Joal P Koshy</strong> — I create brand identities, logos, and visual designs that help businesses stand out and connect with their audience.</p>
      <div className="hero-actions"><a className="button button-gold" href="#client-projects">Explore client work <ArrowDownRight size={17}/></a><a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={16}/></a></div>
      <div className="hero-meta"><div><span className="meta-label">BASED IN</span><span>{profile.location}</span></div><div><span className="meta-label">FOCUS</span><span>Branding · Visual communication</span></div></div>
    </div>
    <div className="hero-art"><div className="art-label">VISUAL<br/>IDENTITIES<br/><b>THAT CONNECT</b></div><div className="art-shape shape-one"/><div className="art-shape shape-two"/><div className="art-circle">A<span>®</span></div><div className="art-bottom"><span>AMEND DESIGNS</span><span>FROM CONCEPT TO CREATION ↗</span></div></div>
  </div>
  <div className="intro-strip"><span className="strip-index">01 / INTRODUCTION</span><p>A thoughtful approach to visual communication — building clear, memorable design for brands and people.</p><span className="strip-mark">A.</span></div>
</section>}
function SectionHeading({number,title,sub}){return <div className="section-heading"><span className="section-number">{number} /</span><div><h2>{title}</h2>{sub&&<p>{sub}</p>}</div><span className="heading-mark">✳</span></div>}
function Education(){const s=sections.find(x=>x.id==='education');return <section className="content-section section-wrap" id={s.id}><SectionHeading number={s.number} title={s.title} sub="A little about the path so far."/><div className="two-col-info"><div><p className="small-label">EDUCATION</p>{s.education.map(x=><div className="timeline-item" key={x.title}><span className="timeline-date">{x.date}</span><div><h3>{x.title}</h3><p>{x.place}</p></div></div>)}</div><div><p className="small-label">EXPERIENCE</p>{s.experience.map(x=><div className="timeline-item" key={x.title}><span className="timeline-date">{x.date}</span><div><h3>{x.title}</h3><p>{x.place}</p><p className="detail-text">{x.detail}</p></div></div>)}</div></div></section>}
function Contents(){return <section className="contents-section section-wrap" id="contents"><SectionHeading number="03" title="On this page" sub="A quick guide to the portfolio."/><div className="toc-grid">{toc.map(([id,label],i)=><a key={id} href={`#${id}`} className="toc-item"><span>{String(i+1).padStart(2,'0')}</span><b>{label}</b><ArrowUpRight size={17}/></a>)}</div></section>}
function Skills(){const s=sections.find(x=>x.id==='skills');return <section className="content-section section-wrap" id={s.id}><SectionHeading number={s.number} title={s.title} sub="Tools I use and the way I work."/><div className="skills-grid"><div className="skill-panel"><p className="small-label">PROFESSIONAL SKILLS</p><div className="skill-list">{s.tools.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div><div className="skill-panel skill-panel-dark"><p className="small-label">SOFT SKILLS</p><div className="skill-list">{s.soft.map((x,i)=><div key={x}><span>0{i+1}</span>{x}</div>)}</div></div></div></section>}
function ProjectSection({section}){return <section className={`project-section section-wrap ${section.featured?'featured-projects':''}`} id={section.id}><SectionHeading number={section.number} title={section.title} sub={section.featured?'Selected work for real clients. Recent projects can be added here as the portfolio grows.':undefined}/><div className="project-grid">{section.projects.map((p,i)=><article className={`project-card ${section.featured&&i===0?'project-card-large':''}`} key={p.name}><a className="project-image" href={pageImage(p.image)} target="_blank" rel="noreferrer" aria-label={`Open ${p.name} portfolio preview`}><img src={pageImage(p.image)} alt={`${p.name} — portfolio page preview`} loading="lazy"/><span className="image-open"><ArrowUpRight size={20}/></span></a><div className="project-info"><div><span className="project-category">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p></div><span className="project-index">{String(i+1).padStart(2,'0')}</span></div></article>)}</div>{section.featured&&<div className="future-note"><Plus size={17}/><span><b>More client work coming soon.</b> The gallery is set up to add recent projects without changing the site structure.</span></div>}</section>}
function Contact(){return <footer className="contact-section" id="contact"><div className="section-wrap"><div className="contact-top"><span className="eyebrow">HAVE A PROJECT IN MIND?</span><span className="contact-star">✳</span></div><h2>Let’s create<br/><em>something remarkable.</em></h2><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight/></a><div className="contact-details"><a href={`tel:${profile.phone.replaceAll(' ','')}`}><Phone size={16}/>{profile.phone}</a><span><MapPin size={16}/>{profile.location}</span><a href={`mailto:${profile.alternateEmail}`}><Mail size={16}/>{profile.alternateEmail}</a><span><Instagram size={16}/>{profile.instagram}</span></div><div className="footer-bottom"><a className="wordmark" href="#home">AMEND<span>®</span></a><span>JOAL P KOSHY · GRAPHIC DESIGNER</span><a href="#home">BACK TO TOP ↑</a></div></div></footer>}
function App(){return <><Header/><main><Hero/><Education/><Contents/><Skills/>{sections.filter(s=>s.type==='gallery').map(s=><ProjectSection key={s.id} section={s}/>)}</main><Contact/></>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

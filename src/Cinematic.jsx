import React from 'react';
import { Cloud, Network, Box, Code2, ArrowUpRight, ArrowRight, ChevronDown, Pause, Play } from 'lucide-react';
import { Portrait } from './Portrait';

export function CinematicHero({ ResumeButton, ContactLinks, paused, onPause }) {
 return <section className="hero container" aria-labelledby="hero-title">
  <div className="hero-index"><span>PRATIK YADAV / PERSONAL PORTFOLIO</span><span>CODE. CLOUD. CONNECTION.</span></div>
  <div className="hero-copy">
   <div className="availability"><span/> OPEN TO EARLY-CAREER OPPORTUNITIES</div>
   <p className="intro">Pratik Yadav<span className="intro-period">.</span></p>
   <div className="discipline"><span className="discipline-mark">↳</span><span className="sr-only">AWS Cloud, DevOps and Software</span><div className="rotating-window" aria-hidden="true"><div className="rotating-track"><span>AWS CLOUD</span><span>DEVOPS</span><span>SOFTWARE</span><span>AWS CLOUD</span></div></div></div>
   <h1 id="hero-title"><span className="headline-line"><span>Building Reliable</span></span><span className="headline-line accent-line"><span>Cloud Infrastructure</span></span><span className="headline-line"><span>& Scalable Applications<span className="period">.</span></span></span></h1>
   <p className="hero-role">Aspiring AWS Cloud Engineer <b>|</b> DevOps Enthusiast <b>|</b> Software Developer</p>
   <p className="hero-description">Connecting code, cloud and infrastructure. Exploring how thoughtful architecture and clean software come together to build dependable systems.</p>
   <div className="hero-buttons"><a className="button primary" href="#projects">View Projects <ArrowUpRight size={17}/></a><ResumeButton/><a className="text-link" href="#contact">Contact Me <ArrowRight size={16}/></a></div>
   <ContactLinks iconsOnly/>
  </div>
  <div className="hero-art hero-portrait-art"><Portrait/></div>
  <div className="hero-bottom"><span><span className="small-dot"/> CLOUD MINDSET. DEVELOPER DNA.</span><button className="motion-control" aria-pressed={paused} onClick={onPause}>{paused ? <Play size={12}/> : <Pause size={12}/>} {paused ? 'Resume' : 'Pause'} motion</button><a href="#about">Scroll to explore <ChevronDown size={14}/></a></div>
 </section>;
}
export function TechnologyMarquee() {
 const technologies = ['AWS', 'Docker', 'Linux', 'Python', 'React.js', 'Django', 'Git', 'MySQL', 'Nginx'];
 return <div className="technology-marquee" aria-hidden="true"><div className="marquee-track">{[0,1].map(copy => <div className="marquee-set" key={copy}>{technologies.map(t => <span key={t}>{t}<span className="marquee-star">✳</span></span>)}</div>)}</div></div>;
}
export function ProjectVisual({ category, id }) {
 const Icon = category === 'Cloud' ? Cloud : category === 'DevOps' ? Box : Code2;
 return <div className={`project-visual visual-${id}`} aria-hidden="true"><div className="project-gridlines"/><div className="preview-orbit orbit-one"/><div className="preview-orbit orbit-two"/><div className="preview-core"><Icon size={37} strokeWidth={1}/></div><span className="preview-node node-one"><Network size={15}/></span><span className="preview-node node-two"><Code2 size={15}/></span><div className="preview-caption"><span>CONCEPT / {category.toUpperCase()}</span><span>{id === 'load-balancer' ? '01' : id === 'vpc' ? '02' : id === 'docker-django' ? '03' : id === 'django' ? '04' : '05'}</span></div></div>;
}
export function ReadingText({ children }) {
 return <p>{children.split(' ').map((word,index) => <span className="about-word" key={index}>{word}{' '}</span>)}</p>;
}


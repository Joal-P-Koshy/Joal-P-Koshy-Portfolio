// Update this file as new client work is ready. Featured client projects appear first.
export const profile = {
  name: 'Joal P Koshy',
  brand: 'AMEND DESIGNS',
  role: 'Graphic Designer',
  tagline: 'Crafting visual identities that connect and inspire.',
  intro: 'I create brand identities, logos, and visual designs that help businesses stand out and connect with their audience.',
  about: 'A graphic designer focused on branding and visual communication, combining creative thinking with purposeful design to build meaningful brand experiences.',
  email: 'designsbyamend@gmail.com',
  alternateEmail: 'joalpkoshyy@gmail.com',
  phone: '+91 9778342389',
  location: 'Idukki, Kerala, India',
  instagram: 'amend_designs'
};

// Artwork below uses page previews from the supplied PDF as placeholders/reference visuals.
// Replace each image with clean, individual artwork exports when you provide recent projects.
export const sections = [
  { id: 'education', number: '02', title: 'Education & Experience', type: 'info', education: [{title:'Graphic Designing', place:'DDU-GKY Training Program', date:'2026'},{title:'Diploma in Computer Engineering', place:'GPTC, Nedumkandam', date:'2020–2023'}], experience: [{title:'Freelance Graphic Designer', place:'Aqua Spa, Goa', date:'2025', detail:'Created posters, photo frames, wedding cards and other visual materials.'}] },
  { id: 'contents', number: '03', title: 'Table of Contents', type: 'contents' },
  { id: 'skills', number: '04', title: 'Skills', type: 'skills', tools:['Photoshop','Illustrator','Lightroom','Canva'], soft:['Teamwork','Adaptability','Communication','Mentoring'] },
  { id: 'own-branding', number: '05', title: 'Own Branding', type: 'gallery', projects:[{name:'AMEND Designs', category:'Brand identity', image:6, description:'A strong, sophisticated identity built around the meaning of AMEND: to alter, modify, or make better.'}] },
  { id: 'client-projects', number: '06', title: 'Real-Client Projects', type: 'gallery', featured:true, projects:[
    {name:'Aqua Spa — Incredible Healers', category:'Brand identity · Promotional design', image:7, description:'Identity and promotional design for a wellness and spa business.'},
    {name:'Client print & event designs', category:'Posters · Invitations · Event collateral', image:8, description:'A selection of client-facing print and event design work from the original portfolio.'}
  ]},
  { id: 'branding-1', number: '07', title: 'Branding — 1', type: 'gallery', projects:[{name:'Zahrat', category:'Brand identity · Packaging', image:9, description:'A refined identity and supporting brand applications for a fragrance concept.'}] },
  { id: 'branding-2', number: '08', title: 'Branding — 2', type: 'gallery', projects:[{name:'Celestial Beauty Salon', category:'Brand identity · Marketing collateral', image:10, description:'Beauty brand identity with promotional and stationery applications.'}] },
  { id: 'print-design', number: '09', title: 'ID Cards & Brochures', type: 'gallery', projects:[{name:'ID cards & brochures', category:'Print design', image:11, description:'Identity cards, bifold and trifold brochure layouts.'}] },
  { id: 'flex-designs', number: '10', title: 'Flex Designs', type: 'gallery', projects:[{name:'Outdoor flex designs', category:'Large-format print', image:12, description:'Large-format promotional designs for food and local businesses.'}] },
  { id: 'packaging', number: '11', title: 'Packaging Design', type: 'gallery', projects:[{name:'Game Tracker', category:'Packaging · Product presentation', image:13, description:'Packaging design and product mockup for gaming accessories.'}] },
  { id: 'notice-design', number: '12', title: 'Notice Design', type: 'gallery', projects:[{name:'Velvet Silks', category:'Promotional design', image:14, description:'Grand-opening promotional artwork and mockup.'}] },
  { id: 'ddu-gky', number: '13', title: 'DDU-GKY Projects', type: 'gallery', projects:[{name:'Campaign & occasion creatives', category:'Social media · Campaign design', image:15, description:'A selection of awareness-day and festive creatives.'}] },
  { id: 'other-works', number: '14', title: 'Other Works', type: 'gallery', projects:[{name:'Other works', category:'Selected experiments and designs', image:16, description:'Additional design work. This section is intentionally easy to expand with recent projects.'}] }
];

export const toc = [
  ['skills','Skills'], ['own-branding','Own Branding'], ['client-projects','Real-Client Projects'],
  ['branding-1','Branding — 1'], ['branding-2','Branding — 2'], ['print-design','ID Cards & Brochures'],
  ['flex-designs','Flex Designs'], ['packaging','Packaging Design'], ['notice-design','Notice Design'],
  ['ddu-gky','DDU-GKY Projects'], ['other-works','Other Works']
];

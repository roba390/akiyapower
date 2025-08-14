import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Courses',
      links: [
       { text: 'EV Maintenance', href: getPermalink('/courses/ev-maintenance') },
        { text: 'Battery Technology', href: getPermalink('/courses/battery-tech') },
        { text: 'Charging Systems', href: getPermalink('/courses/charging-systems') },
        {text:  'EV Components', href: getPermalink('/courses/EV-Components')},
        { text: 'EV Traction Motor', href: getPermalink('/courses/EV-traction') },
        { text: 'Fundamentals of LIBS', href: getPermalink('/courses/Fundamentals-Libs') },
        { text: 'EV Thermal Management', href: getPermalink('/courses/Thermal-Management') },
        { text: 'Differential and Tune Up', href: getPermalink('/courses/EV-TuneUP') },
      ],
    },
      {
      text: 'Trainers',
      href: getPermalink('/trainers'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Enroll', href: getPermalink('/contact'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Trainers', href: getPermalink('/trainers') },
        { text: 'Testimonials', href: '/' + '#testimonials' },
      ],
    },
    {
      title: 'Courses',
      links: [
        { text: 'EV Maintenance', href: getPermalink('/courses/ev-maintenance') },
        { text: 'Battery Technology', href: getPermalink('/courses/battery-tech') },
        { text: 'Charging Systems', href: getPermalink('/courses/charging-systems') },
        {text:  'EV Components', href: getPermalink('/courses/EV-Components')},
        { text: 'EV Traction Motor', href: getPermalink('/courses/EV-traction') },
        { text: 'Fundamentals of LIBS', href: getPermalink('/courses/Fundamentals-Libs') },
        { text: 'EV Thermal Management System', href: getPermalink('/courses/Thermal-Management') },
        { text: 'EV Differential and Tune Up', href: getPermalink('/courses/EV-TuneUP') },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'FAQs', href: getPermalink('/faqs') },
        { text: 'Contact Us', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
 socialLinks: [
  { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://www.tiktok.com/@yamicars?_t=ZM-8yrkuN3wfSQ&_r=1' },
  { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  //{ ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: '#' },
],
  footNote: `
    <span class="mr-2">© 2023 Akiya Power Tech Training Center. All rights reserved.</span>
  `,
};
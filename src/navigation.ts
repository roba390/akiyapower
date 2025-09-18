import { text } from 'node:stream/consumers';
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'EV Training Center',
      links: [
        {
          text: 'All Courses',
          href: '/#all-courses', 
        },
        {
          text: 'Our Trainers',
          href: getPermalink('/trainers'),
        },
        {
          text: 'Admissions & Enrollment',
          href: getPermalink('/admission'), // Changed from /admission to use contact page
        },
      ],
    },
    {
      text: 'EV Service Center',
      links: [
        {
          text: 'Our Services',
          href: getPermalink('/services'),
        },
        {
          text: 'Why Choose Us',
          href: getPermalink('/why-us'),
        },
        {
          text: 'Book an Appointment',
          href: 'https://my-booking-app-ecru.vercel.app/',
          // ✅ ADDED: Activates the custom modal
          'data-confirm-external': true,
          'data-confirm-message': 'You are headed to our secure booking portal. Continue?',
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    // ✅ ADDED: Re-enabled the primary Call to Action button for the header
    // { 
    //   text: 'Book a Service', 
    //   href: 'https://my-booking-app-ecru.vercel.app/',
    //   variant: 'primary',
    //   'data-confirm-external': true,
    //   'data-confirm-message': 'You are headed to our secure booking portal. Continue?',
    // },
    {
      text: 'Enroll Now',
      href: getPermalink('/contact'),
      variant: 'secondary', // Set an explicit variant
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Trainers', href: getPermalink('/trainers') },
        { text: 'Testimonials', href: getPermalink('/#testimonials') }, // Corrected anchor link syntax
      ],
    },
    {
      title: 'Our Courses',
      links: [
        { text: 'EV Maintenance', href: getPermalink('/courses/ev-maintenance') },
        {text: 'EV WorkShop', href: getPermalink('/courses/EV-workshop') },
        { text: 'Battery Technology', href: getPermalink('/courses/battery-tech') },
        { text: 'Charging Systems', href: getPermalink('/courses/charging-systems') },
        { text: 'EV Components', href: getPermalink('/courses/EV-Components') },
        { text: 'EV Traction Motor', href: getPermalink('/courses/EV-traction') },
        { text: 'Fundamentals of LIBS', href: getPermalink('/courses/Fundamentals-Libs') },
        { text: 'EV Thermal Management', href: getPermalink('/courses/Thermal-Management') },
        { text: 'EV Differential and Tune Up', href: getPermalink('/courses/EV-TuneUP') },
      ],
    },
    {
      title: 'Service Center',
      links: [
        { text: 'Our Services', href: getPermalink('/services')},
        { 
          text: 'Book an Appointment', 
          href: 'https://my-booking-app-ecru.vercel.app/',
          'data-confirm-external': true,
          'data-confirm-message': 'You are headed to our secure booking portal. Continue?',
        },
        { text: 'FAQs', href: getPermalink('/faqs') },
      ]
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
  ],
  footNote: `
    <span class="mr-2">© 2025 Akiya Power Tech. All rights reserved.</span>
  `,
};
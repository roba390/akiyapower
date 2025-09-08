import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      // NEW: Top-level category for all training-related content.
      text: 'EV Training Center',
      links: [
        {
          // This new link goes to a "catalog" page that can link to all your course pages.
          text: 'All Courses',
          href: '/#all-courses', 
        },
        {
          // MOVED: Your existing 'Trainers' page now lives here.
          text: 'Our Trainers',
          href: getPermalink('/trainers'),
        },
        {
          text: 'Admissions & Enrollment',
          href: getPermalink('/admission'), // Directs users to the contact page to enroll.
        },
      ],
    },
    {
      // NEW: Top-level category for the new service business.
      text: 'EV Service Center',
      links: [
        {
          text: 'Our Services',
          href: getPermalink('/services'), // A new page you will create.
        },
        {
          text: 'Why Choose Us',
          href: getPermalink('/why-us'), // A new page you will create.
        },
        {
          text: 'Book an Appointment',
          // IMPORTANT: This must be the full URL to your separate booking web app.
          href: 'https://my-booking-app-ecru.vercel.app/', 
        },
      ],
    },
    {
      // MOVED: Your 'About' page is still a top-level link.
      text: 'About',
      href: getPermalink('/about'),
    },
  ],
  actions: [
    // // UPDATED: The primary button is now for booking a service.
    // { 
    //   text: 'Book a Service', 
    //   href: 'https://my-booking-app-ecru.vercel.app/', // Links to your booking app
    //   variant: 'primary',
    // },
    // NEW: A secondary button for students.
    {
      text: 'Enroll Now',
      href: getPermalink('/contact'),
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
        { text: 'Testimonials', href: '/' + '#testimonials' },
      ],
    },
    {
      // Your existing course links are perfect for the footer as quick navigation.
      title: 'Our Courses',
      links: [
        { text: 'EV Maintenance', href: getPermalink('/courses/ev-maintenance') },
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
      // NEW: A dedicated column in the footer for the service center.
      title: 'Service Center',
      links: [
        { text: 'Our Services', href: getPermalink('/services')},
        { text: 'Book an Appointment', href: 'https://my-booking-app-ecru.vercel.app/'},
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
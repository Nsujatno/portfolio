'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nathan-sujatno/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Nsujatno', label: 'GitHub' },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Have a project? Let's connect.
          </h2>
          
          <p className="text-gray-400 text-lg mx-auto max-w-xl">
            I'm currently seeking new challenges and opportunities in Full Stack and AI Engineering. 
            Feel free to reach out for collaboration or just to say hi!
          </p>
        </motion.div>

        {/* Primary Email CTA Button */}
        <motion.a
          href="mailto:nathan.sujatno@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-lg shadow-xl shadow-emerald-500/30 transition-all duration-300 mb-12"
        >
          <Mail size={20} />
          Say Hello
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-8 mt-10"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#34d399' }}
              className="text-gray-500 hover:text-emerald-400 transition-colors duration-200"
              aria-label={link.label}
            >
              <link.icon size={30} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
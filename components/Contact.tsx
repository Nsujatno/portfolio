'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nathan-sujatno/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/Nsujatno', label: 'GitHub' },
];

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 md:py-32 border-t border-line">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-sage font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forest mb-4">
            Have a project? Let&apos;s connect.
          </h2>
          
          <p className="text-ink text-lg mx-auto max-w-xl">
            I&apos;m currently seeking opportunities in AI Engineering — agentic systems, LLM pipelines, and everything in between.
            Feel free to reach out for collaboration or just to say hi!
          </p>
        </motion.div>

        {/* Primary Email CTA */}
        <motion.a
          href="mailto:nathan.sujatno@gmail.com"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block font-serif text-2xl md:text-3xl text-forest underline underline-offset-8 decoration-sage/60 hover:text-sage hover:decoration-sage transition-colors mb-12"
        >
          nathan.sujatno@gmail.com
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
              whileHover={{ y: -5, color: '#7c9070' }}
              className="text-ink/60 hover:text-sage transition-colors duration-200"
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
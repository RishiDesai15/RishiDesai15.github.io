import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:r25desai@uwaterloo.ca?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Please send the pre-filled email to complete your message. 📧"
    });

    // Optional: clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [{
    icon: Mail,
    label: "r25desai@uwaterloo.ca",
    href: "mailto:r25desai@uwaterloo.ca",
    color: "from-purple-500 to-purple-600"
  }, {
    icon: Linkedin,
    label: "LinkedIn Profile",
    href: "https://www.linkedin.com/in/rishi-desai15/",
    color: "from-blue-500 to-blue-600"
  }, {
    icon: Github,
    label: "GitHub Profile",
    href: "https://github.com/RishiDesai15",
    color: "from-gray-600 to-gray-800"
  }];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div ref={ref} initial={{
          opacity: 0,
          y: 50
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 50
        }} transition={{
          duration: 0.8
        }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">Let's collaborate or have a chat!</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{
              opacity: 0,
              x: -50
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: -50
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/40" placeholder="Your name" required />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/40" placeholder="your.email@example.com" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-purple-500 transition-colors text-white placeholder:text-white/40 resize-none" placeholder="Tell me about your project..." required></textarea>
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 text-white font-medium py-6 rounded-xl transition-all transform hover:scale-[1.02]">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div initial={{
              opacity: 0,
              x: 50
            }} animate={isInView ? {
              opacity: 1,
              x: 0
            } : {
              opacity: 0,
              x: 50
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <motion.a 
                      key={social.label} 
                      href={social.href}
                      target={social.href.startsWith('mailto') ? '_self' : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      whileHover={{ x: 8 }} 
                      className="flex items-center gap-4 w-full p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="font-medium text-white/90">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Location</h3>
                <p className="text-white/70">Downtown Toronto, ON, CA</p>
                <p className="text-white/60 text-sm mt-2">Available for remote opportunities</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer initial={{
        opacity: 0
      }} animate={isInView ? {
        opacity: 1
      } : {
        opacity: 0
      }} transition={{
        delay: 0.8
      }} className="mt-24 pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Rishi Desai. All rights reserved.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
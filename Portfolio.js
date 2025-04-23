import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10 font-sans">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-5xl font-bold">
          Daksh Mainee
        </motion.h1>
        <p className="text-lg text-gray-400">Computer Science at PSU</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="outline" size="icon">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-16 space-y-4 max-w-2xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-3xl font-semibold">
          About Me
        </motion.h2>
        <p className="text-gray-300 text-md">
          I’m a Computer Science student at Penn State University, passionate about
          building beautiful and impactful digital experiences. I enjoy web development,
          learning about AI, and creating software that solves real problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-16 space-y-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <Card key={n} className="bg-zinc-900 border-zinc-700">
              <CardContent className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">Project Title {n}</h3>
                <p className="text-sm text-gray-400">Short project description goes here. Something cool and informative.</p>
                <Button variant="secondary" className="w-full">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section className="mt-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Resume</h2>
        <p className="text-gray-300 mb-6">Download my resume to learn more about my experience and skills.</p>
        <Button className="text-black bg-white hover:bg-gray-200">Download Resume</Button>
      </section>

      {/* Contact Section */}
      <section className="mt-16 max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Me</h2>
        <form className="space-y-4">
          <input className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-600" placeholder="Your name" />
          <input className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-600" placeholder="Your email" />
          <textarea className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-600" placeholder="Your message" rows={4} />
          <Button className="bg-white text-black hover:bg-gray-200 w-full">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center mt-16 text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} Daksh Mainee. All rights reserved.
      </footer>
    </main>
  );
}

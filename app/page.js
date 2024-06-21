import Topbar from "./components/TopBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/projects";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="w-full">
      <Topbar />
      <Hero id='home'/>
      <Section id='projects' header='projects' component={<Projects />}/>
      <Section id='about' header='aboutMe' component={<AboutMe />}/>
      <Section id='contact' header='contactMe' component={<ContactMe />}/>
    </main>
  );
}

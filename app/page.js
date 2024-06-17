import Topbar from "./components/TopBar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="w-full">
      <Topbar />
      <Hero id='home'/>
      <Section id='projects' header='projects' component={<Projects />}/>
      <Section id='about' header='aboutMe' component={<Projects />}/>   
    </main>
  );
}

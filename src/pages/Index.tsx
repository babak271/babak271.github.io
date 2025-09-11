import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

const Index = () => {
    return (
        <main className="min-h-screen">
            <Hero/>
            <Skills/>
            <Languages />
            <Experience/>
            <Contact/>
        </main>
    );
};

export default Index;

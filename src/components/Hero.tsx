import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import {GitHubIcon, LinkedInIcon} from "@/components/icons/simple-icons.tsx";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <img
                        src={profilePhoto}
                        alt="Professional headshot"
                        className="w-48 h-48 rounded-full mx-auto mb-8 shadow-elegant object-cover"
                    />
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    Senior Web Developer
                </h1>

                <h2 className="text-2xl md:text-3xl text-foreground mb-8 font-medium">
                    PHP & Python Specialist
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Passionate senior developer with expertise in PHP, Python, and modern web technologies.
                    Building scalable, efficient solutions that drive business success.
                </p>

                <div className="flex justify-center gap-6">
                    <a
                        href="https://github.com/babak271"
                        className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:bg-accent/10 rounded-full"
                        aria-label="GitHub"
                    >
                        <div className="h-6 w-6"><GitHubIcon/></div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/seyed-babak-ashrafi/"
                        className="text-muted-foreground hover:text-primary transition-smooth p-2 hover:bg-accent/10 rounded-full"
                        aria-label="LinkedIn"
                    >
                        <div className="h-6 w-6"><LinkedInIcon/></div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;

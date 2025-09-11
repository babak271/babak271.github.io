import {Card, CardContent} from "@/components/ui/card";
import {MailIcon, LinkedInIcon, LocationIcon, GitHubIcon, StackOverflowIcon, DevTo} from "@/components/icons/simple-icons";

const Contact = () => {
    const contactInfo = [
        {
            icon: MailIcon,
            label: "Email",
            value: "developer@email.com",
            href: "mailto:developer@email.com"
        },
        {
            icon: LocationIcon,
            label: "Location",
            value: "Available for Remote Work",
            href: null
        }
    ];
    const socialLinks = [
        {
            icon: GitHubIcon,
            label: "GitHub",
            href: "https://github.com/babak271",
            color: "hover:text-foreground"
        },
        {
            icon: LinkedInIcon,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/seyed-babak-ashrafi/",
            color: "hover:text-primary"
        },
        {
            icon: StackOverflowIcon,
            label: "StackOverflow",
            href: "https://stackoverflow.com/users/6212294/babak-ashrafi",
            color: "hover:text-orange-500"
        },
        {
            icon: DevTo,
            label: "Dev",
            href: "https://dev.to/babak271",
            color: "hover:text-black"
        }
    ];
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to discuss your next project? Let's build something amazing together.
                    </p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <Card className="bg-gradient-card shadow-card border-0">
                        <CardContent className="p-8">
                            <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact Information</h3>

                            <div className="mt-8 pt-8 border-t border-border">
                                <div className="flex gap-4 justify-center">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            className={`text-muted-foreground ${link.color} transition-smooth p-2 hover:bg-accent/10 rounded-full`}
                                            aria-label={link.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <link.icon/>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
export default Contact;
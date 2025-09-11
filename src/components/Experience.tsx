import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            title: "Senior Web Developer",
            company: "Tech Solutions Inc.",
            location: "Remote",
            period: "2021 - Present",
            description: "Lead backend development using PHP and Python, architecting scalable microservices and mentoring junior developers. Improved system performance by 40% and reduced deployment time by 60%.",
            technologies: ["PHP", "Laravel", "Python", "Django", "MySQL", "Docker", "AWS"]
        },
        {
            title: "Full Stack Developer",
            company: "Digital Agency Pro",
            location: "New York, NY",
            period: "2019 - 2021",
            description: "Developed custom web applications and e-commerce solutions for enterprise clients. Collaborated with cross-functional teams to deliver projects on time and under budget.",
            technologies: ["PHP", "Symfony", "JavaScript", "React", "PostgreSQL", "Redis"]
        },
        {
            title: "Web Developer",
            company: "StartupXYZ",
            location: "San Francisco, CA",
            period: "2017 - 2019",
            description: "Built and maintained web applications using modern frameworks. Implemented responsive designs and optimized database queries for better performance.",
            technologies: ["PHP", "CodeIgniter", "Python", "Flask", "MySQL", "jQuery"]
        }
    ];

    return (
        <section className="py-20 px-6 bg-gradient-subtle">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
                    <p className="text-xl text-muted-foreground">
                        Building robust web solutions with modern technologies
                    </p>
                </div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <Card key={index} className="bg-gradient-card shadow-card border-0 transition-smooth hover:shadow-elegant">
                            <CardContent className="p-8">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                                        <h4 className="text-xl font-semibold text-primary mb-4">{exp.company}</h4>
                                    </div>
                                    <div className="flex flex-col lg:items-end gap-2">
                                        <div className="flex items-center text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2" />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="secondary"
                                            className="transition-smooth hover:bg-primary hover:text-primary-foreground"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

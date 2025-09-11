import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Metro Markets GmbH",
            location: "Düsseldorf / Germany",
            period: "2023 - Present",
            description: "Doing software engineering with a focus on warehouse management systems, specializing in architecting and maintaining testing strategies, and developing scalable microservices and integrations. Led critical initiatives, including a major database upgrade with zero downtime, and enhanced team productivity through mentoring and new applications development.",
            technologies: ["Python", "PHP", "GCP", "Postgres", "MySQL", "Docker", "CI/CD", "Symfony"]
        },
        {
            title: "Backend Developer",
            company: "NAK",
            location: "Tehran / Iran",
            period: "2021 - 2023",
            description: "Specializing in creating and optimizing web applications and reporting systems for large-scale data. Expertise includes enhancing system performance through code refactoring and database optimization, along with building predictive algorithms and maintaining CI/CD pipelines.",
            technologies: ["PHP", "Laravel", "Python", "Redis", "Mysql", "Docker", "CI/CD"]
        },
        {
            title: "Backend Developer",
            company: "Shazin",
            location: "Tehran / Iran",
            period: "2020 - 2021",
            description: "Expertise in creating and managing e-commerce and e-learning platforms, specializing in multimedia and secure content delivery. Proficient in integrating complex technologies, including 3D model rendering, video streaming with encrypted HLS, and LMS integrations.",
            technologies: ["PHP", "Laravel", "Python", "MySQL", "Postgres", "Django"]
        },
        {
            title: "Backend Developer",
            company: "Magma Energy",
            location: "Tehran / Iran",
            period: "2018 - 2019",
            description: "Specialist in data extraction and classification systems, with a strong focus on the petroleum industry. Expertise includes developing end-to-end solutions for geological and drilling data and implementing OCR technology for efficient data extraction from PDFs.",
            technologies: ["Python", "Mysql", "VBA"]
        },
        {
            title: "Developer",
            company: "Herfeh Honarmand",
            location: "Tehran / Iran",
            period: "2016 - 2018",
            description: "A developer with a focus on historical and cultural data, specializing in developing and integrating machine learning models for the classification of historical artifacts. Experienced in data acquisition and analysis from major institutions like the Metropolitan Museum.",
            technologies: ["Python", "Mysql", "KNN", "SVM"]
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

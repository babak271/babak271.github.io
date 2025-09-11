import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            skills: ["PHP", "Python", "Laravel", "Symfony", "Django", "FastAPI", "Node.js"],
            color: "bg-primary text-primary-foreground"
        },
        {
            title: "Frontend Development",
            skills: ["JavaScript", "TypeScript", "React", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"],
            color: "bg-accent text-accent-foreground"
        },
        {
            title: "Database & DevOps",
            skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Linux"],
            color: "bg-secondary text-secondary-foreground"
        },
        {
            title: "Tools & Practices",
            skills: ["Git", "RESTful APIs", "GraphQL", "Testing", "CI/CD", "Agile", "Code Review"],
            color: "bg-muted text-muted-foreground"
        }
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive expertise across the full stack with focus on backend technologies
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="bg-gradient-card shadow-card border-0 transition-smooth hover:shadow-elegant">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            className={`${category.color} px-4 py-2 text-sm font-medium transition-smooth hover:scale-105`}
                                        >
                                            {skill}
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

export default Skills;

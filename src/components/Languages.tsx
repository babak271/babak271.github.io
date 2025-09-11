import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";

const Languages = () => {
    const languages = [
        { name: "English", level: "Professional", proficiency: "C1" },
        { name: "German", level: "Intermediate", proficiency: "B1" },
        { name: "Farsi", level: "Native", proficiency: "C2" },
    ];

    const getLevelColor = (proficiency: string) => {
        switch (proficiency) {
            case "C2": return "bg-secondary text-secondary-foreground";
            case "C1": return "bg-secondary text-secondary-foreground";
            case "B2": return "bg-secondary text-secondary-foreground";
            case "B1": return "bg-secondary text-secondary-foreground";
            default: return "bg-muted text-muted-foreground";
        }
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Globe className="w-8 h-8 text-primary" />
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Languages
                        </h2>
                    </div>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Multilingual communication abilities for global collaboration
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {languages.map((language, index) => (
                        <Card key={index} className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-primary/10">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-xl font-semibold">{language.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-3">
                                <Badge variant="secondary" className={getLevelColor(language.proficiency)}>
                                    {language.proficiency}
                                </Badge>
                                <p className="text-muted-foreground font-medium">{language.level}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;

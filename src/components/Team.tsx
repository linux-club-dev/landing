import { Card, CardContent } from "@/components/ui/card";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Github, Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  image: string;
  imageClassName?: string;
  expertise?: string[];
  github?: string;
  linkedin?: string;
}

const TeamMember = ({
  name,
  role,
  bio,
  image,
  imageClassName,
  expertise = [],
  github,
  linkedin,
}: TeamMemberProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flex-shrink-0 w-80 h-96 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-card to-card/80 border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
          <CardContent className="p-8 text-center h-full flex flex-col justify-between">
            <div>
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 shadow-lg">
                <img
                  src={image}
                  alt={name}
                  loading="lazy"
                  className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                    imageClassName || ""
                  }`}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-foreground">
                {name}
              </h3>
              <div className="bg-primary/10 px-4 py-2 rounded-full mb-4 inline-block">
                <p className="text-primary font-semibold text-sm">{role}</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {bio}
              </p>
              <div className="text-xs text-primary/60 animate-pulse">
                Click to see more →
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back Card */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/30">
          <CardContent className="p-8 h-full flex flex-col justify-between">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {name}
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="bg-card/50 p-3 rounded-lg">
                  <strong>Role:</strong> {role}
                </div>
                {expertise.length > 0 && (
                  <div className="bg-card/50 p-3 rounded-lg">
                    <strong>Expertise:</strong> {expertise.join(", ")}
                  </div>
                )}
                <div className="bg-card/50 p-3 rounded-lg">
                  <strong>Contributions:</strong> {bio}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center gap-4">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/60 hover:bg-card rounded-full transition-colors group"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  </a>
                )}
                {linkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card/60 hover:bg-card rounded-full transition-colors group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-foreground" />
                  </a>
                ) : (
                  <div
                    className="p-3 bg-card/60 rounded-full opacity-60 cursor-default"
                    aria-label="LinkedIn"
                    title="LinkedIn not provided"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="text-xs text-primary/60 text-center animate-pulse">
                ← Click to go back
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Team = () => {
  const organizerMembers = [
    {
      name: "Pratik Mahalle",
      role: "Organizer",
      bio: " DevRel & DevOps Guy! I love to contribute to Open Source",
      image: "/team/Pratik.jpg",
      expertise: ["DevOps", "CI/CD", "Cloud", "DevRel"],
      linkedin: "https://www.linkedin.com/in/mahalle-pratik/",
    },
  ];

  return (
    <section
      id="organizers"
      className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-primary">Organizers</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            The core organizers leading Linux Club initiatives, events, and
            community growth.
          </p>
        </div>

        {/* Organizers Centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {organizerMembers.map((member, index) => (
            <div
              key={index}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              className="animate-fade-in"
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ready to Join Our Journey?
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're always seeking passionate individuals to help organize
              events, lead workshops, and expand our amazing community.
            </p>
            <button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              Join as Organizer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

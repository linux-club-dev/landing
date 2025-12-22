import EventCard from "./EventCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Events = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.lu.ma/checkout-button.js";
    script.id = "luma-checkout";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // clean up if needed, though often scripts like this are fine to leave or hard to fully unload
      const existingScript = document.getElementById("luma-checkout");
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const upcomingEvents: {
    title: string;
    date: string;
    time: string;
    type: "event";
    description: string;
    lumaEventId?: string;
  }[] = [];

  const [showNewEventPopup, setShowNewEventPopup] = useState<boolean>(false);

  const latestEvent = upcomingEvents[0];

  const pastEvents = [
    {
      title: "Build Station Pune",
      date: "November 27, 2025",
      time: "2:00 PM - 5:00 PM",
      type: "event" as const,
      description: "An exciting build station event in Pune where developers came together to build and learn.",
    },
    {
      title: "Rise With AI",
      date: "September 18, 2025",
      time: "3:00 PM - 4:00 PM",
      type: "event" as const,
      description: "Join us for a session on how to use AI to build your own Career."
    },
    {
      title: "Orientation Session for First-Year Students",
      date: "September 11, 2025",
      time: "1:00 PM - 2:30 PM",
      type: "event" as const,
      description: "Kickstart your journey with the Linux Club. Meet the team, explore activities, and learn how to get involved."
    },
    {
      title: "Docker Containerization Session",
      date: "March 8, 2024",
      time: "6:00 PM - 8:00 PM",
      type: "event" as const,
      description:
        "Introduction to Docker, containerization concepts, and building your first containers.",
      attendees: 32,
    },
    {
      title: "Git & GitHub Masterclass",
      date: "March 1, 2024",
      time: "5:30 PM - 7:30 PM",
      type: "event" as const,
      description:
        "Complete guide to version control with Git and collaborative development on GitHub.",
      attendees: 45,
    },
    {
      title: "Linux Basics Bootcamp",
      date: "February 23, 2024",
      time: "6:00 PM - 8:30 PM",
      type: "event" as const,
      description:
        "Intensive hands-on session covering essential Linux commands and terminal productivity.",
      attendees: 38,
    },
    // Monthly Meetups 2025
    {
      title: "Monthly Meetup — January 2025",
      date: "January 15, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description:
        "Talks, demos, and community networking to kick off the year.",
    },
    {
      title: "Monthly Meetup — February 2025",
      date: "February 12, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Lightning talks and project show-and-tell from members.",
    },
    {
      title: "Monthly Meetup — March 2025",
      date: "March 12, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Kernel highlights, CLI tips, and open discussion.",
    },
    {
      title: "Monthly Meetup — April 2025",
      date: "April 16, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Live demos of tooling and open-source contributions.",
    },
    {
      title: "Monthly Meetup — May 2025",
      date: "May 14, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Members' project updates and Q&A.",
    },
    {
      title: "Monthly Meetup — June 2025",
      date: "June 11, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Talks on automation, scripting, and productivity.",
    },
    {
      title: "Monthly Meetup — July 2025",
      date: "July 16, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Community updates and hands-on micro-workshops.",
    },
    {
      title: "Monthly Meetup — August 2025",
      date: "August 13, 2025",
      time: "2:00 PM - 4:00 PM",
      type: "meetup" as const,
      description: "Showcase night and newcomer onboarding.",
    },
    // One-month workshop: Condenova
    {
      title: "Condenova — One-Month Workshop",
      date: "June 2025",
      time: "One-month program",
      type: "workshop" as const,
      description:
        "A comprehensive month-long workshop where we taught students end-to-end fundamentals — from basics to building real projects.",
    },
  ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem]">
        {/* New event popup */}
        {latestEvent && (
          <Dialog open={showNewEventPopup} onOpenChange={setShowNewEventPopup}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>New Event: {latestEvent.title}</DialogTitle>
                <DialogDescription>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <div className="mb-1">
                      <span className="font-medium text-primary">{latestEvent.date}</span>{" "}
                      • <span>{latestEvent.time}</span>
                    </div>
                    <p className="mb-4">{latestEvent.description}</p>
                    {latestEvent.lumaEventId && (
                      <Button asChild className="w-full bg-primary hover:bg-primary/80">
                        <a
                          href={`https://luma.com/event/${latestEvent.lumaEventId}`}
                          data-luma-action="checkout"
                          data-luma-event-id={latestEvent.lumaEventId}
                        >
                          Register for Event
                        </a>
                      </Button>
                    )}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Events</span> & Meetups
          </h2>
          <p className="text-muted-foreground text-lg">
            Join us every week for hands-on learning and community building
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-accent">
            Upcoming Events
          </h3>
          <Carousel className="w-full">
            <CarouselContent>
              {upcomingEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <EventCard {...event} isUpcoming={true} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">
            Past Events
          </h3>
          <Carousel className="w-full">
            <CarouselContent>
              {pastEvents.map((event, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <EventCard {...event} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Events;

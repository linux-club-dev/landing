import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

type AnnouncementBannerProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  storageKey?: string;
};

const DEFAULT_STORAGE_KEY = "announcement:hackathon";

const AnnouncementBanner = ({
  title = "Hackathon announced!",
  subtitle = "Join us for 24 hours of building, learning, and shipping.",
  ctaLabel = "Register now",
  ctaHref = "#Contact",
  secondaryCtaLabel = "Learn more",
  secondaryCtaHref = "#Events",
  storageKey = DEFAULT_STORAGE_KEY,
}: AnnouncementBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem(storageKey);
      setIsVisible(dismissed !== "dismissed");
    } catch (e) {
      // no-op: localStorage unavailable (SSR/private mode)
      setIsVisible(true);
    }
  }, [storageKey]);

  // Auto-dismiss after 30 seconds (does not persist dismissal)
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 30000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  // Check if URL is internal (starts with /)
  const isInternalLink = (url: string) => url.startsWith("/");

  const dismiss = () => {
    try {
      localStorage.setItem(storageKey, "dismissed");
    } catch (e) {
      // no-op
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="py-3 md:py-4">
          <div className="flex items-start gap-3 md:items-center md:gap-4">
            <div className="flex-1">
              <div className="text-sm md:text-base font-bold text-white">
                {title}
              </div>
              <div className="text-xs md:text-sm text-white/80 mt-0.5">
                {subtitle}
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              {secondaryCtaHref && secondaryCtaLabel && (
                <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex border-white/30 text-white hover:bg-white/20 hover:text-white">
                  {isInternalLink(secondaryCtaHref) ? (
                    <Link to={secondaryCtaHref}>{secondaryCtaLabel}</Link>
                  ) : (
                    <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
                  )}
                </Button>
              )}
              {ctaHref && ctaLabel && (
                <Button asChild size="sm" className="bg-white text-blue-600 hover:bg-white/90 font-semibold">
                  {isInternalLink(ctaHref) ? (
                    <Link to={ctaHref}>{ctaLabel}</Link>
                  ) : (
                    <a href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaLabel}</a>
                  )}
                </Button>
              )}
              <button
                aria-label="Dismiss announcement"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-white/70 hover:bg-white/20 hover:text-white"
                onClick={dismiss}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBanner;



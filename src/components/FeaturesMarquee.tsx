import { Marquee } from "./ui/marquee"

const features = [
  "Conversion Rate Optimization",
  "Strategic Lead Generation",
  "High-Performance Websites",
  "Marketing Automation",
  "AI Receptionist",
  "B2B Sales Systems",
  "SEO & Content Strategy",
  "Paid Advertising",
  "Brand Strategy"
];

export default function FeaturesMarquee() {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="flex items-center justify-center w-full">
        <Marquee pauseOnHover={true} className="[--duration:600s]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-xl md:text-2xl font-medium text-zinc-400 whitespace-nowrap">
                {feature}
              </span>
              <span className="mx-8 text-brand-purple/50 text-2xl">•</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

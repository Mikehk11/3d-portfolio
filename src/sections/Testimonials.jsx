import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="More About Me"
          sub="💡 What I value, enjoy, and strive for"
        />

        <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex flex-col gap-2">
                <p className="font-bold">{testimonial.name}</p>
                {testimonial.review && (
                  <p className="text-white-50 text-sm whitespace-pre-line">
                    {testimonial.review}
                  </p>
                )}
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
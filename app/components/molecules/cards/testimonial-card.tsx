import React from "react";
import StarRating from "../../atoms/rating/rating-bar";


interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  comment: string;
}

interface TestimonialsData {
  title: string;
  highlightWord: string;
  testimonials: Testimonial[];
}

interface TestimonialsProps {
  data: TestimonialsData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  const { title, highlightWord, testimonials } = data;
  const titleParts = title.split(highlightWord);

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          {titleParts[0]}
          <span className="text-red-500">{highlightWord}</span>
          {titleParts[1]}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <StarRating rating={testimonial.rating} />

              <p className="mt-4 text-gray-600 italic leading-relaxed">
                {testimonial.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

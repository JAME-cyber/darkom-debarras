interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Marie L.",
    location: "Annemasse",
    text: "Service excellent ! L'équipe a été très professionnelle et rapide. Mon garage n'a jamais été aussi rangé. Je recommande fortement.",
    rating: 5
  },
  {
    name: "Philippe M.",
    location: "Thonon-les-Bains",
    text: "Après le décès de ma mère, nous avions un appartement entier à vider. Darkom a géré toute la succession avec beaucoup de tact et d'efficacité.",
    rating: 5
  },
  {
    name: "Sophie B.",
    location: "Fillinges",
    text: "Intervention en moins de 48h comme promis. Équipe sérieuse et respectueuse. Le tri écologique m'a particulièrement plu.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure publicité
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-surface rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg aria-hidden="true" key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-body mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

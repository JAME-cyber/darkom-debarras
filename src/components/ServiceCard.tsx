import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

export default function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="w-14 h-14 bg-primary-light/10 rounded-xl flex items-center justify-center text-primary-light mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-muted mb-6">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-body">
            <svg aria-hidden="true" className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <Link 
        to="/contact" 
        className="inline-flex items-center text-primary font-semibold hover:text-primary-light transition-colors"
      >
        Demander un devis
        <svg aria-hidden="true" className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}

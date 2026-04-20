import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const SIMULATOR_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_SIMULATOR_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export interface ContactFormData {
  nom: string;
  email: string;
  telephone: string;
  type: string;
  message: string;
}

export interface SimulatorFormData {
  nom: string;
  email: string;
  telephone: string;
  service: string;
  typeBien: string;
  surface: string;
  etage: string;
  ascenseur: string;
  volume: string;
  accessible: string;
  objetsSpeciaux: string[];
  optionNettoyage: string;
  lieu: string;
  codePostal: string;
  prixMin: string;
  prixMax: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  console.log('EmailJS config:', { SERVICE_ID, CONTACT_TEMPLATE_ID, PUBLIC_KEY: PUBLIC_KEY ? 'set' : 'missing' });
  await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, {
    from_name: data.nom,
    from_email: data.email,
    phone: data.telephone,
    service_type: data.type,
    message: data.message,
  }, PUBLIC_KEY);
}

export async function sendSimulatorEmail(data: SimulatorFormData): Promise<void> {
  console.log('EmailJS config:', { SERVICE_ID, SIMULATOR_TEMPLATE_ID, PUBLIC_KEY: PUBLIC_KEY ? 'set' : 'missing' });
  await emailjs.send(SERVICE_ID, SIMULATOR_TEMPLATE_ID, {
    from_name: data.nom,
    from_email: data.email,
    phone: data.telephone,
    service: data.service,
    type_bien: data.typeBien,
    surface: data.surface,
    etage: data.etage,
    ascenseur: data.ascenseur,
    volume: data.volume,
    accessibilite: data.accessible,
    objets: data.objetsSpeciaux.join(', '),
    nettoyage: data.optionNettoyage,
    lieu: data.lieu,
    code_postal: data.codePostal,
    prix_min: data.prixMin,
    prix_max: data.prixMax,
  }, PUBLIC_KEY);
}

import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href,
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-lg hover:shadow-xl",
    secondary: "bg-accent text-white hover:bg-accent-light shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={styles}>{children}</Link>;
  }
  
  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}

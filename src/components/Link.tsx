import React from 'react';
import { useRouter } from '../router/RouterContext';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '', onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si clic avec touche modificatrice (cmd/ctrl/shift/alt) ou clic roulette/droit, comportement natif
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      if (onClick) onClick(e);
      return;
    }

    // Si lien externe ou mailto/tel
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      if (onClick) onClick(e);
      return;
    }

    // Gestion du hash sur la même page
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      if (onClick) onClick(e);
      return;
    }

    // Navigation interne SPA
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(href);
  };

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

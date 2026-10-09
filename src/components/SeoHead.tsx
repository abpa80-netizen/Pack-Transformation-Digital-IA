import React from 'react';
import { useSeo, SeoProps } from '../hooks/useSeo';

export const SeoHead: React.FC<SeoProps> = (props) => {
  useSeo(props);
  return null;
};

import * as React from 'react';
import { ImageProps } from './types';

export const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};
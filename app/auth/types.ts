export interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
  }
  
  export interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
  }
  
  export interface ImageProps {
    src: string;
    alt: string;
    className?: string;
  }
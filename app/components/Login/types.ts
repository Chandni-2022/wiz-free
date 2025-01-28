export interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
  }
  
  export interface ActionButtonProps {
    text: string;
    variant: 'primary' | 'secondary';
    onClick?: () => void;
  }
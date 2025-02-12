// export interface InputFieldProps {
//     label: string;
//     placeholder: string;
//     type?: string;
//     id: string;
//   }
  
  export interface SignUpFormData {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  export interface ButtonProps {
    variant: 'primary' | 'secondary';
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string; 
  }

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
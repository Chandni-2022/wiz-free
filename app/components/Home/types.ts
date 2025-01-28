export interface QuizCardProps {
    title: string;
    description: string;
    iconSrc?: string;
    isHighlighted?: boolean;
  }
  
  export interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  export interface HeaderProps {
    userName: string;
    userAvatarSrc?: string;
  }
  
  export interface NavigationProps {
    onHomeClick: () => void;
    onProfileClick: () => void;
    onLogoutClick: () => void;
  }
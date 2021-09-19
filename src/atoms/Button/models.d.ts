export interface ButtonProps {
    children: string;
    type?: 'button' | 'submit' | 'reset',
    onClick?: () => void;
    outlined?: boolean;
    customClass?: string;
}

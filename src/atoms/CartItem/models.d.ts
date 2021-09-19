export interface CartItemProps {
    title: string,
    price: number,
    isListItem?: boolean,
    onRemove?: () => void,
    customClass?: string,
}

export type ItemType = {
    title: string,
    price: number,
    onRemove: () => void,
}

export interface CartProps {
    items: ItemType[],
}

export type ItemType = {
    title: string,
    price: number,
}

export interface CartProps {
    items: ItemType[]
}

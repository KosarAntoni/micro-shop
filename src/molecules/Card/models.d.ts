type ImageType = {
    imageData: string,
    altText: string
}

export interface CardProps {
    image: ImageType,
    title: string,
    price: number,
    button: string,
    onClick: () => void,
}

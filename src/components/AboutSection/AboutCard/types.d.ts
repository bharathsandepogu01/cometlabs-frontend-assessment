import { PropsWithChildren } from 'react';

export default interface IAboutCardProps extends PropsWithChildren {
    imageURL: string;
    imageAlt: string;
    colorHeader: string;
    header: string;
    description: string;
    flipCard: boolean;
}
import { PropsWithChildren } from 'react';

export default interface IHighlightProps extends PropsWithChildren {
    imageURL: string;
    imageAlt: string;
    header: string;
    description: string;
}
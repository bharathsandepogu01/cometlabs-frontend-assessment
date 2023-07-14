import { PropsWithChildren } from 'react';

export default interface IFeatureCardProps extends PropsWithChildren {
    imageURL: string;
    imageAlt: string;
    header: string;
    description: string;
}
import { SFC } from 'react';

export interface IConverterFieldProps {
    description: string;
    active: boolean;
    className?: string;
};

type IConverterField = SFC<IConverterFieldProps>;

export default IConverterField;
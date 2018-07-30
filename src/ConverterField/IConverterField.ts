import { SFC } from 'react';

export interface IConverterFieldProps {
    description: string;
    active: boolean;
};

type IConverterField = SFC<IConverterFieldProps>;

export default IConverterField;
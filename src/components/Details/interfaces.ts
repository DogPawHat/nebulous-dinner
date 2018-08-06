import { ComponentClass, SFC } from "react";

export interface IDetailsStateProps {
  sending: string;
  rate: string;
  fee: string;
  date: string;
  reciving: string;
  savings: string;
}

export interface IDetailsOwnProps {
  className?: string
}

export type IDetailsProps = IDetailsStateProps & IDetailsOwnProps;

export type IDetails = ComponentClass<IDetailsOwnProps> | SFC<IDetailsOwnProps>

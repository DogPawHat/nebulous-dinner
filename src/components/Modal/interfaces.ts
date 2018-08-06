import { SFC, ComponentClass } from "react";

export interface IModalStateProps {
  display: boolean;
};

export type IModalProps = IModalStateProps & {};

export type IModal = SFC<{}> | ComponentClass<{}>;

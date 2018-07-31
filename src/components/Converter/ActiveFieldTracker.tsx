import { Component, ReactNode, Key } from 'react';


export type IMakeActive = (key: Key) => () => void;
export type IIsActive = (key: Key) => boolean;
export type IActiveFieldTrackerRenderProp = (
  isActive: IIsActive,
  makeActive: IMakeActive
) => ReactNode;


interface IActiveFieldTrackerProps {
  defaultKey: Key;
  render: IActiveFieldTrackerRenderProp
}

interface IActiveFieldTrackerState {
  activeKey: Key;
}


class ActiveFieldTracker extends Component<IActiveFieldTrackerProps, IActiveFieldTrackerState> {

  constructor(props: IActiveFieldTrackerProps) {
    super(props);
    this.state = {
      activeKey: props.defaultKey
    }
  }

  public makeActive: IMakeActive = (key: Key) => () => {
    this.setState({
      activeKey: key
    })
  }

  public isActive: IIsActive = (key: Key) => key === this.state.activeKey;

  public render() {
    return this.props.render(this.isActive, this.makeActive);
  }
}

export default ActiveFieldTracker;

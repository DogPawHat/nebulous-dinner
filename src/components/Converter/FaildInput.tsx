import React, {
  Component,
  ChangeEventHandler
} from 'react';
import styled from 'react-emotion';
import { fontSizes, fontWeights, colors } from '../../styleUtils';

interface IInputProps {
  value?: string;
  onChange: (value: string) => void;
}

// CSS
const intergerInputClassName = 'Input__interger';
const decimalInputClassName = 'Input__decimal';
const dotClassName = 'Input__dot';

const InputRoot = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  align-items: baseline;
  height: 2.375rem;
  .${intergerInputClassName}, .${decimalInputClassName}, .${dotClassName} {
    font-weight: ${fontWeights.medium};
    font-size: ${fontSizes.large};
    flex: 0 1 auto;
  }
  .${intergerInputClassName}, .${decimalInputClassName} {
    border: none;
    background: transparent;
  }
  .${intergerInputClassName} {
    font-size: ${fontSizes.huge};
    color: ${colors.black};
  }
  .${decimalInputClassName}, .${dotClassName} {
    font-size: ${fontSizes.large};
    color: ${colors.grey};
  }
`;

const largeFigureRegx = /^[£€].?[1-9][\d,]*/;
const smallFigureRegx = /\d\d$/;
const wholeFigureRegX = /^([£€].?[1-9][\d,]*)\.(\d\d)$/;

const checkValue = (value: string) => wholeFigureRegX.test(value);

class Input extends Component<IInputProps> {
  get integerValue() {
    const { value } = this.props;

    if (!value || !checkValue(value)) {
      return '0';
    }

    const match = value.match(largeFigureRegx);

    if (!match || match.length !== 1) {
      return '0';
    }

    return match[0];
  }

  get decimalValue() {
    const { value } = this.props;

    if (!value || !checkValue(value)) {
      return '0';
    }

    const match = value.match(smallFigureRegx);

    if (!match || match.length !== 1) {
      return '0';
    }

    return match[0];
  }

  public onIntegerValueChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;

    const newValue = `${value}.${this.decimalValue}`;

    this.props.onChange(newValue);
  };

  public onDecimalValueChange: ChangeEventHandler<HTMLInputElement> = event => {
    const { value } = event.target;

    const newValue = `${this.integerValue}.${value}`;

    this.props.onChange(newValue);
  };

  public render() {
    return (
      <InputRoot>
        <span
          contentEditable={true}
          onInput={this.onIntegerValueChange}
          className={intergerInputClassName}
        >{this.integerValue}</span>
        <span className={dotClassName}>.</span>
        <span
          contentEditable={true}
          onInput={this.onDecimalValueChange}
          className={decimalInputClassName}
        >{this.decimalValue}</span>
      </InputRoot>
    );
  }
}

export default Input;

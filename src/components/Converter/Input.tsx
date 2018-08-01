import React, {
  Component,
  ChangeEventHandler
} from 'react';
import styled, {css} from 'react-emotion';
import { fontSizes, fontWeights, colors } from 'src/styleUtils';

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

const inputWidth = (st?: string) => css`
  width: ${st? st.length : 1}ch;
`;

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
        <input
          value={this.integerValue}
          onChange={this.onIntegerValueChange}
          className={`${intergerInputClassName} ${inputWidth(this.integerValue)}`}
        />
        <span className={dotClassName}>.</span>
        <input
          value={this.decimalValue}
          onChange={this.onDecimalValueChange}
          className={`${decimalInputClassName} ${inputWidth(this.decimalValue)}`}
        />
      </InputRoot>
    );
  }
}

export default Input;

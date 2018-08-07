import styled from 'react-emotion';
import { fontSizes, fontWeights, colors } from '../../styleUtils';

interface IButtonProps {
  state?: 'main' | 'secondary' | 'disabled-main'
  size?: 'normal' | 'small';
}

const Button = styled('button')`
  border-radius: 4px;
  border-radius: 0.25rem;
  border-width: 0.065rem;
  border-style: solid;
  border-color: ${(props: IButtonProps) => {
    switch(props.state) {
      case 'secondary':
        return colors.lightgrey;
      case 'disabled-main':
        return colors.lightgrey;
      case 'main':
      default:
        return colors.darkblue;
    }
  }};
  color: ${(props: IButtonProps) => {
    switch(props.state) {
      case 'secondary':
        return colors.verylightblack;
      case 'disabled-main':
        return colors.white;
      case 'main':
      default:
        return colors.white;
    }
  }};
  font-size: ${(props: IButtonProps) => 
    props.size === 'normal' ?
    fontSizes.medium :
    fontSizes.small
  };
  font-weight: ${fontWeights.medium};
  background-color: ${(props: IButtonProps) => {
    switch(props.state) {
      case 'secondary':
        return colors.verylightgrey;
      case 'disabled-main':
        return colors.lightblue;
      case 'main':
      default:
        return colors.blue;
    }
  }};
  padding: ${(props: IButtonProps) => 
    props.size === 'normal' ?
   `0.9rem 1.15rem 0.8rem` :
   `0.4rem 0.75rem 0.4rem`
  };
  line-height: 1.2rem;
`;

Button.defaultProps = {
  state: 'main',
  size: 'normal'
}

export default Button;

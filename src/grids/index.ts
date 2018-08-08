// This file handles all the grid layout configuration for the main page
// And exports the resultant CSS class names and styled components

import styled, { css } from 'react-emotion';
import facepaint from 'facepaint';

import { colors, breakpoints } from '../styleUtils';

// Grid Math
const mainColumn = 35.25;
const spaceBetween = 3.30;
const secondColumn = 19.50;

const headerWidth = mainColumn + (spaceBetween * 2) + secondColumn;

// Breakpoints
const mq = facepaint([
  breakpoints.small,
  breakpoints.medium,
  breakpoints.large
])


// Main Grid Props
const mainGridSmall = `
  'header header header' 4.15rem
  '. main .' auto
  '. secondary .' auto
  / 1.5rem auto 1.5rem;
`;

const mainGridMedium = `
  'header header header header' 4.15rem
  'main main secondary secondary' auto
  / 3.3rem auto auto 3.3rem;
`;


const mainGridLarge = `
  'header header header header' 4.15rem
  'main main secondary secondary' auto
  / auto ${(mainColumn + spaceBetween)}rem ${(secondColumn + spaceBetween)}rem auto;
`;

const mainGrid = mq({
  grid: [mainGridSmall, mainGridMedium, mainGridLarge]
})

// Sub Grid Props
const headerSubGridSmall = `
  '. sub-header .' auto
  / 1.5rem auto 1.5rem;
`;

const headerSubGridMedium = `
  '. sub-header .' auto
  / 3.3rem auto 3.3rem;
`;


const headerSubGridLarge = `
  '. sub-header .' auto
  / auto ${headerWidth}rem auto;
`;

const headerSubGrid = mq({
  grid: [headerSubGridSmall, headerSubGridMedium, headerSubGridLarge]
});

const mainSubGridSmall = `
  '. . .' ${spaceBetween}rem
  '. sub-main .' auto
  / 1.5rem auto 1.5rem;
`;

const mainSubGridMedium = `
  '. . .' ${spaceBetween}rem
  '. sub-main .' auto
  / 3.3rem auto ${spaceBetween}rem;
`;

const mainSubGridLarge = `
  '. . .' ${spaceBetween}rem
  '. sub-main .' auto
  / auto ${mainColumn}rem ${spaceBetween}rem;
`;

const mainSubGrid = mq({
  grid: [mainSubGridSmall, mainSubGridMedium, mainSubGridLarge]
});

const secondSubGridSmall = `
  '. . .' ${spaceBetween}rem
  '. sub-second .' auto
  / 1.5rem auto 1.5rem;
`;

const secondSubGridMedium = `
  '. . .' ${spaceBetween}rem
  '. sub-second .' auto
  / ${spaceBetween}rem ${secondColumn}rem auto;
`;

const secondSubGridLarge = `
  '. . .' ${spaceBetween}rem
  '. sub-second .' auto
  / ${spaceBetween}rem ${secondColumn}rem auto;
`;

const secondSubGrid = mq({
  grid: [secondSubGridSmall, secondSubGridMedium, secondSubGridLarge]
});


// Exports
export const MainGrid = styled('div')`
  display: grid;
  height: 100vh;
  ${mainGrid}
`;

export const HeaderContainerGrid = styled('div')`
  grid-area: header;
  background-color: ${colors.black};
  display: grid;
  ${headerSubGrid}
`;

export const MainContainerGrid = styled('div')`
  grid-area: main;
  display: grid;
  ${mainSubGrid}
`;

export const SecondaryContainerGrid = styled('div')`
  grid-area: secondary;
  background-color: #fafafa;
  display: grid;
  ${secondSubGrid}
`;

export const headerGridChild = css`
  grid-area: sub-header;
`;

export const mainGridChild = css`
  grid-area: sub-main;
`;

export const secondaryGridChild = css`
  grid-area: sub-second;
`;

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
  'header' 4.15rem
  'main' auto
  'secondary' auto
  / auto;
`;


const mainGridLarge = `
  'header header header header' 4.15rem
  'main main secondary secondary' auto
  / auto ${(mainColumn + spaceBetween)}rem ${(secondColumn + spaceBetween)}rem auto;
`;

const mainGrid = mq({
  grid: [mainGridSmall, mainGridSmall, mainGridLarge]
})

// Sub Grid Props
const headerSubGridSmall = `
  'sub-header' auto
  / 100%;
`;

const headerSubGridLarge = `
  '. sub-header .' auto
  / auto ${headerWidth}rem auto;
`;

const headerSubGrid = mq({
  grid: [headerSubGridSmall, headerSubGridSmall, headerSubGridLarge]
});

const mainSubGridSmall = `
'.' ${spaceBetween}rem
'sub-main' auto
/ 100%;
`;

const mainSubGridLarge = `
  '. . .' ${spaceBetween}rem
  '. sub-main .' auto
  / auto ${mainColumn}rem ${spaceBetween}rem;
`;

const mainSubGrid = mq({
  grid: [mainSubGridSmall, mainSubGridSmall, mainSubGridLarge]
});

const secondSubGridSmall = `
  '.' ${spaceBetween}rem
  'sub-second' auto
  / 100%;
`;

const secondSubGridLarge = `
  '. . .' ${spaceBetween}rem
  '. sub-second .' auto
  / ${spaceBetween}rem ${secondColumn}rem auto;
`;

const secondSubGrid = mq({
  grid: [secondSubGridSmall, secondSubGridSmall, secondSubGridLarge]
});


// Exports
export const MainGrid = styled('div')`
  min-height: 100vh;
  display: grid;
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

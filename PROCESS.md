Process so far

0. Set up development envrionment (Usually use Arch Linux with Visual Studio Code and zsh shell)
1. Get `create-react-app` installed and create app with `react-scripts-ts` (I prefer to use TypeScript)
2. Install `emotion`, `react-emotion` and `styled-system` for css-in-js (This gives me a lot of advantages to use JS features to aid my styling)
3. Set up `@storybook\react` for a nice UI development envionment
4. Relise I can't open the .skech file because of lack of access to a mac, so get an account on figma and avocode to view the file in Windows and Linux (bit of juggling there)
5. Extract css and start developing basic presentational components, using storybook for instant feed back
6. Start to place the components into the main `App.tsx` file to place the componets in the right place.
7. Keep developing presitional components to better match the wireframe.
8. Create the Converter stateful component to deal with the currency conversion between sending and reciving, including fees
9. Implement CSS Grid for the main page layout (header, main column, secondary column)
10. Implement `redux` and `react-redux`. Redux will be used to manage the display state of the modal, and sync the Converter and Details componets.
11. Set up the Modal and Identity Verification componets
12. Finalize mobile responsiveness
13. Clean up, finish writing notes
14. Submit project.


Problems faced so far:
- Sketch file game me some issues due to not having a mac, attemped to import into Avocode, but had to do it through Figma, because the file was made with an older version of Sketch.
- I had some issues with the fonts (Post Grotesk) importing into `create-react-app` and Avocode, had to do some trial and error before finding the right solution
- Had to do some heavy editing of the Webpack file for storybook due to it not loading the svg logo probably when `create-react-app` didn't have issues.
  - I'm using an alpha version of `@storybook/react` which has updated its default svg loader to something a bit more unreliable.
- Was a bit of trouble getting the boxes of the converters to have proper border colours and radius. There not actually all in the same box; there a serice of boxes with diffrent styles depending on there position in relation to there siblings and whether or not they are active and have to show a blue border, without having a double space border.
- Lot of work had to be done with the CSS grid on the main page, especally since I was nesting grids inside sub sections of the page. I put all of the grid configuration in it's own page to cut down on the length of `App.tsx`

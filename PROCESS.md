Process so far

0. Set up development envrionment (Usually use Arch Linux with Visual Studio Code and zsh shell)
1. Get `create-react-app` installed and create app with `react-scripts-ts` (I prefer to use TypeScript)
2. Install `emotion`, `react-emotion` and `styled-system` for css-in-js (This gives me a lot of advantages to use JS features to aid my styling)
3. Set up `@storybook\react` for a nice UI development envionment
4. Relise I can't open the .skech file because of lack of access to a mac, so get an account on figma and avocode to view the file in Windows and Linux (bit of juggling there)
5. Extract css and start developing basic presentational components, using storybook for instant feed back
6. Start to place the components into the main `App.tsx` file to place the componets in the right place.



Problems faced so far:
- Skecth file game me some issues due to not having a mac, attemped to import into Avocode, but had to do it through Figma, because the file was made with an older version of Sketch.
- I had some issues with the fonts (Post Grotesk) importing into `create-react-app` and Avocode, had to do some trial and error before finding the right solution
- Had to do some heavy editing of the Webpack file for storybook due to it not loading the svg logo proberly when `create-react-app` didn't have issues.
  - I'm using an alpha version of `@storybook/react` which has updated its default svg loader to something a bit more unreiliable.

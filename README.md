How to use this app

Basic Browsing:
1. Go to the app hosted [here](http://nebulous-breakfast.surge.sh/)
2. You can type a number of currency into the converter. Both fields are tied together (with the GBP field subtraced a fee of 2.50). The details of the conversion will appear in the detials sidebar.
3. When you click next, you will open the SMS code modal
4. When the modal is open, you can click next to clode the modal
5. Every other place where there is a button has been left inactive for a future intergration with an API.

Development Set up
- `git clone` this repo and use `yarn` or `npm` to install packages
- `yarn start` to view the site on `localhost:3000`
- `yarn test` to run tests on the Conveter component
- `yarn run storybook` to view the Storybook for this app at `localhost:6006`. This will allow you to view the components of the app in isolation of each other, with some options not used in the main app.
- `yarn build` to build the app for distribution. (Won't cover hosting here, but I use [surge.sh](https://surge.sh))

This was build with `create-react-app`, non-ejected. The default readme can be found at `CRA_README.md`. More detials on the process is at `PROCESS.md`


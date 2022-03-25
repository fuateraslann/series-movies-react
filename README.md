
1-) The code should be scaleable , not fragile , and basically be compatible with SOLID structures . So a react component should have a single purpose and job. For this reason, separating components and making them re-usable is one of the most important things. For example, although subtitle is a variable component according to all pages, I made it usable again and again with the help of a props by only changing the text inside.I thought of pages as containers and used the components that should be in the page in these containers.In my opinion, it is better to call components such as header and footer, which are common to all, in app.js once, rather than calling them separately for each page. Since I needed to fetch the data in two pages as a common function, I decided to write a hook and I got the data by 'filtering' through this hook. Another reason I wrote it with hook is to use error and loading states.

2-)It would be better to write tests ,use a state management tool like context api or redux and to write styles in a css file that I can import and use, not in a component.

3-) If there was much more time, I would like to do test driven development or writing detailed tests and also instead of using ready-made ui components like I use in filmcards, I could write their own css. If it was a project with a more complex parent-child relationship and a lot of componentsü, I would need a state container. Even as a different solution, instead of using hooks, I could fetch the data only once and use it in all components via state management. Currently, data is fetched separately for series and movies. I chose this solution because it is more understandable and easier. In complex problems, the state management tool should be used and it would be useful in terms of performance and reusability.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

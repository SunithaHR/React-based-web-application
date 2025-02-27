# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



## Project implementation steps

## 1. Counter Component
**Features:**

Buttons for increment, decrement, and reset.

Background color changes based on the counter value (linear or bezier curve).

Reset button resets the background color to its initial state.

**Implementation:**

Use useState to manage the counter value.

Use useEffect to update the background color dynamically.

Save the counter value to localStorage to persist across re-renders.

## 2. User Data Form
**Features:**

Form fields for name, address, email, and phone.

Autogenerate a user ID on form load.

Save form data to localStorage on submission.

Warn users about unsaved changes if they try to close the browser.

**Implementation:**

Use useState to manage form data.

Use useEffect to autogenerate a user ID and handle the beforeunload event.

Save form data to localStorage on submission.

## 3. Rich Text Editors
**Features:**

Display user data from localStorage in a rich text editor.

Provide formatting options (bold, italic, underline, lists).

Persist editor content in localStorage.

**Implementation:**

Use @tiptap/react for the rich text editor.

Load user data from localStorage and display it in the editor.

Save editor content to localStorage on change.

# Vite Starter

## Useful Links

- https://emotion.sh/docs/introduction
- https://emotion.sh/docs/styled
- https://mui.com/
- https://mui.com/material-ui/api/toolbar/
- https://mui.com/material-ui/react-app-bar/
- https://mui.com/material-ui/react-container/
- https://mui.com/material-ui/react-grid/
- https://mui.com/material-ui/react-typography/
- https://react-chartjs-2.js.org/
- https://www.chartjs.org/

  Vite starter template with React and Typescript. It provides a solid foundation for building web applications using modern technologies. This template includes support for environment variables, allowing easy configuration of your project. It also leverages Sass for styling, making it convenient to create visually appealing designs.

## Getting Started

To start the development server, run the following command `npm run dev`
To build the project, run the following command `npm run build`
To preview the built project, run the following command `npm run preview`

## Environment Variables

Vite supports environment variables by creating a .env file in the project's root directory. Add environment variables starting with VITE\_ to this file. For example `VITE_API_KEY=123456789`

You can access environment variables in your code using import.meta.env. For example:

```jsx
const Header = () => {
  return <div>{import.meta.env.VITE_API_KEY}</div>;
};

export default Header;
```

## Using SASS

Sass support is built into Vite. We can use it by installing the sass package. `npm install sass`
Create a `styles` folder and add `main.scss` file.

```css
body {
  background-color: steelblue;
}
```

Import Sass file into the app.jsx file.

```jsx
import "./styles/main.scss";
```

## Project Structure

The project structure is organized as follows:

- `.github`: GitHub-related files
- `public`: Public assets
- `src`: Source code
- `.gitignore`: Git ignore rules
- `README.md`: Project documentation
- `index.html`: HTML template
- `package-lock.json`: Lock file for npm dependencies
- `package.json`: Project configuration and dependencies
- `tsconfig.json`: TypeScript configuration
- `tsconfig.node.json`: TypeScript configuration for Node.js
- `vite.config.ts`: Vite configuration

## License

This project is licensed under the MIT License.

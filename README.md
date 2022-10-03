# Weather App

The aim of the application is to find the current and all seven days forecast weather of all countries and cities.

## Technology stack

The application was created making use of the [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) tool, thus generating a [Nextjs](https://nextjs.org) based web-app. <br/>
That implicitly means we are building a web application using [React](https://reactjs.org).

If you are unfamiliar with Nextjs, a good starting point where to start reading is [The Hitchhiker’s Guide to Next.js](https://medium.com/swlh/the-hitchhikers-guide-to-next-js-fd7aa14ae8d0). <br/>
The article provides a conceptual overview on why and how the solution differs from other architectural implementations.

[Typescript](https://www.typescriptlang.org) is the language used to build the application.

Unit tests are written in Typescript, using [jest](https://jestjs.io).<br/>
Their files are colocated alongside source files.

Continuous Integration and Continuous Deployment workflows run using [GitHub actions](https://github.com/features/actions).

## Requirements

- [Nodejs](https://nodejs.org), version 14+
- [Yarn](https://yarnpkg.com)
- [Github connection through SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to clone the repository.

### Project commands

Project commands are found in the `scripts` section of `package.json` file.

### Configuration files

Environment variables are found in `.env`. Notice the committed `.env` is used as base and contains development environment variables. <br/>
Their values will be overridden in CI environments with proper staging or production reference values. <br/>
It is possible to review workflow files (found in `.github/workflows/`) describing CI and CD processes to understand which variables get overridden.

Typescript related configurations are found in `tsconfig.json`. <br/>

GitHub actions related configurations are found in `.github/`. Automated workflows are listed and configured in `.github/workflows/`.

### Repository organisation

Following are the main project directories:

- `packages/`: local packages. <br/>
  Notice there is no mono-repository setup. Local packages are listed among third-party dependencies making use of [local paths](https://docs.npmjs.com/cli/v7/configuring-npm/package-json#local-paths). Their dependencies are defined as `peerDependencies` and installed by the project's root `package.json` file.
- `public/`: files served by the application as static assets.
- `src/`: application source files and their unit tests. <br />
  Inside this folder, files are organised following a feature-first approach.

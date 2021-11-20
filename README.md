<img src="./docs/logo.ico" alt="mastermind-logo" width="20%"/>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


# Mastermind

Mastermind is a classic problem-solving game that challenges players identify patterns and respond to turn feedback in a bid to guess the hidden sequence of colors. This application implements 2 algorithms to solve the game of Mastermind. First, a naive solver that solves the colors iteratively by slot. Second, a genetic algorithm inspired by [Dungyichao's Python implementation](https://github.com/Dungyichao/Mastermind), reimplemented and modified in JavaScript. The application is built using the [React framework](https://github.com/facebook/react) and hosted on GitHub pages [here](glennchia.github.io/mastermind-react/). Users can start games with 2 settings (a pool of 5 or 6 colors) and pit their solving skills against the naive and genetic algorithm solvers.

# Running the application locally

Run the following to start the app locally:

```bash
npm install
npm run start
```

# Deployment

This static site is deployed to GitHub pages. Run:

```bash
npm run deploy
```

# Contributing

Before making commits, lint the code

```bash
npm run lint:fix
```
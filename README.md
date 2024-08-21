# genkit-github-actions-sample

`genkit-github-actions-sample` is a sample repository for learning how to run Firebase Genki flow on GitHub Actions.

- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [GitHub Actions](#github-actions)
- [Making Changes](#making-changes)
- [License](#license)

## Requirements

Before you start, make sure you have these installed:

- **Node.js** version 22 or later
- **npm**
- **Genkit**

For Genkit installation, see the [official guide](https://firebase.google.com/docs/genkit/get-started).

Check your installations by running:

```bash
$ node --version # the below version is on my environment
v22.4.1
$ npm --version # the below version is on my environment
10.7.0
$ genkit --version # the below version is on my environment
0.5.4
```

## Setup

**Install Project Dependencies**: Open your terminal, navigate to this project's folder, and run:

```bash
$ npm install
```

## Usage

1. **Set the `OPENAI_API_KEY` Environment Variable**

Before running the project, you need to provide your OpenAI API key. This key allows your application to communicate with OpenAI's services. Replace `your_api_key` with the actual API key you obtained from OpenAI.

```bash
$ export OPENAI_API_KEY=your_api_key
```

2. **Run the Genkit Flow locally**

To run the local script, use the following command:

```bash
$ npm run script [URL]
# example
$ npm run script https://www.githubstatus.com/
```

## GitHub Actions

To run the script within a GitHub Action, add the following step to your workflow file `.github/workflows/summarize.yml`:

NOTE: [Creating secrets for a repository](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) before running the GitHub Action.

```yml
name: summarize

on:
  schedule:
    - cron: "0 0 * * 1-5" # JST 09:00 every weekday
  workflow_dispatch: # Allows manual triggering of the workflow

jobs:
  summarize:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Set environment variables
        run: echo "OPENAI_API_KEY=${{ secrets.OPENAI_API_KEY }}" >> ./.env
      - name: Install dependencies
        run: npm install
      - name: Summarize content
        run: npm run script https://www.githubstatus.com/ > log.txt
```

## Making Changes

### Building the Project

After making changes, you might need to build the project to see your changes in action:

```bash
$ npm run build
```

### Formatting and Linting

To ensure your code follows the project's coding standards, run the formatting and linting tools:

```bash
$ npm run typecheck # type check without modifying files
$ npm run check     # scan without modifying files
$ npm run fix       # modify files
```

## License

MIT

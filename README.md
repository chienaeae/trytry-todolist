# TrytryTodolist

This is a todo list application.

## Project Introduction

This project has frontend and backend applications and multiple language specific libraries.

Frontend Application:

`apps/todolist-web`, `apps/todolist-web-e2e`

Backend Application:

`apps/todolist-server`

Go Libraries:

`none`

JS Libraries:

`none`

JS UI Libraries:

`none`

## Development Get Started

### Fronend

To start the development frontend server:

```
npx nx run todolist-web:dev
```

To start the production frontend server:

```
npx nx run todolist-web:start
```

See more tasks to use:

```
npx nx show project todolist-web -web
```

### Backend

To start the development server:

```
npx nx run todolist-server:serve
```

To build the production server:

```
npx nx run todolist-server:build
```

To run the production server after successfuly build:

```
./dist/apps/todolist-server
```

See more tasks to execute:

```
npx nx show project todolist-server -web
```

### Other

**Dependecy Graph**:

Nx automatically detects the dependencies between the various parts of your workspace and builds a [project graph](https://nx.dev/features/explore-graph). This graph is used by Nx to perform various optimizations such as determining the correct order of execution when running tasks like nx build, identifying affected projects and more. Interestingly you can also visualize it. Just run:

```
npx nx graph
```

**Reset**:

Nx [reset](https://nx.dev/nx-api/nx/documents/reset) command can cached Nx artifacts and metadata about the workspace and shuts down the Nx Daemon.

```
npx nx reset
```

## NX

This project use [nx](https://nx.dev/) to manage monorepo

### Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

### Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

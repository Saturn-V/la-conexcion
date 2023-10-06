# La Conexcion Monorepo

This is the official La Conexcion monorepo (powered by [Turborepo](https://turbo.build)).

## Running this monorepo locally

1. Clone the repository
2. Globally install turbo. By design, a global install of turbo will not conflict with project-dependent installs. `npm install turbo --global`
3. Navigate to the cloned repository `cd la-conexcion`
4. Install the monorepo's dependencies `npm install --include-dev`
5. Disable nextjs telemtry to avoid a nuanced error when running our projects locally (see [here](https://github.com/vercel/next.js/issues/47121#issuecomment-1499044345)). `npx next telemetry disable`
6. Run our apps `turbo dev`

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Apps
- `docs`: a [Next.js](https://nextjs.org/) app that (will eventually) serve documentation for our UI components
- `core`: another [Next.js](https://nextjs.org/) app that serves our company's main site
- `web`: another [Next.js](https://nextjs.org/) app that core will move into (just a rename)

#### Packages
- `ui`: a stub React component library shared by all applications in `/apps`
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`) used throughout the monorepo
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `tailwind-config`: `tailwind` configurations (includes `tailwind.config.js` and `postcss.config.js`) used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

<!-- TODO document shadcn -->
<!-- TODO document shadcn/custom utils  -->

### Build

To build all apps and packages, run the following command:

```
cd la-conexcion
turbo build
```

### Develop

To develop all apps and packages, run the following command:

```
cd la-conexcion
turbo dev
```

### Remote Caching [TODO REMOVE]

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd la-conexcion
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

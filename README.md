# Website

This website is built using [Docusaurus 2](https://docusaurus.io/) and [docusaurus-openapi-docs plugin](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. It will also execute "gen-all", regenerating all openAPI md files. (See package.json scripts)

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Docker

Build docker image:

`docker build -t a-block-io .`

Run image on [http://localhost:8080](http://localhost:8080):

`docker run -p 8080:8080 a-block-io`



[![nodejs][nodejs-shield]][nodejs-url]
[![npm][npm-shield]][npm-url]
[![nestjs][nestjs-shield]][nestjs-url]
[![docker][docker-shield]][docker-url]
[![typescript][typescript-shield]][typescript-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://aerodyne.group/images/pasted-image-253-1.webp">
    <img src="https://aerodyne.group/images/pasted-image-253-1.webp" alt="Logo" width="280" height="71" />
  </a>

  <h3 align="center">Aerodyne Restaurant APIs</h3>

  <p align="center">
    Drone Technology . Data Technology . Digital Transformation
    <br />
    Proven and Leading Global DT3 Solutions Provider since 2014.
    <br />
    <a href="https://aerodyne-api.kokweng.net/graphql"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://aerodyne.kokweng.net/">View Demo</a>
    ·
    <a href="https://github.com/waynecheah/aerodyne-api/-/issues/new">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-service">About The Service</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#run-on-local-machine">Run on Local Machine</a></li>
        <li><a href="#run-on-docker-container">Run on Docker Container</a></li>
      </ul>
    </li>
    <li>
      <a href="#deployment">Deployment</a>
      <ul>
        <li><a href="#continuous-integration">Continuous Integration</a></li>
        <li><a href="#continuous-delivery">Continuous Delivery</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact-support">Contact / Support</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE SERVICE -->
## About The Service
Aerodyne have multiple platforms (web-based system and apps) to cater different
varieties of industries, to cater for their different needs and requirements.
Basically, what the pilots capture during their mission will be analyzed and visualized via
the web app.

A list of commonly used resources are listed in the acknowledgements.

### Built With
This section list all the major frameworks that use to built the project. The add-ons/plugins is in the acknowledgements section.
* [NestJS](https://nestjs.com/)
* [Fastify](https://www.fastify.io/)
* [Docker](https://www.docker.com/)
* [Jest](https://jestjs.io/)
* [TypeScript](https://www.typescriptlang.org/)

<!-- GETTING STARTED -->
## Getting Started
This is guides and instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites
This is an example of how to list things you need to use the software and how to install them.
* Open terminal and download code
  ```sh
  git clone  git@github.com:waynecheah/aerodyne-api.git
  cd aerodyne-api
  cp .env.example .env
  ```

### Run on Local Machine
* Initial Setup
  ```sh
  npm i -g @nestjs/cli
  npm install
  ```
* Run via NPM
  ```sh
  npm start:dev
  ```
* You should get this last line show on terminal
  <div style="background-color:#212121; padding:5px 8px; font-size:12px;"><div style="color:#00b75f; padding-bottom:8px;">...</div><span style="color:#00b75f;">[Nest] 37 &nbsp; - </span><span style="color:#00FD61;">00/00/0000, 00:00:00 AM &nbsp; </span><span style="color:#dfe300;">[Bootstrap] </span><span style="color:#00b75f;">Aerodyne is running on http://127.0.0.1:3300</span> <span style="color:#dfe300;">+1ms</span></div>

### Run on Docker Container
* Build Docker Image
  ```sh
  docker-compose build
  ```

* Initial Setup
  ```sh
  docker run -it --rm \
  --name setup-api-service \
  -e NODE_ENV=development \
  -v "$(pwd)":/home/api \
  nestjs-app:1.0.3 npm install
  ```

* Run via Docker Compose
  ```sh
  docker-compose up -d
  ```

---

<!-- DEPLOYMENT WORKFLOW -->
## Deployment

### Continuous Integration
1. Commit local changes to a main branch
   ```sh
   git checkout [BRANCH]
   git add .
   git commit -m "build: new release v1.1"
   ```
2. Push updates to github server
   ```sh
   git push origin [BRANCH]
   ```

### Continuous Delivery
You can automate the deployment to <a href="https://cloud.google.com/run/docs">Cloud Run</a> by creating <a href="https://cloud.google.com/build/docs">Cloud Build triggers</a> at <a href="https://cloud.google.com/">Google Cloud Platform</a>. You can configure your triggers to build and deploy docker image whenever you update your source code and commit to the main branch.

#### Instruction Guides:
1. <a href="https://cloud.google.com/billing/docs/how-to/modify-project">Enable billing for Cloud project</a>
2. <a href="https://cloud.google.com/build/docs/deploying-builds/deploy-cloud-run#before_you_begin">Enable all required service APIs</a>
3. <a href="https://cloud.google.com/build/docs/automating-builds/create-github-app-triggers">Creating GitHub App triggers</a>
4. <a href="https://cloud.google.com/build/docs/configuring-builds/substitute-variable-values?_ga=2.157475192.-372591699.1609419431">Set environment variables according to</a> <a href="./.env.example"><code>.env.example</code></a>
5. <a href="https://github.com/settings/installations">Double check if Google Cloud Build is authorized</a>
6. Checkout source code to main branch and push commit to Github
7. <a href="https://cloud.google.com/run/docs/authenticating/public">Allowing public access to the APIs</a>

<!-- USAGE EXAMPLES -->
## Usage
_For more examples, please refer to the [Documentation](https://aerodyne-api.kokweng.net/graphql)_

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/waynecheah/aerodyne-api/-/issues/new) for a list of proposed features (and known issues).

<!-- CONTACT & SUPPORT -->
## Contact / Support
Website - [https://aerodyne.group](https://aerodyne.group/)
Project Link: [https://github.com/waynecheah/aerodyne-api/](https://github.com/waynecheah/aerodyne-api/)

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Joi](https://joi.dev/)
* [RxJS](https://www.learnrxjs.io/)
* [Prettier](https://prettier.io/)
* [SuperTest](https://github.com/visionmedia/supertest)
* [JSON Web Token](https://github.com/auth0/node-jsonwebtoken)
* [Metadata Reflection API](https://github.com/rbuckton/reflect-metadata)
* [rimraf](https://github.com/isaacs/rimraf)
* [ESLint](https://eslint.org/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[nodejs-url]: https://github.com/nodejs/node/tree/v16.0.0
[nodejs-shield]: https://img.shields.io/badge/node.js-v16-%23339933?style=flat-square&logo=ts-node&logoColor=%23339933
[npm2-shield]: https://img.shields.io/npm/v/@cycle/core?color=%23CB3837&label=NPM&logo=npm&style=flat-square
[npm-shield]: https://img.shields.io/badge/npm-v7.11.2-%23CB3837?style=flat-square&logo=npm&logoColor=%23CB3837
[npm-url]: https://img.shields.io/npm/v/@cycle/core
[nestjs-shield]: https://img.shields.io/badge/NestJS-v7.6.15-%23ea2845?style=flat-square&logo=nestjs&logoColor=%23ea2845
[nestjs-url]: https://github.com/nestjs/nest/tree/v7.6.15
[docker-shield]: https://img.shields.io/badge/Docker-v20.10.5-%232496ED?style=flat-square&logo=docker&logoColor=%232496ED
[docker-url]: https://github.com/docker/engine
[typescript-shield]: https://img.shields.io/badge/TypeScript-v4.2.3-%233178C6?style=flat-square&logo=typescript&logoColor=%233178C6
[typescript-url]: https://github.com/microsoft/TypeScript/tree/v4.2.3

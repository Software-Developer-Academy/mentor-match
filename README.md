This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

## Getting Started

## Contributing

### Join us in project discussion

<a href="https://discord.gg/mg4mvCjE"><img src="https://img.shields.io/badge/discord-%237289DA.svg?&style=for-the-badge&logo=discord&logoColor=white " /></a>
<a href="https://www.figma.com/file/Fiz0RIIZkZsgnzGDPb603b/Mentor-Match?type=design&node-id=8-2&mode=design"><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?&style=for-the-badge&logo=figma&logoColor=white" /></a>

- Click the icon or link: https://discord.gg/mg4mvCjE
- Click the icon or link: https://www.figma.com/file/Fiz0RIIZkZsgnzGDPb603b/Mentor-Match?type=design&node-id=8-2&mode=design

### Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual URL of the repository.

4. Navigate to the cloned repository directory:

```bash
cd <repository-name>
```

Replace `<repository-name>` with the name of your repository.

5. Install the project dependencies:

```bash
npm install
```

**Note:** Make sure you are in the root of your project directory before running the above command.

### Create a New Branch

After cloning the repository, it's a good practice to create a new branch for your feature work. Here's how you can do it:

1. Navigate to the cloned repository directory.
2. Run the following command to create a new branch:

```bash
git checkout -b <branch-name>
```

Replace `<branch-name>` with the name of your new branch.

Remember, it's a good practice to name the branch something that describes the feature you're working on.

### Setup DB

1. Either run it locally or create a cloud DB.

#### Local

1. `docker run --name mongodb -d -p 27017:27017 mongodb/mongodb-community-server:latest`

### Copy .env.example to .env.local

1. `cp .env.example .env.local`
1. Modify the `MONGO_URI` string to your DB connection _(the default string is for local DB connection)_

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Running Formatting Script

```bash
npm run format

```

Run the above script to have Prettier format all files in the codebase.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/tjay22"><img src="https://avatars.githubusercontent.com/u/7388732?v=4?s=100" width="100px;" alt="TJ McCoy"/><br /><sub><b>TJ McCoy</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=tjay22" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/donlevans29"><img src="https://avatars.githubusercontent.com/u/18158428?v=4?s=100" width="100px;" alt="Don Lamarr"/><br /><sub><b>Don Lamarr</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/pulls?q=is%3Apr+reviewed-by%3Adonlevans29" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://mikebashford.com"><img src="https://avatars.githubusercontent.com/u/13946486?v=4?s=100" width="100px;" alt="Mike Bashford"/><br /><sub><b>Mike Bashford</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=mikebashford" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://coltonehrman.com"><img src="https://avatars.githubusercontent.com/u/12456288?v=4?s=100" width="100px;" alt="Colton Ehrman"/><br /><sub><b>Colton Ehrman</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=coltonehrman" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Ragudos"><img src="https://avatars.githubusercontent.com/u/133567781?v=4?s=100" width="100px;" alt="Aaron"/><br /><sub><b>Aaron</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=Ragudos" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/reuterShawn"><img src="https://avatars.githubusercontent.com/u/60119326?v=4?s=100" width="100px;" alt="Shawn Reuter"/><br /><sub><b>Shawn Reuter</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=reuterShawn" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kalpeshdhotre"><img src="https://avatars.githubusercontent.com/u/49611334?v=4?s=100" width="100px;" alt="Kalpesh"/><br /><sub><b>Kalpesh</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=kalpeshdhotre" title="Code">💻</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://omarogrant.com"><img src="https://avatars.githubusercontent.com/u/74021270?v=4?s=100" width="100px;" alt="omaro grant"/><br /><sub><b>omaro grant</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=ogeeDeveloper" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/harunugurlu"><img src="https://avatars.githubusercontent.com/u/83241950?v=4?s=100" width="100px;" alt="harunugurlu"/><br /><sub><b>harunugurlu</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=harunugurlu" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SaudAhmed96"><img src="https://avatars.githubusercontent.com/u/64993903?v=4?s=100" width="100px;" alt="Saud Ahmed"/><br /><sub><b>Saud Ahmed</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=SaudAhmed96" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/icarodredd"><img src="https://avatars.githubusercontent.com/u/78151906?v=4?s=100" width="100px;" alt="Icaro Gomes"/><br /><sub><b>Icaro Gomes</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=icarodredd" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/KQuiggins"><img src="https://avatars.githubusercontent.com/u/76880191?v=4?s=100" width="100px;" alt="Kenneth Darrick Quiggins"/><br /><sub><b>Kenneth Darrick Quiggins</b></sub></a><br /><a href="https://github.com/Software-Developer-Academy/mentor-match/commits?author=KQuiggins" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
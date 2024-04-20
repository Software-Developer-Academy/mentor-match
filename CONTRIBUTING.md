<<<<<<< HEAD

## Contributing

### Join us in project discussion### Clone the Repository

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

=======

> > > > > > > 81561676c59f1feefab173e387a68ab442eacb4a

## Guidelines

- For commit messages, make sure to follow the discussion [here](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53) as much as possible.
- Comment or let yourself be assigned to an issue before working on it. **Do not** work on an issue that someone has already commented or been assigned on, unless it is known that they are not working on it anymore.
  <<<<<<< HEAD
- Create a separate branch for the feature/issue you are working on. Run this command on your terminal or command prompt before starting your work:

```bash
git checkout -b feat/<REPLACE_ME>
```

# Then check if you are on the `ui/landing-page` branch:

- Create a separate branch for the feature/issue you are working on. For example, if you are working on the landing page, you run this command on your terminal or command prompt before starting your work:

```bash
git checkout -b ui/landing-page
```

Then check if you are on the `ui/landing-page` branch:

> > > > > > > 81561676c59f1feefab173e387a68ab442eacb4a

```bash
git branch
```

You should see something like this:

```bash
<<<<<<< HEAD
* feat/<REPLACE_ME>
  main
```

The `*` indicates that you are currently on that branch.

- After finishing your work, run these commands:

Check the files you changed

```bash
git status
```

Add the files you wish to commit. The command below adds **all** the files listed from `git status`

```bash
git add .
```

Commit the files

```bash
git commit -m "<YOUR_MESSAGE_ABOUT_THIS_COMMIT>"
```

If you are sure that there are nothing else to commit for the issue/feature you're working on, run this command:

```bash
git push --set-upstream origin <YOUR_CURRENT_BRANCH>
```

=======

- ui/landing-page
  main

```
>>>>>>> 81561676c59f1feefab173e387a68ab442eacb4a
```

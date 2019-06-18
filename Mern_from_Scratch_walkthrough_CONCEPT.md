# MERN from scratch walkthrough
Build a MERN stack application from scratch by following the ordered branches in this repository as a step-by-step guide.

How is this done? 🤨
- Simply by using Github's `compare` feature.
- This allows you to view changes between two branches.
- This repository was built specifically with is in mind as a "learning by doing" tool. **The code** will be your guide.
- The branches are listed in numerical order, so start with `0` and compare to `1` to see the first steps in building out this application.

How do I follow along?
- Though you may want to clone this repository and run the steps locally to see/test it in action, it's isn't a requirement. You can just use the compare tool as the guide as you build out your own application. The working code is 100% on this repository, so anything this app does, the code that makes it do it is available is within.😉

NOTE: The first few branches will have a large amount of code that builds out a chunk of the front-end. After that, the branches will be more broken up with the addition of Express, Node, and MongoDB.

### Prerequisites.

This guide is meant for Developers with some basic knowledge of browser JavaScript, Node.js, git and Github.
- If you're looking for a more react specific guide. Please checkout out https://github.com/robbobfrh84/react-raw step-by-step guide similar to this.

For local Development, you'll need to have mongo installed and an instance running.

# Getting Started

NOTE: branches README.md will likely be out of date. So, refer to the readme on the master branch for up to date instructions.

Start by cloning this repository and `cd` into it.
- $`npm install`
- $`npm start` > should be available locally at `localhost:3000`

NOTE: You'll be on the "master" branch (final step of the guide). So You'll likely want to have all the branches to view locally.
- At the root level of the repo you just cloned, run this script... copy/paste😉

```
git branch -a | grep -v HEAD | perl -ne 'chomp($_); s|^\*?\s*||; if (m|(.+)/(.+)| && not $d{$2}) {print qq(git branch --track $2 $1/$2\n)} else {$d{$_}=1}' | csh -xfs
```

- This will create a clone of every branch of the project.
- So, now, you can simply $`git branch` to see all the branches(steps)
- `git checkout 1-basic-react-app` to see the starting code of the project.🌟

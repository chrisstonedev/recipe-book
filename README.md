# Recipe Book

This repository was created in order to practice Hugo development. Also, I could use a place to store some recipes when
I need inspiration to cook or when I am asked about good vegan meal ideas, and why settle for word processor documents
when I can do it in code?! 😂

This app is hosted on Netlify and can be found at [recipes.chrisstone.dev](https://recipes.chrisstone.dev).

[![Netlify Status](https://api.netlify.com/api/v1/badges/36e2d986-9660-4e73-ae18-5f204941c95d/deploy-status)](https://app.netlify.com/sites/chrisstonedev-recipe-book/deploys)

## Development

### Prerequisites

[Download Hugo](https://gohugo.io/getting-started/installing/) to run the commands referenced in this document.

### Writing code

To add a new page, run `hugo new recipes/new-recipe-name.md`.

### Configuration

To change the active theme, open `config.toml` and change the value of `theme`.

### Running

Run `hugo server -D` to run the app on a local server.

### Deploying

Run `hugo -D` and upload all files in `/public`.

## Future work

I plan to return to this project to take a deeper dive into layouts and templates. I also need to actually come up with
some recipes to be added.

# scite-widget
Scite tally widget

Used by https://github.com/scitedotai/scite-extension
and
Used by https://github.com/scitedotai/scite-badge

## Scite API Terms

https://scite.ai/apiterms

## Development

You can use storybook to locally develop and test components.

Stories are located in `./stories`.

Run story book by doing:
```
$ npm i
$ npm run storybook
```

You can use npm link to link this repo to something that depends on it.
I.e. `npm link ../scite-widget`

## Deployment

You can deploy a local storybook to githubpages at https://scitedotai.github.io/scite-widget

Right now its manual:
```
$ npm run storybook-build
```
Once storybook is built you can merge your code to master and it will show up on that address.

To use this library you just link to it using package.json

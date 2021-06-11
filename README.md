# Inventory app

A simple inventory management tool app.

# TODO features

- [ ] Show data on a table.
- [ ] Add item.
- [ ] Edit item.
- [ ] Delete item.
- [ ] Currency convertion.

# Development

## Setup

1. Clone the repo:

```
git clone https://github.com/gustavo-pateti/inventory-app.git
```

2. Run development server:

```
npm start
```

## Branching

1. Work on assigned issues by branching locally from `develop`.

```
git checkout develop
git checkout -b [your branch name]
```

Branch naming must follow the following format:

```
[feature/fix]-[issue#]/[branch-name]
```

Examples:

```
feat-1/table-component
feat-3/table-item-edit
fix-23/price-display-bug
```

2. When ready, push your feature/fix branch to `origin` and make a pull request:

```
git push -u origin feat-3/item-edit
```

## VSCode extensions

Some extensions are needed to ensure consistent standard code style:

- Prettier (esbenp.prettier-vscode)
- Eslint (dbaeumer.vscode-eslint)
- Stylelint (stylelint.vscode-stylelint)

The project already includes the config files for those extensions to work.

# Misc

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

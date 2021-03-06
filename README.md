![GitHub release](https://img.shields.io/github/release/idmarinas/snackbar-queue-vuetify.svg)
![GitHub Release Date](https://img.shields.io/github/release-date/idmarinas/snackbar-queue-vuetify.svg)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/idmarinas/snackbar-queue-vuetify)
![GitHub issues](https://img.shields.io/github/issues/idmarinas/snackbar-queue-vuetify.svg)
![GitHub pull requests](https://img.shields.io/github/issues-pr/idmarinas/snackbar-queue-vuetify.svg)

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/idmarinas/snackbar-queue-vuetify/master.svg?color=red)
![Github commits (since latest release)](https://img.shields.io/github/commits-since/idmarinas/snackbar-queue-vuetify/latest.svg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/idmarinas/snackbar-queue-vuetify.svg)
![GitHub last commit](https://img.shields.io/github/last-commit/idmarinas/snackbar-queue-vuetify.svg)

[![PayPal.Me - The safer, easier way to pay online!](https://img.shields.io/badge/donate-help_my_project-ffaa29.svg?logo=paypal&cacheSeconds=86400)](https://www.paypal.me/idmarinas)
[![Liberapay - Donate](https://img.shields.io/liberapay/receives/IDMarinas.svg?logo=liberapay&cacheSeconds=86400)](https://liberapay.com/IDMarinas/donate)
[![Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&cacheSeconds=86400)](https://twitter.com/idmarinas)

# Snackbar queue for Vuetify

![](image.png)

## Install
```bash
npm install @idmarinas/snackbar-queue-vuetify
```

## Use as plugin
```javascript
import Vue from 'vue'
import IdmSnackbarQueue from '@idmarinas/snackbar-queue-vuetify'

Vue.use(IdmSnackbarQueue)
```

```vue
<template>
    <IdmSnackbarQueue
        :items="items"
        @remove-idm-snackbar-item="removeItem"
    />
</template>
```

## Example
[Demo of Snackbar Queue](https://idmarinas.github.io/snackbar-queue-vuetify/)

# expo-asset 52 bug

## Bug description

In expo 52 sdk the `expo-asset` module is not working as expected on web platform.
The hash of the asset is `null`.

In expo 50 sdk the hash of the asset is not `null`.

```js
const { uri, hash } = Asset.fromModule(require('./assets/icon.png'));
```

## Steps to reproduce

```bash
cd expo-asset-52
npm install
npm run web
```

In the browser will be displayed:

```text
Icon URI: /assets/?unstable_path=.%2Fassets/icon.png
hash: null
```

## Expected behavior

The hash of the asset should not be `null`.

To reproduce the expected behavior, run the following commands:

```bash
cd expo-asset-50
npm install
npm run web
```

In the browser will be displayed:

```text
Icon URI: /assets/?unstable_path=.%2Fassets%2Ficon.png&platform=web&hash=4e3f888fc8475f69fd5fa32f1ad5216a
hash: 4e3f888fc8475f69fd5fa32f1ad5216a
```

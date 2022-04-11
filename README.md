# Aspire
A digital debit card app that allows us to manage our debit cards, set spending limits, top up our accounts, deactivate cards, and do a variety of other things.
The app is build with React Native and works on both iOS and Android devices.

# Features
* Debit card Screen (Check debit card, available balance, check spending limit, set spending limit)
* Spending Screen (Customize spending limit)

# Getting Started
Follow below instructions on how to setup project locally and run the project.

```
# Clone this repo
git clone https://github.com/skasera/Aspire.git && cd Aspire

# Install dependencies
npm install

# For iOS, install Cocoapods and run command
cd ios && pod install && cd ..

# Run iOS
npx react-native run-ios

# Run Android
npx react-native run-android

# Start metro bundle
npx react-native start
```
You can also refer to available [npm scripts](https://github.com/skasera/Aspire/blob/master/package.json#L5).

## Demo

### iOS
![Aspire_IOS](https://github.com/skasera/Aspire/blob/master/ios_screen_recording.gif)

### Android
![Aspire_ANDROID](https://github.com/skasera/Aspire/blob/master/android_screen_recording.gif)


## Testing
[Jest](https://jestjs.io/docs/tutorial-react-native) testing framework is used to test the components. To run the test, follow the steps below.

```
# Run Test
npm run test
```

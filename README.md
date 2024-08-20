# Loaner App

This is an application that enables people to view various loan packages and also apply for loan

# SetUp Process

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) to ensure that your dev env is setup properly.

## Step 1: Project setup

Git clone the project from the above repo and run the following commands for the setup process.

```bash
# change to the project
cd loaner
# Install the node_modules
npm install
# Install IOS packages, this will enable you to run the app on  IOS
cd IOS && pod install
## to run the Android version of the app
```

### Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### Endpoint Update

```
Go to the utils folder and file called constants.ts and add the necessary backend url so that you can be able to connect to your respective backend

```

#### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

#### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### Improvement to the Project given more time

-   Add navigation to the project so the users can easily access screens
-   Add an additional screen for viewing loan applications made by users
-   configure and setup test so that devs can easily add unit and integration test

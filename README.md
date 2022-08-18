<br/>
<br/>

<p align="center">

</p>
<h1 align="center">Eatsro</h1>
<div align="center">
    <div>
        <img src="https://img.shields.io/badge/React%20Native-v0.68.2-blue" />
        <img src="https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000" />
    </div>
    <br />
</div>
<p align="center">
Built With ❤️ :
  Expo, React Native, TypeScript, React Query & more.
</p>

## Features

- Created a Stack Navigation along with Bottom Navigation to handle UI + Tab functionality.
- All tabs can be accessible.
- Created a scrollable performant list of food items (with design of the card in figma) which can be scrolled vertically/horizontally. To make it horizontally a flag needs to be uncommented (horizontal) on `FlatList` and list will render horizontally.
- Create a Search bar that will allow to filter food items of the list based on name.
- Maintaining search results with the help of Zustand and Asyncstorage. (Showing only 7 recent searches).
- User will be able to clear some or all of the search result at once.
- Introduced a filter button next to Search input to support Price, Dietary, and Cuisines preference.
- All filter functionality is working with respect to GraphQL API Calls.
- User will be able to search food item name from search bar and filter menu will help with other preference.
- User will be able to click to Add (+) button on FoodItem Card, `onClick` a toast message `Added to Cart` will be presented from the top of the screen.
- User will be able to click on favourite ❤️ icon, As expected count will be Increment/Decrement randomly.

## Tech Stack

- Expo (SDK 45)
- React Native (v0.68.2)
- React Navigation (Navigation management)
- React Query ([State management](https://tanstack.com/query/v4))
- Graphql Request ([HTTP Client](https://github.com/prisma/graphql-request))
- Graphql-codegen (Auto generate React query hooks)
- React Native Reanimated (Animation)
- React Native Lottie (Loading animation)
- React Native Fast Image (Cache image - For better experience)
- D3 Shape (Create a bottom nav bar with line and shape)
- React Native Skia (Render d3 generated path on a Canvas)
- Shopify - FlashList (Not stable on Android so using the FlatList instead)
- Bottomsheet - (To built filters feature)
- Portal - (To render bottom sheet on top of TabBar)
- Zustand (Just to demonstrate that we can rely on such small library to deal with few things internally without any need of APIs)
- React Native AsyncStorage (Cache data internally at user's device)
- ESLint/TSLint + Prettier (Linting auto fix and avoid typos and bad code practices)
- React hook testing library (Written tests on Hook)
- Running ESLint + Prettier on pre-commit (Added lint-staged just to make sure the code has no error before pushing it to Repo)

<br/>

---

## Installation

1. Clone the repo :

```
git clone https://github.com/joypatel04/eatstro.git
```

2. Install packages : _(I have used the Yarn package manager in our project. Do NOT use npm)_

```
npx yarn
```

## Run the app on Device or Simulator

#### iOS :

```
npx expo run:ios
```

Note: 🔝 This step will automatically install pods and everything required for this project to run

#### Android :

```
npx expo run:android
```

Running either of these commands automatically starts the Metro bundler and then starts building the app.
If you want to run the Metro bundler instance separately and then build the app, you can :

Start the Metro bundler :

```
expo start
```

Then run the app in Android `npx expo run:android` or iOS `npx expo run:ios`

## Run Tests

```
yarn test
```

Note: Only few tests written to test custom hooks. Since the tests calling main API sometime it fail due to response error from API

## Running ESLint + Prettier manually

```
yarn lint-and-fix
yarn prettier-format
```

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Eatstro Hiring Project

Hello! This is a hiring project for our React Native developer position. You can find the job post [here](https://www.linkedin.com/jobs/view/3176111675).
If you apply, we will ask you to do this project so we can asses your ability to build React Native customer facing apps with our choice of stack. We have made some tech-choices for you. We leave all other decisions to you. Feel free to add libs and customize the project as per your taste. We trust you and respect your decisions.

| Requirement | Tech Choice                                           | Description                                                                                                            |
| ----------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Language    | TypeScript                                            | This will help you to catch bugs early. It also helps a lot with Codegen for GraphQL APIs.                             |
| Navigation  | React Navigation                                      | We find it quite good. We belive it's industry standard.                                                               |
| GraphQL API | React Query or URQL or Apollo                         | Choose any one to consume GraphQL API. We like React Query. Though there are no bad choices here.                      |
| Styling     | Styled Components, TailwindCSS                        | You can use any one you like or both of them 🙂                                                                        |
| Dev tools   | Prettier, ESLint                                      | Please wire it up as per your preference.                                                                              |
| Codegen     | Graphql Codegen                                       | You should definitely use codegen to consume GraphQL Queries. We leave the integration task for you.                   |
| Testing     | react-testing-library, Jest or and lib of your choice | We leave it to you. Please use any library that you find comfortable. Testing will earn you bonus points.              |
| Misc        | Lib of your choice                                    | We trust you. Tweak the project according to your preference. We will be curious to know why you made certain choices. |

# Tasks/Assignment

Translate the UI from [this Figma](https://www.figma.com/file/hlgqHKF9mwWrL6e7Lej7yo/Cookstro-Hiring) into _modular_ code.
APIs for the tasks can be found at: https://mockend.com/lakhanmandloi/fake-api/graphql.
The base URL for Queries should be same: https://mockend.com/lakhanmandloi/fake-api/graphql.
If you're testing via Postman then use the above as `base_url` and then change method to `POST`.
Then in `body` choose `graphql` radio button. Now you can make same queries via Postman :)

[](https://github.com/cookstro/eatstro/blob/2b87710fcb558c6ee41c807bd3d2208b4183d414/assets/screen.jpg)

## Tasks

- Create a scrollable performant list of food items (with design of the card in figma) which can be scrolled vertically/horizontally.
- Create a Search bar that will allow to filter food items of the list based on name/price. The search keywords should appear after `Search results for`.
- Create a navigation bottom bar as per figma where Favourite, Cart, Orders and Profile pages are empty. Current page should be highlighted in the bar.
- The (+) button on food item card should create a toast that says "Added to Cart".
- The favourite button should just increment/decrement a random count on tap of it.
- Ensure shadow below food item card and over top side of food item image.
- Make use of assets from `Assignment-Assets.zip`.
- Display at least 4 different food items and the list should not flicker on scrolling 50+ food items.

# How to submit your solution:

- Please clone this repo. You can click on "Use this template" button to do so.
- Please complete the tasks.
- Once done, please share your repo with us on [people@cookstro.com](mailto:people@cookstro.com).
- We will contact you back within 48 hours.
- If you have any queries, please do contact us. We will try to answer your queries as soon as possible.

# How do we evaluate your assignment ?

- We test your submission with our Figma screen. We first check if it looks almost same or not.

- We check that menu on the bottom of the screen is there or not. We check alignments and tap on "favourites" and "orders".

- We check if cart in circle is there or not. Perfectly executing this gets you bonus points.

- We check how do you implement search functionality.

- We are not big fan of Redux or Mobx.

  - So we are curious about your take on state-management.
  - We personally prefer small libs like Zustand, Recoil or Jotai. XState is also an option.

- We check how you make http calls. How do you integrate GraphQL client!

  - We check how you integrate graphql-codegen. This is very important.
  - We prefer `react-query` but there are no wrong choices. Apollo and URQL are equally good.

- We check how you implement caching, debouncing and error-handling.

- We check and run the tests you write. It's fine if you just write only integration tests.

  In general, we want to you to write the code that you can happily ship to production 🙂

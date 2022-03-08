# Native-Meals

This is a basic online restaurant order with integration in firebase and cloud functions with Google Maps API.

## Purpose

My purpose is to study from this the basic concept of building a full functional website that can work with users and to think what tools to choose when building (avoid refractoring later). It's a foundation for my learning and future [big project](https://www.behance.net/gallery/134056463/EventGo-Web-Service)

## Features

- Log-in, out using Google Auth (used Firebase)
- Buy item and payments (used Stripe)
- Have pleasant fall back.
- Used lazy load for performance
- Deployed on Expo and can be used on Android because I don't have IOS devices.
- Use Firestore to have information of shops
- Used Hook and Context Provider for scalability.

## How to use

- Clone the project using `git clone https://github.com/An-Nguyen-02/Native-Meals.git`
- Then remove the origin by `git remote remove origin`
- Then set a `.runtimeconfig.json` file in the function directory and add in the google.key with stripe.key which link to your stripe account.
- Then run `npm install` to have all the packages
- Then run `npm start`. Enjoy :smiley: .

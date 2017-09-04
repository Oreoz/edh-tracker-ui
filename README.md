# EDH Tracker

[![Build Status](https://travis-ci.org/Oreoz/edh-tracker-ui.svg?branch=master)](https://travis-ci.org/Oreoz/edh-tracker-ui)
[![Code Climate](https://codeclimate.com/github/Oreoz/edh-tracker-ui/badges/gpa.svg)](https://codeclimate.com/github/Oreoz/edh-tracker-ui)

EDH Tracker is a web application that can be used to track life totals in real-time
for the Magic the Gathering's [EDH/Commander](http://mtgcommander.net) format.

## Prerequisites

In order to run the application, you'll need [Git](https://git-scm.com/),
[Node.js](https://nodejs.org/) (with NPM), [Ember CLI](https://ember-cli.com/) and
[Google Chrome](https://google.com/chrome/) properly installed on your computer.

## Running / Development

First things first, clone the project and install the dependencies:

→ `git clone https://github.com/Oreoz/edh-tracker-ui.git`

→ `cd edh-tracker && npm install`

→ `cd edh-tracker && yarn`

In order to run the application you'll need to create a
[Firebase](https://firebase.google.com/) project in order to have back-end API.

Once you have your new Firebase project, create a `.env` file at the root of
the project and insert the following keys and complete with the values from your
Firebase project (they should be accessible via the `Add Firebase to your web
app` option in the project's console).

```
FIREBASE_API_KEY=<YOUR-FIREBASE-API-KEY>
FIREBASE_AUTH_DOMAIN=<YOUR-FIREBASE-AUTH-DOMAIN>
FIREBASE_DATABASE_URL=<YOUR-FIREBASE-DB-URL>
FIREBASE_STORAGE_BUCKET=<YOUR-FIREBASE-BUCKET>
```

Once that's all done, you should be able to run the application:

→ `ember s`

→ Open your favorite browser at [http://localhost:4200](http://localhost:4200).

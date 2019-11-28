# Ionic Angular Contacts

App to view and add contacts to phone native contacts list using the [Ionic 5 framework](https://ionicframework.com/docs). This is another great Ionic Quick Win from [Simon Grimm IonicAcademy Youtube video 'Ionic 4 Native Contact Management (Call, SMS)'](https://www.youtube.com/watch?v=a8vOLMcOg68).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

App lists all contacts from the phone Contacts list and a contact can be added. The user can also call or send an sms to a contact.

## Screenshots

![screenshot](./img/bootstrap.png)
![screenshot](./img/categories.png)

## Technologies

* [Ionic v5.17.1](https://ionicframework.com/)
* [Ionic/angular v4.7.1](https://ionicframework.com/)
* [Cordova plugin Contacts v3.0.1](https://github.com/apache/cordova-plugin-contacts)
* [Cordova plugin sms v1.0.0](https://github.com/cordova-sms/cordova-sms-plugin)
* [Cordova plugin call number v1.0.1](https://github.com/Rohfosho/CordovaCallNumberPlugin)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* function to load all contacts so they can be shown on-screen as a list.

```typescript
loadContacts() {
  let options = {
    filter: '',
    multiple: true,
    hasPhoneNumber: true
  };

  this.contacts.find(['*'], options).then((contacts: Contact[]) => {
    this.myContacts = contacts;
    console.log('Contacts: ', contacts);
  });
}
```

## Features

* User can call a contact or send them an sms.

## Status & To-do list

* Status: Compiles and displays in simulator on 'ionic serve --devapp'. Needs to be installed on device to test it.

* To-do: Deploy to device and test.

## Inspiration

[Simon Grimm IonicAcademy Youtube video 'Ionic 4 Native Contact Management (Call, SMS)'](https://www.youtube.com/watch?v=a8vOLMcOg68)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!

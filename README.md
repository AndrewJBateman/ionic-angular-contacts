# :zap: Ionic Angular Contacts

* App to view and add contacts to phone native contacts list using the [Ionic 5 framework](https://ionicframework.com/docs). This is another great Ionic Quick Win from [Simon Grimm IonicAcademy Youtube video 'Ionic 4 Native Contact Management (Call, SMS)'](https://www.youtube.com/watch?v=a8vOLMcOg68).
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/ionic-angular-contacts?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/ionic-angular-contacts?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/ionic-angular-contacts?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/ionic-angular-contacts?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Ionic Angular Contacts](#zap-ionic-angular-contacts)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-do list](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* App lists all contacts from the phone Contacts list and a contact can be added. The user can also call or send an sms to a contact.

## :camera: Screenshots

* tba

## :signal_strength: Technologies

* [Ionic v5](https://ionicframework.com/)
* [Ionic/angular v5](https://ionicframework.com/)
* [Angular framework v12](https://angular.io/)
* [Cordova plugin Contacts v3](https://github.com/apache/cordova-plugin-contacts). This plugin is being deprecated
* [Cordova plugin sms v1](https://github.com/cordova-sms/cordova-sms-plugin)
* [Cordova plugin call number v1](https://github.com/Rohfosho/CordovaCallNumberPlugin)

## :floppy_disk: Setup

* Install dependencies using `npm i`
* To start the server on _localhost://8100_ type: 'ionic serve'

## :computer: Code Examples

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

## :cool: Features

* User can call a contact or send them an sms.

## :clipboard: Status & To-do list

* Status: Compiles and displays in simulator on 'ionic serve --devapp'. Needs to be installed on device to test it.
* To-do: Deploy to device and test.

## :clap: Inspiration

* [Simon Grimm IonicAcademy Youtube video 'Ionic 4 Native Contact Management (Call, SMS)'](https://www.youtube.com/watch?v=a8vOLMcOg68)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com

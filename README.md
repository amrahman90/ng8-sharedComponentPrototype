# Shared Component Generator

## Introduction

This Application has been developed for configuring and hosting shared component library that can then be used by other Angular applications for various purposes.

## How it works ?

The application consists of a library of components that reside inside the `shared-components` folder. The reference of those components are provided in `shared-components.module.ts` file.

All the basic properties (for configuration purpose) of the components reside inside `config.ts` file.

When the application is executed (**ng-serve**) then all the configuration provided in config.ts is consumed by the respective components inside the `shared-components` folder and the components are rendered based on the properties defined within the config.ts file.

## Packaging the components as a node module

This is the most important and slightly tricky part. Please follow the steps carefully.

- Install `ng-packagr` (the spelling is not a typo).

```
npm install --save ng-packagr
```
- The package .json already has the script to run ng-packagr. the script is called `packgr`. ng-packagr requires a set of instructions in json format that needs to be passed to it as a parameter. This has already been done in the packagr script (Please see below for reference). 

```
"packagr": "ng-packagr -p ./projects/shared-components/ng-package.json"
```
Please be careful about the path, if you wish to create another folder (other than projects then that path needs to be updated in the parameter above).

- Inside the `projects/shared-components` folder there are 3 files that are required by ng-packagr (**PLEASE DO NOT DELETE THEM!**). Simply copy the src folder and paste it inside the same folder where these files are placed.

- If you components have any kind of dependency on external libraries (Fontawesome, Bootstrap, Rxjs etc) then make sure to add those dependencies inside package.json.

- In case the application consists of multiple modules then there reference can be added inside `public_api.ts` file.

- Once all the steps defined above are done, go back to the root folder (Angular project folder) and run the following command.

```
npm run packgr
```
Once the task is complete the `custom-components` (one level above the MainApp) gets populated by the build package. Which can then be installed as a dependency by other Angular applications.

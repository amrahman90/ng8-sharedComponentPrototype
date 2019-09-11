# ChildApplication A

This application acts as the consumer of shared components published by `MainApp`.

## Setup

- Install the components in the `custom-components` folder by running the following npm command.

```
npm install ../custom-components
```

- Import `SharedComponentsModule` within the app.module of the Child Application.

- Inside the html template of your component file simply add the html tag of the custom component (In this application it is input text field)/

```
<custom-input-field [inputName]="'customText'"></custom-input-field>
```

The `inputName` attribute can be used to dynamically pass the name of the input field.
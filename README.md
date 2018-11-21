# Mastermind

Mastermind game implemented with react-native

- Install Java JDK

https://www.oracle.com/technetwork/java/javase/downloads/index.html

Steps to install:

- clone the repo

```bash
git clone https://github.sie.sony.com/origaut/Mastermind.git
```

- install the libraries

```json
npm install
```

- Install the icon libraries. (Should be done only once)

```bash
react-native link react-native-vector-icons
```

- Run the app for ios on the latest ios device

```bash
react-native run-ios --simulator="iPhone 6"
```

- Run the app on a specific ios device

```bash
react-native run-ios
```

## Explanation on the code

### Containers

#### Intro

Each react-native component is wrapped into a container. The role of this container is to map redux store data with the react-native component properties and to dispatch actions. It uses 2 redux functions:

- mapStateToProps

```Javascript
const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  bgColor: state.pegs[ownProps.id].color,
  enable: state.pegs[ownProps.id].enable,
  size: state.pegs[ownProps.id].size
});
```

mapStateToProps is a function that returns the component properties based on the current state. It has 2 parameters state and ownProps. It filters down the state or transform the state.

- mapDispatchToProps

Function that dispatches a redux action.

```Javascript
const mapDispatchToProps = dispatch => bindActionCreators({ onRestart: reset }, dispatch);
```

In the example above the onRestart function property of the component dispatches the reset action. The reset action is a json object with a single type entry. 

```json
export const reset = () => ({
  type: 'RESET'
});
```

This action (json object) is passed/dispatched to all the reducers. Reducers listening to this action will modify the state. Multiple reducers can be triggered by the same action.

```Javascript
const updateStatus = (state = initialGameStatus, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
        ...
    case 'RESET':
      return initialGameStatus;
    default:
      return state;
  }
};
```

### Components

#### Sketch

![Alt text](./docs/Components.png?raw=true "Component map")

#### Debugging the app

#### Enabling the console log

Every state change is shown in the console log which is usefull for debugging.

```bash
react-native log-ios
```

## Updating project

- Install check-update

```bash
 npm install -g npm-check-updates
```

- Check new versions

```bash
ncu
```

- Update dependencies in package.json

```bash
ncu -u
```

- Check installed dependencies

```bash
npm ls --depth=0
```

- Update in the xcode files

```bash
react-native upgrade
```

## Troubleshooting

- Make sure that no process is running on port 8081. React uses this port to load the bundle.

```bash
lsof -n -i4TCP:8081
```

You can change the port by adding the parameter --port 8082 to the command line:

```bash
react-native run-ios --port 8082
```

- Consult the following troubleshooting steps from Facebook:

https://facebook.github.io/react-native/docs/troubleshooting#content


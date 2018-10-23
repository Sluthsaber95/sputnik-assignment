# Booking Go Assignment v0.1.1


## Getting Started
This project utilised create-react-app v2.0.4 - this was utilsed due to built-in sass support.
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Essay Assignment
Please checkout this shared [Google Doc](https://docs.google.com/document/d/1XJ04mlMPbJNOWiRNsyRnjIHmMWbeoqC8bdAzXb_wfvI/edit?usp=sharing)

## View Project Preview
If you just want to go and test out the production site online - see [https://festive-ptolemy-09b2dc.netlify.com/](https://festive-ptolemy-09b2dc.netlify.com/)

### Prerequisites

What things you need to install the software and how to install them.

```
- Node v10.0.0 or higher
```

### Installing
To get your project up and ready, use [Yarn](https://yarnpkg.com/en/), rather than NPM. Why? To utilise all the tools within the dev environment such as StorybookJS, yarn is required. 

Version Required
- Yarn 1.10 or above

<br/>

```
yarn install
```

### Start up full dev environment
End with an example of getting some data out of the system or using it for a little demo

```
// Start up UI part of the project
yarn start

```

You should see this terminal message like so.
```
Compiled successfully!

You can now view booking-go-assignment in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.0.10:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.
```

<br/>

### Isolated UI IDE - StorybookJS (manual UI testing and component showcase)
To get a comprehensive few of all the components used to build this project. Look no further than the [StorybookJS component compendium](https://elastic-joliot-fb8215.netlify.com/).

```
# CSS file separated created as StorybookJS doesn't support 
# SASS

yarn sass:dev
yarn run storybook
```

The tool above is useful for developing and integrating components together into a UI,spend time going through the Storybook to get a deeper understanding of the UI user experience side too!

## Build Project
To create a production Build

```
yarn run build
```


## Versioning
I used [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

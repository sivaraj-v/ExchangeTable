#### Installation and running application

```
npm install
npm start
```

#### Setting Base Currency in query parameters

```
http://zural-exchange-table.surge.sh/?base=EUR

http://zural-exchange-table.surge.sh/?base=GBP
```

#### Did you have time to complete the coding test ? What would you add if you had more time?
- Yes i got enough time for completing the task.



#### What was the most useful feature in your opinion that REACT provides? 
- Smaller Bundle on production build for better optimization.
- Lazy and suspense are useful for loading dynamically.
    ###### Example snippet used in code
```
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
const ExchangeTable = React.lazy(() => import('./ExchangeTable'));
ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <ExchangeTable />
  </Suspense>,
  document.getElementById('index')
);
```

- Supports PWA webapps for online and offline app supports.
- Clean segregation of smart and dump component, so we can plug and play component anywhere in react app.
- Virtual DOM is one of the best feature in react, because Javascript process faster than browser DOM.
- Most popular, and having good support from facebook are also advantage for react.

#### In your opinion, what are the major differences between Angular, REACT and VueJS apps?
For single page application angular,react,vue are good solution for smaller and bigger apps.

###### React:
- Its faster, it renders using React Virtual DOM.
- Having good support for server side rendering.
- State management are easy to handle using third party package redux or mobx
- We can have highly reusable code.
- React accepts jsx,ts,js file formats.
- Easy to learn
- Facebook is backbone for success of react, regular improvement, new features are adv of react.


###### Angular:
- Angular is super-heroic JavaScript MVVM (Model-View-View-model) framework.
- Developed by google is major advantage for long running enterprise application.
- Generation of Angular component,modules using cli.
- We have detailed documentation.
- Dependency injection is main feature of angular
- Structure and architecture of angular gives great project scalability
- Major component are in-build in angular, so the bundle size will be much heavier than react and vue

###### Vue: 

- Vue are developed by openSourse developers, has inspired from angular 1.x and react component design.
- Having detailed documentation for developer.
- Easy to learn
- Most popular javascript
- Supports large scalability
- Bundle size is small
- SSR are available

#### What's your favourite programming language? Why?
 - Javascript and PHP is my favourite programming languages.
 - Javascript scalable enterprise applications
 - Frontend + Backend(Node) can be achieved using javascript.
 - AWS Lambda, Beanstalk are giving better solution for javascript platformas.
 - Perfomarance and optimization of code are clean and simple.
 - JavaScript Profiler

#### How would you track down a performance bottleneck in a web app? Have you ever had to do this? 
  - Yes i have worked on handing performance improvement.
  - Monitoring CPU Utilization
  - Monitoring SLA for first response time in api
  - Using javascript profiler we can optimize & monitor rendering, scripting, loading, and painting.
  - Network Throttling
  - Page load
  - Average maximum response time for all the pages
  - percentage of errors
  - Sessions active / inactive

#### Which of your publicly available webapp are you most proud of? Why?
  - React SSR : https://www.svsprintersandbags.com/
  - Angular: https://www.cognizant.com/bigdecisions (Product Development)
  - Magento : https://www.herbauk.co.uk
  - Wordpress : https://www.rotobrush.com/

#### Please describe yourself using either XML or JSON ?
  - JSON stands for JavaScript Object Notation
  - JSON is lightweight format for storing and transporting data.
  - JSON is self-describing data format
  - JSON has high readablity

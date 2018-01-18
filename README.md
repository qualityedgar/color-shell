# color-shell
A Node.js module that returns colored logs
## Installation
```sh
npm install color-shell --save
yarn add color-shell
```
## Usage
### Javascript
```javascript
let colorShell = require('color-shell');
// Logger instance
let logger = new colorShell.Logger();
//used in debug environment
logger.debugMode = true;

logger.log("It's a standard log");
logger.success("It's a success log");
logger.warn("It's a warning log");
logger.error("It's an error log");
logger.info("It's an info log");
logger.debug("It's a debug log");
```
### TypeScript
```typescript
import { Logger } from 'color-shell';
let logger = new Logger();
//used in debug environment
logger.debugMode = true;

logger.log("It's a standard log");
logger.success("It's a success log");
logger.warn("It's a warning log");
logger.error("It's an error log");
logger.info("It's an info log");
logger.debug("It's a debug log");
```

## Test
```sh
npm run test
```

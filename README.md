# Exercism Config to CSV

Transform current config.json from an Exercism track into a CSV file.

## Usage (CLI)
```shell
npm install -g exercism-config-to-csv
exercism-config-to-csv go > go-track.csv
```

## Usage (module)

You can use this as a module:

```javascript
let toCSV = require('exercism-config-to-csv');

// pass in config.json as object (psuedo-fetch)
let config = fetch('https://raw.githubusercontent.com/exercism/go/master/config.json');
let csvString = toCSV(config);
// "Slug","Difficulty","Unlocked By","UUID","Topics"
// "hello-world","1","","19957346-dedf-441e-85ea-656cac0d96d8","Strings"
// "leap","1","","fee57b09-2b67-4483-a2e5-3dfec0568b15","Control-flow (conditionals), Booleans, Integers, Logic"
// ...
```

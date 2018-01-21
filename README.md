To use this component, first of all you must set an environment variable _NODE_ENV_ such as follows:
```
$ export NODE_ENV=development
```

The value used for _NODE_ENV_ is the name of the configuration file for its environment.

Only _JSON_ files are supported.

All config files must be in a dir named config.

You may also use a `default.json` to define default/common configurations to your environments.

Below follows an usage example:
```
let config = require('./node-config');
console.log(config.foo);
console.log(config.bar);
```

default.json:
```
{
    "foo": "foobar"
}
```

development.json
```
{
    "bar": "barfoo"
}
```
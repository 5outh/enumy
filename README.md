# enumy

A tiny npm module for creating basic enumerables.

### Usage

```js
var enumy = require('enumy');

var Planets = enumy(
    'PLANET_MERCURY',
    'PLANET_VENUS',
    'PLANET_EARTH',
    'PLANET_MARS',
    'PLANET_JUPITER',
    'PLANET_SATURN',
    'PLANET_URANUS',
    'PLANET_NEPTUNE'
);

console.log(Planets.PLANET_MERCURY);
// #=> 'PLANET_MERCURY'
```

A common pattern is to expose an enum as a module. To do this, just tack on:

```js
module.exports = Planets
```

to the above file, then you can `require('./path/to/Planets.js')` and use the enum wherever you'd like.

That's it!
# fivem-server-stats

A package to get the stats of a fivem server (like player count)

## Examples

#### 1. getPlayerLength()

```
const fivem = require("fivem-server-stats")
fivem.getPlayerLength('ip:port').then((data) => console.log(data))
```

#### 2. getPlayers()

```
const fivem = require("fivem-server-stats")
fivem.getPlayers('ip:port').then((data) => console.log(data))
```

#### 3. getInfo()

```
const fivem = require("fivem-server-stats")
fivem.getInfo('ip:port').then((data) => console.log(data))
```

### If you get any errors and need help, contact me on Discord: FC#5104
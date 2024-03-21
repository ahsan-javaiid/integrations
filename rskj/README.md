### Run RSK node
```
java -classpath ./rskj-core-5.4.0-FINGERROOT-all.jar -Drpc.providers.web.cors=* -Drpc.providers.web.ws.enabled=true co.rsk.Start --testnet

```
### Rewind blocks or state of db
```

java -Ddatabase.dir=PATH_HERE/database/testnet -cp rsk.jar co.rsk.cli.tools.RewindBlocks -b=4927050 --testnet
```

### RPC calls
```
curl https://public-node.testnet.rsk.co/ -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",false],"id":1}'

```
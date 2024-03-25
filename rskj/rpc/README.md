### eth_getBlockByNumber 
```
curl https://public-node.testnet.rsk.co/ -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",false],"id":1}'

```


net_peerCount
```
curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":60}' http://localhost:4444

```
net_peerList

```
curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"net_peerList","params":[],"id":74}' http://localhost:4444
```

Port 5050 should be open for both TCP and UDP
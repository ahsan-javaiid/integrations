
const { ethers } = require("./dist/ethers.umd.js");


async function main() {

  const ROOTSTOCK_RPC_NODE = "https://public-node.rsk.co";
  
  const provider = new ethers.JsonRpcProvider(ROOTSTOCK_RPC_NODE);

  // rns name lookup
  const resolvedAddress = await provider.resolveName('alepc.rsk');

  console.log('resolved address: ', resolvedAddress);

  // lookup address
  const resolvedName = await provider.lookupAddress('0xA78C937844b27bEc024F042DCbE5B85d2B7344F6');

  console.log('resolved name:', resolvedName);
}

main();
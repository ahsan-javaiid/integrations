const { ethers, Contract, utils, constants, JsonRpcProvider } = require("./dist/ethers.umd.js");

// const ROOTSTOCK_RPC_NODE = "https://public-node.rsk.co";
const ROOTSTOCK_RPC_NODE = "https://rpc.testnet.rootstock.io/{key}";

// REF: https://developers.rsk.co/rif/rns/architecture/registry/
const RNS_REGISTRY_ADDRESS = "0xcb868aeabd31e2b66f74e9a55cf064abb31a4ad5";

const stripHexPrefix = (hex) => hex.slice(2);

const RNS_REGISTRY_ABI = [
  "function resolver(bytes32 node) public view returns (address)",
];

const RNS_ADDR_RESOLVER_ABI = [
  "function addr(bytes32 node) public view returns (address)",
];

const RNS_NAME_RESOLVER_ABI = [
  "function name(bytes32 node) external view returns (string)",
];

const RNSProvider = new JsonRpcProvider(ROOTSTOCK_RPC_NODE);
const rnsRegistryContract = new Contract(
  RNS_REGISTRY_ADDRESS,
  RNS_REGISTRY_ABI,
  RNSProvider,
);

const resolveRnsName = async (name) => {
  const nameHash = ethers.namehash(name);
  const resolverAddress = await rnsRegistryContract.resolver(nameHash);

  if (resolverAddress ===  ethers.ZeroAddress) {
    return null;
  }

  const addrResolverContract = new Contract(
    resolverAddress,
    RNS_ADDR_RESOLVER_ABI,
    RNSProvider,
  );

  const address = await addrResolverContract.addr(nameHash);

  if (address === undefined || address === null) {
    return null;
  }

  return address.toLowerCase();
};



async function main() {
  let j = await resolveRnsName('alepc.rsk');
  console.log('result: ', j);
}

main();
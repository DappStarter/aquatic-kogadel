require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture merry flame trip normal note pumpkin undo gesture case force gather'; 
let testAccounts = [
"0x6505b141f9c494d829655c18fa78fdcbfed1fba87db26fcb5a7c2dc32e6b73c6",
"0x28916b658bb0cbebbe476cd93e7f65d3921e87ec4d507575c6250a2bd7bb6775",
"0x0e9504da4f412f0030bbea45c26436a3dc3c3dbfcc05d67b0b5c264fa80ce1c9",
"0x62c9716539d0c3f371b33ed3dd1d1a9a21c4b906ad234b418139f90ef7a26c1d",
"0xf5972cfa71cdfc3a9c91664b2e8f4bbebfbf18b70f3e2e601f94beb1ef3e76ec",
"0xaaaf6b9ca4b48287d4c5eb8ad023afb0eacf8d2ae2ce320cd2d0e6c384ecb1a3",
"0x7460c031f0c08856eec31ee6db961954779440abaa69dde4407244bda20f3f81",
"0x2114ea7de8929e5d1110d8af8ee402b86d0e51caf64486560f3c97d278227a25",
"0x64ded84de999570d51bef75c13c3b24dba1f1e57f4db96216de019338b5d8df9",
"0x48b4baf204b8be0a5e369e4136f93be2a69f1164c22224d6ca1c82f493050b09"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

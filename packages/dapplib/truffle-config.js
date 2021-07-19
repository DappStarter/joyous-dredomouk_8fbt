require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy rate sister prosper hunt hidden tail story'; 
let testAccounts = [
"0x4f27d2304220c3d3b425ad930a8c3c30818ca2133df090f45a90002d485a06d2",
"0x0487e1c84d0450444a9a9d69e1bbec71c6e8565cd41370d980981cd592a3b6c2",
"0xf56bbdcf2c2ce29419945e539b0c832ec889671eff952e902c03ccc7ca695045",
"0xf9641125e5a0716cd5e29e01e026b3e7e0f184b71a10b8b869250c7ce7e48714",
"0x0798d73b2b11c9380e557580cd292e379dc7b1336dff742efa8090f731ba4efd",
"0xc81fbc5da56f1713d278eb279f2b571ac9242f972d350fd99e9c8717878aae49",
"0xe3c94c07d47e9b5653208ac6355cb3bbb135448fd49f4f60b050ef2bd4a882bd",
"0x1815f34a5c98a71280b2f3709622e438d246b7abcb1c5003e8a6a825214ab3c9",
"0x617c80012914396974163ae80c89433a22faa37fbda281311b33327c9f0893d5",
"0x6ebce990dd587b27aa3642f829a0d0bc1cbe72ce2ec351daf2abeb29e749aa02"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



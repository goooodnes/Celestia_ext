## CELESTIA mamaki keplr wallet integration
<!--
#### Requirements 
[keplr wallet extension](https://google.com)
-->
### Auto installation
1) Just visit this link. Once the keplr window popup press the approve button.  
2) In the network section choose CELESTIA network  
3) That's it. Have fun:)  

### Manual installation

Open the developer console:

- Chromium based browsers: View> Developer>Developer Tools(ctrl-shift-j)

- Copy paste the code and press enter. Do not forget to edit rpc and rest api urls in the code! :


```markdown
await window.keplr.experimentalSuggestChain({
    chainId: "mamaki",
    chainName: "CELESTIA",
    rpc: "http://54.39.243.226:26757", // replace with your rpc url
    rest: "http://54.39.243.226:1717", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "celestia",
        bech32PrefixAccPub: "celestia" + "pub",
        bech32PrefixValAddr: "celestia" + "valoper",
        bech32PrefixValPub: "celestia" + "valoperpub",
        bech32PrefixConsAddr: "celestia" + "valcons",
        bech32PrefixConsPub: "celestia" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "TIA", 
            coinMinimalDenom: "utia", 
            coinDecimals: 6, 
            coinGeckoId: "utia", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "TIA",
            coinMinimalDenom: "utia",
            coinDecimals: 6,
            coinGeckoId: "utia",
        },
    ],
    stakeCurrency: {
        coinDenom: "TIA",
        coinMinimalDenom: "utia",
        coinDecimals: 6,
        coinGeckoId: "utia",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
    
    features: [
        "cosmwasm", "ibc-transfer", "ibc-go", "wasmd_0.24+"
        ],
});
}
```

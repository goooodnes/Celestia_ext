window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
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


const Web3 = require('web3');
require('dotenv').config();

const url = `https://ankr-test:${process.env.PW}@apis.ankr.com/4e3d5113cfa94647aeddf3b4101a5dec/c882fd4a5fd2a2985981f741d5355038/eth/fast/main`  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

async function getBlockTransactionInfo (){
    const latestBlock = await web3.eth.getBlockNumber();

    let latestTwentyBlocksTransactions = []

    for(let i = latestBlock - 20; i < latestBlock; i++){

        let block = await web3.eth.getBlock(i)
        latestTwentyBlocksTransactions.push(block.transactions)

    }

    latestBlocksTransactionReceipts = []

    for(let i = 0; i < latestTwentyBlocksTransactions.length - 1; i ++){
        let currentBlock = latestTwentyBlocksTransactions[i]

        for(let j = 0; j < currentBlock.length - 1; j++){
            let receipt = await web3.eth.getTransactionReceipt(currentBlock[j])
            latestBlocksTransactionReceipts.push(receipt)
        }
    }
    console.log(latestBlocksTransactionReceipts)
   
}

getBlockTransactionInfo()





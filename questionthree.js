let fs = require('fs')
const Web3 = require('web3');

const url = `https://ankr-test:ankrtest@apis.ankr.com/4e3d5113cfa94647aeddf3b4101a5dec/c882fd4a5fd2a2985981f741d5355038/eth/fast/main`  // url string

const web3 = new Web3(new Web3.providers.HttpProvider(url));

const getBlockTransactionInfo = async () => {
    // get latest height (latest block)
    const latestBlock = await web3.eth.getBlockNumber();

    fs.appendFile('qthree.json', "Latest height: " + JSON.stringify(latestBlock), (error)=> {
        if(error) throw error;
        console.log('done')
    })

    let latestTwentyBlocksTransactions = []

    // loops through latest 20 blocks on ethereum and appends each block to an array
    for(let i = latestBlock - 20; i < latestBlock; i++){
        let block = await web3.eth.getBlock(i)
        latestTwentyBlocksTransactions.push(block.transactions)
        
    }
    fs.appendFile('qthree.json', "Latest Twenty Blocks: " + JSON.stringify(latestTwentyBlocksTransactions), (error)=> {
        if(error) throw error;
        console.log('done')
    })
    
    // loops through each of 20 arrays of transactions in latestTwentyBlocksTransactions
        // loops through each transaction in each block and gets the receipt
    for (const currentBlock of latestTwentyBlocksTransactions){
        
        for (const transaction of currentBlock){
            let receipt = await web3.eth.getTransactionReceipt(transaction)
            fs.appendFile('qthree.json', "Transaction: " + JSON.stringify(transaction) + "\n" + JSON.stringify(receipt), (error)=> {
                if(error) throw error;
                console.log('done')
            })
        }
    }

}

getBlockTransactionInfo()





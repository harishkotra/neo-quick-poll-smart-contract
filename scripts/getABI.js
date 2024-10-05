const fs = require('fs');
const path = require('path');

async function main() {
  // Path to the compiled contract JSON file
  const contractPath = path.join(__dirname, '../artifacts/contracts/NeoQuickPoll.sol/NeoQuickPoll.json');

  // Read the JSON file
  const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));

  // Extract the ABI
  const abi = contractJson.abi;

  // Convert ABI to a string
  const abiString = JSON.stringify(abi, null, 2);

  // Write ABI to a new file
  fs.writeFileSync('contractABI.json', abiString);

  console.log('ABI has been written to contractABI.json');
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
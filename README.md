### Steps completed

• Installed the necessary prerequisites to the local machine, such as docker and docker composer, cURL, npm and the Hyper ledger Fabric network images.

• Tested the fabric test network in the local machine. The test network is a three- organizational setup, including one orderer organization and two peer organizations. There is one channel which connects both peer organizations.

• Developed a smart contract that gets two numbers from the user, adds and stores the two data in the ledger, and displays the added details. Then, added another function to create a complex calculation for testing purposes.

• Packaged the created smart contract and deployed it to the test network by using a shell script with the necessary details to make the smart contract up and running in the test network. I used JavaScript to develop the smart contract.

• Developed a node.js code to enroll an admin that helps to register users from the react native clients. Then added the identity of the admin in a separate wallet.

• Then developed a REST API that interacts with the smart contract and the react native mobile application. Created a shell script containing all the commands needed to make the network up and running with the created REST API.

• Used node.js using the express server to create the REST API, and this creates a gateway for connecting to the peer nodes that link to the created channel. Finally, this connects with the smart contract up and running in the created test network.

• Created a react native mobile app that registers users and then sends the user id to the created API to create identities for the react native clients. These identities are then stored in separate wallets for each client on the server.

• Then the react native app sends data to add values using the REST API or gets data from the ledger using the API.


### Remaining tasks in the project

• I’m currently learning to move the created test network and the REST API to the Google Cloud Compute Engine.

• Then connect the mobile app with the cloud-based Hyperledger Fabric REST API.

• Finally, conduct network latency when connecting with many users and conducting complex calculations.
 
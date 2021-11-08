# ARCoin

This repo is intended to create a cold wallet that can be uploaded to the ARWeave network

This code is designed to be crypographically secure but it has not been security audited and use at your own risk. You can always check the QRCode in the Example Usage below. If the balance is 0, this code has probably been exploited. You can check the example directly here: https://viewblock.io/arweave/address/2Va-SX_D735R43aX_xWSEQih4lEH5LvsdsemvtXCyf4 

## Inspiration

The idea behind ARCoin is to enable the embedding of AR into physical objects. Like a coin for example. 
You could then give someone the physical object and they would have AR.

To support this use case, we have to physically embed a JWK into a QR Code or something but it's currently not feasible as the JWKs are too big to fit inside of a standard QR Code.

Using this tool, you can upload a "cold-ish" wallet to ARWeave by following the instructions below. 
It produces a secret password that you must save forever & an index.html you can upload to Arweave using tools like ARDrive.

Once you have the secret password which is 64 characters long & the public arweave address of the uploaded `index.html` file, you can embedded this data as QR Codes or even just the text itself.

## Usage

1. Clone repo & run `npm install`
2. Run `node generate-encrypted-wallet.js`. 
This will output a securely randomly generated password. You will need to save the password as it is the only way to ever recover the private key.
3. Upload `./build/index.html` using ARDrive or ARKB. 


## Example Usage

Using this tool, I created the first ARCoin. The coin consists of 3 layers. 
1. The top layer is only for decoration and letting people know it's an ARCoin.
![front-view](https://user-images.githubusercontent.com/1102811/140691526-8c583b7f-0e38-4011-8072-539e3e3616c2.png)
2. The middle layer contains the secret password. It can only be seen by destorying the key.
![side-view](https://user-images.githubusercontent.com/1102811/140691546-c137bb89-9d24-429f-8659-e122e9223e0a.png)
3. The back layer contains a qr code linking to the arweave-uploaded `index.html`
![back-view](https://user-images.githubusercontent.com/1102811/140691635-a4f8e85b-d156-459c-8f6c-1e5384c75f8d.png)

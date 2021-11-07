# ARCoin

This repo is intended to create a cold wallet that can be uploaded to the ARWeave network

It has not been security audited and use at your own risk.

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

const CryptoJS = require("crypto-js");
const Arweave = require('arweave');
const fs = require('fs');

var BUILD_DIRECTORY = './build';

if (!fs.existsSync(BUILD_DIRECTORY)){
    fs.mkdirSync(BUILD_DIRECTORY);
}

const arweave = Arweave.init({});
arweave.wallets.generate().then((key) => {
    arweave.wallets.jwkToAddress(key).then((address) => {
        encodeKeyAndGeneratePassword(address, key);
    });
});

function prettyPrintPassword(password) {
    const insertNewLinesAt = 16;
    for (var i = 0; i < password.length; i += insertNewLinesAt) {
        const maxIndex = Math.min(i + 8, password.length);
        console.log(password.substring(i, maxIndex));
    }
}

function encodeKeyAndGeneratePassword(address, key) {
    const secretPassword = CryptoJS.lib.WordArray.random(64).toString();
    console.log(`Secret Password is: ${secretPassword}. Write this down and don't lose it.`);
    prettyPrintPassword(secretPassword);
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(key), secretPassword).toString();
    buildIndexHtml(address, ciphertext);
}

function buildIndexHtml(publicAddress, cipherText) {
    try {
        var data = fs.readFileSync('./index-template.html', 'utf8');
        data = data.replace(new RegExp('{{ wallet_address }}', 'g'), publicAddress);
        data = data.replace(new RegExp('{{ encrypted_private_key }}', 'g'), cipherText);
        fs.writeFileSync(`${BUILD_DIRECTORY}/index.html`, data);
    } catch(e) {
        console.log('Error:', e.stack);
    }
}
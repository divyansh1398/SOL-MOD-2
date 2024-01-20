# SOL-MOD-2

Minting NFTs using SPL Token.

## Description

Create a SPL token. Deploy your candy machine with all the collections of NFTs.
Create or use the UI provided to mint them through tokens.

## Getting Started

### Executing program

1. SPL Token: In this we are gonna create a spl token that we are gonna use to mint NFTs.
2. Deploying Candy Machine: We are gonna deploy the candy machine in the devnet with all the assets and their JSONs.
3. Candy Machine UI: In this we will clone the repo to and configure the .env file and then we can just connect our wallet and mint NFTs using our tokens.

### Demo

#### SPL Token:

AhykiFJNgmnF3MdS3cGVe4wG8GVz3H5gsmtxNoj2VpN2
Uint8Array(64) [
  131, 175,  26, 108,  74, 187, 178, 251, 197,  21, 194,
  216, 219, 243,  16, 109, 227, 153, 105, 148,  28, 253,
  245,  50, 128,  97, 135, 241, 190, 124, 168,  13, 144,
   56, 150,  20,  56,  94, 141, 196, 164, 134,  90, 202,
  217,  83,  92, 205,   9, 175,  72,  51, 130, 108,  78,
  117, 150, 154,  22,  77, 215,  16, 245,  15
]
6ZvowksgDJUzVgf8YBf5W87oQUfeBhM7nzwuMB3Fhbod
Uint8Array(64) [
   70, 157, 132, 253, 144, 142,  93,  10,  35, 249, 135,
  157, 225,   4,  10, 108,  54, 232, 206, 205, 219, 100,
  219, 113, 214,   0,  24, 173,  24, 111, 127,  71,  82,
  185, 220, 236, 113,  10,  18, 235,  52,  51,  86, 108,
   81,  66,  69,  36,  79,  51, 129, 134, 208, 226, 247,
  214, 132, 129,  45,  19, 227,  54, 110,  56
]
Step 1 complete
4g8nGLMasP2DbLCu9YQ1inqRyfG3B8UnD4arhtzfNXrpsm5fgTRSwaZjfnhSXe93DVLAEpzQDYv8DpsneDRzpcay
Step 2 complete
Step 3 complete
mint tx: 2imjcbNrDfyzZZnL1AEZ61mqYSkJkijQYU3fyYmhUyHsxPkhoBfvSEEiruJJ7dGe5e3p6zuDJeQvob1Ay5BFvEHr
Step 4 complete
Step 5 complete
transfer tx: 54qYHCuAUL79aLMkrwVzNZGfndTBp6LdqZfbDBpmSzCs5vugPhZ193FgYB3BJkxBrt5MV6KJkyoF3aHWBqHG8JjH
Step 6 complete

#### Candy Machine Deploy:

-> sugar validate

[1/1] Loading assets

+----------------------------------------------+
|  MISSING COLLECTION FILES IN ASSETS FOLDER |
+----------------------------------------------+
Check https://docs.metaplex.com/developer-tools/sugar/guides/preparing-assets for the collection file requirements if you want a collection to be set automatically.

✔ Do you want to continue without automatically setting the candy machine collection? · yes    

⠁ 
 missing `properties.category` for nft Number #0001, defaulting to image
 missing `properties.category` for nft Number #0008, defaulting to image
 missing `properties.category` for nft Number #0003, defaulting to image
 missing `properties.category` for nft Number #0006, defaulting to image
 missing `properties.category` for nft Number #0005, defaulting to image
 missing `properties.category` for nft Number #0004, defaulting to image
 missing `properties.category` for nft Number #0010, defaulting to image
 missing `properties.category` for nft Number #0009, defaulting to image
 missing `properties.category` for nft Number #0007, defaulting to image
▪▪▪▪▪ Validating 10 metadata file(s)...                                                        

Validation complete, your metadata file(s) look good.

Command successful.

-> sugar upload
[1/4] 🗂  Loading assets
Found 11 asset pair(s), uploading files:
+--------------------+
| images    |     11 |
| metadata  |     11 |
+--------------------+

[2/4] 🖥  Initializing upload
▪▪▪▪▪ Connected

[3/4] 📤 Uploading image files 

Sending data: (Ctrl+C to abort)
[00:00:00] Upload successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 11/11

[4/4] 📤 Uploading metadata files 

Sending data: (Ctrl+C to abort)
[00:00:00] Upload successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 11/11

11/11 asset pair(s) uploaded.

✅ Command successful.

-> sugar deploy

[1/3] 🍬 Creating candy machine
Candy machine ID: 89XXizjQ8TPZ7p7f62HeZmjrDVfe3LMrvAKwBoPBvBqW

[2/3] 📦 Creating and setting the collection NFT for candy machine
Collection mint ID: 3nnt9z5tZ7xkXB5kYBuPBwQBwvqbnDZxpHynkVxdfyts

[3/3] 📝 Writing config lines
Sending config line(s) in 1 transaction(s): (Ctrl+C to abort)
[00:00:01] Write config lines successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 1/1

✅ Command successful.

-> sugar verify
[1/2] 🍬 Loading candy machine
▪▪▪▪▪ Completed

[2/2] 📝 Verification
Verifying 10 config line(s): (Ctrl+C to abort)
[00:00:01] Config line verification successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████ 10/10

Verification successful. You're good to go!

See your candy machine at:
  -> https://www.solaneyes.com/address/89XXizjQ8TPZ7p7f62HeZmjrDVfe3LMrvAKwBoPBvBqW?cluster=devnet

✅ Command successful.

-> sugar mint

[1/2] Loading candy machine
Candy machine ID: ELfhgD9ak4zrNVvWHhJnwxz4ryFVh3djA5hDJudZWo6F
▪▪▪▪▪ Done

[2/2] Minting from candy machine

Minting to AhykiFJNgmnF3MdS3cGVe4wG8GVz3H5gsmtxNoj2VpN2
▹▹▹▹▸ 10 item(s) remaining
Mint: 4rZjb5h9DR6ocnpbs7tEhCCTgQ3XWu9rvj4CsASte5Sg
Signature: 5ph7MmoEVjN5H5ySnhrpg5PEimg4yxaR1nTBnMPiAsMXCJUDXPTpFyx2UdW5h9kM9zzSfrMirkk6ZwKRkGWq▪▪▪▪▪ Mint success                                                                             

Command successful.

#### Candy Machine UI:

run this code `git clone https://github.com/metaplex-foundation/candy-machine-ui ./candy-machine-ui/`

then go in that folder `cd candy-machine-ui`

then install the npm packages `yarn install`

change the .env values

then start the server `yarn run start`


## License

This project is licensed under the MIT License - see the LICENSE.md file for details

import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint , getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

(async () => {
    // Step 1: Connect to cluster and generate a new Keypair
    const connection = new Connection(clusterApiUrl("devnet"), 'confirmed');
    // const symbol = "INR";
    const fromWallet = Keypair.generate();
    console.log(fromWallet.publicKey.toBase58());
    console.log(fromWallet.secretKey);
    //GENARATE THE TO WALLET USING THE SOLANA WALLET GENERATOR USING PublicKey

    const toWallet = Keypair.generate();
    console.log(toWallet.publicKey.toBase58());
    console.log(toWallet.secretKey);
    // const from_secret_key = new Uint8Array(
    //     [
    //         
    //       ]         
    // );
    // const to_secret_key = new Uint8Array(
    //     [
    //         
    //     ]      
    // );
    // var fromWallet = Keypair.fromSecretKey(from_secret_key);  
    // var toWallet = Keypair.fromSecretKey(to_secret_key);

    console.log("Step 1 complete");
    // Step 2: Airdrop SOL into your from wallet
    const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
    console.log(fromAirdropSignature);
    await connection.confirmTransaction(fromAirdropSignature, { commitment: "confirmed" });

    console.log("Step 2 complete");

    // Step 3: Create new token mint and get the token account of the fromWallet address
    // If the token account does not exist, create it
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
    )
    
    console.log("Step 3 complete");

    //Step 4: Mint a new token to the from account
    let signature = await mintTo(
        connection,
        fromWallet,
        mint,
        fromTokenAccount.address,
        fromWallet.publicKey,
        100000000000,
        []
    );
    console.log('mint tx:', signature);

    console.log("Step 4 complete");

    //Step 5: Get the token account of the to-wallet address and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        toWallet.publicKey
    )

    console.log("Step 5 complete");

    //Step 6: Transfer the new token to the to-wallet's token account that was just created
    // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        10000000000,
        []
    );
    console.log('transfer tx:', signature);
    console.log("Step 6 complete");
})();
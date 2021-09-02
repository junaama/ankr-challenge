
1. nVersion is the version of the block
2. hashPrevBlock is a hash of the previous block in the chain
3. hashMerkleRoot is a hash of the Merkle root. The Merkle root is basically a hash of all hashes of every transaction in a block.
4. nTime is the timestamp of the block.
5. nBits is the current target of the block
6. nNonce is the nonce. The nonce is a value which will be adjusted by miners so 7. the hash of the block will be less than or equal to the current target (nBits)
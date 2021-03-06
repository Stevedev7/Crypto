# Cryptography project (16CSE54)

# About project
Enhanced **[simplified Data Encryption Standard Algorithm](https://www.brainkart.com/article/Simplified-Data-Encryption-Standard-(S-DES)_8343/)** to
protect data and to provide Security to the data.ESDES Algorithm
uses number of operations and rounds applied to blocks. It
computes complement operation when text is converted from
ASCII to binary. Large Number is Decomposed to achieve parallel
processing of bits. Adding 1’s complement operations gives
additional security and making it difficult for the intruder to
attack. As the complexity is increased the encryption and
decryption time is also increased.

## Requirements
1. [Node.js](https://nodejs.org/en/download/) latest version
1. [Git](https://git-scm.com/downloads) latest version
1. Text editor

## Clone project

1. Open the terminal and navigate to the desired location
1. Run the following code in the terminal

```bin\bash
$ git clone https://github.com/Stevedev7/Crypto.git
$ npm install
```

## Run

### Encryption

1. Open terminal
1. Move into the project folder
1. Make a file and type the message to be encrypted
1. Run the following command

```bin\bash
$ node fileEncrypt.js 'inputFileName' 'OutputFileName' 'key'
```

### Decryption

1. Open terminal
1. Move into the project folder
1. Make a file and type the message to be decrypted
1. Run the following command

```bin\bash
$ node fileDecrypt.js 'inputFileName' 'OutputFileName' 'key'
```

### Frequency analysis

1. Open terminal
1. Move into the project folder
1. Run the following command

```bin\bash
$ node frequency.js filename
```
The output is stored in the file frequency.json. It takes input from output.md file if no filename is specified.
## Progress

- [x] Make modules Convert text to binary and vice versa
- [x] Make modules to compute permutation
- [x] Make modules to perform feistel rounds
- [x] Make a module for key generation using 10 bits input key
- [x] Make a module for encryption of 8 bits binary string
- [x] Make a module for decryption of 8 bits binary string
- [x] Perform encryption and decryption of 8 bit plaintext
- [x] Perform encryption and decryption of words
- [x] Perform encryption and decryption using bigger text as a key
- [x] Make separate modules for Encryption and Decryption
- [x] Encrypting and Decrypting a file
- [x] Take input file, output file and key from commandline arguments
- [ ] Add complement function in encrypt module
- [x] Add frequency analysis
- [ ] Add other miscellaneous features

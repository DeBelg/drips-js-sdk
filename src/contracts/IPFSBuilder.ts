export default [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "log",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "log_address",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "log_bytes",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "log_bytes32",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "int256",
        "name": "",
        "type": "int256"
      }
    ],
    "name": "log_int",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "val",
        "type": "address"
      }
    ],
    "name": "log_named_address",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "val",
        "type": "bytes"
      }
    ],
    "name": "log_named_bytes",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "val",
        "type": "bytes32"
      }
    ],
    "name": "log_named_bytes32",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "val",
        "type": "int256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "decimals",
        "type": "uint256"
      }
    ],
    "name": "log_named_decimal_int",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "val",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "decimals",
        "type": "uint256"
      }
    ],
    "name": "log_named_decimal_uint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "int256",
        "name": "val",
        "type": "int256"
      }
    ],
    "name": "log_named_int",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "val",
        "type": "string"
      }
    ],
    "name": "log_named_string",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "key",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "val",
        "type": "uint256"
      }
    ],
    "name": "log_named_uint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "log_string",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "log_uint",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "name": "logs",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "IS_TEST",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "builder",
    "outputs": [
      {
        "internalType": "contract DefaultIPFSBuilder",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "failed",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "setUp",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "testChangeGovernance",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "testIPFSJSON",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "testSVGJSON",
    "outputs": [],
    "stateMutability": "view",
    "type": "function"
  }
]

export default [
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "cycleSecs",
        "type": "uint64"
      },
      {
        "internalType": "contract IDai",
        "name": "_dai",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "previousAdmin",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "AdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "beacon",
        "type": "address"
      }
    ],
    "name": "BeaconUpgraded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "collected",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "split",
        "type": "uint128"
      }
    ],
    "name": "Collected",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amtPerSec",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "endTime",
        "type": "uint64"
      }
    ],
    "name": "Dripping",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amtPerSec",
        "type": "uint128"
      },
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "endTime",
        "type": "uint64"
      }
    ],
    "name": "Dripping1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "balance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "indexed": false,
        "internalType": "struct DripsReceiver[]",
        "name": "receivers",
        "type": "tuple[]"
      }
    ],
    "name": "DripsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "balance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "indexed": false,
        "internalType": "struct DripsReceiver[]",
        "name": "receivers",
        "type": "tuple[]"
      }
    ],
    "name": "DripsUpdated1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      }
    ],
    "name": "Given",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      }
    ],
    "name": "Given1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Paused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "contract IERC20Reserve",
        "name": "oldReserve",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "contract IERC20Reserve",
        "name": "newReserve",
        "type": "address"
      }
    ],
    "name": "ReserveSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      }
    ],
    "name": "Split",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct SplitsReceiver[]",
        "name": "receivers",
        "type": "tuple[]"
      }
    ],
    "name": "SplitsUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "Unpaused",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MAX_DRIPS_RECEIVERS",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_SPLITS_RECEIVERS",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "TOTAL_SPLITS_WEIGHT",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newAdmin",
        "type": "address"
      }
    ],
    "name": "changeAdmin",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "internalType": "struct SplitsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      }
    ],
    "name": "collect",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "collected",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "split",
        "type": "uint128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "internalType": "struct SplitsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      }
    ],
    "name": "collectable",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "collected",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "split",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "cycleSecs",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dai",
    "outputs": [
      {
        "internalType": "contract IDai",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "dripsHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "currDripsHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      }
    ],
    "name": "dripsHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "currDripsHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "erc20",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "internalType": "uint64",
        "name": "maxCycles",
        "type": "uint64"
      }
    ],
    "name": "flushCycles",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "flushable",
        "type": "uint64"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "flushableCycles",
    "outputs": [
      {
        "internalType": "uint64",
        "name": "flushable",
        "type": "uint64"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      }
    ],
    "name": "give",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      }
    ],
    "name": "give",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct PermitArgs",
        "name": "permitArgs",
        "type": "tuple"
      }
    ],
    "name": "giveAndPermit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "uint128",
        "name": "amt",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct PermitArgs",
        "name": "permitArgs",
        "type": "tuple"
      }
    ],
    "name": "giveAndPermit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "update",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "balance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "receivers",
        "type": "tuple[]"
      }
    ],
    "name": "hashDrips",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "dripsConfigurationHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "internalType": "struct SplitsReceiver[]",
        "name": "receivers",
        "type": "tuple[]"
      }
    ],
    "name": "hashSplits",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "receiversHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "paused",
    "outputs": [
      {
        "internalType": "bool",
        "name": "isPaused",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reserve",
    "outputs": [
      {
        "internalType": "contract IERC20Reserve",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "lastUpdate",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "lastBalance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      },
      {
        "internalType": "int128",
        "name": "balanceDelta",
        "type": "int128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "newReceivers",
        "type": "tuple[]"
      }
    ],
    "name": "setDrips",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "newBalance",
        "type": "uint128"
      },
      {
        "internalType": "int128",
        "name": "realBalanceDelta",
        "type": "int128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "lastUpdate",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "lastBalance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      },
      {
        "internalType": "int128",
        "name": "balanceDelta",
        "type": "int128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "newReceivers",
        "type": "tuple[]"
      }
    ],
    "name": "setDrips",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "newBalance",
        "type": "uint128"
      },
      {
        "internalType": "int128",
        "name": "realBalanceDelta",
        "type": "int128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "account",
        "type": "uint256"
      },
      {
        "internalType": "uint64",
        "name": "lastUpdate",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "lastBalance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      },
      {
        "internalType": "int128",
        "name": "balanceDelta",
        "type": "int128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "newReceivers",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct PermitArgs",
        "name": "permitArgs",
        "type": "tuple"
      }
    ],
    "name": "setDripsAndPermit",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "newBalance",
        "type": "uint128"
      },
      {
        "internalType": "int128",
        "name": "realBalanceDelta",
        "type": "int128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint64",
        "name": "lastUpdate",
        "type": "uint64"
      },
      {
        "internalType": "uint128",
        "name": "lastBalance",
        "type": "uint128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      },
      {
        "internalType": "int128",
        "name": "balanceDelta",
        "type": "int128"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amtPerSec",
            "type": "uint128"
          }
        ],
        "internalType": "struct DripsReceiver[]",
        "name": "newReceivers",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "nonce",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "expiry",
            "type": "uint256"
          },
          {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
          },
          {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
          }
        ],
        "internalType": "struct PermitArgs",
        "name": "permitArgs",
        "type": "tuple"
      }
    ],
    "name": "setDripsAndPermit",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "newBalance",
        "type": "uint128"
      },
      {
        "internalType": "int128",
        "name": "realBalanceDelta",
        "type": "int128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract IERC20Reserve",
        "name": "newReserve",
        "type": "address"
      }
    ],
    "name": "setReserve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "internalType": "struct SplitsReceiver[]",
        "name": "currReceivers",
        "type": "tuple[]"
      },
      {
        "components": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          },
          {
            "internalType": "uint32",
            "name": "weight",
            "type": "uint32"
          }
        ],
        "internalType": "struct SplitsReceiver[]",
        "name": "newReceivers",
        "type": "tuple[]"
      }
    ],
    "name": "setSplits",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "collected",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "split",
        "type": "uint128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "user",
        "type": "address"
      }
    ],
    "name": "splitsHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "currSplitsHash",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "unpause",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      }
    ],
    "name": "upgradeTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]

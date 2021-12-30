/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Uni, UniInterface } from "../Uni";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "minter_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mintingAllowedAfter_",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newMinter",
        type: "address",
      },
    ],
    name: "MinterChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "fromBlock",
        type: "uint32",
      },
      {
        internalType: "uint96",
        name: "votes",
        type: "uint96",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPriorVotes",
    outputs: [
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "minimumTimeBetweenMints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mintCap",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "mintingAllowedAfter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "minter_",
        type: "address",
      },
    ],
    name: "setMinter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "rawAmount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526b033b2e3c9fd0803ce80000006000553480156200002157600080fd5b5060405162002a5138038062002a51833981016040819052620000449162000171565b42811015620000705760405162461bcd60e51b8152600401620000679062000273565b60405180910390fd5b600080546001600160a01b0385168083526004602052604080842080546001600160601b0319166001600160601b0390941693909317909255825491519092917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91620000de919062000285565b60405180910390a3600180546001600160a01b0319166001600160a01b0384811691909117918290556040517f3b0007eb941cf645526cbb3a4fdaecda9d28ce4843167d9263b536a1f1edc0f6926200013d926000929116906200024d565b60405180910390a160025550620002ec9050565b80516200015e81620002c7565b92915050565b80516200015e81620002e1565b6000806000606084860312156200018757600080fd5b600062000195868662000151565b9350506020620001a88682870162000151565b9250506040620001bb8682870162000164565b9150509250925092565b620001d081620002b3565b82525050565b620001d0816200029e565b6000620001f060398362000295565b7f556e693a3a636f6e7374727563746f723a206d696e74696e672063616e206f6e81527f6c7920626567696e206166746572206465706c6f796d656e7400000000000000602082015260400192915050565b620001d081620002b0565b604081016200025d8285620001c5565b6200026c6020830184620001d6565b9392505050565b602080825281016200015e81620001e1565b602081016200015e828462000242565b90815260200190565b60006001600160a01b0382166200015e565b90565b60006200015e8260006200015e826200029e565b620002d2816200029e565b8114620002de57600080fd5b50565b620002d281620002b0565b61275580620002fc6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636fcfff45116100f9578063b4b5ea5711610097578063dd62ed3e11610071578063dd62ed3e1461035b578063e7a324dc1461036e578063f1127ed814610376578063fca3b5aa14610397576101a9565b8063b4b5ea5714610322578063c3cda52014610335578063d505accf14610348576101a9565b8063782d6fe1116100d3578063782d6fe1146102d45780637ecebe00146102f457806395d89b4114610307578063a9059cbb1461030f576101a9565b80636fcfff45146102a657806370a08231146102b957806376c71ca1146102cc576101a9565b806330adf81f1161016657806340c10f191161014057806340c10f1914610256578063587cde1e1461026b5780635c11d62f1461027e5780635c19a95c14610293576101a9565b806330adf81f1461023157806330b36cef14610239578063313ce56714610241576101a9565b806306fdde03146101ae57806307546172146101cc578063095ea7b3146101e157806318160ddd1461020157806320606b701461021657806323b872dd1461021e575b600080fd5b6101b66103aa565b6040516101c391906122e0565b60405180910390f35b6101d46103cd565b6040516101c391906121b3565b6101f46101ef366004611a1b565b6103dc565b6040516101c391906121dc565b61020961049b565b6040516101c391906121ea565b6102096104a1565b6101f461022c366004611932565b6104b8565b610209610601565b61020961060d565b610249610613565b6040516101c3919061241a565b610269610264366004611a1b565b610618565b005b6101d46102793660046118d2565b610833565b61028661084e565b6040516101c391906123f1565b6102696102a13660046118d2565b610856565b6102866102b43660046118d2565b610863565b6102096102c73660046118d2565b61087b565b61024961089f565b6102e76102e2366004611a1b565b6108a4565b6040516101c39190612436565b6102096103023660046118d2565b610ab2565b6101b6610ac4565b6101f461031d366004611a1b565b610ae3565b6102e76103303660046118d2565b610b1f565b610269610343366004611a4b565b610b8f565b61026961035636600461197f565b610d78565b6102096103693660046118f8565b611063565b610209611097565b610389610384366004611ad2565b6110a3565b6040516101c39291906123ff565b6102696103a53660046118d2565b6110d8565b604051806040016040528060078152602001660556e69737761760cc1b81525081565b6001546001600160a01b031681565b6000806000198314156103f25750600019610417565b610414836040518060600160405280602481526020016126c06024913961116b565b90505b3360008181526003602090815260408083206001600160a01b03891680855292529182902080546001600160601b0319166001600160601b03861617905590519091907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610487908590612428565b60405180910390a360019150505b92915050565b60005481565b6040516104ad9061219d565b604051809103902081565b6001600160a01b03831660009081526003602090815260408083203380855290835281842054825160608101909352602480845291936001600160601b0390911692859261051092889291906126c09083013961116b565b9050866001600160a01b0316836001600160a01b03161415801561053d57506001600160601b0382811614155b156105e757600061056783836040518060600160405280603c8152602001612540603c913961119a565b6001600160a01b038981166000818152600360209081526040808320948a16808452949091529081902080546001600160601b0319166001600160601b0386161790555192935090917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906105dd908590612428565b60405180910390a3505b6105f28787836111d9565b600193505050505b9392505050565b6040516104ad90612192565b60025481565b601281565b6001546001600160a01b0316331461064b5760405162461bcd60e51b815260040161064290612381565b60405180910390fd5b60025442101561066d5760405162461bcd60e51b815260040161064290612341565b6001600160a01b0382166106935760405162461bcd60e51b815260040161064290612331565b6106a1426301e1338061137f565b60028190555060006106cb8260405180606001604052806021815260200161269f6021913961116b565b90506106e76106e0600054600260ff166113a4565b60646113de565b816001600160601b0316111561070f5760405162461bcd60e51b815260040161064290612371565b610745610727600054836001600160601b031661137f565b60405180606001604052806026815260200161257c6026913961116b565b6001600160601b0390811660009081556001600160a01b038516815260046020908152604091829020548251606081019093526024808452610797949190911692859290919061251c90830139611420565b6001600160a01b03841660008181526004602052604080822080546001600160601b0319166001600160601b03959095169490941790935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610801908590612428565b60405180910390a36001600160a01b0380841660009081526005602052604081205461082e92168361145c565b505050565b6005602052600090815260409020546001600160a01b031681565b6301e1338081565b61086033826115ee565b50565b60076020526000908152604090205463ffffffff1681565b6001600160a01b03166000908152600460205260409020546001600160601b031690565b600281565b60004382106108c55760405162461bcd60e51b815260040161064290612321565b6001600160a01b03831660009081526007602052604090205463ffffffff16806108f3576000915050610495565b6001600160a01b038416600090815260066020908152604080832063ffffffff60001986018116855292529091205416831061096f576001600160a01b03841660009081526006602090815260408083206000199490940163ffffffff1683529290522054600160201b90046001600160601b03169050610495565b6001600160a01b038416600090815260066020908152604080832083805290915290205463ffffffff168310156109aa576000915050610495565b600060001982015b8163ffffffff168163ffffffff161115610a6d57600282820363ffffffff160481036109dc61188f565b506001600160a01b038716600090815260066020908152604080832063ffffffff858116855290835292819020815180830190925254928316808252600160201b9093046001600160601b03169181019190915290871415610a48576020015194506104959350505050565b805163ffffffff16871115610a5f57819350610a66565b6001820392505b50506109b2565b506001600160a01b038516600090815260066020908152604080832063ffffffff909416835292905220546001600160601b03600160201b9091041691505092915050565b60086020526000908152604090205481565b60405180604001604052806003815260200162554e4960e81b81525081565b600080610b088360405180606001604052806025815260200161267a6025913961116b565b9050610b153385836111d9565b5060019392505050565b6001600160a01b03811660009081526007602052604081205463ffffffff1680610b4a5760006105fa565b6001600160a01b0383166000908152600660209081526040808320600019850163ffffffff168452909152902054600160201b90046001600160601b03169392505050565b6000604051610b9d9061219d565b6040805191829003822082820190915260078252660556e69737761760cc1b6020909201919091527f99c45e8ee5dde061ced9c812089094fbd28a020e7e37f2851198887e5ca64985610bee611678565b30604051602001610c029493929190612290565b6040516020818303038152906040528051906020012090506000604051610c28906121a8565b604051908190038120610c43918a908a908a90602001612252565b60405160208183030381529060405280519060200120905060008282604051602001610c70929190612161565b604051602081830303815290604052805190602001209050600060018288888860405160008152602001604052604051610cad94939291906122c5565b6020604051602081039080840390855afa158015610ccf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d025760405162461bcd60e51b815260040161064290612311565b6001600160a01b03811660009081526008602052604090208054600181019091558914610d415760405162461bcd60e51b8152600401610642906123a1565b87421115610d615760405162461bcd60e51b8152600401610642906122f1565b610d6b818b6115ee565b505050505b505050505050565b6000600019861415610d8d5750600019610db2565b610daf866040518060600160405280602381526020016125d76023913961116b565b90505b6000604051610dc09061219d565b6040805191829003822082820190915260078252660556e69737761760cc1b6020909201919091527f99c45e8ee5dde061ced9c812089094fbd28a020e7e37f2851198887e5ca64985610e11611678565b30604051602001610e259493929190612290565b6040516020818303038152906040528051906020012090506000604051610e4b90612192565b604080519182900382206001600160a01b038d16600090815260086020908152929020805460018101909155610e8d9391928e928e928e9290918e91016121f8565b60405160208183030381529060405280519060200120905060008282604051602001610eba929190612161565b604051602081830303815290604052805190602001209050600060018289898960405160008152602001604052604051610ef794939291906122c5565b6020604051602081039080840390855afa158015610f19573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610f4c5760405162461bcd60e51b8152600401610642906123d1565b8b6001600160a01b0316816001600160a01b031614610f7d5760405162461bcd60e51b8152600401610642906123e1565b88421115610f9d5760405162461bcd60e51b8152600401610642906123c1565b84600360008e6001600160a01b03166001600160a01b0316815260200190815260200160002060008d6001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160601b0302191690836001600160601b031602179055508a6001600160a01b03168c6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258760405161104d9190612428565b60405180910390a3505050505050505050505050565b6001600160a01b0391821660009081526003602090815260408083209390941682529190915220546001600160601b031690565b6040516104ad906121a8565b600660209081526000928352604080842090915290825290205463ffffffff811690600160201b90046001600160601b031682565b6001546001600160a01b031633146111025760405162461bcd60e51b815260040161064290612391565b6001546040517f3b0007eb941cf645526cbb3a4fdaecda9d28ce4843167d9263b536a1f1edc0f691611141916001600160a01b039091169084906121c1565b60405180910390a1600180546001600160a01b0319166001600160a01b0392909216919091179055565b600081600160601b84106111925760405162461bcd60e51b815260040161064291906122e0565b509192915050565b6000836001600160601b0316836001600160601b0316111582906111d15760405162461bcd60e51b815260040161064291906122e0565b505050900390565b6001600160a01b0383166111ff5760405162461bcd60e51b8152600401610642906123b1565b6001600160a01b0382166112255760405162461bcd60e51b815260040161064290612351565b6001600160a01b038316600090815260046020908152604091829020548251606081019093526035808452611270936001600160601b0390921692859291906125a29083013961119a565b6001600160a01b03848116600090815260046020908152604080832080546001600160601b0319166001600160601b0396871617905592861682529082902054825160608101909352602f8084526112d894919091169285929091906126e490830139611420565b6001600160a01b038381166000818152600460205260409081902080546001600160601b0319166001600160601b0395909516949094179093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611345908590612428565b60405180910390a36001600160a01b0380841660009081526005602052604080822054858416835291205461082e9291821691168361145c565b6000828201838110156105fa5760405162461bcd60e51b815260040161064290612301565b6000826113b357506000610495565b828202828482816113c057fe5b04146105fa5760405162461bcd60e51b815260040161064290612361565b60006105fa83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061167c565b6000838301826001600160601b0380871690831610156114535760405162461bcd60e51b815260040161064291906122e0565b50949350505050565b816001600160a01b0316836001600160a01b03161415801561148757506000816001600160601b0316115b1561082e576001600160a01b0383161561153f576001600160a01b03831660009081526007602052604081205463ffffffff1690816114c7576000611506565b6001600160a01b0385166000908152600660209081526040808320600019860163ffffffff168452909152902054600160201b90046001600160601b03165b9050600061152d82856040518060600160405280602781526020016126536027913961119a565b905061153b868484846116b3565b5050505b6001600160a01b0382161561082e576001600160a01b03821660009081526007602052604081205463ffffffff16908161157a5760006115b9565b6001600160a01b0384166000908152600660209081526040808320600019860163ffffffff168452909152902054600160201b90046001600160601b03165b905060006115e082856040518060600160405280602681526020016125fa60269139611420565b9050610d70858484846116b3565b6001600160a01b03808316600081815260056020818152604080842080546004845282862054949093528787166001600160a01b031984168117909155905191909516946001600160601b039092169391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461167282848361145c565b50505050565b4690565b6000818361169d5760405162461bcd60e51b815260040161064291906122e0565b5060008385816116a957fe5b0495945050505050565b60006116d74360405180606001604052806033815260200161262060339139611868565b905060008463ffffffff1611801561172057506001600160a01b038516600090815260066020908152604080832063ffffffff6000198901811685529252909120548282169116145b1561177f576001600160a01b0385166000908152600660209081526040808320600019880163ffffffff168452909152902080546fffffffffffffffffffffffff000000001916600160201b6001600160601b0385160217905561181e565b60408051808201825263ffffffff80841682526001600160601b0380861660208085019182526001600160a01b038b166000818152600683528781208c871682528352878120965187549451909516600160201b026fffffffffffffffffffffffff000000001995871663ffffffff19958616179590951694909417909555938252600790935292909220805460018801909316929091169190911790555b846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248484604051611859929190612444565b60405180910390a25050505050565b600081600160201b84106111925760405162461bcd60e51b815260040161064291906122e0565b604080518082019091526000808252602082015290565b8035610495816124ec565b803561049581612500565b803561049581612509565b803561049581612512565b6000602082840312156118e457600080fd5b60006118f084846118a6565b949350505050565b6000806040838503121561190b57600080fd5b600061191785856118a6565b9250506020611928858286016118a6565b9150509250929050565b60008060006060848603121561194757600080fd5b600061195386866118a6565b9350506020611964868287016118a6565b9250506040611975868287016118b1565b9150509250925092565b600080600080600080600060e0888a03121561199a57600080fd5b60006119a68a8a6118a6565b97505060206119b78a828b016118a6565b96505060406119c88a828b016118b1565b95505060606119d98a828b016118b1565b94505060806119ea8a828b016118c7565b93505060a06119fb8a828b016118b1565b92505060c0611a0c8a828b016118b1565b91505092959891949750929550565b60008060408385031215611a2e57600080fd5b6000611a3a85856118a6565b9250506020611928858286016118b1565b60008060008060008060c08789031215611a6457600080fd5b6000611a7089896118a6565b9650506020611a8189828a016118b1565b9550506040611a9289828a016118b1565b9450506060611aa389828a016118c7565b9350506080611ab489828a016118b1565b92505060a0611ac589828a016118b1565b9150509295509295509295565b60008060408385031215611ae557600080fd5b6000611af185856118a6565b9250506020611928858286016118bc565b611b0b81612471565b82525050565b611b0b8161247c565b611b0b81612481565b611b0b611b2f82612481565b612481565b6000611b3f8261245f565b611b498185612463565b9350611b598185602086016124b6565b611b62816124e2565b9093019392505050565b6000611b79602583612463565b7f556e693a3a64656c656761746542795369673a207369676e61747572652065788152641c1a5c995960da1b602082015260400192915050565b6000611bc060028361246c565b61190160f01b815260020192915050565b6000611bde601b83612463565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000815260200192915050565b6000611c17602583612463565b7f556e693a3a64656c656761746542795369673a20696e76616c6964207369676e815264617475726560d81b602082015260400192915050565b6000611c5e602683612463565b7f556e693a3a6765745072696f72566f7465733a206e6f742079657420646574658152651c9b5a5b995960d21b602082015260400192915050565b6000611ca6602e83612463565b7f556e693a3a6d696e743a2063616e6e6f74207472616e7366657220746f20746881526d65207a65726f206164647265737360901b602082015260400192915050565b6000611cf660528361246c565b7f5065726d69742861646472657373206f776e65722c616464726573732073706581527f6e6465722c75696e743235362076616c75652c75696e74323536206e6f6e63656020820152712c75696e7432353620646561646c696e652960701b604082015260520192915050565b6000611d70602283612463565b7f556e693a3a6d696e743a206d696e74696e67206e6f7420616c6c6f7765642079815261195d60f21b602082015260400192915050565b6000611db460438361246c565b7f454950373132446f6d61696e28737472696e67206e616d652c75696e7432353681527f20636861696e49642c6164647265737320766572696679696e67436f6e74726160208201526263742960e81b604082015260430192915050565b6000611e1f603983612463565b7f556e693a3a5f7472616e73666572546f6b656e733a2063616e6e6f742074726181527f6e7366657220746f20746865207a65726f206164647265737300000000000000602082015260400192915050565b6000611e7e602183612463565b7f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f8152607760f81b602082015260400192915050565b6000611ec1601c83612463565b7f556e693a3a6d696e743a206578636565646564206d696e742063617000000000815260200192915050565b6000611efa602383612463565b7f556e693a3a6d696e743a206f6e6c7920746865206d696e7465722063616e206d8152621a5b9d60ea1b602082015260400192915050565b6000611f3f603d83612463565b7f556e693a3a7365744d696e7465723a206f6e6c7920746865206d696e7465722081527f63616e206368616e676520746865206d696e7465722061646472657373000000602082015260400192915050565b6000611f9e602183612463565b7f556e693a3a64656c656761746542795369673a20696e76616c6964206e6f6e638152606560f81b602082015260400192915050565b6000611fe1603b83612463565b7f556e693a3a5f7472616e73666572546f6b656e733a2063616e6e6f742074726181527f6e736665722066726f6d20746865207a65726f20616464726573730000000000602082015260400192915050565b6000612040601e83612463565b7f556e693a3a7065726d69743a207369676e617475726520657870697265640000815260200192915050565b6000612079603a8361246c565b7f44656c65676174696f6e28616464726573732064656c6567617465652c75696e81527f74323536206e6f6e63652c75696e7432353620657870697279290000000000006020820152603a0192915050565b60006120d8601e83612463565b7f556e693a3a7065726d69743a20696e76616c6964207369676e61747572650000815260200192915050565b6000612111601983612463565b7f556e693a3a7065726d69743a20756e617574686f72697a656400000000000000815260200192915050565b611b0b81612490565b611b0b81612499565b611b0b816124ab565b611b0b8161249f565b600061216c82611bb3565b91506121788285611b23565b6020820191506121888284611b23565b5060200192915050565b600061049582611ce9565b600061049582611da7565b60006104958261206c565b602081016104958284611b02565b604081016121cf8285611b02565b6105fa6020830184611b02565b602081016104958284611b11565b602081016104958284611b1a565b60c081016122068289611b1a565b6122136020830188611b02565b6122206040830187611b02565b61222d6060830186611b1a565b61223a6080830185611b1a565b61224760a0830184611b1a565b979650505050505050565b608081016122608287611b1a565b61226d6020830186611b02565b61227a6040830185611b1a565b6122876060830184611b1a565b95945050505050565b6080810161229e8287611b1a565b6122ab6020830186611b1a565b6122b86040830185611b1a565b6122876060830184611b02565b608081016122d38287611b1a565b61226d6020830186612146565b602080825281016105fa8184611b34565b6020808252810161049581611b6c565b6020808252810161049581611bd1565b6020808252810161049581611c0a565b6020808252810161049581611c51565b6020808252810161049581611c99565b6020808252810161049581611d63565b6020808252810161049581611e12565b6020808252810161049581611e71565b6020808252810161049581611eb4565b6020808252810161049581611eed565b6020808252810161049581611f32565b6020808252810161049581611f91565b6020808252810161049581611fd4565b6020808252810161049581612033565b60208082528101610495816120cb565b6020808252810161049581612104565b60208101610495828461213d565b6040810161240d828561213d565b6105fa6020830184612158565b602081016104958284612146565b60208101610495828461214f565b602081016104958284612158565b60408101612452828561214f565b6105fa602083018461214f565b5190565b90815260200190565b919050565b600061049582612484565b151590565b90565b6001600160a01b031690565b63ffffffff1690565b60ff1690565b6001600160601b031690565b60006104958261249f565b60005b838110156124d15781810151838201526020016124b9565b838111156116725750506000910152565b601f01601f191690565b6124f581612471565b811461086057600080fd5b6124f581612481565b6124f581612490565b6124f58161249956fe556e693a3a6d696e743a207472616e7366657220616d6f756e74206f766572666c6f7773556e693a3a7472616e7366657246726f6d3a207472616e7366657220616d6f756e742065786365656473207370656e64657220616c6c6f77616e6365556e693a3a6d696e743a20746f74616c537570706c7920657863656564732039362062697473556e693a3a5f7472616e73666572546f6b656e733a207472616e7366657220616d6f756e7420657863656564732062616c616e6365556e693a3a7065726d69743a20616d6f756e7420657863656564732039362062697473556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e74206f766572666c6f7773556e693a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473556e693a3a5f6d6f7665566f7465733a20766f746520616d6f756e7420756e646572666c6f7773556e693a3a7472616e736665723a20616d6f756e7420657863656564732039362062697473556e693a3a6d696e743a20616d6f756e7420657863656564732039362062697473556e693a3a617070726f76653a20616d6f756e7420657863656564732039362062697473556e693a3a5f7472616e73666572546f6b656e733a207472616e7366657220616d6f756e74206f766572666c6f7773a365627a7a72315820c95119dd97dfca64dc3134bb9825f4f7dba6f3205035b38770373d6d5eccc8c46c6578706572696d656e74616cf564736f6c63430005100040";

export class Uni__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    account: string,
    minter_: string,
    mintingAllowedAfter_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Uni> {
    return super.deploy(
      account,
      minter_,
      mintingAllowedAfter_,
      overrides || {}
    ) as Promise<Uni>;
  }
  getDeployTransaction(
    account: string,
    minter_: string,
    mintingAllowedAfter_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      account,
      minter_,
      mintingAllowedAfter_,
      overrides || {}
    );
  }
  attach(address: string): Uni {
    return super.attach(address) as Uni;
  }
  connect(signer: Signer): Uni__factory {
    return super.connect(signer) as Uni__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniInterface {
    return new utils.Interface(_abi) as UniInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Uni {
    return new Contract(address, _abi, signerOrProvider) as Uni;
  }
}
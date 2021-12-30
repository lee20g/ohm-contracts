import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers} from 'hardhat';
import { Timelock__factory,  } from '../typechain';


const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    /*
  ░██╗░░░░░░░██╗░█████╗░██████╗░███╗░░██╗██╗███╗░░██╗░██████╗░
  ░██║░░██╗░░██║██╔══██╗██╔══██╗████╗░██║██║████╗░██║██╔════╝░
  ░╚██╗████╗██╔╝███████║██████╔╝██╔██╗██║██║██╔██╗██║██║░░██╗░
  ░░████╔═████║░██╔══██║██╔══██╗██║╚████║██║██║╚████║██║░░╚██╗
  ░░╚██╔╝░╚██╔╝░██║░░██║██║░░██║██║░╚███║██║██║░╚███║╚██████╔╝
  ░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝╚═╝░░╚══╝░╚═════╝░
  Check all variables below before execute the deployment script
  */

  const timelock_address = '0x0f598c5D52Ca7e7814fafDC29DF18866bB1ff158'
  // const lp_address = '0xFa5a5F0bC990Be1D095C5385Fff6516F6e03c0a7'
  const lp_address = '0xfa5a5f0bc990be1d095c5385fff6516f6e03c0a7'
  const target_address = '0x40803cF8929cf230d20f7a5e22BDa9bF565e0158'
  

  const _timeLock = Timelock__factory.connect(
    timelock_address, (await ethers.getSigners())[0]
  );


  // const eta = 1636096800
  const eta = 1636205400
  // let a = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
  // [target_address, ethers.utils.parseEther('0.0009')]);
  let a = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
  [target_address, '489049493661165534']);
  console.log('data a :',a)
  // https://ftmscan.com/tx/0x7f10ba124090b3bd7c01b62e0403675552fa9b64d742709b0ce25c41cac01571

  // bytes32 txHash = keccak256(abi.encode(target, value, signature, data, eta));

  let signature = "transfer(address,uint256)"

  let a1 = ethers.utils.defaultAbiCoder.encode(
    ["address","uint256","string","bytes","uint256"],
    [lp_address, 0, signature, a, eta]
  )
  console.log(a1)

  let a2 = ethers.utils.keccak256(a1)
  console.log(a2)

  // let bb = await _timeLock.queuedTransactions(a2)

  // console.log("----bb:",bb);

  
  const eta2 = 1636097100
  let b = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
  [target_address, ethers.utils.parseEther('0.1')]);
  console.log('data b :',b)
  // https://ftmscan.com/tx/0x2201afdb4437ce152690fa823d6db3f7d2efe2b87f38c7efd93bff2d94c5b28b

  // 0x00000000000000000000000040803cf8929cf230d20f7a5e22bda9bf565e01580000000000000000000000000000000000000000000000000003328b944c4000


  let b1 = ethers.utils.defaultAbiCoder.encode(
    ["address","uint256","string","bytes","uint256"],
    [lp_address, 0, signature, b, eta2]
  )
  console.log(b1)

  let b2 = ethers.utils.keccak256(b1)
  console.log(b2)

  // let cc = await _timeLock.queuedTransactions(b2)

  // console.log("----cc:",cc);


  {

    console.log(';---------------');

    let b1 = ethers.utils.defaultAbiCoder.encode(
      ["address","uint256","string","bytes","uint256"],
      ["0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", 0, signature, "0x0000000000000000000000005E14ED9DCEE22BA758E8DE482301028B261C4A14000000000000000000000000000000000000000000006E0226C4230945B00000", 1608995836]
    )

    // b1 = ethers.utils.defaultAbiCoder.encode(
    //   ["address","uint256","string","bytes","uint256"],
    //   ["0xfa5a5f0bc990be1d095c5385fff6516f6e03c0a7", 0, "\"transfer(address,uint256)\"", "0x00000000000000000000000040803CF8929CF230D20F7A5E22BDA9BF565E0158000000000000000000000000000000000000000000000000016345785D8A0000", 1636097100]
    // )

    console.log(b1)
  
    let b2 = ethers.utils.keccak256(b1)
    console.log(b2)

    // let cc = await _timeLock.queuedTransactions(b2)

    // console.log("----cc:",cc);


    
    let c = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
    [target_address, ethers.utils.parseEther('0.4')]);
    console.log('data c :',c)

  }


  {

    let d = ethers.utils.defaultAbiCoder.encode(["uint8","address","address"],
    [0, "0x815899cc0a8eb9d5b602feb4e9424a5c88dc9876","0x0000000000000000000000000000000000000000"]);
    console.log('data d :',d)

  }

  {

    let e = ethers.utils.defaultAbiCoder.encode(["address"],
    ["0xebD00BD79F6E3D1a09f688c96dbD908006E12e2e"]);
    console.log('data e :',e)

  }


  // await _timeLock.queueTransaction(
  //   lp_address,
  //   "0",
  //   "transfer(address,uint256)",
  //   ethers.utils.defaultAbiCoder.encode(["address","uint256"],
  //     [target_address, ethers.utils.parseEther('0.0009')]),
  //   eta
  // );
  

  // await _timeLock.executeTransaction(
  //     lp_address,
  //     "0",
  //     "transfer(address,uint256)",
  //     ethers.utils.defaultAbiCoder.encode(["address","uint256"],
  //     [target_address, ethers.utils.parseEther('0.0009')]),
  //     eta
  // )


    console.log("✅ Done");
};

export default func;
func.tags = ['Timelock_Transfer'];
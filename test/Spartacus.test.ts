// import { ethers, waffle } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { Signer, BigNumberish, utils, Wallet, BigNumber } from "ethers";
import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import "@openzeppelin/test-helpers";
import {
  SpartacusERC20Token,
  SpartacusERC20Token__factory,
  DAI,
  DAI__factory,
  SpartacusTreasury,
  SpartacusTreasury__factory,
  SpartacusBondDepository__factory,
  SpartacusBondDepository,
  // SSpartacus,
  // SSpartacus__factory,
  SSpartacusERC20,
  SSpartacusERC20__factory,
  SpartacusStaking,
  SpartacusStaking__factory,
  StakingHelper,
  StakingHelper__factory,
  StakingWarmup,
  StakingWarmup__factory,
  StakingDistributor,
  StakingDistributor__factory,

  SPASale,
  SPASale__factory,

  Timelock,
  Timelock__factory,

  Uni,
  Uni__factory,

} from '../typechain'

import * as TimeHelpers from "./time"


describe("Spartacus", () => {
  let deployer: Signer;
  let alice: Signer;
  let bob: Signer;
  let eve: Signer;
  let dev1: Signer;

  let ohm: SpartacusERC20Token;
  let dai: DAI;
  let treasury: SpartacusTreasury;
  let daiBond: SpartacusBondDepository;
  let sohm: SSpartacusERC20
  let staking: SpartacusStaking;
  let stakingHelper: StakingHelper;
  let stakingWarmup: StakingWarmup; 
  let stakingDistributor: StakingDistributor;
  let ohmSale: SPASale;
  let timelock: Timelock;
  let uni: Uni;

  let ohmAsAlice: SpartacusERC20Token;
  let ohmAsBob: SpartacusERC20Token;
  let daiAsAlice: DAI;
  let daiAsBob: DAI;
  let treasuryAsAlice: SpartacusTreasury;
  let treasuryAsBob: SpartacusTreasury;
  let daiBondAsAlice: SpartacusBondDepository;
  let daiBondAsBob: SpartacusBondDepository;
  let sohmAsAlice: SSpartacusERC20;
  let sohmAsBob: SSpartacusERC20;
  let stakingAsAlice: SpartacusStaking;
  let stakingAsBob: SpartacusStaking;

  let ohmSaleAsAlice: SPASale;
  let ohmSaleAsBob: SPASale;
  let ohmSaleAsDev1: SPASale;

  let timelockAsAlice: Timelock;
  let timelockAsBob: Timelock;

  

  const largeApproval = '100000000000000000000000000000000';
  const zeroAddress = '0x0000000000000000000000000000000000000000';

  
  beforeEach(async () => {

    
    // const blocksNeededForQueue = 6000;
    const blocksNeededForQueue = 0;

    // const daiBondBCV = '1910';
    // const daiBondBCV = '300';
    const daiBondBCV = '5';
    const bondVestingLength = '33110';
    const minBondPrice = '0';
    // const maxBondPayout = '20';
    const maxBondPayout = '10000';
    // const bondFee = '10000';
    const bondFee = '0';
    const maxBondDebt = '1000000000000000000000000';
    const intialBondDebt = '0';
    // https://etherscan.io/tx/0x5e1891a667926d53540d50a4199316a5a9d3711ce349169944b97b538ff967ff

    const stakingEpoch = '2200';
    const stakingFirstEpochNumber = '1';
    // const stakingFirstEpochBlock =  '8961000';
    const stakingFirstEpochBlock =  '0';

    const sohm_initialIndex = '7675210820';
    // 4547419269
    // 7675210820
    // https://etherscan.io/tx/0x07072d7da4e9653ca769e4b412d5abe1b53da2efb6fba201494f1fcfa87c1a9e

    const distributor_initialRewardRate = '2975';
    const distributor_firstEpochBlock = '0';

    [deployer] = await ethers.getSigners();
    
    [deployer, alice, bob, eve, dev1] = await ethers.getSigners();

    const _SpartacusERC20Token= (await ethers.getContractFactory(
      "SpartacusERC20Token",
      deployer
    )) as SpartacusERC20Token__factory;
    ohm = await _SpartacusERC20Token.deploy();
    await ohm.deployed();

    {
      await ohm.setVault(await deployer.getAddress());
      //200k
      await ohm.mint(await deployer.getAddress(), '37000000000000');
      // ethers.utils.parseEther('1')
    }
    

    const _DAI = (await ethers.getContractFactory(
      "DAI",
      deployer
    )) as DAI__factory;
    dai = await _DAI.deploy(0);
    await dai.deployed();

    await dai.mint(await deployer.getAddress(), ethers.utils.parseEther('10000000000'))
    await dai.mint(await alice.getAddress(), ethers.utils.parseEther('10000000000'))
    await dai.mint(await bob.getAddress(), ethers.utils.parseEther('10000000000'))

    const _SpartacusTreasury= (await ethers.getContractFactory(
      "SpartacusTreasury",
      deployer
    )) as SpartacusTreasury__factory;
    treasury = await _SpartacusTreasury.deploy(ohm.address, dai.address, dai.address, dai.address, blocksNeededForQueue);
    await treasury.deployed()

    await ohm.setVault(treasury.address);


    const _SpartacusBondDepository= (await ethers.getContractFactory(
      "SpartacusBondDepository",
      deployer
    )) as SpartacusBondDepository__factory;
    daiBond = await _SpartacusBondDepository.deploy(ohm.address, dai.address, treasury.address, await eve.getAddress(), zeroAddress );
    await daiBond.deployed()

      
    await treasury.queue(0, daiBond.address);
    // await TimeHelpers.increase(TimeHelpers.duration.days(ethers.BigNumber.from("1")));
    // await TimeHelpers.advanceBlockTo(blocksNeededForQueue + 1000);
    await treasury.toggle(0, daiBond.address, zeroAddress);
    // await treasury.toggle(0, daiBond.address, zeroAddress);

    
    await daiBond.initializeBondTerms(daiBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);
    await daiBond.setAdjustment(true,1, 13900,0);
    // https://etherscan.io/tx/0xe0ee02f82e6f6956a14385165106312fcf29bd842b7fb319f2490d983c93c0a8
    // await daiBond.setBasePrice(70000000000);


    const _SSpartacus = (await ethers.getContractFactory(
      "SSpartacusERC20",
      deployer
    )) as SSpartacusERC20__factory;
    sohm = await _SSpartacus.deploy();
    await sohm.deployed();


    const _SpartacusStaking = (await ethers.getContractFactory(
      "SpartacusStaking",
      deployer
    )) as SpartacusStaking__factory;
    staking = await _SpartacusStaking.deploy(ohm.address, sohm.address, stakingEpoch, stakingFirstEpochNumber, stakingFirstEpochBlock);
    await staking.deployed();


    const _StakingHelper = (await ethers.getContractFactory(
      "StakingHelper",
      deployer
    )) as StakingHelper__factory; 
    stakingHelper = await _StakingHelper.deploy(staking.address ,ohm.address);
    await stakingHelper.deployed()


    const _StakingWarmup = (await ethers.getContractFactory(
      "StakingWarmup",
      deployer
    )) as StakingWarmup__factory; 
    stakingWarmup = await _StakingWarmup.deploy(staking.address, sohm.address);
    await stakingWarmup.deployed()


    const _Distributor = (await ethers.getContractFactory(
      "StakingDistributor",
      deployer
    )) as StakingDistributor__factory; 
    stakingDistributor = await _Distributor.deploy(treasury.address, ohm.address, stakingEpoch, distributor_firstEpochBlock);
    await stakingDistributor.deployed()


    await sohm.initialize(staking.address);
    await sohm.setIndex(sohm_initialIndex);

    await staking.setContract(0, stakingDistributor.address);
    await staking.setContract(1, stakingWarmup.address);

    await stakingDistributor.addRecipient(staking.address, distributor_initialRewardRate);
    await stakingDistributor.setAdjustment(0,true,0,distributor_initialRewardRate);

    await treasury.queue('8', stakingDistributor.address);
    // await TimeHelpers.advanceBlockTo(blocksNeededForQueue*2 + 2000);
    await treasury.toggle('8', stakingDistributor.address, zeroAddress);

    await daiBond.setStaking(stakingHelper.address, true);


    
    const _SPASale = (await ethers.getContractFactory(
      "SPASale",
      deployer
    )) as SPASale__factory; 
    ohmSale = await _SPASale.deploy(dai.address, ohm.address, await dev1.getAddress(), 1, 30);
    await ohmSale.deployed()


    const _Timelock = (await ethers.getContractFactory(
      "Timelock",
      deployer
    )) as Timelock__factory; 
    timelock = await _Timelock.deploy(await alice.getAddress(), 3600*24);
    await timelock.deployed();


    const _Uni = (await ethers.getContractFactory(
      "Uni",
      deployer
    )) as Uni__factory;
    uni = await _Uni.deploy(await deployer.getAddress(), await deployer.getAddress(), 100000000000);
    await uni.deployed();

    await uni.transfer(timelock.address, ethers.utils.parseEther('999'))

    
    ohmAsAlice = SpartacusERC20Token__factory.connect(ohm.address, alice);
    ohmAsBob = SpartacusERC20Token__factory.connect(ohm.address, bob);

    daiAsAlice = DAI__factory.connect(dai.address, alice);
    daiAsBob = DAI__factory.connect(dai.address, bob);

    treasuryAsAlice = SpartacusTreasury__factory.connect(treasury.address, alice);
    treasuryAsBob = SpartacusTreasury__factory.connect(treasury.address, bob);

    daiBondAsAlice = SpartacusBondDepository__factory.connect(daiBond.address, alice);
    daiBondAsBob = SpartacusBondDepository__factory.connect(daiBond.address, bob);


    sohmAsAlice = SSpartacusERC20__factory.connect(sohm.address, alice);
    sohmAsBob = SSpartacusERC20__factory.connect(sohm.address, bob);

    ohmSaleAsAlice = SPASale__factory.connect(ohmSale.address, alice);
    ohmSaleAsBob = SPASale__factory.connect(ohmSale.address, bob);
    ohmSaleAsDev1 = SPASale__factory.connect(ohmSale.address, dev1);


    timelockAsAlice = Timelock__factory.connect(timelock.address, alice);
    timelockAsBob = Timelock__factory.connect(timelock.address, bob);
  });


  it('Timelock test', async () => {

    // await dai.mint(timelock.address, ethers.utils.parseEther('100'));
    await daiAsAlice.transfer(await timelock.address, ethers.utils.parseEther('123'));
    await ohm.transfer(await timelock.address, '234000000000');

    {
      let a = await dai.balanceOf(timelockAsAlice.address);
      console.log('before timelock dai:',a.valueOf().toString());

      let a1 = await uni.balanceOf(timelockAsAlice.address);
      console.log('before timelock Uni:',a1.valueOf().toString());

      let b = await ohm.balanceOf(await dev1.getAddress());
      console.log('before dev1 ohm:',b.valueOf().toString());
    }

    const eta = (await TimeHelpers.latest()).add(TimeHelpers.duration.days(ethers.BigNumber.from("2")));    

    {
      // let a = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
      // [await dev1.getAddress(), ethers.utils.parseEther('1')]);
      let a = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
      ['0x1c95930dfc1139381265ce45b5f480f1efae09a1', "1000000000000000000000000"]);

      console.log('data:',a)

      console.log('dai address: ', dai.address);
      console.log('dev1 address:', await dev1.getAddress());
      console.log('timelock address:', timelockAsAlice.address);
      console.log('alice address: ', await alice.getAddress())
    }

    // https://github.com/percent-finance/percent-dev/wiki/Timelock-guide-(relevant-to-admin-only)https://github.com/percent-finance/percent-dev/wiki/Timelock-guide-(relevant-to-admin-only)

    await timelockAsAlice.queueTransaction(
      ohm.address,
      "0",
      "transfer(address,uint256)",
      ethers.utils.defaultAbiCoder.encode(["address","uint256"],
      [await dev1.getAddress(), '234000000000']),
      eta
    )

    console.log('----------------111')


    {
      let a = ethers.utils.defaultAbiCoder.encode(["address","uint256"],
      [await dev1.getAddress(), '234000000000']);

      let signature = 'transfer(address,uint256)'

        let a1 = ethers.utils.defaultAbiCoder.encode(
          ["address","uint","string","bytes","uint"],
          [ohm.address, 0, signature, a, eta]
        )
        let a2 = ethers.utils.keccak256(a1)
        
        let bb = await timelock.queuedTransactions(a2)
        console.log('---bb-:',bb);
    }


    await TimeHelpers.increase(TimeHelpers.duration.days(ethers.BigNumber.from("3")));

    await timelockAsAlice.executeTransaction(
      ohm.address,
      "0",
      "transfer(address,uint256)",
      ethers.utils.defaultAbiCoder.encode(["address","uint256"],
      [await dev1.getAddress(), '234000000000']),
      eta
    )

    {
      let a1 = await uni.balanceOf(timelockAsAlice.address);
      console.log('after timelock Uni:',a1.valueOf().toString());

      let b = await ohm.balanceOf(await dev1.getAddress());
      console.log('after dev1 ohm:',b.valueOf().toString());
    }

  });

  // it('Sale test', async () => {

  //     // await ohm.transfer(ohmSale.address, '30000000000000');
  //     await ohm.transfer(ohmSale.address, '60000000000');
  
  //     {
  //       console.log('----before')
  //       let a = await ohm.balanceOf(ohmSale.address);
  //       console.log('ohmSale ohm:',a.valueOf().toString());
  
  //       let b = await dai.balanceOf(ohmSale.address);
  //       console.log('ohmSale dai:',b.valueOf().toString());

  //       let c = await ohmSale.getCurrentTimestamp();
  //       console.log('current timestamp:',c.valueOf().toString());
      
  //     }


  //     await daiAsAlice.approve(ohmSale.address, largeApproval);
  //     await daiAsBob.approve(ohmSale.address, largeApproval);

  //     await ohmSaleAsAlice.deposite();
  //     // await ohmSaleAsBob.deposite();

  //     await ohmSaleAsDev1.setClaimTimestamp(0);

  //     await ohmSaleAsAlice.claim();
  //     // await ohmSaleAsAlice.claim();

  //     {
  //       console.log('----after')

  //       let a = await ohm.balanceOf(ohmSale.address);
  //       console.log('ohmSale ohm:',a.valueOf().toString());
  
  //       let b = await dai.balanceOf(ohmSale.address);
  //       console.log('ohmSale dai:',b.valueOf().toString());

  //       {
  //         let a = await ohm.balanceOf(await alice.getAddress());
  //       console.log('alice ohm:',a.valueOf().toString());
  
  //       // let b = await dai.balanceOf(await dev1.getAddress());
  //       // console.log('dev1 dai:',b.valueOf().toString());
  //       }
  //     }



  //     // await ohmSaleAsAlice.withdraw(ohm.address);
  //     await ohmSaleAsDev1.withdraw(ohm.address);
  //     await ohmSaleAsDev1.withdraw(dai.address);


  //     {
  //       console.log('----after-2')

  //       let a = await ohm.balanceOf(ohmSale.address);
  //       console.log('ohmSale ohm:',a.valueOf().toString());
  
  //       let b = await dai.balanceOf(ohmSale.address);
  //       console.log('ohmSale dai:',b.valueOf().toString());

  //       {
  //         let a = await ohm.balanceOf(await dev1.getAddress());
  //       console.log('dev1 ohm:',a.valueOf().toString());
  
  //       let b = await dai.balanceOf(await dev1.getAddress());
  //       console.log('dev1 dai:',b.valueOf().toString());
  //       }
  //     }

  // });

  it('Bond test', async () => {

    await daiAsAlice.approve(daiBond.address, largeApproval);
    await daiAsAlice.approve(treasury.address, largeApproval);

    // await treasuryAsAlice.deposit('9000000000000000000000000', dai.address, '8400000000000000');

    await daiBond.setBasePrice(60000000000);

    {
      let a = await daiBondAsAlice.bondPrice();
      console.log('bondPrice:',a.valueOf().toString());
      let b = await daiBondAsAlice.bondPriceInUSD();
      console.log('bondPriceInUSD:',b.valueOf().toString());
    }

    for (let index = 0; index < 1; index++) {
          {
            console.log('--------------print')
            // let a = await daiBondAsAlice.bondPriceInUSD();
            let a = await daiBondAsAlice.maxPayout();
            console.log('a:',a.valueOf().toString());

            let b = await daiBondAsAlice.bondPrice();
            console.log('b:',b.valueOf().toString());

            let c = await daiBondAsAlice.debtRatio();
            console.log('c:',c.valueOf().toString());

            let d = await daiBondAsAlice.currentDebt();
            console.log('d:',d.valueOf().toString());
          }
          //1000
          await daiBondAsAlice.deposit(ethers.utils.parseEther('21000'), '600000', await alice.getAddress() );


          if(index == 10){
            await daiBond.setBasePrice(45000000000);
          }

    }

    // await TimeHelpers.increase(TimeHelpers.duration.days(ethers.BigNumber.from("1")));
    // await TimeHelpers.advanceBlockTo(5000);

    await daiBondAsAlice.redeem(await alice.getAddress(), false);

    {
      let a = await ohm.balanceOf(await alice.getAddress());
      console.log('ohmAsAlice:',a.valueOf().toString());

      let b = await ohm.balanceOf(treasury.address);
      console.log('ohmAsTreasury:',b.valueOf().toString());

      let c = await ohm.balanceOf(daiBond.address);
      console.log('ohmAsDaiBond:',c.valueOf().toString());
    }
    
    {
      let a = await dai.balanceOf(treasury.address);
      console.log('daiAsAlice:',a.valueOf().toString());
    }

    {
      await ohm.approve(staking.address, largeApproval);

      await staking.stake('85000000000000', await deployer.getAddress());     
      await staking.claim(await deployer.getAddress());

      {
        console.log('---------print')

        let a = await ohm.balanceOf(await deployer.getAddress());
        console.log('ohmAsdeployer:',a.valueOf().toString());

        let b = await sohm.balanceOf(await deployer.getAddress());
        console.log('sohmAsdeployer:',b.valueOf().toString());

      }

    }

  });

  it('Staking test', async () => {

    // await ohm.approve(staking.address, largeApproval);

    // await staking.stake('85000000000000', await deployer.getAddress());     
    // await staking.claim(await deployer.getAddress());

    // {
    //   console.log('---------print')

    //   let a = await ohm.balanceOf(await deployer.getAddress());
    //   console.log('ohmAsdeployer:',a.valueOf().toString());

    //   let b = await sohm.balanceOf(await deployer.getAddress());
    //   console.log('sohmAsdeployer:',b.valueOf().toString());

    // }

    console.log('Done');

  }).timeout(5000);
  
});
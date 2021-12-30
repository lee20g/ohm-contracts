// import { ethers, waffle } from "hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { Signer, BigNumberish, utils, Wallet } from "ethers";
import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import "@openzeppelin/test-helpers";
import {
  OlympusERC20Token,
  OlympusERC20Token__factory,
  DAI,
  DAI__factory,
  OlympusTreasury,
  OlympusTreasury__factory,
  OlympusBondDepository__factory,
  OlympusBondDepository,
  // SOlympus,
  // SOlympus__factory,
  SOlympusERC20,
  SOlympusERC20__factory,
  OlympusStaking,
  OlympusStaking__factory,
  StakingHelper,
  StakingHelper__factory,
  StakingWarmup,
  StakingWarmup__factory,
  Distributor,
  Distributor__factory,

  OHMSale,
  OHMSale__factory

} from '../typechain'

import * as TimeHelpers from "./time"


describe("Olympus", () => {
  let deployer: Signer;
  let alice: Signer;
  let bob: Signer;
  let eve: Signer;
  let dev1: Signer;

  let ohm: OlympusERC20Token;
  let dai: DAI;
  let treasury: OlympusTreasury;
  let daiBond: OlympusBondDepository;
  let sohm: SOlympusERC20
  let staking: OlympusStaking;
  let stakingHelper: StakingHelper;
  let stakingWarmup: StakingWarmup; 
  let stakingDistributor: Distributor;
  let ohmSale: OHMSale;

  let ohmAsAlice: OlympusERC20Token;
  let ohmAsBob: OlympusERC20Token;
  let daiAsAlice: DAI;
  let daiAsBob: DAI;
  let treasuryAsAlice: OlympusTreasury;
  let treasuryAsBob: OlympusTreasury;
  let daiBondAsAlice: OlympusBondDepository;
  let daiBondAsBob: OlympusBondDepository;
  let sohmAsAlice: SOlympusERC20;
  let sohmAsBob: SOlympusERC20;
  let stakingAsAlice: OlympusStaking;
  let stakingAsBob: OlympusStaking;

  let ohmSaleAsAlice: OHMSale;
  let ohmSaleAsBob: OHMSale;
  let ohmSaleAsDev1: OHMSale;

  const largeApproval = '100000000000000000000000000000000';
  const zeroAddress = '0x0000000000000000000000000000000000000000';

  
  beforeEach(async () => {

    
    // const blocksNeededForQueue = 6000;
    const blocksNeededForQueue = 0;

    // const daiBondBCV = '1910';
    // const daiBondBCV = '300';
    const daiBondBCV = '300';
    const bondVestingLength = '33110';
    const minBondPrice = '0';
    // const maxBondPayout = '20';
    const maxBondPayout = '1000';
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

    const _OlympusERC20Token= (await ethers.getContractFactory(
      "OlympusERC20Token",
      deployer
    )) as OlympusERC20Token__factory;
    ohm = await _OlympusERC20Token.deploy();
    await ohm.deployed();

    {
      await ohm.setVault(await deployer.getAddress());
      //200k
      await ohm.mint(await deployer.getAddress(), '60000000000000');
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

    const _OlympusTreasury= (await ethers.getContractFactory(
      "OlympusTreasury",
      deployer
    )) as OlympusTreasury__factory;
    treasury = await _OlympusTreasury.deploy(ohm.address, dai.address, dai.address, blocksNeededForQueue);
    await treasury.deployed()

    await ohm.setVault(treasury.address);


    const _OlympusBondDepository= (await ethers.getContractFactory(
      "OlympusBondDepository",
      deployer
    )) as OlympusBondDepository__factory;
    daiBond = await _OlympusBondDepository.deploy(ohm.address, dai.address, treasury.address, await eve.getAddress(), zeroAddress );
    await daiBond.deployed()


    await treasury.queue(0, daiBond.address);
    // await TimeHelpers.increase(TimeHelpers.duration.days(ethers.BigNumber.from("1")));
    // await TimeHelpers.advanceBlockTo(blocksNeededForQueue + 1000);
    await treasury.toggle(0, daiBond.address, zeroAddress);

    
    await daiBond.initializeBondTerms(daiBondBCV, bondVestingLength, minBondPrice, maxBondPayout, bondFee, maxBondDebt, intialBondDebt);
    await daiBond.setAdjustment(true,0, 13900,0);
    // https://etherscan.io/tx/0xe0ee02f82e6f6956a14385165106312fcf29bd842b7fb319f2490d983c93c0a8



    const _SOlympus = (await ethers.getContractFactory(
      "SOlympusERC20",
      deployer
    )) as SOlympusERC20__factory;
    sohm = await _SOlympus.deploy();
    await sohm.deployed();


    const _OlympusStaking = (await ethers.getContractFactory(
      "OlympusStaking",
      deployer
    )) as OlympusStaking__factory;
    staking = await _OlympusStaking.deploy(ohm.address, sohm.address, stakingEpoch, stakingFirstEpochNumber, stakingFirstEpochBlock);
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
      "Distributor",
      deployer
    )) as Distributor__factory; 
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


    
    const _OHMSale = (await ethers.getContractFactory(
      "OHMSale",
      deployer
    )) as OHMSale__factory; 
    ohmSale = await _OHMSale.deploy(dai.address, ohm.address, await dev1.getAddress(), 1, 30);
    await ohmSale.deployed()

    
    ohmAsAlice = OlympusERC20Token__factory.connect(ohm.address, alice);
    ohmAsBob = OlympusERC20Token__factory.connect(ohm.address, bob);

    daiAsAlice = DAI__factory.connect(dai.address, alice);
    daiAsBob = DAI__factory.connect(dai.address, bob);

    treasuryAsAlice = OlympusTreasury__factory.connect(treasury.address, alice);
    treasuryAsBob = OlympusTreasury__factory.connect(treasury.address, bob);

    daiBondAsAlice = OlympusBondDepository__factory.connect(daiBond.address, alice);
    daiBondAsBob = OlympusBondDepository__factory.connect(daiBond.address, bob);


    sohmAsAlice = SOlympusERC20__factory.connect(sohm.address, alice);
    sohmAsBob = SOlympusERC20__factory.connect(sohm.address, bob);

    ohmSaleAsAlice = OHMSale__factory.connect(ohmSale.address, alice);
    ohmSaleAsBob = OHMSale__factory.connect(ohmSale.address, bob);
    ohmSaleAsDev1 = OHMSale__factory.connect(ohmSale.address, dev1);
  });

  it('Sale test', async () => {

      // await ohm.transfer(ohmSale.address, '30000000000000');
      await ohm.transfer(ohmSale.address, '60000000000');
  
      {
        console.log('----before')
        let a = await ohm.balanceOf(ohmSale.address);
        console.log('ohmSale ohm:',a.valueOf().toString());
  
        let b = await dai.balanceOf(ohmSale.address);
        console.log('ohmSale dai:',b.valueOf().toString());

        let c = await ohmSale.getCurrentTimestamp();
        console.log('current timestamp:',c.valueOf().toString());
      
      }


      await daiAsAlice.approve(ohmSale.address, largeApproval);
      await daiAsBob.approve(ohmSale.address, largeApproval);

      await ohmSaleAsAlice.deposite();
      // await ohmSaleAsBob.deposite();

      await ohmSaleAsDev1.setClaimTimestamp(0);

      await ohmSaleAsAlice.claim();
      await ohmSaleAsAlice.claim();

      {
        console.log('----after')

        let a = await ohm.balanceOf(ohmSale.address);
        console.log('ohmSale ohm:',a.valueOf().toString());
  
        let b = await dai.balanceOf(ohmSale.address);
        console.log('ohmSale dai:',b.valueOf().toString());

        {
          let a = await ohm.balanceOf(await alice.getAddress());
        console.log('alice ohm:',a.valueOf().toString());
  
        // let b = await dai.balanceOf(await dev1.getAddress());
        // console.log('dev1 dai:',b.valueOf().toString());
        }
      }



      // await ohmSaleAsAlice.withdraw(ohm.address);
      await ohmSaleAsDev1.withdraw(ohm.address);
      await ohmSaleAsDev1.withdraw(dai.address);


      {
        console.log('----after-2')

        let a = await ohm.balanceOf(ohmSale.address);
        console.log('ohmSale ohm:',a.valueOf().toString());
  
        let b = await dai.balanceOf(ohmSale.address);
        console.log('ohmSale dai:',b.valueOf().toString());

        {
          let a = await ohm.balanceOf(await dev1.getAddress());
        console.log('dev1 ohm:',a.valueOf().toString());
  
        let b = await dai.balanceOf(await dev1.getAddress());
        console.log('dev1 dai:',b.valueOf().toString());
        }
      }

  });

  it('Bond test', async () => {

    await daiAsAlice.approve(daiBond.address, largeApproval);
    await daiAsAlice.approve(treasury.address, largeApproval);

    // await treasuryAsAlice.deposit('9000000000000000000000000', dai.address, '8400000000000000');

    for (let index = 0; index < 10; index++) {
          {
            console.log('--------------print')
            let a = await daiBondAsAlice.bondPriceInUSD();
            console.log('a:',a.valueOf().toString());

            let b = await daiBondAsAlice.bondPrice();
            console.log('b:',b.valueOf().toString());

            let c = await daiBondAsAlice.debtRatio();
            console.log('c:',c.valueOf().toString());

            let d = await daiBondAsAlice.currentDebt();
            console.log('d:',d.valueOf().toString());
          }
          //5000
          await daiBondAsAlice.deposit('100000000000000000000', '60000', await alice.getAddress() );
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
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

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


  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const ohm_adress = '0xe1b2C76564D5591BF0Ed530B59cD7339906049F4'
  const dai_address = '0xDEe4165ef9580a45F1540384f94C3eFBa7c7589A'
  const treasury_address = '0xaC62E8B6bEe650D6eDc8fa0272A397DA0BbBE0e8'
  const dao_address = '0xDEe4165ef9580a45F1540384f94C3eFBa7c7589A'
  const zeroAddress = '0x0000000000000000000000000000000000000000'

  await deploy('OlympusBondDepository', {
    from: deployer,
    args: [
      ohm_adress,
      dai_address,
      treasury_address,
      dao_address,
      zeroAddress,
    ],
    log: true,
    deterministicDeployment: false,
  });
};

export default func;
func.tags = ['daiBond'];
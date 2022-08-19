import { ethers } from 'ethers';
import { lottery, router, weth } from '../addressContracts';
import IRouter from '../interface/IRouter.json';
import IERC20 from '../interface/IERC20.json';
import ILottery from '../interface/IERC20.json';

export const routerContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
    return new ethers.Contract(router, IRouter, signer);
}

export const wethContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
    return new ethers.Contract(weth, IERC20, signer);
}

export const lotteryContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
    return new ethers.Contract(lottery, ILottery, signer);
}


import { getChain } from "./util/chains";
import addresss from './json/address.json';
export const router = getChain().router;
export const weth = getChain().weth;
export const lottery = getChain().lottery;


export interface Chains {
    0x4?: string
    0x3: string
}


/*
export const geta = (chains: Chains): string => {
    const chain_id = sessionStorage.getItem("chain_id"); 
    return chains[chain_id];
}

export const gg = () => {
    return geta(addresss.);
}
*/
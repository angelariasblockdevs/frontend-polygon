import { MenuEntry } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Home'),
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: t('Trade'),
    icon: 'TradeIcon',
    items: [
      {
        label: "Exchange Quickswap",
        href: "https://quickswap.exchange/#/swap?outputCurrency=0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708",
      },
      {
        label: "Liquidity Quickswap",
        href:"https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708"
      },
      {
        label: "Exchange PolyCat",
        href: "https://polycat.finance/swap",
      },
      {
        label: "Liquidity PolyCat",
        href:"https://polycat.finance/liquidity"
      },
      {
        label: "Exchange JetSwap",
        href: "https://polygon-exchange.jetswap.finance/#/swap",
      },
      {
        label: "Liquidity JetSwap",
        href:"https://polygon-exchange.jetswap.finance/#/pool"
      },        
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Pools'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Auto Paladdin'),
    icon: 'IfoIcon',
    href: '/poolscherry',
  },
  {
    label: t('Referral'),
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: t('Info'),
    icon: 'InfoIcon',
    items:[
      {
        label: 'Dexguru',
        href:'https://dex.guru/token/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708-polygon'
       },
       {
        label: 'PooCoin',
        href:'https://poocoin.app/tokens/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708'
       },
    ]
  },
  {
    label: t('More'),
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/',
      },
      {
        label: t('Docs'),
        href: 'https://docs.paladdinfinance.com',
      },
   
     
    ],
  },
  // {
  //   label:'Audited by Quillaudits',
  //   icon:'AuditIcon',
  //   href:'https://github.com/paladdinfinance/audits'
  // }

]

export default config
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
        label: "Exchange PolyCat",
        href: "https://polycat.finance/swap",
      },
      {
        label: "Exchange JetSwap",
        href: "https://polygon-exchange.jetswap.finance/#/swap",
      },    
    ],
  },
  {
    label: t('Farms'),
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: t('Staking'),
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: t('Auto Pool'),
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
        label: 'Polygonscan',
        href:'https://dex.guru/token/0xbD01698Ab485A7b8092A4e32B9c8B1939F6D2708-polygon'
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

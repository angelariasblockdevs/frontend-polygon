import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Paladdin Finance',
  description:
    'Paladdin Finance - Best DEFi',
  image: 'https://Paladdin Finance.com/logo.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Paladdin Finance')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Paladdin Finance')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Paladdin Finance')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Paladdin Finance')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Paladdin Finance')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Paladdin Finance')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('Paladdin Finance')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Paladdin Finance')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Paladdin Finance')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('Paladdin Finance')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('Paladdin Finance')}`,
      }
    default:
      return null
  }
}

import { RiBankLine, RiCoinLine, RiFileTextLine, RiHomeLine, RiNotificationLine, RiWalletLine, RiMapPinLine } from 'react-icons/ri';

export const sidebarMenu = [
  {
    title: 'Tableau de bord',
    icon: <RiHomeLine />,
    id: 'dashboard',
    path: '/account/dashboard',
  },
  {
    title: 'Notification',
    icon: <RiNotificationLine />,
    id: 'notification',
    path: '/account/notification',
  },
  {
    title: 'MyOrders',
    icon: <RiFileTextLine />,
    id: 'order',
    path: '/account/order',
  },
  // {
  //   title: 'BankDetails',
  //   icon: <RiBankLine />,
  //   id: 'bank-details',
  //   path: '/account/bank-details',
  // },
  {
    title: 'MyWallet',
    icon: <RiWalletLine />,
    id: 'wallet',
    path: '/account/wallet',
  },
  {
    title: 'Points cadeaux',
    icon: <RiCoinLine />,
    id: 'point',
    path: '/account/point',
  },
  // {
  //   title: 'RefundHistory',
  //   icon: <RiMapPinLine />,
  //   id: 'refund',
  //   path: '/account/refund',
  // },
];

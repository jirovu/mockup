
import usageType1 from './assets/img/usage-type1.svg';
import usageType2 from './assets/img/usage-type2.svg';
import usageType3 from './assets/img/usage-type3.svg';
import usageType4 from './assets/img/usage-type4.svg';

import marcoXu1 from './assets/img/marco-xu1.svg';
import marcoXu2 from './assets/img/marco-xu2.svg';

import fashion1 from './assets/img/fashion1.svg';
import fashion2 from './assets/img/fashion2.svg';

import AllCategory from './assets/img/all-category.svg';
import GadgetCategory from './assets/img/gadget-category.svg';

import interior1 from './assets/img/interior1.svg';
import interior2 from './assets/img/interior2.svg';

import marco1 from './assets/img/marco1.svg';
import marco2 from './assets/img/marco2.svg';

import product1 from './assets/img/product1.svg';
import product2 from './assets/img/product2.svg';
import product3 from './assets/img/product3.svg';
import product4 from './assets/img/product4.svg';
import product5 from './assets/img/product5.svg';
import product6 from './assets/img/product6.svg';

import stype1 from './assets/img/s-type-1.svg';
import stype2 from './assets/img/s-type-2.svg';
import stype3 from './assets/img/s-type-3.svg';

import suse1 from './assets/img/s-use-1.svg';
import suse2 from './assets/img/s-use-2.svg';
import suse3 from './assets/img/s-use-3.svg';
import suse4 from './assets/img/s-use-4.svg';

import sdelivery1 from './assets/img/s-delivery-1.svg';
import sdelivery2 from './assets/img/s-delivery-2.svg';
import sdelivery3 from './assets/img/s-delivery-3.svg';

import shopPageOverviewImgs1 from './assets/img/shop-page-img-1.svg';
import shopPageOverviewImgs2 from './assets/img/shop-page-img-2.svg';
import shopPageOverviewImgs3 from './assets/img/shop-page-img-3.svg';

import storeItem1 from './assets/img/store-item-1.svg';
import storeItem2 from './assets/img/store-item-2.svg';

export const storeItems = [
    {
        id: 0,
        name: 'Go Pro Hero Black 7',
        img: storeItem1,
        price: '4980円 / 月額',
        btnLst: [
            {
                id: '01',
                btnName: '月額'
            },
            {
                id: '02',
                btnName: '購入'
            }
        ]
    },
    {
        id: 1,
        name: 'imac',
        img: storeItem2,
        price: '7980円 / 月額',
        btnLst: [
            {
                id: '11',
                btnName: '月額'
            }
        ]
    }
];

export const shopPageOverviewImgs = [
    {
        id: '0',
        img: shopPageOverviewImgs1,
    },
    {
        id: '1',
        img: shopPageOverviewImgs2,
    },
    {
        id: '2',
        img: shopPageOverviewImgs3,
    }
];

export const spOverviewServices = [
    {
        id: 0,
        title: '店舗タイプ',
        services: [
            {
                id: '01',
                img: stype1,
                txt: '店舗営業',
                active: false
            },
            {
                id: '02',
                img: stype2,
                txt: '事業所',
                active: false
            },
            {
                id: '03',
                img: stype3,
                txt: 'EC',
                active: true
            }
        ]
    },
    {
        id: 1,
        title: '利用方法',
        services: [
            {
                id: '11',
                img: suse1,
                txt: '月額利用',
                active: true
            },
            {
                id: '12',
                img: suse2,
                txt: '短期利用',
                active: false
            },
            {
                id: '13',
                img: suse3,
                txt: '購入可能',
                active: true
            },
            {
                id: '14',
                img: suse4,
                txt: ' 借り放題',
                active: true
            }
        ]
    },
    {
        id: 3,
        title: '配送',
        services: [
            {
                id: '31',
                img: sdelivery1,
                txt: '店舗受取り',
                active: false
            },
            {
                id: '32',
                img: sdelivery2,
                txt: '店舗配送',
                active: false
            },
            {
                id: '33',
                img: sdelivery3,
                txt: '宅配事業者',
                active: true
            }
        ]
    }
];

export const ipOverviewServices = [
    {
        id: 0,
        title: '店舗タイプ',
        services: [
            {
                id: '01',
                img: suse1,
                txt: '月額利用',
                active: true
            },
            {
                id: '02',
                img: suse2,
                txt: '短期利用',
                active: false
            },
            {
                id: '03',
                img: suse3,
                txt: '購入可能',
                active: true
            },
            {
                id: '04',
                img: suse4,
                txt: ' 借り放題',
                active: false
            }
        ]
    },
    {
        id: 1,
        title: '受取り方法',
        services: [
            {
                id: '11',
                img: sdelivery1,
                txt: '店舗受取り',
                active: false
            },
            {
                id: '12',
                img: sdelivery2,
                txt: '店舗配送',
                active: false
            },
            {
                id: '13',
                img: sdelivery3,
                txt: '宅配事業者',
                active: true
            }
        ]
    }
];

export const products = [
    {
        id: 0,
        name: 'Real - Apple',
        img: product1,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: '01',
                btnName: '月額'
            }
        ]
    },
    {
        id: 1,
        name: 'Lunchtime',
        img: product2,
        price: '1980円 / 月額',
        btnLst: [
            {
                id: '11',
                btnName: '月額'
            }
        ]
    },
    {
        id: 2,
        name: '鯉',
        img: product3,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: '21',
                btnName: '月額'
            }
        ]
    },
    {
        id: 3,
        name: 'あるカフェのひととき',
        img: product4,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: '31',
                btnName: '月額'
            }
        ]
    },
    {
        id: 4,
        name: 'Real - Apple',
        img: product5,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: '41',
                btnName: '月額'
            }
        ]
    },
    {
        id: 5,
        name: 'Real - Apple',
        img: product6,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: '51',
                btnName: '月額'
            }
        ]
    }
];

export const marcoProducts = [
    {
        id: 0,
        name: 'iRoboto 648',
        price: '3980円 / 14日',
        img: marco1,
        btnLst: [
            {
                btnId: '00',
                btnName: '短期'
            },
            {
                btnId: '01',
                btnName: '購入'
            }
        ]
    },
    {
        id: 1,
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: '10',
                btnName: '短期'
            },
            {
                btnId: '11',
                btnName: '購入'
            }
        ]
    },
    {
        id: 2,
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: '20',
                btnName: '短期'
            },
            {
                btnId: '21',
                btnName: '購入'
            }
        ]
    }
];

export const interiorProducts = [
    {
        id: 0,
        name: 'アンティークデスク',
        price: '4780円 / 月額',
        img: interior1,
        btnLst: [
            {
                btnId: '00',
                btnName: '月額'
            }
        ]
    },
    {
        id: 1,
        name: '祈りの灯',
        price: '2980円 / 月額',
        img: interior2,
        btnLst: [
            {
                btnId: '10',
                btnName: '月額'
            }
        ]
    }
];

export const usageTypes = [
    {
        id: 0,
        img: usageType1,
        txt: '月額利用',
    },
    {
        id: 1,
        img: usageType2,
        txt: '短期利用',
    },
    {
        id: 2,
        img: usageType3,
        txt: 'レンタル後購入',
    },
    {
        id: 3,
        img: usageType4,
        txt: '借り放題',
    }
];

export const marcoXu = [
    {
        id: 0,
        name: 'BESV TRS2 XC',
        price: '9000円 / 当日',
        img: marcoXu1,
        btnLst: [
            {
                btnId: '00',
                btnName: '月額'
            }
        ]
    },
    {
        id: 1,
        name: 'アスガルド',
        price: '20000円 /1日',
        img: marcoXu2,
        btnLst: [
            {
                btnId: '10',
                btnName: '月額'
            }
        ]
    }
];

export const fashionStyles = [
    {
        id: 0,
        name: 'HERMES',
        price: '6800円 / 月額',
        img: fashion1,
        btnLst: [
            {
                btnId: '00',
                btnName: '借り放題'
            }
        ]
    },
    {
        id: 1,
        name: 'LOUIS VUITTON',
        price: '6800円 / 月額',
        img: fashion2,
        btnLst: [
            {
                btnId: '10',
                btnName: '借り放題'
            }
        ]
    }
];

export const categories = [
    {
        id: 0,
        img: AllCategory,
        title: '全て',
        txt: 'All Category'
    },
    {
        id: 1,
        img: GadgetCategory,
        title: 'ガジェット',
        txt: 'Gadget'
    },
    {
        id: 2,
        img: GadgetCategory,
        title: 'ガジェット',
        txt: 'Gadget'
    }
];
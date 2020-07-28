
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
        id: Math.random(),
        name: 'Go Pro Hero Black 7',
        img: storeItem1,
        price: '4980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            },
            {
                id: Math.random(),
                btnName: '購入'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'imac',
        img: storeItem2,
        price: '7980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    }
];

export const shopPageOverviewImgs = [
    {
        id: Math.random(),
        img: shopPageOverviewImgs1,
    },
    {
        id: Math.random(),
        img: shopPageOverviewImgs2,
    },
    {
        id: Math.random(),
        img: shopPageOverviewImgs3,
    }
];

export const spOverviewServices = [
    {
        id: Math.random(),
        title: '店舗タイプ',
        services: [
            {
                id: Math.random(),
                img: stype1,
                txt: '店舗営業',
                active: false
            },
            {
                id: Math.random(),
                img: stype2,
                txt: '事業所',
                active: false
            },
            {
                id: Math.random(),
                img: stype3,
                txt: 'EC',
                active: true
            }
        ]
    },
    {
        id: Math.random(),
        title: '利用方法',
        services: [
            {
                id: Math.random(),
                img: suse1,
                txt: '月額利用',
                active: true
            },
            {
                id: Math.random(),
                img: suse2,
                txt: '短期利用',
                active: false
            },
            {
                id: Math.random(),
                img: suse3,
                txt: '購入可能',
                active: true
            },
            {
                id: Math.random(),
                img: suse4,
                txt: ' 借り放題',
                active: true
            }
        ]
    },
    {
        id: Math.random(),
        title: '配送',
        services: [
            {
                id: Math.random(),
                img: sdelivery1,
                txt: '店舗受取り',
                active: false
            },
            {
                id: Math.random(),
                img: sdelivery2,
                txt: '店舗配送',
                active: false
            },
            {
                id: Math.random(),
                img: sdelivery3,
                txt: '宅配事業者',
                active: true
            }
        ]
    }
];

export const ipOverviewServices = [
    {
        id: Math.random(),
        title: '店舗タイプ',
        services: [
            {
                id: Math.random(),
                img: suse1,
                txt: '月額利用',
                active: true
            },
            {
                id: Math.random(),
                img: suse2,
                txt: '短期利用',
                active: false
            },
            {
                id: Math.random(),
                img: suse3,
                txt: '購入可能',
                active: true
            },
            {
                id: Math.random(),
                img: suse4,
                txt: ' 借り放題',
                active: false
            }
        ]
    },
    {
        id: Math.random(),
        title: '受取り方法',
        services: [
            {
                id: Math.random(),
                img: sdelivery1,
                txt: '店舗受取り',
                active: false
            },
            {
                id: Math.random(),
                img: sdelivery2,
                txt: '店舗配送',
                active: false
            },
            {
                id: Math.random(),
                img: sdelivery3,
                txt: '宅配事業者',
                active: true
            }
        ]
    }
];

export const products = [
    {
        id: Math.random(),
        name: 'Real - Apple',
        img: product1,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'Lunchtime',
        img: product2,
        price: '1980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: '鯉',
        img: product3,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'あるカフェのひととき',
        img: product4,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'Real - Apple',
        img: product5,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'Real - Apple',
        img: product6,
        price: '2980円 / 月額',
        btnLst: [
            {
                id: Math.random(),
                btnName: '月額'
            }
        ]
    }
];

export const marcoProducts = [
    {
        id: Math.random(),
        name: 'iRoboto 648',
        price: '3980円 / 14日',
        img: marco1,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '短期'
            },
            {
                btnId: Math.random(),
                btnName: '購入'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '短期'
            },
            {
                btnId: Math.random(),
                btnName: '購入'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'ホットクック',
        price: '5980円 / 14日',
        img: marco2,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '短期'
            },
            {
                btnId: Math.random(),
                btnName: '購入'
            }
        ]
    }
];

export const interiorProducts = [
    {
        id: Math.random(),
        name: 'アンティークデスク',
        price: '4780円 / 月額',
        img: interior1,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: '祈りの灯',
        price: '2980円 / 月額',
        img: interior2,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '月額'
            }
        ]
    }
];

export const usageTypes = [
    {
        id: Math.random(),
        img: usageType1,
        txt: '月額利用',
    },
    {
        id: Math.random(),
        img: usageType2,
        txt: '短期利用',
    },
    {
        id: Math.random(),
        img: usageType3,
        txt: 'レンタル後購入',
    },
    {
        id: Math.random(),
        img: usageType4,
        txt: '借り放題',
    }
];

export const marcoXu = [
    {
        id: Math.random(),
        name: 'BESV TRS2 XC',
        price: '9000円 / 当日',
        img: marcoXu1,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '月額'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'アスガルド',
        price: '20000円 /1日',
        img: marcoXu2,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '月額'
            }
        ]
    }
];

export const fashionStyles = [
    {
        id: Math.random(),
        name: 'HERMES',
        price: '6800円 / 月額',
        img: fashion1,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '借り放題'
            }
        ]
    },
    {
        id: Math.random(),
        name: 'LOUIS VUITTON',
        price: '6800円 / 月額',
        img: fashion2,
        btnLst: [
            {
                btnId: Math.random(),
                btnName: '借り放題'
            }
        ]
    }
];

export const categories = [
    {
        id: Math.random(),
        img: AllCategory,
        title: '全て',
        txt: 'All Category'
    },
    {
        id: Math.random(),
        img: GadgetCategory,
        title: 'ガジェット',
        txt: 'Gadget'
    },
    {
        id: Math.random(),
        img: GadgetCategory,
        title: 'ガジェット',
        txt: 'Gadget'
    }
];
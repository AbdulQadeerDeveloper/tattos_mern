import { GET_LIST_CATEGORIES } from './actionType'
// tatoo_Categories_Images
import tattooedFirstImage from '../../asserts/baner/Flower-tattoos-on-men.jpg'
import tattooedSecImage from '../../asserts/baner/tattooed-man.jpg'
import tattoo_slider_Images_2 from '../../asserts/slider/compass-forearm.jpg'
import tattoo_slider_Images_3 from '../../asserts/slider/featured-img-of-post-204386.jpg'
import tattoo_slider_Images_4 from '../../asserts/slider/forearm-tattoo-women.jpg'
import tattoo_slider_Images_5 from '../../asserts/slider/forearm-tattoos-020217143.jpg'
import tattoo_slider_Images_6 from '../../asserts/slider/compass-forearm.jpg'
import tattoo_slider_Images_7 from '../../asserts/slider/20201015_0zmGOrN0COVPywt.jpeg'
import tattoo_slider_Images_8 from '../../asserts/slider/20191028_g90MNPOhL4exPGd.jpg'
import tattoo_slider_Images_9 from '../../asserts/slider/20191028_g90MNPOhL4exPGd (1).jpg'
import tattoo_slider_Images_10 from '../../asserts/slider/20190919_yM6nSIoKl6xWLCp.png'
import tattoo_slider_Images_11 from '../../asserts/slider/20190816_HvhzbgWKLMLEyzg.png'
import tattoo_slider_Images_12 from '../../asserts/slider/20190816_HvhzbgWKLMLEyzg (1).png'
import tattoo_slider_Images_13 from '../../asserts/slider/20190816_d7tCi6aXi5O3ONB.png'
import tattoo_slider_Images_14 from '../../asserts/slider/20190816_72PfSOIqLRkdxNj.png'
import tattoo_slider_Images_15 from '../../asserts/slider/20190628_0qf69xkxVg17tO1.jpg'
import tattoo_slider_Images_16 from '../../asserts/slider/20181221_oQC5KM8EROyZk9v.jpg'
import tattoo_slider_Images_17 from '../../asserts/slider/2017-07-162004081560350097228687447_1800572_yx9jb8esg5.jpg'
import tattoo_slider_Images_18 from '../../asserts/slider/20180608_OkJUkIjl34x0cZ8 (1).png'
import tattoo_slider_Images_19 from '../../asserts/slider/graffati-tattoo.jpg'
export const addNewRecord = (content) => {
    const currentDate = new Date().toLocaleDateString();
    return {
        type: GET_LIST_CATEGORIES,
        payload: {
            categories: [
                {
                    id: 0,
                    title: "arts & crafts",
                    name: "antiques"

                },
                {
                    id: 1,
                    title: "barter",
                    name: "arts & crafts"
                },
                {
                    id: 2,
                    title: "boats",
                    name: "antiques"
                },
                {
                    id: 3,
                    title: "business",
                    name: "books"
                },
                {
                    id: 4,
                    title: "antiques",
                    name: "Aram"
                },
                {
                    id: 5,
                    title: "books",
                    name: "red tatoo"
                }, {
                    id: 6,
                    title: "barter",
                    name: "Black tatoo"
                }, {
                    id: 7,
                    title: "arts & crafts",
                    name: "tatoo"
                },
            ],
            tattoo_Categories:
                [
                    {
                        id: 0,
                        title: 'HTML',
                        image_Url: tattooedFirstImage,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 1,
                        title: 'Javascript',
                        image_Url: tattoo_slider_Images_2,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 2,
                        title: 'Php',
                        image_Url: tattoo_slider_Images_3,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 3,
                        title: 'react',
                        image_Url: tattoo_slider_Images_4,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 4,
                        title: 'nodejs',
                        image_Url: tattoo_slider_Images_5,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 5,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_6,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 6,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_7,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 7,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_8,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 8,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_9,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 9,
                        title: 'HTML',
                        image_Url: tattooedSecImage,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 10,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_10,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 11,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_11,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 12,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_12,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 13,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_13,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 14,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_14,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 15,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_15,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 16,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_16,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 17,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_17,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 18,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_18,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 19,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_19,
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                  


                ],

        }
    }
}

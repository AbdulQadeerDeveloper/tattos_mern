import { GET_LIST_ARTIS } from './actionType'
// GET_LIST_ARTIS
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


export const addNewRecord = (content) => {
   
    return {
        type: GET_LIST_ARTIS,
        payload: {

            artis_info: [
                {
                    id: 0,
                    name: 'Jonson web',
                    count_follower: '793',
                    count_following: '79',
                    user_follow:'793',
                    short_url: tattooedFirstImage,
                    discription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.s"
                }
            ],

            tattoo_upload:
                [
                    {
                        id: 0,
                        title: 'Jonson web',
                        image_Url: tattooedFirstImage
                    },
                    {
                        id: 1,
                        title: 'Javascript',
                        image_Url: tattoo_slider_Images_2,

                    },
                    {
                        id: 2,
                        title: 'Php',
                        image_Url: tattoo_slider_Images_3,

                    },
                    {
                        id: 3,
                        title: 'react',
                        image_Url: tattoo_slider_Images_4,

                    },
                    {
                        id: 4,
                        title: 'nodejs',
                        image_Url: tattoo_slider_Images_5,

                    },
                    {
                        id: 5,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_6,

                    },
                    {
                        id: 6,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_7,

                    },
                    {
                        id: 7,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_8,

                    },
                    {
                        id: 8,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_9,

                    },
                    {
                        id: 9,
                        title: 'HTML',
                        image_Url: tattooedSecImage,

                    },
                    {
                        id: 10,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_10,

                    }



                ],

        }
    }
}

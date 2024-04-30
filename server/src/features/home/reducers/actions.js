import { GET_LIST } from "./actionTypes";
// tatoo_Banner_Images
import tattooedFirstImage from '../../asserts/baner/Flower-tattoos-on-men.jpg'
import tattooedSecImage from '../../asserts/baner/tattooed-man.jpg'
import tattooedThirdImage from '../../asserts/baner/1_eK_TpZ75UCxt7eBeA1Jbew.jpg'
import tattooedFouthImage from '../../asserts/baner/Statue-angel-tattoo-by-@oxi.tattoo-495x400.jpg'
import tattooedFivthImage from '../../asserts/baner/1_-0C009JliF6lW9ua2SAtVg.jpg'
// tattoo_slider_Images
import tattoo_slider_Images_1 from '../../asserts/slider/forearm.jpg'
import tattoo_slider_Images_2 from '../../asserts/slider/compass-forearm.jpg'
import tattoo_slider_Images_3 from '../../asserts/slider/featured-img-of-post-204386.jpg'
import tattoo_slider_Images_4 from '../../asserts/slider/forearm-tattoo-women.jpg'
import tattoo_slider_Images_5 from '../../asserts/slider/forearm-tattoos-020217143.jpg'
import tattoo_slider_Images_6 from '../../asserts/slider/forearm-tattoos-02021794.jpg'
import tattoo_slider_Images_7 from '../../asserts/slider/forearm-tattoos-02021793.jpg'
import tattoo_slider_Images_8 from '../../asserts/slider/graffati-tattoo.jpg'
import tattoo_slider_Images_9 from '../../asserts/slider/img-of-media-slide-186451.jpg'
// video 

export const addNewRecord = (content) => {
    const currentDate = new Date().toLocaleDateString();
    return {
        type: GET_LIST,
        payload: {
            Artist_Follower:
                [
                    {
                        id: 0,
                        name: 'Abdul Qadeer',
                        small_Url: tattoo_slider_Images_1,
                        short_Dis: "I'm a Seattle based tattooer (since 1993) with a particular interest in ...",
                        count: '20,813',
                        Follower:"Follower",
                        current_Data: currentDate
                    },
                    {
                        id: 1,
                        name: 'Kashif Raza',
                        small_Url: tattoo_slider_Images_2,
                        short_Dis: "I'm a Seattle based tattooer (since 1993) with a particular interest in ...",
                        count: '20,813',
                        Follower:"Follower",
                        current_Data: currentDate
                    },
                    {
                        id: 2,
                        name: 'Aaron Bell',
                        small_Url: tattoo_slider_Images_3,
                        short_Dis: "I'm a Seattle based tattooer (since 1993) with a particular interest in ...",
                        count: '20,813',
                        Follower:"Follower",
                        current_Data: currentDate
                    },
                    {
                        id: 3,
                        name: 'Usman Ali',
                        small_Url: tattoo_slider_Images_4,
                        short_Dis: "I'm a Seattle based tattooer (since 1993) with a particular interest in ...",
                        count: '20,813',
                        Follower:"Follower",
                        current_Data: currentDate
                    },
                    

                ],
                video_slider:
                [
                    {
                        id: 0,
                        title: 'HTML',
                        video:"https://www.youtube.com/embed/cMDIuqm7Ci4?rel=0&amp;showinfo=0",
                        current_Data: currentDate
                    },
                    {
                        id: 1,
                        title: 'Javascript',
                        video:"https://www.youtube.com/embed/O6L_qQBD0kA?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 2,
                        title: 'Php',
                        video:"https://www.youtube.com/embed/ZDSi17kcEsM?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 3,
                        title: 'react',
                        video:"https://www.youtube.com/embed/O6L_qQBD0kA?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 4,
                        title: 'nodejs',
                        video:"https://www.youtube.com/embed/ZDSi17kcEsM?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 5,
                        title: 'HTML',
                        video:"https://www.youtube.com/embed/cMDIuqm7Ci4?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    },
                    {
                        id: 6,
                        title: 'HTML',
                        video:"https://www.youtube.com/embed/cMDIuqm7Ci4?rel=0&amp;showinfo=0",
                        short_Dis: 'Html is tha best, Lnagulage',
                        info: 'jonson web',
                        current_Data: currentDate
                    }
                  
                ],
                tattoo_slider:
                [
                    {
                        id: 0,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_1,
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

                ],
                tattoo_slider2:
                [
                    {
                        id: 0,
                        title: 'HTML',
                        image_Url: tattoo_slider_Images_1,
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

                ],
            tatoo_Banner: [
                {
                    id: 1,
                    title: 'HTML',
                    short_Dis: 'Html is tha best, Lnagulage',
                    image_Url: tattooedFirstImage,
                    current_Data: currentDate
                },
                {
                    id: 2,
                    title: 'PHP',
                    short_Dis: 'PHP is tha best, Lnagulage',
                    image_Url: tattooedSecImage,
                    current_Data: currentDate
                },
                {
                    id: 3,
                    title: 'React',
                    short_Dis: 'React is tha best, Lnagulage',
                    image_Url: tattooedThirdImage,
                    current_Data: currentDate
                },
                {
                    id: 4,
                    title: 'Node js',
                    short_Dis: 'Node js is tha best, Lnagulage',
                    image_Url: tattooedFouthImage,
                    current_Data: currentDate
                },
                {
                    id: 5,
                    title: 'Bootstrap5',
                    short_Dis: 'Bootstrap5 js is tha best, Lnagulage',
                    image_Url: tattooedFivthImage,
                    current_Data: currentDate
                },
            ]
        }
    }
}

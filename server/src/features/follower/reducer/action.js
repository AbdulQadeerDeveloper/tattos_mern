import { type } from '@testing-library/user-event/dist/type'
import {GET_LIST_FOLLOWER} from './actionType'
import tattoo_slider_Images_1 from '../../asserts/slider/forearm.jpg'
import tattoo_slider_Images_2 from '../../asserts/slider/compass-forearm.jpg'
import tattoo_slider_Images_3 from '../../asserts/slider/featured-img-of-post-204386.jpg'
import tattoo_slider_Images_4 from '../../asserts/slider/forearm-tattoo-women.jpg'

export const addNewRecord = (content) =>{
    return {
      type: GET_LIST_FOLLOWER,
      payload:{
        "tattoo_follower":[
            {
                id:0,
                follower_id:"@bmccrary13561",
                name: "Tattoo Designer",
                follwer_name:"bmccrary13561",
                profile_url:tattoo_slider_Images_1
            },
            {
                id:1,
                follower_id:"@tattoo13561",
                follwer_name:"tattoo13561",
                profile_url:tattoo_slider_Images_2
            },
            {
                id:2,
                follower_id:"@tattooWeb13561",
                follwer_name:"tattooWeb13561",
                profile_url:tattoo_slider_Images_3
            },
            {
                id:3,
                follower_id:"@tattoobalck13561",
                follwer_name:"tattoobalck13561",
                profile_url:tattoo_slider_Images_4
            },
            {
                id:2,
                follower_id:"@tattooWeb13561",
                follwer_name:"tattooWeb13561",
                profile_url:tattoo_slider_Images_3
            },
            {
                id:3,
                follower_id:"@tattoobalck13561",
                follwer_name:"tattoobalck13561",
                profile_url:tattoo_slider_Images_4
            },
            {
                id:2,
                follower_id:"@tattooWeb13561",
                follwer_name:"tattooWeb13561",
                profile_url:tattoo_slider_Images_3
            },
            {
                id:3,
                follower_id:"@tattoobalck13561",
                follwer_name:"tattoobalck13561",
                profile_url:tattoo_slider_Images_4
            }
        ]

      }
    }
}


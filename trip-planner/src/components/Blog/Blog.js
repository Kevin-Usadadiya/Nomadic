import React from 'react'
import { Link } from "react-router-dom";
import './Blog.css'

// import img1 from './images/newdelhi.jpg'

function Blog() {
    const Blog_arry = [{
        "name": "New Delhi",
        "img_source": "https://i.ibb.co/N7HM1D2/india-gate.jpg",
        "details": [
            "Delhi - the capital city of India is popular for its rich cultures and traditions. The city hosts some of the most majestic historical monuments and architectural marvels along with beautiful gardens and modern-day entertainment sites. In short, the city is a delight to people of every age.",
            "Delhi is officially both a Union Territory and City located in Northern India. It covers an area of around 1484 sq km and bordered by the states of Haryana and Uttar Pradesh. It's officially referred to as the National Capital Territory of Delhi with New Delhi as its capital. The Urban area of the city consists of the satellite cities of Gurgaon, Noida, Ghaziabad and Faridabad, which are collectively called the Central National Capital Region (CNCR).",
            "Q : WHAT IS DELHI BEST KNOWN FOR?",
            "          The capital city of India has so many famous places for tourists to explore. Some of the popular places worth paying a visit are Qutab Minar, India Gate, Humayun's Tomb, Safdarjung Tomb, Red Fort, Purana Qila, Lodhi Garden, Jama Masjid, Lotus Temple, Akshardham, Garden of Five senses, Jantar Mantar, Agrasen ki Baoli, Rashtrapati Bhawan, ISKCON Temple, Gurudwara Bangla Sahib and more.",
            "There are so many things Delhi is best known for. Delhi is popular for its ancient Mughal era's monuments. Delhi is popular for its mouth-watering spicy streets food. The cheap shopping places like Sarojni, Lajpat, Chandni Chowk, Palika make Delhi one of the best shopping destinations in the country. Delhi was the first city to incorporate Metro services. It's Metro connectivity and service is by far the best in the country. Delhi University is considered as one of the top universities in Asia. Students from different parts of the country and around the globe come here for pursuing further studies."
        ]
    }]

    // {
    //     "name":"Mumbai",
    //     "img_source":"https://i.ibb.co/hfJSnXc/goi.png" ,
    //     "details":[
    //         "Mumbai - the city of dreams inspires every resident to dream big and work for it. It is one of the largest cities in India, which is considered as the financial, commercial and entertainment capital of India. It has India's largest port of foreign trade. It is the hub of cinema being the center of the Bollywood Film Industry, one of the biggest film industries in the world.",
    //         "Mumbai consists of two regions namely, Mumbai City District and Mumbai Suburban District, covering a total of around 603.4 sq km. the Mumbai. It is situated at the mouth of the Ulhas River on the western coast Konkan and bounded by the Arabian Sea to the west.",
    //         "Mumbai was once an archipelago of seven islands, which have been inhabited since the South Asian Stone Age. In the third century BCE, the islands formed a part of the Kingdom of Ashoka. After Ashoka's demise, countless rulers took over until the reign of the Kingdom of Gujarat till 1543 AD. In 1543 AD, the Portuguese seized the islands from Bahadur Shah of Gujarat and ruled till 1661. In 1668, the islands were leased to East India Company by Charles II of England when it was named Bombay.",
    //         "The best time to visit Mumbai is during October to February, as monsoon and winters breath life to the city. Travelogy  India has customized Mumbai Tour Packages as Mumbai hosts several notable tourist spots for its visitors. Be it the marvelous monuments like Gateway of India, CST or the Juhu beach, Worli Sea Link or marine drive, the place many serene places to offer. It is also home to the popular Siddhivinayak temple and Haji Ali Dargah. For all the film buffs, a visit to the Mumbai Film City is a must. Mumbai also offers great shopping destinations like Bandra, Colaba, etc for the shopaholics. The popular street food Bada Pav is a must-try when in the city..",
    //         "Top tourist places to visit in Mumbai are Elephanta Caves, Gateway of India, Marine Drive, Malabar Hills, Dharavi Slum, ChhatrapatiShivaji Terminus, wax museum, Siddhivinayak Temple, Sanjay Gandhi National Park, Haji Ali Dargah, and the markets of the region."
    //     ]
    // },

    // {
    //     "name":"Agra",
    //     "img_source":"https://i.ibb.co/zhV3Rsv/taj-mahal.png" ,
    //     "details":[
    //         "Agra - the city of Taj is the only city in India, which is home to one of the seven wonders of the world. Besides the Taj Mahal, it is home to various other magnificent Mughal monuments and Persian-styled gardens. The city is a perfect combination of rich culture, history, architectural marvels, mouthwatering cuisines, shopping hub and more.",
    //         "Situated on the banks of Yamuna River, it is a city in the Indian state of Uttar Pradesh. It covers an area of around 4027 sq km. It is also one of the 75 districts of Uttar Pradesh bounded by Mathura District on the north, Firozabad District on the east and Dholpur and Bharatpur districts of Rajasthan state on the south and west respectively.",
    //         "The existence of Agra relates to the Mahabharata period where it finds its mentioned in the epic Mahabharata as Agraben. Modern-day Agra was founded by Sikandar Lodhi of the Lodhi Dynasty. It was then ruled by the mighty Mughal Empire, during whose reign the city served as the Capital of the Mughal Kingdom. It was also ruled by the Chauhan clans of the Hindu Rajputs for a brief period.",
    //         "Agra is undoubtedly famous for the majestic Taj Mahal, which attracts millions of tourists every year. What makes it unique from other cities is the fact that it hosts three UNESCO World Heritage Sites. The town of Fatehpur Sikri in Agra is home to Buland Darwaja, which is the world's largest door. Agra is also considered as the land of Urdu and Hindu Literature as it is the birthplace of the world's renowned Urdu and Hindi poet.",
    //         "Agra has many popular places to visit. You can visit some best places like Taj Mahal, Red Fort, Jama Masjid, Taj Museum, Fatehpur Sikri, Tomb of Akabar, etc. Apart from the above, there are many other places in Agra to visit such as Chini ka Rauza, Soami Bagh Temple, Mehtab Bagh, Ram Bagh Garden, etc. You can visit these places if you have more time."
    //     ]
    // },

    // {
    //     "name":"Kochi ",
    //     "img_source":"https://i.ibb.co/CBQRj31/kochi.png" ,
    //     "details":[
    //         "Kochi is one of the cosmopolitan cities of Kerala which had come into limelight with its rich treasures of spices. It is also called as the Gateway to Kerala and its awe inspiring scenic views makes it a perfect tourist destination. Kochi is small place in Kerala which is also known as God's Own Country and famous for its green pastures with beautiful landscapes. This city houses the very famous port which is known for its world class standards and facilities. International airport at Nedumbassery is located approximately 40 km North of the city. Malayalam is the native language spoken here. With economic and social development this place has become one of the most happening places in Kerala. People are highly fashion conscious and great western culture influence can be seen in the way they dress",
    //         "Centuries ago Kochi was a commercial centre for traders like Arabs, British, Portuguese Dutch and Chinese. These travelers came to this beautiful city to get access to spices like cardamom, clove and black pepper which was abundantly available here. These trading activities greatly contributed to the development and growth of this small city. Thus, it got its name The Gateway to Kerala. With such rapid commercialization it attracted Portuguese, E English and Dutch to set up bases in this city. During the reign of the Portuguese (1530 A.D) a fort known as 'Manuel Kotta' or Fort Emmanuel was built",
    //         "	Being very close to the equator, Kochi has a tropical monsoon. The temperatures range between 23-31°C. Summer season is in months of March to June where the highest temperature recorded at 35°C (95°F). During June and September this place experiences heavy showers and during October - December lighter rains can also be expected. Kochi gets an average rainfall of 3,228.3 mm which is greatly contributed by the south west monsoons."
    //     ]
    // }
    // ,
    // {
    //     "name":"Mysore",
    //     "img_source":"https://i.ibb.co/pfJ10zf/mysore.png" ,
    //     "details":[
    //         "The word Mysuru is a corrupted version of “mysooru“, which is derived from the word “mahishur” or “Mahishasurana Ooru“, which means the town of Mahishasura in Kannada, the local language. Mysuru has been associated with the Puranic story found in the Devi Bhagavatha. According to the story in the Devi Purana, Mysuru was ruled by the demon King Mahishasura who was a buffalo-headed monster. In response to the prayer by the Gods and Goddesses to save them from the demon, Goddess Parvathi, took birth as Chamundeshwari and killed the monster on top of the Chamundi hill near Mysuru. Hence the hill and the city have the names Chamundi Hill and Mysuru respectively.",
    //         "There is an inscription in Mysuru by the Hoysalas that dates back to the 11th and 12th century. The Mysuru was ruled by Gangas, Chalukyas, Cholas and Hoysalas. After the Hoysalas came, the Vijayanagar Kings and then the Mysuru Yadu dynasty came to power in 1399A.D. They were the feudatories of the Vijayanagar Kings. This dynasty also contributed to temple building in Mysuru. Bettada Chamaraja Wadiyar, the raja of Mysuru rebuilt the fort of Mysuru and made his headquarters and called the city 'Mahishura Nagara' meaning the city of Mahishur. Many inscriptions done in the 17th century and later refer to Mysuru as 'Mahishuru'.",
    //         "	During the reign of Krishnaraja Wadiyar III the town of Mysuru expanded and moved beyond the walls of the fort. Krishnaraja Wadiyar IV developed Mysuru into a beautiful city with excellent planning. Under his reign Mysuru became famous for its wide roads, magnificent building and elegant parks. Today Mysuru is a modern city that has managed to retain its quaint old world charm. Today Mysuru in famous in the world for its sandalwood and rosewood artifacts, stone sculptures, incense sticks, inlay work with ivory and its exquisite silk sarees.",
    //         "Mysuru has a warm and cool climate throughout the year. It has a salubrious climate. The climate of Mysuru is moderate. The weather in winter is cool and the summers are bearable. The minimum temperature in winter is around 15 degrees Celsius and in summer the maximum temperature is around 35 degrees Celsius. Mysuru gets most of its rains during the monsoon between June to September. Mysuru average rainfall annually is around 86 centimeters.",
    //         "Mysore is popularly known as the city of palaces and the reason behind this is the fact that Mysore consists of a large number of palaces. The palaces that are found in Mysore were not only meant for pleasure but they possess artistic beauty and were built for the luxury of the families of the kings of Mysore. It is the beauty of the palaces that attract a large number of tourists to Mysore from all over the world. At present, some palaces in Mysore have become hotels, university offices and government offices. The most renowned among the palaces of Mysore is the Mysore Palace. Apart from Mysore palace, other palaces in Mysore include Lalitha Mahal palace, Jagnmohan Palace, JayaLakshmi Vilasa, Lokaranjan Palace, Vasantha Mahal Palace, Rajendra Vilasa, Karanji Vilasa and Cheluvamba Vilasa"
    //     ]
    // },

    // {
    //     "name":"Jaipur",
    //     "img_source":"https://i.ibb.co/9qsV8Mt/jaipur.png" ,
    //     "details":[
    //         "Jaipur, also known as the pink city, is one of the most beautiful and culturally rich cities in India. It was founded by Maharaja Sawai Jai Singh II in November 1727 and also got its name from this brave Hindu ruler. Located in Northern India, Jaipur is the capital of Rajasthan and also the largest city in this state.",
    //         "Jaipur's temperature remains moderately high all through the year. Average daily temperature during the summer months (April to July) is 30 °C and the average daily temperature during the winter months (November to February) ranges from 15-18 °C. It receives more than 650 millimeters of rainfall each year.",
    //         "The main attraction of Jaipur is its archetypal architecture. The city was planned as per the Indian Vastu Shastra, a science that promotes well being and prosperity.",
    //         "The directions of all the streets and markets in Jaipur are East to West and North to South. Jai Singh II made sure that the entire Jaipur city was planned as per the Hindu architectural theory.",
    //         "The town is constructed in the form of eight-part Mandala which is called Pithapada.The city encompasses various magnificent edifices that enhance its beauty.",
    //         "Its forts and monuments such as Hawa Mahal, City Palace, Jal Mahal, Rambagh Palace, Nahargarh Fort, Jaigarh Fort and Amber Fort are famous world over.",
    //         "The structures here are built with the rare pink-painted sandstone and it is thus known by the name Pink City."
    //     ]
    // },

    // {
    //     "name":"Shimla",
    //     "img_source":"https://i.ibb.co/7nDKgQ6/shimla.png" ,
    //     "details":[
    //         "Shimla is a pleasing hill town located at 2200 m above mean sea level, in the state of Himachal Pradesh. Shimla is a famous summer retreat since the colonial era. In the 18th century, Shimla was a hidden hill region flourishing with high-altitude forests.",
    //         "Named after the local deity, Shyamala Devi, Shimla came under the control of British by the mid of 19th century. During this time, John Lawrence, Viceroy changed Shimla into a summer capital. Thus, Shimla has a unique nostalgic feel with the colonial architecture, pedestrian shopping streets, ancient churches, and others",
    //         "The prime beauty of the hill town comes from the weather. While the plains get scorched up by the sun, this hill town gets a pleasing summer and a snow-drenched winter. The local cuisine of the land is Pahari dishes. However, today, the land has a fusion cuisine to satisfy the tourist population of the land. Apart from cuisine tasting, top activities to enjoy here are trekking, hiking, forest camping, river rafting, paragliding, ice skating, and others",
    //         "Shimla is reachable via Chandigrah-Shimla highway or by a flight to Jubbarhatti Airport. However, the toy train is the touristy way to reach this hill station, especially if you are on a honeymoon trip. Kalka Shimla toy train is a heritage site worth enjoying. Apart from the mountain train, top destinations to covers here are Kufri, Chail, Ridge, Mall Road, Tattapani, and others",
    //         "Its forts and monuments such as Hawa Mahal, City Palace, Jal Mahal, Rambagh Palace, Nahargarh Fort, Jaigarh Fort and Amber Fort are famous world over.",
    //         "Best time to visit in Shimla is from the month of March to June. If you are looking for snow activities, the hill town is best visited between November and February. If you love lush foliage and want to enjoy a cozy monsoon, visit between July and September.",
    //         "The best time to visit depends on the type of vacation you desire. Also, the type of destinations and activities depend on the type of vacation you are expecting. Here are some of the top suggested and chosen tour packages for different type of travelers in Shimla",
    //         "	The snow-covered capital city of Himachal Pradesh, Shimla is a traveller's paradise. With some of the most beautiful Victorian times architecture and the roadside bazaars that are set up, the city never fails to attract tourists from around the world."
    //     ]
    // },

    // {
    //     "name":"Goa",
    //     "img_source":"https://i.ibb.co/RSkqkng/beach-chair.png" ,
    //     "details":[
    //         "Goa is more than just a hand full of beaches and pumping parties. This is a cultural blend of sand, sun, spice, seafood and spirituality. Stretching along the mighty Arabian Sea, this tropical paradise caters to the needs of every traveler from backpackers to fancy pamper-loving luxury traveler . With tourism season, the region becomes close to yoga, spiritual exploration and others.",
    //         "Stroll through the spice plantation is just one part of exploring the spice element of the place. Tantalize your taste buds with the spicy and creamy cuisine of this land with a Portuguese and Indian blended palate. Visit Goa from October to March to enjoy fresh sea-food and enjoy nature at its prime beauty.",
    //         "Do you want to add more to your vacation? Enjoy exotic water sports, hot air ballooning, vibrant nightlife parties, cruise trips, casino nights and much more. Starting from bachelor parties to honeymoon, this cultural collage has more to offer like forts, churches, viewpoints, cathedrals, beaches, flea market, pubs, bars and much more",
    //         "Winter season is favourable and comfortable to visit in Goa. So November, December, January, February, etc. are the best seasons for Goa. Because the temperature is between 32 degrees, which is perfect. So this is the perfect time for wondering and enjoying. The average temperature of the winter season is appropriate for visiting.",
    //         "To visit Beaches are the main point of attractions on this small and beautiful state. Water sports, night parties, etc. are the joyous activities tourists can do here. Wondering into Beaches be the best thing you can do here. Also, shopping is a part of the trip, as the price of things in Goa are reasonable, so people easily do shopping here. Some beautiful attraction spots of Goa are - Dudhsagar Falls, Aguada Fort, Baga Beach, butterfly beach, Mangieshi temple, Patnem Beach, Colva Beach, etc. Apart from this, it’s the trade center of cashew nut, spices, etc."
    //     ]
    // },

    // {
    //     "name":"Ahmedabad",
    //     "img_source":"https://i.ibb.co/540mtXJ/Ahmedabad.jpg" ,
    //     "details":[
    //         "Ahmedabad is the seventh largest metropolis of India. The city is being rated as the fastest growing city in India. Located 32 kms north of Gandhinagar, Ahmedabad is the financial capital of Gujarat. With the population of approx 4.5 million, the city is stated as the center of commerce, and is the home to a large population of traders. Being a business center, the city also houses other trading communities.",
    //         "Stroll through the spice plantation is just one part of exploring the spice element of the place. Tantalize your taste buds with the spicy and creamy cuisine of this land with a Portuguese and Indian blended palate. Visit Goa from October to March to enjoy fresh sea-food and enjoy nature at its prime beauty.",
    //         "The history of Ahmedabad is centuries old. Founded in 15th century by Sultan Ahmed Shah on Sabarmati River, the city has witnessed many rulers.  The city became the capital of Gujarat after the bifurcation of Bombay on 1 May 1960. This was the time when the city witnessed the development of educational institutes. But later in two decades, the city was punctuated with politics. Hence the city occupied the center stage of national politics.",
    //         "You muse about tradition and progression together in sync, Ahmedabad has them both. The bustling capital city has been scooting its way to development and today, proudly stands as a leading business center that has been contributing enormously to the country's economic growth"
    //     ]
    // }
    // ,
    // {
    //     "name":"Sikkim",
    //     "img_source":"https://i.ibb.co/kxW7J3V/Sikkim.png" ,
    //     "details":[
    //         "Sikkim, state in India,is located in the northeastern part of the country, in the eastern Himalayas. It is one of the smallest states in India. Sikkim is bordered by the Tibet Autonomous Region of China to the north and northeast, by Bhutan to the southeast, by the Indian state of West Bengal to the south, and by Nepal to the west. The capital is Gangtok, in the southeastern part of the state.",
    //         "A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.",
    //         "Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688.",
    //         "Summer is a good time to be in Sikkim. Being at such a high altitude, the pleasant weather of the state is the best for enjoying sightseeing & adventure between the months of March and June.",
    //         "November to February is winter in Sikkim. During the winters, Sikkim is covered in snow, but looks extremely beautiful. A lot of the state festivals are held during winters and is also a good time to visit if you can bear the cold weather.",
    //         "It is better to avoid the monsoon season during the months of July to September. Even though the weather is pleasant, there is a risk of landslides."
    //     ]
    // }]
   

    return (
        <div className='blog_main_container'>
                <div className='blog_start'>
               <h1 className='blog_title'>India Travel & tourism Blog</h1>
               <p className="blog_caption">Looking for something useful to read about travelling in India? You've come to the right place. Join the league of readers who find here detailed insights, interesting travel tips and ideas and daily inspiration.</p>


               </div> 
                <section className='bloglink'>
                <div className='blog_container'>
                <div className='row'>
                <div className='col'>
                <ul className='left_link'>
                    <li className='left_link_li'>
                    <a href='#' className='menu-list left_link_a'>Mumbai</a>
                    </li>
                    <li className='left_link_li'>
                    <a href='#' className='menu-list left_link_a'>Manali</a>
                    </li>
                    <li className='left_link_li'><a href='#' className='menu-list left_link_a'>Shimala</a></li>
                    <li className='left_link_li'>
                    <a href='#' className='menu-list left_link_a'>Kochi</a></li>
                    <li className='left_link_li'><a href='#' className='menu-list left_link_a'>Goa</a></li>
                    <li className='left_link_li'><a href='#' className='menu-list left_link_a'>Shimala</a></li>
                    <li className='left_link_li'><a href='#' className='menu-list left_link_a'>Ahmedabad</a></li>
                </ul>

                </div>
                <div className='search_div'>
                <form action="" id="searchform" method="get" role="search">
          <input type="text" value="" name="s" id="s" className="blog_input" placeholder="Search.."/>
          
		  </form>
          </div>
                </div>

                </div>

                </section>

            {
                
                
                Blog_arry.map((list) => {
                    return (<>
                      
                       <div className='hentry'>
                       <div class="wrapper">
            <div class="typing-demo">
            {list.name}
                 </div>
</div>
                        
                            <div className='blog_img'>

                                <img src={list.img_source} alt='sorry' className='blog_img1' />
                            </div>
                            </div>
                         
                        
                            <div className='flex-row'>

                            <div className='flex-child-element1 hentry_description '>
                                {
                                    
                                    list.details.map((para) => {
                                        return (
                                            <>
                                                    <p>{para}</p>
                                                    
                                            </>
                                        )
                                    })
                                    
                                }
                                <a href='#' className='blog_btn'>Read more</a>
                                </div>
                       
                        <div className='flex-child-element2 hentry-card'>
                        <h2>Our Featured Posts</h2>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/cover-image-of-Islands-Near-Phi-Phi_6th-dec-400x229.jpg" alt='sorry' className='blog_photo'></img>
                        <a href="#" className='blog_btn'>6 Adventure Sports In Kochi That Will Let You Challenge Your Fears In 2023!</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Ahmedabad-18th_nov-400x225.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>Top 26 Places To Visit Near Ahmedabad On Your Gujarat Vacation </a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Apple-Country-Resort-400x267.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>10 Best Resorts In Manali To Pamper The Nature Lover In You</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://img.traveltriangle.com/blog/wp-content/uploads/2023/07/Mumbai-Cover.jpg" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>8 Best Places To Visit In Mumbai For 2 Days</a>
                        </div>
                        <div className='blog_card'>
                        <img src = "https://i.ibb.co/9qsV8Mt/jaipur.png" alt='sorry' className='blog_photo'></img>
                        <a href='#' className='blog_btn'>“The In-Depth Guide To… jaipur”</a>
                        </div>
                        </div>
                        </div>
                      
                    </>)
                })
            }
        </div>
    )}
    export default Blog
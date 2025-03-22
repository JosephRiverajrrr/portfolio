<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';
import zaganaWeb from '../../assets/images/zagana-web.png';
import dailyWeb from '../../assets/images/daily-web.png';
import cityHall from '../../assets/images/city-hall.png';
import orangeCafe from '../../assets/images/Vue-proj-1.png';

import budgetPlan from '../../assets/images/budget-plan.png';
import robinsons from '../../assets/images/robinsons.png';

const router = useRouter();
const currentMonth = moment(new Date()).format('MMMM');
const currentDay = moment(new Date()).format('DD');
const currentDate = moment(new Date()).format('YYYY');

const hanldeLinkTo = (new_url) => {
    window.location.href = new_url;
}

</script>

<style>
#home-card {
    width: 100%;
}

.font-title {
    font-family: 'Garamond', sans-serif;
}

.font-body {
    font-family: 'Georgia', sans-serif;
}

body {
    height: auto;
    background-color: #e3dede;
    padding: 10px 50px;
    letter-spacing: 2px;
}

@media (min-width: 320px) {
    body {
        letter-spacing: normal !important;
        padding: 10px 10px;
    }

    .text-lg {
        font-size: 0.525rem !important;
        line-height: normal !important;
    }

    .text-2xl {
        font-size: 0.55rem !important;
        line-height: normal !important;
    }

    .text-3xl {
        font-size: 0.55rem !important;
        line-height: normal !important;
    }

    .text-4xl {
        font-size: 0.45rem !important;
        line-height: normal !important;
    }

    .text-6xl {
        font-size: 0.75rem !important;
        line-height: normal !important;
    }

    .text-7xl {
        font-size: 1.5rem !important;
        line-height: normal !important;
    }

    .text-8xl {
        font-size: 1.5rem !important;
        line-height: normal !important;
    }
}

@media (min-width: 640px) {
    body {
        letter-spacing: normal !important;
        padding: 10px 30px !important;
    }

    .text-lg {
        font-size: 0.725rem !important;
    }

    .text-2xl {
        font-size: 0.95rem !important;
    }

    .text-3xl {
        font-size: 1.075rem !important;
    }

    .text-4xl {
        font-size: 0.75rem !important;
    }

    .text-6xl {
        font-size: 1.15rem !important;
    }

    .text-7xl {
        font-size: 2.5rem !important;
    }

    .text-8xl {
        font-size: 3rem !important;
    }
}

@media (min-width: 768px) {
    body{
        letter-spacing: 2px !important;
        padding: 10px 50px !important;
    }
    .text-lg {
        font-size: 0.625rem !important;
    }

    .text-2xl {
        font-size: 0.75rem !important;
    }

    .text-3xl {
        font-size: 0.975rem !important;
    }

    .text-4xl {
        font-size: 1.05rem !important;
    }

    .text-6xl {
        font-size: 1.55rem !important;
    }

    .text-7xl {
        font-size: 2.5rem !important;
    }

    .text-8xl {
        font-size: 3rem !important;
    }
}

@media (min-width: 768px) {
    .text-lg {
        font-size: 0.625rem !important;
    }

    .text-2xl {
        font-size: 0.75rem !important;
    }

    .text-3xl {
        font-size: 0.975rem !important;
    }

    .text-4xl {
        font-size: 1.05rem !important;
    }

    .text-6xl {
        font-size: 1.55rem !important;
    }

    .text-7xl {
        font-size: 2.5rem !important;
    }

    .text-8xl {
        font-size: 3rem !important;
    }
}

@media (min-width: 1024px) {
    .text-lg {
        font-size: 0.725rem !important;
    }

    .text-2xl {
        font-size: 0.95rem !important;
    }

    .text-3xl {
        font-size: 1.075rem !important;
    }

    .text-4xl {
        font-size: 1.25rem !important;
    }

    .text-6xl {
        font-size: 1.75rem !important;
    }

    .text-7xl {
        font-size: 3.5rem !important;
    }

    .text-8xl {
        font-size: 4rem !important;
    }

}

@media (min-width: 1025px) {
    .text-lg {
        font-size: 1.125rem !important;
        line-height: 1.75rem !important;
    }

    .text-2xl {
        font-size: 1.5rem !important;
        line-height: 2rem !important;
    }

    .text-3xl {
        font-size: 1.875rem !important;
        line-height: 2.25rem !important;
    }

    .text-4xl {
        font-size: 2.25rem !important;
        line-height: 2.5rem !important;
    }

    .text-6xl {
        font-size: 3.75rem !important;
        line-height: 1 !important;
    }

    .text-7xl {
        font-size: 4.5rem !important;
        line-height: 1 !important;
    }

    .text-8xl {
        font-size: 6rem !important;
        line-height: 1 !important;
    }

}
</style>


<template>
    <div class="flex mb-1 border-black border-b-2" id="home-card">
        <div class="w-1/6 border-2 border-l-0 border-black py-3">
            <p class="text-left px-2 text-4xl italic font-title">JOSEPH'S <br /> PORTFOLIO</p>
        </div>
        <div class="w-4/6   border-2 border-black py-3">
            <p class="text-center text-7xl mt-2 font-title">Front-End Developer</p>
        </div>
        <div class="w-1/6 border-2 border-r-0 border-black py-3">
            <p class="text-center px-2 text-2xl italic font-title">{{ currentMonth }}</p>
            <p class="text-center px-2 text-2xl italic font-title">{{ currentDay }}</p>
            <p class="text-center px-2 text-2xl italic font-title">{{ currentDate }}</p>
        </div>
    </div>
    <div class="flex mb-2">
        <div class="w-full bg-black" style="height: 2px"></div>
    </div>
    <div class="flex mb-2">
        <div class="w-full bg-black h-12">
            <p class="text-center text-3xl text-gray-100 font-body py-2">HELLO, MY NAME IS</p>
        </div>
    </div>
    <div class="flex mb-4">
        <div class="w-full ">
            <p class="text-center text-8xl mt-2 font-body">JOSEPH RIVERA JR</p>
        </div>
    </div>

    <div class="flex mb-2">
        <div class="w-full bg-black" style="height: 2px"></div>
    </div>


    <div class="flex content-center mb-2">
        <div class="w-1/4 border-2 border-l-0 border-black py-3">
            <p class="text-left px-2 text-6xl  font-title">Basic Information</p>
        </div>
        <div class="w-1/4 border-2 border-l-0 border-black py-3">
            <p class="text-center mb-2 px-1 text-lg  font-body underline">Contact Info </p>
            <p class="text-left px-1 text-lg  font-body"> *Phone: 09676554411</p>
            <p class="text-left px-2 text-lg  font-body"> *Email: josephriverajr@gmail.com</p>
            <p class="text-left px-2 text-lg  font-body"> *Live at: San Juan City</p>
        </div>
        <div class="w-1/4 border-2 border-l-0 border-black py-3">
            <p class="text-center mb-2 px-1 text-lg  font-body underline">Education Background </p>
            <p class="text-left px-1 text-lg  font-body"> *Polytechnic University of the Philippines </p>
            <p class="text-left px-2 text-lg  font-body"> *Bachelor of Science in Information Technology</p>
            <p class="text-left px-2 text-lg  font-body"> *June 2015 - April 2019</p>

        </div>
        <div class="w-1/4 border-2 border-l-0 border-black py-3">
            <p class="text-center mb-2 px-1 text-lg underline">Years of experience </p>
            <p class="text-center mt-3 px-1 text-6xl font-title"> 4+yrs </p>
        </div>
    </div>
    <div class="flex mb-2">
        <div class="w-full bg-black" style="height: 2px"></div>
    </div>

    <div class="flex mb-2">
        <div class="w-12/12  mx-3  h-auto">
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black">
                    <div class="w-full bg-black h-12">
                        <p class="text-left text-3xl text-gray-100 font-body pt-2 pl-4">Objective</p>
                    </div>
                    <p class="text-left text-lg px-5 font-body py-4">To be part of a large and progressive company where
                        in,
                        I can see the result of my talents,
                        ability and reward me the feeling of recognition. Obtain a position where I can maximize my
                        skills as well as to contribute and meet the company’s mission and vision.</p>
                </div>
            </div>
            <div class="w-full bg-black h-12">
                <p class="text-left text-3xl text-gray-100 font-body py-2 pl-4">Tech Stack / Skills</p>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left text-2xl font-title ">Front-End Technologies</p>
                            <p class="text-left px-5 text-lg font-body">*ReactJS</p>
                            <p class="text-left px-5 text-lg font-body">*Vue.js</p>
                            <p class="text-left px-5 text-lg font-body">*HTML</p>
                            <p class="text-left px-5 text-lg font-body">*CSS</p>
                            <p class="text-left px-5 text-lg font-body">*jQuery</p>
                            <p class="text-left px-5 text-lg font-body">*Bootstrap</p>
                            <p class="text-left px-5 text-lg font-body">*AJAX</p>
                        </div>
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left text-2xl font-title ">Back-End Technologies</p>
                            <p class="text-left px-5 text-lg font-body">*Node.js</p>
                            <p class="text-left px-5 text-lg font-body">*MySQL</p>
                            <p class="text-left px-5 text-lg font-body">*RESTful API</p>
                        </div>
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left text-2xl font-title ">Other (Tools/Utilities)</p>
                            <p class="text-left px-5 text-lg font-body">*GitHub</p>
                            <p class="text-left px-5 text-lg font-body">*Postman</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-black h-12">
                <p class="text-left text-3xl text-gray-100 font-body py-2 pl-4">My Works</p>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">

                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">ZAGANA</p>
                            <div class="relative">
                                <img :src="zaganaWeb" alt="">
                            </div>
                            <p class="text-left text-lg font-title   cursor-pointer italic">**Note: In case the website
                                is unavailable, please click here to view screen recordings of the site. </p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=Zagana+_+Admin+-+15+February+2023.mp4&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Admin / Back office site</p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=zagana-mobile.mp4&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Storefront - mobile version</p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=zagana-desktop.mp4&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Storefront - desktop version</p>


                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is an online platform that offers
                                fresh produce for sale, consisting of two main sections: the Storefront and the Admin
                                (Backoffice) side.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*On the Storefront, users or buyers can
                                browse and purchase the produce. On the Admin/Backoffice side, store administrators can
                                manage and update the products displayed on the Storefront.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*We created it from scratch using the ff.
                                tools: ReactJS, NodeJS,
                                MySQL, Bootstrap(for the store front), MUI (for the admin / back office site).</p>


                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Collaborating with the other team members
                                to establish objectives and design more functional, cohesive codes to enhance the user
                                experience.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Working on database and create API needed.
                            </p>
                            <p class="text-left px-5 text-lg font-body">*3rd party API integration for Front-end and
                                Back-end.</p>


                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">Daily by Bo's Coffee</p>
                            <div class="relative">
                                <img :src="dailyWeb" alt="">
                            </div>
                            <p class="text-left text-lg font-title   cursor-pointer italic">**Note: In case the website
                                is unavailable, please click here to view screen recordings of the site. </p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=Daily%27s+Back+Office.webm&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Admin / Back office site</p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=daily-mobile.mp4&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Storefront - mobile version</p>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.dropbox.com/scl/fo/iddk7zllvb5n1op4mpvf3/h?dl=0&e=1&preview=daily-desktop.mp4&rlkey=p6kr6vqkqzlodinulta095zo0')">
                                Storefront - desktop version</p>


                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is an online platform that offers
                                coffee/non-coffee product for sale, consisting of two main sections: the Storefront and
                                the Admin
                                (Backoffice) side.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*On the Storefront, users or buyers can
                                browse and purchase the coffee/non-coffee product. On the Admin/Backoffice side, store
                                administrators can
                                manage and update the products displayed on the Storefront.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*We created it from scratch using the ff.
                                tools: ReactJS, NodeJS,
                                MySQL, Bootstrap(for the store front), MUI (for the admin / back office site).</p>
                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Collaborating with the other team members
                                to establish objectives and design more functional, cohesive codes to enhance the user
                                experience.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Working on database and create API needed.
                            </p>
                            <p class="text-left px-5 text-lg font-body">*3rd party API integration for Front-end and
                                Back-end.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">Orange Cafe</p>
                            <div class="relative">
                                <img :src="orangeCafe" alt="">
                            </div>
                            <p class="text-left text-lg font-title   cursor-pointer italic">**Link: Unavailable </p>

                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is a simple web app that enables
                                restocking, features a POS system, and generates reports.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Created it from scratch using the ff.
                                tools: VueJS,
                                Firebase , Tailwind.</p>
                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body">*Solo developer for this project,
                                focusing primarily on the front-end using Vue.js.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">Budget Plan</p>
                            <div class="relative">
                                <img :src="budgetPlan" alt="" style="height:300px; margin: 0 auto;">
                            </div>
                            <p class="text-left text-lg font-title   cursor-pointer italic"
                                @click="hanldeLinkTo('https://budgetplan-sheesh.surge.sh/')">**Link:
                                https://budgetplan-sheesh.surge.sh/ </p>

                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is a personal project I created to
                                track my expenses and savings. The web app records all expenses each month, and users
                                can set their "Target Savings Amount" for the month. Also user can track their expenses
                                via history tab.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Created it from scratch using the ff.
                                tools: ReactJS,
                                Firebase , MUI.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is always on mobile view</p>
                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body">*Solo developer for this project,
                                focusing primarily on the front-end using Vue.js.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">San Juan City Hall</p>
                            <div class="relative">
                                <img :src="cityHall" alt="">
                            </div>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.sanjuancity.gov.ph/SanJuanCity/Makabagong_SJ_Government')">
                                San Juan City Website</p>


                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is a CMS platform designed to
                                introduce and post news and updates about the city. </p>
                            <p class="text-left px-5 text-lg font-body mb-2">*We created it from scratch using the ff.
                                tools: Laravel, HTML, JS, CSS, jQuery MySQL, Bootstrap.</p>
                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Collaborating with the other team members
                                to establish objectives and design more functional, cohesive codes to enhance the user
                                experience.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*I worked as a full-stack developer, with
                                the majority of my focus on the admin side, where users can post various types of
                                content. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex mb-2 border-black">
                <div class="w-full  border-2 border-black py-3">
                    <div class="flex">
                        <div class="w-1/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title">Robinsons Supermarket</p>
                            <div class="relative">
                                <img :src="robinsons" alt="">
                            </div>
                            <p class="text-left text-lg font-title underline cursor-pointer"
                                @click="hanldeLinkTo('https://www.robinsonssupermarket.com.ph/')">
                                Robinsons Supermarket Website</p>


                        </div>


                        <div class="w-2/3 px-4 py-1">
                            <p class="text-left  text-2xl font-title underline">Description</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*This is a CMS platform designed to
                                introduce and post news and updates about the robinsons Supermarket. </p>
                            <p class="text-left px-5 text-lg font-body mb-2">*We created it from scratch using the ff.
                                tools: Laravel, HTML, JS, CSS, jQuery MySQL, Bootstrap.</p>
                            <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*Collaborating with the designer and
                                Back-end developers.</p>
                            <p class="text-left px-5 text-lg font-body mb-2">*I worked as a front-end developer, with
                                the majority of my focus on the clients / users side, where users can see all the
                                contents. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>


<!-- <p class="text-sm mb-1 text-gray-500"> <b>Reference:</b> <u>7GqzFlSyt8Lt27qMJrPq</u> </p>
<p class="text-sm mb-1 text-gray-500"><b>Request:</b> <u></u></p> -->
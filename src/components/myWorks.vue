<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: 'No description provided',
    },
    btnTitle: {
        type: String,
        default: 'Request'
    },
    btnLink: {
        type: String,
        default: '#'
    },
    customClass: {
        type: String,
        default: ''
    }
});
</script>

<template>

    <div class="flex mb-2 border-black">
        <div class="w-full  border-2 border-black py-3">
            <div class="flex">
                <div class="w-1/3 px-4 py-1">
                    <p class="text-left  text-2xl font-title">Daily by Bo's Coffee</p>
                    <div>

                    </div>
                    <img :src="dailyMobile" alt="">
                    <img :src="dailyWeb" alt="">


                </div>


                <div class="w-2/3 px-4 py-1">
                    <p class="text-left  text-2xl font-title underline">Description</p>
                    <p class="text-left px-5 text-lg font-body mb-2">*This is an online platform that offers
                        coffee/non-coffee product for sale, consisting of two main sections: the Storefront and the
                        Admin
                        (Backoffice) side.</p>
                    <p class="text-left px-5 text-lg font-body mb-2">*On the Storefront, users or buyers can
                        browse and purchase the coffee/non-coffee product. On the Admin/Backoffice side, store
                        administrators can
                        manage and update the products displayed on the Storefront.</p>
                    <p class="text-left px-5 text-lg font-body mb-2">*We create it from scratch using the ff. tools:
                        ReactJS, NodeJS,
                        MySQL, Bootstrap(for the store front), MUI (for the admin / back office site).</p>
                    <p class="text-left  text-2xl font-title underline">Duties and Responsibilities</p>
                    <p class="text-left px-5 text-lg font-body mb-2">*Collaborating with the other team members
                        to establish objectives and design more functional, cohesive codes to enhance the user
                        experience.</p>
                    <p class="text-left px-5 text-lg font-body mb-2">*Working on database and create API needed.
                    </p>
                    <p class="text-left px-5 text-lg font-body">*3rd party API integration for Front-end and
                        Back-end.</p>
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
            </div>
        </div>
    </div>
</template>

<style>
/* Add your styles here */
</style>
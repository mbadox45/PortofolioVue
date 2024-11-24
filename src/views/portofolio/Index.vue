<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import Particles from './Particles.vue';
import { gsap } from 'gsap'; // Import GSAP

const route = useRoute();
const router = useRouter();

const query = route.query;

const bahasa = ref('UK');
const checked = ref(true);


const menubar = ref([
    {id:1, name:'Home', routes:'/'},
    {id:1, name:'About', routes:'/about'},
    {id:1, name:'Project', routes:'/project'},
    {id:1, name:'Contact', routes:'/contact'},
]);

const selectedCountry = ref(
    { name: 'English', code: 'uk' }
);
const countries = ref([
    { name: 'Indonesian', code: 'id' },
    { name: 'English', code: 'uk' }
]);

onMounted(() => {
    mainFunc()
})

const mainFunc = () => {
    query != null ? query.country == 'ID' ? bahasa.value = 'ID' : bahasa.value = 'UK' : bahasa.value = 'UK'
    bahasa.value == 'UK' ? checked.value = true :  checked.value = false
    // bahasa.value == 'UK' ? selectedCountry.value = { name: 'English', code: 'uk' } :  selectedCountry.value = { name: 'Indonesian', code: 'id' }
}

const changeCountry = () => {
    let link = '';
    if (checked.value == false) {
        link = '?country=ID'
    } else {
        link = '';
    }
    router.push(route.path+link)
}

const checkActiveRoute = (item) => {
    // console.log(item);
    let link = '';
    if (checked.value == false) {
        link = '?country=ID'
    } else {
        link = '';
    }
    router.push(item+link)
}

</script>

<template>
    <div class="relative w-full min-h-screen bg-yellow-600">
    <!-- <div class="w-full min-h-screen bg-gradient-to-r from-gray-900 via-gray-900 to-gray-500"> -->
        <!-- <Particles /> -->
        <nav class="fixed z-50 w-full px-[0.5rem] pt-[0.5rem] bg-yellow-600">
            <div class="flex justify-between w-full font-sans bg-gray-900 border-b-2 border-white rounded-t-xl">
                <div class="px-[100px] py-3 rounded-tr-full w-full">
                    <img src="/logo2.png" alt="Mbadox45" class="p-1 border-gray-50" width="60px">
                    <!-- <span class="text-xl font-black text-gray-300 sm:text-3xl">RTA_R<span class="text-xl text-teal-500 sm:text-5xl">.</span></span> -->
                </div>

                <div class="flex items-center justify-center w-full p-3">
                    <div class="flex items-center justify-center w-full bg-gray-800 rounded-xl">
                        <div class="flex items-center justify-center w-full">
                            <span class="flex justify-center w-full px-5 py-2 font-bold text-gray-500 transition-all duration-300 cursor-pointer rounded-xl hover:bg-white" v-for="(item, index) in menubar" :key="index" @click="checkActiveRoute(item.routes)" :class="route.path == item.routes ? 'bg-white' : 'bg-transparent'">{{item.name}}</span>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-end px-[100px] gap-2 w-full">
                    <img alt="" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-id`" style="width: 30px" />
                    <ToggleSwitch v-model="checked" @change="changeCountry"/>
                    <img alt="" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-uk`" style="width: 30px" />
                </div>
                <div class="flex items-center justify-center w-full px-3 py-3 bg-white rounded-l-full shadow-xl sm:hidden">
                    <i class="pi pi-align-justify"></i>
                </div>
            </div>
        </nav>

        <div class="flex flex-col sm:flex-row w-full px-[0.5rem] pb-[0.5rem] bg-yellow-600 min-h-screen">
            <router-view />
        </div>
    </div>
</template>
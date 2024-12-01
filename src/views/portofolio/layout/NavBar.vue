<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
    <nav class="fixed z-50 w-full px-[0.5rem] pt-[0.5rem] bg-[#E5E3D4]">
        <div class="flex justify-between w-full font-sans bg-transparent rounded-t-xl">
            <div class="px-[100px] py-3 rounded-tr-full w-full">
                <img src="/rta.png" alt="Mbadox45" class="bg-green-300 rounded-full" width="60px">
                <!-- <span class="text-xl font-black text-gray-300 sm:text-3xl">RTA_R<span class="text-xl text-teal-500 sm:text-5xl">.</span></span> -->
            </div>

            <div class="flex items-center justify-center w-full p-3">
                <div class="flex items-center justify-center w-full bg-black border-4 border-black rounded-2xl">
                    <div class="flex items-center justify-center w-full">
                        <span class="flex justify-center w-full px-5 py-2 font-bold text-black transition-all duration-300 cursor-pointer rounded-xl hover:bg-green-300 hover:text-[#1C325B]" v-for="(item, index) in menubar" :key="index" @click="checkActiveRoute(item.routes)" :class="route.path == item.routes ? 'bg-green-300' : 'bg-transparent text-green-300'">{{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-end px-[100px] gap-2 w-full">
                <!-- <img alt="" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-id border-[1px] border-black rounded-full`" style="width: 40px" /> -->
                <span class="p-2 font-bold text-red-500 rounded-full">IDN</span>
                <ToggleSwitch v-model="checked" @change="changeCountry"/>
                <span class="p-2 font-bold text-red-500 rounded-full">ENG</span>
                <!-- <img alt="" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-uk border-[1px] border-black rounded-full`" style="width: 40px" /> -->
            </div>
            <div class="flex items-center justify-center w-full px-3 py-3 bg-white rounded-l-full shadow-xl sm:hidden">
                <i class="pi pi-align-justify"></i>
            </div>
        </div>
    </nav>
</template>
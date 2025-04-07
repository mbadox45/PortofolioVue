<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const query = route.query;

const bahasa = ref('UK');
const checked = ref(true);

const menubar = ref([
    { id: 1, name: 'Home', routes: '/' },
    { id: 1, name: 'About', routes: '/about' },
    { id: 1, name: 'Project', routes: '/project' },
    { id: 1, name: 'Contact', routes: '/contact' }
]);

const selectedCountry = ref({ name: 'English', code: 'uk' });
const countries = ref([
    { name: 'Indonesian', code: 'id' },
    { name: 'English', code: 'uk' }
]);

onMounted(() => {
    mainFunc();
});

const mainFunc = () => {
    query != null ? (query.country == 'ID' ? (bahasa.value = 'ID') : (bahasa.value = 'UK')) : (bahasa.value = 'UK');
    bahasa.value == 'UK' ? (checked.value = true) : (checked.value = false);
    // bahasa.value == 'UK' ? selectedCountry.value = { name: 'English', code: 'uk' } :  selectedCountry.value = { name: 'Indonesian', code: 'id' }
};

const changeCountry = () => {
    let link = '';
    if (checked.value == false) {
        link = '?country=ID';
    } else {
        link = '';
    }
    router.push(route.path + link);
};

const checkActiveRoute = (item) => {
    // console.log(item);
    let link = '';
    if (checked.value == false) {
        link = '?country=ID';
    } else {
        link = '';
    }
    router.push(item + link);
};
</script>

<template>
    <nav class="fixed z-50 w-full px-[0.5rem] pt-[0.5rem] bg-[#E5E3D4]">
        <div class="flex justify-between w-full font-sans bg-transparent rounded-t-xl">
            <div class="px-16 py-3 rounded-tr-full w-full">
                <!-- <img src="/rta.png" alt="Mbadox45" class="bg-green-300 rounded-full" width="60px" /> -->
                <div class="flex items-end gap-1">
                    <span class="text-xl sm:text-3xl uppercase">Portofolio</span>
                    <span class="text-5xl font-bold">.</span>
                </div>
            </div>

            <div class="flex items-center justify-center w-full px-16 py-3">
                <div class="flex items-center justify-center w-full rounded-2xl">
                    <div class="flex items-center justify-end gap-5 w-full">
                        <span
                            class="flex justify-center w-1/6 uppercase px-5 py-2 font-medium text-black transition-all duration-300 cursor-pointer rounded-xl hover:font-semibold hover:text-[#2C3930]"
                            v-for="(item, index) in menubar"
                            :key="index"
                            @click="checkActiveRoute(item.routes)"
                            :class="route.path == item.routes ? 'bg-[#A27B5C]' : 'bg-transparent text-[#2C3930]'"
                            >{{ item.name }}</span
                        >
                    </div>
                </div>
            </div>
            <!-- <div class="flex items-center justify-end px-[100px] gap-2 w-full">
                    <span class="p-2 font-bold text-red-500 rounded-full">IDN</span>
                    <ToggleSwitch v-model="checked" @change="changeCountry" />
                    <span class="p-2 font-bold text-red-500 rounded-full">ENG</span>
                </div> -->
            <div class="flex items-center justify-center w-full px-3 py-3 bg-white rounded-l-full shadow-xl sm:hidden">
                <i class="pi pi-align-justify"></i>
            </div>
        </div>
    </nav>
</template>

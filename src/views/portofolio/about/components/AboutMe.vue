<script setup>
    import { onMounted, ref, watch } from 'vue';
    import { descAbEng, descAbInd } from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    import { resumeElements } from '@/api/TransitionEffect';


    const desc = ref(descAbEng)
    const title = ref('About Me');

    const route = useRoute();

    onMounted(() => {
        mainFunc()
        animates()
    })

    const mainFunc = () => {
        console.log(route.query.country);
        if (route.query.country == null) {
            title.value = "About Me"
            desc.value = descAbEng
        } else {
            title.value = "Tentang Saya"
            desc.value = descAbInd
        }
    }

    const animates = async () => {
        return await resumeElements();
    };


    watch(
        () => route.query.country, mainFunc, animates, { immediate: true } // This ensures `mainFunc` is run initially on mount
    );
</script>

<template>
    <section class="relative flex items-center justify-center w-full min-h-screen gap-0">
        <div class="flex justify-center w-full">
            <div class="rounded-full border-[4px] border-green-300 shadow-md shadow-green-300 photo-image">
                <img src="/gambar4.png" alt="Rio Teguh" class="bg-white border-black rounded-full border-[15px] shadow-white shadow-inner" width="400px">
            </div>
        </div>
        <div class="flex flex-col w-full gap-[3rem] pr-[5rem] rounded-xl">
            <span class="text-6xl font-black text-center text-black uppercase underline-offset-8">{{title}}</span>
            <p class="text-xl text-justify text-gray-500 desc-section">" {{desc}} "</p>
            <div class="flex items-center">
                <div class="flex items-center gap-3 px-6 py-3 bg-black rounded-full name-section">
                    <div class="p-1 bg-green-300 rounded-full"></div>
                    <small class="font-bold text-green-300 ">Rio Teguh Ardiarta</small>
                </div>
            </div>
        </div>
        <div class="absolute w-full py-[1.5rem] bottom-0 bg-black"></div>
    </section>
</template>
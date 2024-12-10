<script setup>
import { onMounted, ref, watch } from 'vue';
import { imgDescInd } from '@/api/DummyData';
const skill = ref(imgDescInd);

const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);

const scrollContainer = document.getElementById('scroll-container');

const scrollLeft = () => {
  if (scrollContainer) {
    scrollContainer.scrollBy({
      left: -200, // Geser ke kiri
      behavior: 'smooth',
    });
  }
};

const scrollRight = () => {
  if (scrollContainer) {
    scrollContainer.scrollBy({
      left: 200, // Geser ke kanan
      behavior: 'smooth',
    });
  }
};


</script>

<template>
    <div class="relative flex flex-col items-center justify-center w-full min-h-screen px-[3rem] bg-transparent gap-[2.5rem]">
        <span class="w-full text-6xl font-black text-center text-black uppercase">My Projects</span>
        <div class="flex w-full gap-5">
            <div class="w-full py-5 bg-black rounded-xl">
                <!-- <div class="relative w-full p-4 bg-transparent">
                    <div id="scroll-container" class="overflow-x-scroll whitespace-nowrap scroll-smooth">
                        <div class="inline-block w-full gap-3 p-3 mr-2 border border-gray-300 rounded-xl">
                            <div class="flex flex-col gap-6 p-3 ">
                                <div class="w-full h-[16rem] rounded-xl bg-black"></div>
                                <div class="flex items-center justify-end w-full gap-3">
                                    <span class="w-full text-xl font-bold">PortalAPPS</span>
                                    <button class="px-4 py-2 transition-all duration-300 bg-white border rounded-lg shadow hover:bg-gray-700 hover:text-white">Demo</button>
                                    <button class="px-4 py-2 text-white bg-gray-700 border rounded-lg shadow hover:bg-gray-500">Detail</button>
                                </div>
                            </div>
                        </div>
                        <div class="inline-block w-full gap-3 p-3 mx-2 border border-gray-300 rounded-xl">
                            <div class="flex flex-col gap-3 p-3 ">
                                <div class="w-full h-[12rem] rounded-xl bg-black"></div>
                                <div class="flex justify-end w-full gap-3">
                                    <Button label="Test"/>
                                    <Button label="Test"/>
                                </div>
                            </div>
                        </div>
                        <div class="inline-block w-full gap-3 p-3 ml-2 border border-gray-300 rounded-xl">
                            <div class="flex flex-col gap-3 p-3 ">
                                <div class="w-full h-[12rem] rounded-xl bg-black"></div>
                                <div class="flex justify-end w-full gap-3">
                                    <Button label="Test"/>
                                    <Button label="Test"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- <Carousel class="px-5" :value="skill" :numVisible="1" :responsiveOptions="responsiveOptions" :numScroll="1" circular>
                    <template #item="slotProps">
                        <div class="flex justify-center p-4 m-4 transition-all duration-300 bg-white border shadow rounded-xl">
                            <div class="flex flex-col w-full h-full gap-3">
                                <div class="w-full h-[20rem] rounded-xl bg-black"></div>
                                <div class="flex items-center justify-end w-full gap-3">
                                    <span class="w-full text-xl font-bold">{{slotProps.data.name}}</span>
                                    <button class="flex items-center gap-2 px-4 py-2 transition-all duration-300 bg-white border rounded-lg shadow hover:bg-gray-700 hover:text-white">Github <i class="pi pi-github"></i></button>
                                    <button class="flex items-center gap-2 px-4 py-2 text-white bg-gray-700 border rounded-lg shadow hover:bg-gray-500">Details <i class="pi pi-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </template>
                </Carousel> -->

                <ScrollPanel class="h-[29rem] px-5 " style="width: 100%;">
                    <Accordion value="0" class="" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
                        <AccordionPanel v-for="(item, index) in skill" :key="index" :value="index">
                            <AccordionHeader>
                                <span class="flex items-center w-full gap-2">
                                    <span class="font-bold whitespace-nowrap">{{item.title}}</span>
                                </span>
                            </AccordionHeader>
                            <AccordionContent>
                                <div class="flex items-stretch gap-5">
                                    <div class="flex flex-col w-full h-full gap-3">
                                        <div class="w-full h-[20rem] rounded-xl bg-black"></div>
                                    </div>
                                    <div class="relative flex flex-col w-full gap-3 px-8 ">
                                        <span class="text-2xl font-bold">{{item.title}}</span>
                                        <span class="font-medium text-justify">{{item.desc}}</span>
                                        <div class="absolute bottom-0 left-0 flex items-center justify-center w-full gap-3">
                                            <button class="flex items-center gap-2 px-4 py-2 transition-all duration-300 bg-white border rounded-lg shadow hover:bg-gray-700 hover:text-white">Github <i class="pi pi-github"></i></button>
                                            <button class="flex items-center gap-2 px-4 py-2 text-white bg-gray-700 border rounded-lg shadow hover:bg-gray-500">Live Demo <i class="pi pi-search"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </ScrollPanel>
            </div>
        </div>
        <div class="absolute flex flex-col w-full py-[1.5rem] bottom-0 bg-black">
        </div>
    </div>
</template>
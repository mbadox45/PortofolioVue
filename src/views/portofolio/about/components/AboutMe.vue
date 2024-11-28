<script setup>
</script>

<template>
    <section class="flex items-center justify-center w-full min-h-screen gap-0 border-b-2 border-yellow-600">
        <div class="flex justify-center w-full">
            <img src="/gambar.png" alt="Rio Teguh" class="bg-white shadow-inner border-[20px] border-yellow-600 rounded-xl shadow-gray-600 photo-image" width="400px">
        </div>
        <div class="flex flex-col w-full gap-8 pr-[5rem] rounded-xl">
            <span class="font-mono text-6xl font-light text-white underline uppercase underline-offset-8">{{title}}</span>
            <p class="p-5 font-mono text-justify text-gray-600 bg-white desc-section">{{desc}}</p>
            <small class="text-xl font-bold text-yellow-600 name-section">Rio Teguh Ardiarta</small>
        </div>
    </section>
</template>
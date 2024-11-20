

<script setup>
    import { onMounted, ref, watch } from 'vue';
    import {contactEnglish, messageContact, contactIndo, pesanContact} from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    
    const route = useRoute();

    const contact = ref(contactEnglish)
    const pesan = ref(messageContact)
    const title = ref('Contact Person');

    onMounted(() => {
        mainFunc()
    })

    const mainFunc = () => {
        console.log(route.query.country);
        if (route.query.country == null) {
            title.value = "Contact Person"
            contact.value = contactEnglish
            pesan.value = messageContact
        } else {
            title.value = "Personal Kontak"
            contact.value = contactIndo
            pesan.value = pesanContact
        }
    }

    // Watch the query parameter "country"
    watch(
        () => route.query.country, mainFunc, { immediate: true } // This ensures `mainFunc` is run initially on mount
    );

</script>

<template>
    <div class="flex items-center w-full min-h-screen gap-10 px-[4rem]">
        <!-- Title & Send Message -->
        <div class="flex flex-col items-center justify-center w-full gap-5 p-8 border-2 border-white rounded-xl">
            <span class="font-mono text-3xl font-light text-white uppercase">{{title}}</span>
            <p class="font-mono text-center text-gray-300 text-md">{{pesan}}</p>
            <div class="flex flex-col w-full gap-3">
                <div class="flex w-full">
                    <InputText type="text" class="w-full bg-transparent" placeholder="Full Name"/>
                </div>
                <div class="flex w-full gap-3">
                    <InputText type="text" class="w-full text-white bg-gray-900" placeholder="Email"/>
                    <InputText type="text" class="w-full bg-transparent" placeholder="Phone Number"/>
                </div>
                <div class="flex w-full mt-5">
                    <InputText type="text" class="w-full bg-transparent" placeholder="Subject"/>
                </div>
                <div class="flex w-full">
                    <Textarea class="w-full" rows="7" cols="30" placeholder="Your Message" />
                </div>
                <div class="flex w-full">
                    <Button label="Send Message" severity="warn" rounded class="font-bold" icon="pi pi-send font-bold"/>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center w-full gap-10 p-16">
            <div class="flex items-center w-full gap-5" v-for="(item, index) in contact" :key="index">
                <div :class="`flex items-center justify-center p-5 ${item.bgcolor} rounded-full`">
                    <i :class="`text-white pi ${item.icon}`" style="font-size:30px;"></i>
                </div>
                <div class="flex flex-col w-full gap-2">
                    <span class="font-mono text-xl font-thin text-white">{{item.name}}</span>
                    <p class="text-2xl font-bold text-white">{{item.detail}}</p>
                </div>
            </div>
        </div>
        <!-- Description -->
    </div>
</template>
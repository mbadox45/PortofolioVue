<script setup>
    import { onMounted, ref, watch } from 'vue';
    import {contactEnglish, messageContact, contactIndo, pesanContact} from '@/api/DummyData';
    import { useRoute } from 'vue-router';
    import { contactElements } from '@/api/TransitionEffect';
    
    const route = useRoute();

    const initialValues = ref({
        fullname: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const contact = ref(contactEnglish)
    const pesan = ref(messageContact)
    const title = ref('Contact Person');

    onMounted(() => {
        mainFunc()
        animates()
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

    const animates = async () => {
        return await contactElements();
    };

    const onSubmit = async() => {
        console.log(initialValues.value)
    }

</script>

<template>
    <div class="flex items-center w-full bg-gray-900 rounded-b-xl gap-10 px-[4rem] pt-[7rem]">
        <!-- Title & Send Message -->
        <div class="flex flex-col items-center justify-center w-full gap-5 p-8 border-4 border-white rounded-xl box-contact">
            <span class="font-mono text-3xl font-light text-white uppercase">{{title}}</span>
            <p class="font-mono text-center text-yellow-300 text-md">{{pesan}}</p>
            <form @submit.prevent="onSubmit" class="flex flex-col w-full gap-3">
                <div class="flex w-full">
                    <InputText name="fullname" v-model="initialValues.fullname" type="text" class="w-full bg-transparent" placeholder="Full Name" fluid/>
                </div>
                <div class="flex w-full gap-3">
                    <InputText name="email" v-model="initialValues.email" type="text" class="w-full text-white bg-gray-900" placeholder="Email" fluid/>
                    <InputText name="phone" v-model="initialValues.phone" type="text" class="w-full bg-transparent" placeholder="Phone Number" fluid/>
                </div>
                <div class="flex w-full mt-5">
                    <InputText name="subject" v-model="initialValues.subject" type="text" class="w-full bg-transparent" placeholder="Subject" fluid/>
                </div>
                <div class="flex w-full">
                    <Textarea name="message" v-model="initialValues.message" class="w-full" rows="7" cols="30" placeholder="Your Message" fluid/>
                </div>
                <div class="flex w-full">
                    <Button label="Send Message" type="submit" severity="secondary" rounded class="font-bold" icon="pi pi-send font-bold"/>
                </div>
            </form>
        </div>
        <div class="flex flex-col justify-center w-full gap-10 p-16">
            <div class="flex items-center w-full gap-5" v-for="(item, index) in contact" :key="index">
                <div :class="`flex items-center justify-center p-5 ${item.bgcolor} rounded-full icon-view`">
                    <i :class="`text-white pi ${item.icon}`" style="font-size:30px;"></i>
                </div>
                <div class="flex flex-col w-full gap-2 name-section">
                    <span class="font-mono text-xl font-thin text-white">{{item.name}}</span>
                    <p class="text-2xl font-bold text-white">{{item.detail}}</p>
                </div>
            </div>
        </div>
        <!-- Description -->
    </div>
</template>
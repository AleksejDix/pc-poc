<template>
    <section class="h-full blue absolute inset-0">
        <h1>Feed Like Dislike</h1>
        <ul>
            <li>
                <router-link active-class="active" class="text-red-500" :to="{
                    name: 'property-id',
                    params: {
                        propertyId: 1
                    }
                }">1</router-link> |
            </li>
            <li>
                <router-link active-class="active" class="text-red-500" :to="{
                    name: 'property-id',
                    params: {
                        propertyId: 2
                    }
                }">2</router-link>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.blue {

    /* position: absolute; */
    outline: 10px solid blue;
    outline-offset: -10px;
    padding: 10px;
   
}

</style>
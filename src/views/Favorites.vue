<template>
    <section class="h-full flex flex-col absolute inset-0">
        <h1>Favs</h1>
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
    outline: 10px solid tomato;
    outline-offset: -10px;
        padding: 10px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

</style>
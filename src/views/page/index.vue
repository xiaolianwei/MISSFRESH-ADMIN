<template>
    <div>
        <card />

        <charts />
    </div>
</template>

<script>
import Card from '@/components/IndexCard.vue';
import Charts from '@/components/IndexCharts.vue';

export default {
  components: {
    Card,
    Charts,
  },
};
</script>

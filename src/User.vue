<template>
	<p>{{ fullname }} is {{ user.age }} years old</p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { IUser } from './IUser'

interface IProps {
	user: IUser
}

const props = defineProps<IProps>()
const fullname = computed(() => {
	return props.user.firstname + ' ' + props.user.lastname
})
</script>

<style scoped lang="scss">
small {
	color: pink;
	&:hover {
		color: hotpink;
	}
}
</style>
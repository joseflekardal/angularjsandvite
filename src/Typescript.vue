<template>
	<h3>OMG, this is {{ lang.toLocaleUpperCase() }}</h3>
	<User :user="user" />
	<small>
		<strong>
			Computed number with two decimals: {{ twoDec }}
		</strong>
	</small>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import User from './User.vue'
import type { IUser } from './IUser'

const lang: string = 'typescript'
const myNumber = ref(9.113)

const twoDec = computed(() => myNumber.value.toFixed(2))

const user: IUser = {
	firstname: 'Jonte',
	lastname: 'Skogelin',
	age: 33
}
</script>

<style scoped lang="scss">
small {
	color: hotpink;
	&:hover {
		color: purple;
	}
}
</style>
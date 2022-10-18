<template>
	<h2>This is Vue3 🥳</h2>

	<p>Passed prop from AngularJS: <strong>{{ myProp }}</strong></p>
	<p>Top level vars: <strong>{{ topLevelName }}</strong></p>

	<hr>

	<Typescript />
	<TodoApp />
</template>

<script setup>
import Typescript from './Typescript.vue'
import TodoApp from './TodoApp.vue'
defineProps({
	myProp: String
})

const topLevelName = 'Agda in the house'
</script>
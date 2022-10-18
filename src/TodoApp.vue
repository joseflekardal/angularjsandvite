<template>
	<form @submit.prevent="addTodo" @reset="resetForm" ref="todoForm">
		<input type="text" v-model="todoText">
		<button>Add todo</button>
	</form>

	<ul>
		<li v-for="todo in todos" :key="todo.id" @click="toggleTodo(todo)" class="todo-item">
			<span :class="{ completed: todo.isCompleted }">
				{{ todo.text }}
			</span>
			<span class="delete" v-if="todo.isCompleted" @click.stop="deleteTodo(todo)">❌</span>
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface ITodo {
	id: number;
	text: string;
	isCompleted: boolean;
}

const todoForm = ref<HTMLFormElement | null>(null)
const todos = reactive<ITodo[]>([])
const todoText = ref('')

function addTodo() {
	todos.push({ id: Date.now(), text: todoText.value, isCompleted: false })
	todoForm.value?.reset()
}

function resetForm() {
	todoText.value = ''
}

function deleteTodo(todo: ITodo) {
	const isDeleteConfirmed = window.confirm('Are you sure?')

	if (isDeleteConfirmed) {
		const index = todos.indexOf(todo)
		todos.splice(index, 1)
	}
}

function toggleTodo(todo: ITodo) {
	const index = todos.indexOf(todo)
	todos.splice(index, 1, { ...todo, isCompleted: !todo.isCompleted })
}
</script>

<style scoped lang="scss">
.todo-item {
	cursor: pointer;
}

.completed {
	text-decoration: line-through;
}

.delete {
	margin-left: .5rem;
	opacity: 0.6;
	transition: 200ms opacity;

	&:hover {
		opacity: 1;
	}
}
</style>
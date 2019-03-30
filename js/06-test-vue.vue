<style>
.fade-enter{
	opacity:0;
}
.fade-enter-active{
	transition:opacity 0.5s;
}
.fade-leave-active{
	transition:transform 0.5s;
}
.fade-leave-to{
	transform:translateX(10px);
}
</style>
<div id="demo">
<button v-on:click="show=!show">Toggle</button>
<transtion name="fade">
	<p v-if="show">小火柴</p>
</transition>
</div>
<script>
new Vue({
	el:"#demo",
	data:{
		show:false
	}
})
</script>

<style>
.custom-appear-class{
	opacity: 0;
	background-color:pink;
	transform:translateX(100px);
}
.custom-appear-active-class{
	transition:2s;
}
</style>
<template>
<div id="demo">
	<button @click="reset">还原</button>
	<transition 
		appear
		appear-class="custom-appear-class"
		appear-to-class="custom-appear-to-class"
		appear-active-class="custom-appear-active-class"
		>
		<p>小火柴</p>
	</transition>	
</div>		
</template>

<template>
	<button v-on:click="show!=show"></button>	
	<transition name="fade">
		<p v-if="show">小火柴</p>
	</transition>
</template>

<template>
	<button v-on:click="show!=show"></button>	
	<transition name="fade">
		<p v-show="show">小火柴</p>
	</transition>
</template>
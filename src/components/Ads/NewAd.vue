<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Create new ad</h1>
				<v-form  ref="form"
					v-model="valid"
					validation
				>
					<v-text-field name="Title" label="Ad title" type="text"
						v-model="title"
						required
						:rules="[v => !!v || 'Title is required']"
					></v-text-field>
					<v-text-field name="description" label="Description" type="text" multi-line
						v-model="description"
						:rules="[v => !!v || 'Description is required']"
					></v-text-field>
				</v-form>
				<v-layout row class="mb-3">
					<v-flex xs12>
						<v-btn
							color="warning"
							class="white--text"
							@click="loader = 'loading3'"
						>
							Upload
							<v-icon right dark>cloud_upload</v-icon>
						</v-btn>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<img src="" alt="" height="100">
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-switch
							color="primary"
							v-model="promo"
							label="Add to promo"
						></v-switch>
					</v-flex>
				</v-layout>
				<v-layout row>
					<v-flex xs12>
						<v-btn :disabled="!valid" class="success" @click="createAd">Create ad</v-btn>
					</v-flex>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			description: '',
			promo: false, 
			valid: false
		}
	},
	methods: {
		createAd() {
			if(this.$refs.form.validate()) {
				const ad ={
					title: this.title,
					description: this.description,
					promo: this.promo,
					imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg'
				};
				
				this.$store.dispatch('createAd', ad);
			}
		}
	}
}
</script>
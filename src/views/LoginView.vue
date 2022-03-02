<template>
  <div class="login">
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">Email:</label>
          <input type="email" name="Email" v-model="form.email"/>
          <span class="error" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="form.password"/>
          <span class="error" v-if="errors.password">{{ errors.password[0] }}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors:{}
    }
  },
  computed: {
    ...mapState(["token"]),
  },
  methods: {
    ...mapActions(["LogIn"]),
    async handleSubmit() {
      try
      {
        await this.LogIn(this.form);

        this.$router.push('/products');

      } catch(error) {
        this.errors = error.response.data.errors;
      }
      // await this.LogIn(this.form).then(response => {
      //   console.log(response, this.$state.token);
      //   this.$router.push('/products');
      // }).catch(error => {
      //   this.errors = error.response.data.errors;
      // });
    }
  }
}
</script>


<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius:30px;
}
button[type=submit]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
  padding:10px;
  border-radius:30px;
}
.error {
  color: red;
}
</style>
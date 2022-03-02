<template>
    <div class="register">
        <h3>Registration</h3>
        <div>
            <form @submit.prevent="submit">
                <div>
                    <label for="full_name">Full Name:</label>
                    <input type="text" name="name" id="name" v-model="form.name">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" v-model="form.email">
                </div>
                <div>
                    <label for="full_name">Contact Name:</label>
                    <input type="text" name="contact_name" id="contact_name" v-model="form.contact_name">
                </div>
                <div>
                    <label for="full_name">Contact Number:</label>
                    <input type="text" name="contact_number" id="contact_number" v-model="form.contact_number">
                </div>
                <div>
                    <label for="full_name">Address:</label>
                    <textarea id="address" name="address" v-model="form.address"></textarea>
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="text" name="username" id="password" v-model="form.password">
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <p v-if="showError" id="error">Some error</p>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'RegisterView',
  components: {},
  data() {
    return {
      form: {
        name: '',
        email: '',
        contact_name: '',
        contact_number: '',
        address: '',
        password: '',
        type: 4
      },
      showError: false
    }
  },
  methods: {
    ...mapActions(["Register"]),
     async submit() {
      await this.Register(this.form);
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
#error {
  color: red;
}
</style>
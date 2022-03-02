<template>
    <div class="register">
        <h3>Registration</h3>
        <div>
            <form>
                <div>
                    <label for="username">Username:</label>
                    <input type="text" name="username" id="username">
                </div>
                <div>
                    <label for="full_name">Full Name:</label>
                    <input type="text" name="full_name" id="full_name">
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input type="text" name="username" id="password">
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        <p v-if="showError" id="error">Some error</p>
    </div>
</template>

<script>
export default {
  name: 'RegisterView',
  components: {},
  data() {
  },
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
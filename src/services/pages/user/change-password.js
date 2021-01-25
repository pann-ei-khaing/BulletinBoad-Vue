export default {
  data() {
    return {
      password: {
        userId: this.$store.state.userId,
        old_password: "",
        new_password: "",
        con_new_password: "",
      }
    }
  },
  methods: {
    /**
     * This is to change password
     * @returns void
     */
    changePassword() {
      this.$axios.post("/changePassword", this.password)
        .then(() => {
          this.error = "";
          this.$router.push({ name: "user-list" });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};

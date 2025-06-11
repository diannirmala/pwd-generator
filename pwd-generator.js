    function generatePassword() {
      const length = 16;
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}<>?";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
      }
      document.getElementById("password").value = password;
      document.getElementById("copyMessage").classList.add("hidden");
    }

    function copyPassword() {
      const passwordField = document.getElementById("password");
      passwordField.select();
      passwordField.setSelectionRange(0, 99999); // Mobile support
      document.execCommand("copy");
      document.getElementById("copyMessage").classList.remove("hidden");
    }
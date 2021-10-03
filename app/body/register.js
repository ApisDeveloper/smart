Vue.component('register', {
   data: function () {
     return {
      errors_email: [],
      errors_password: [],
      errors_subpassword: [],
      email: null,
      password: null,
      subpassword: null,
     }
   },
   methods:{
      Login_CreatePerson(){
         this.errors_email = [];
         this.errors_password = [];
         this.errors_subpassword = [];
         if (!this.email) {
            return this.errors_email.push(' - укажите электронную почту.');
         } else if (!this.validEmail(this.email)) {
            return this.errors_email.push(' - укажите корректный адрес электронной почты.');
         }
         if (!this.password) {
            return this.errors_password.push(' - укажите пароль.');
         } else if (!this.validPassword(this.password)) {
            return this.errors_password.push(' - укажите корректный пароль.');
         }
         if (!this.subpassword) {
            return this.errors_subpassword.push(' - укажите пароль повторно.');
         } else if (this.subpassword != this.password) {
            return this.errors_subpassword.push(' - пароли не совпадают.');
         }
         _PLINFO.Password = this.subpassword;
         _PLINFO.Email = this.email;

         _PLINFO.interface = 'body';
         _PLINFO.interfacePage = 'person';
      
         app.PageTypeUpdate();
         cef.emit("CEF_regData_posCreatPerson", this.email, this.password);
      },
      //=== Проверка валидности почты ===//
      validEmail: function (email) {
         var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(email);
      },
      //=== Проверка валидности пароля ===//
      validPassword: function (password) {
         var re = /^(([a-zA-Z\-0-9]{3,}))$/;
         return re.test(password);
      },
   },
   template: `
   <div class="login global_flex_center">
      <div class="registration_center">
         <div class="form_registration">
            <h2>Регистрация</h2>
            <p>Основная информация</p> 
            <label class="form_lable">
               <input type="text" required v-model="email">
               <span>E-mail {{ errors_email + ''}}</span>
               <div class="form_line"></div>
            </label>
            <label class="form_lable">
               <input type="password" required v-model="password">
               <span>Пароль {{ errors_password + ''}}</span>
               <div class="form_line"></div>
            </label>
            <label class="form_lable">
               <input type="password" required v-model="subpassword">
               <span>Повторите пароль {{ errors_subpassword + ''}}</span>
               <div class="form_line"></div>
            </label>
            <button class="form_button" @click="Login_CreatePerson">Создать аккаунт</button>
         </div>  
      </div>
   </div>
   `
 });
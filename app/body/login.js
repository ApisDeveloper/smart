Vue.component('login', {
   data: function () {
     return {
         password: null,
         errors_password: [],
     }
   },
   methods:{
      Login_In(){
         this.errors_password = [];
         if (this.password != _PLINFO.Password) {
            return this.errors_password.push(' - пароли не совпадают.');
         }
         app.PageClose();
         cef.emit("CEF_Data_Authorization", 1);
      },
   },
   template: `
   <div class="login global_flex_center">
      <div class="login_center">
         <div class="form_registration">
            <h2>Авторизация</h2>
            <p>Ведите пароль от Вашего аккаунта</p>
            <label class="form_lable">
               <input type="password" required v-model="password">
               <span class="login_password">Пароль {{ errors_password + ''}}</span>
               <div class="form_line"></div>
            </label>
            <button class="form_button" @click="Login_In">Авторизация</button>
            <a href="" class="login_password_restore">Забыли пароль?</a>
         </div>  
      </div>
   </div>
   `
 });
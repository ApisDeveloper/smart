Vue.component('welcome', {
   data: function () {
      return {
         w_pName: _PLINFO.Name,
      }
   },
   methods:{
      LoginShow(){
         if(_PLINFO.Password == 'none'){
            _PLINFO.interface = 'body';
            _PLINFO.interfacePage = 'register';
            app.PageTypeUpdate();
         }
         else{
            _PLINFO.interface = 'body';
            _PLINFO.interfacePage = 'login';
            app.PageTypeUpdate();
         }
       },
   },
   template: `
   <div class="welcome global_flex_center effect_text">
      <p><span>{{ w_pName }}</span></p>
      <p>добро пожаловать на</p>
      <p>Smart RP 2.0!</p>
      <button @click="LoginShow" class="welcome_btn">Начать играть</button>
   </div>
   `
 });

 cef.on("CEF:login", (player_name, player_password) => {
   _PLINFO.Name = player_name;
   _PLINFO.Password = player_password;
   
   _PLINFO.interface = 'interface';
   _PLINFO.interfacePage = 'intro';
   app.StartCef();
   // app.PageTypeUpdate();
   cef.hide(false);
   cef.set_focus(true);
 });
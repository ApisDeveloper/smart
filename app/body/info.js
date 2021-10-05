Vue.component('info', {
   data: function () {
      return {
         type: null,
         info_Title: ["Поздравляем с успешной регистрацией!",
            "Подсказка",
            "Подсказка",
            "Подсказка"],

         info_Text: ["По дороге в город Вас ограбили. При Вас осталась небольшая сумма денег и телефон. Но полезные знакомства помогут Вам обрести новую жизнь в нашем прекрасном городе. Тут Вы можете стать тем кем только пожелаете. Начать свое путешествие по миру SmartRP Вы можете со знакомства с Александром.",
            "Для взаимодействия с любым персонажем на проекте подойдите к нему и нажмите клавишу 'E'",
            "Для взаимодействия с любым транспортом на проекте подойдите к нему и нажмите клавишу 'R'",
            "Для управления любым транспортом на проекте нажмите клавишу '2' находясь за рулем"],
      }
   },
   methods:{
      HideCef_Info(){
         app.PageClose();
      },   
   },
   template: `
   <div class="smart_information global_flex_center">
      <div class="smart_information_box">
         <h2 class="smart_information_title">{{ info_Title[this.$root.typeInfo] }}</h2>
         <p class="smart_information_text">{{ info_Text[this.$root.typeInfo] }}</p>
         <div class="smart_information_btn" @click="HideCef_Info">Спасибо</div>
      </div>
   </div>
   `
});
cef.on("CEF:smart_information", (type) => {  
   _PLINFO.interfacePage = 'info';
   _PLINFO.TypeInfo = type;
   app.PageTypeUpdate();
   cef.set_focus(true);
 });
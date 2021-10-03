Vue.component('bot', {
   data: function () {
      return {
        type: _PLINFO.BotType,

         bot_Title: ["Собеседник",
         "Александр"],

         bot_Text: ["К сожалению в данный момент нам не о чем разговаривать!",
            "Приветствую! Я стану твоим помощником в освоении нового мира на проекте SmartRP. Вместе со мной тебе будет легче развиваться, кроме того выполняя мои поручения ты получишь не плохое вознаграждение. Первым делом тебе нужно получить документы в мэрии города Южный. Добраться туда можно воспользовавшись арендой скутера на парковке. Получи документы и возвращайся!"],

         bot_Btn_YES: ["Ну, что же я понял!",
            "Отлично! Это то, что мне нужно!"],
         bot_Btn_NO: ["Понятно! Извини!",
         "Жить по правилам не для меня!"],
      }
   },
   methods:{
      HideCef_Bot(type){
         app.PageClose();
      },
   },
   template: `
   <div class="global_flex_center smart_bot effect_text">
         <div class="smart_bot_box">
            <h2 class="smart_bot_title">{{ bot_Title[type] }}</h2>
            <p class="smart_bot_text">{{ bot_Text[type] }}</p>
            <div class="smart_bot_btn_box">
               <div class="smart_bot_btn" @click="HideCef_Bot">{{ bot_Btn_YES[type] }}</div>
               <div class="smart_bot_btn smart_bot_btn_no" @click="HideCef_Bot">{{ bot_Btn_NO[type] }}</div>
            </div>
         </div>
      </div>
   `
 });

cef.on("CEF:smart_bot", (type) => {  
   _PLINFO.interface = 'body';
   _PLINFO.interfacePage = 'bot';
   _PLINFO.BotType = type;
   app.PageTypeUpdate();
   cef.set_focus(true);
});
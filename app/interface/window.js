Vue.component('window', {
   data: function () {
      return {
         win_Title: ["",
         "Стать гражданином"],
         win_Text: ["",
            "Получить паспорт гражданина в мэрии"],
         win_Status: ["",
            "1"],
      }
   },
   methods:{
     
   },
   template: `
   <div class="window">
      <div class="window_help">

      </div>
      <div class="window_info">
         <h1>{{ win_Title[this.$root.typeWindow] }}</h1>
         <p>{{ win_Text[this.$root.typeWindow] }} {{this.$root.TypeWinStatus}}/{{win_Status[this.$root.typeWindow]}}</p>
      </div>
   </div>
   `
 });
 cef.on("CEF:quest_info", (type, status) => {  
   _PLINFO.TypeWindow = type;
   _PLINFO.TypeWinStatus = status;

   app.PageTypeUpdate();
   cef.set_focus(true);
});
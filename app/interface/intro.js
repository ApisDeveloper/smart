Vue.component('intro', {
   data: function () {
     return {

     }
   },
   methods:{
      
   },
   created: function () {
      if(_PLINFO.interfacePage == 'intro'){
         setTimeout(
            () => {
               _PLINFO.interface = 'body';
               _PLINFO.interfacePage = 'welcome';
               app.PageTypeUpdate();
            },
            1000*9
         );
      }
   },
   template: `
   <div class="intro">
      <video src="video/1614100761198.mp4" autoplay muted id="myVideo"></video>
   </div>
   `
 });
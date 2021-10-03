Vue.component('s_menu', {
   data: function () {
     return {
        menuPage: 'pause',

        stats: false,
        inv: false,
        quest: false,
        priz: false,

        pName: '',
        pDataReg: '',
        pDonate: '',
     }
   },
   methods:{
      MenuType(type){
         this.stats = false;
         this.inv = false;
         this.quest = false;
         this.priz = false;
         if(type === 'stats_template'){
            this.menuPage = type;
            this.stats = true;
            this.pName = _PLINFO.Name;
            this.pDataReg = _PLINFO.RegData;
            this.pDonate = `${_PLINFO.Donate}CK`
         }
         else if(type === 'inv_template'){
            this.menuPage = type;
            this.inv = true;
         }
         else if(type === 'quest_template'){
            this.menuPage = type;
            this.quest = true;
         }
         else{
           app.PageClose();
         }
      },
   },
   created: function () {
      this.menuPage = 'pause';
   },
   template: `
   <div class="menu">
      <div class="menu_fone">
         <div class="menu_fone_header">
               <div class="menu_header_style" @click="MenuType('stats_template')" v-bind:class="{ menu_active: stats }"><p>Статистика</p></div>
               <div class="menu_header_style" @click="MenuType('inv_template')" v-bind:class="{ menu_active: inv }"><p>Инвентарь</p></div>
               <div class="menu_header_style" @click="MenuType('quest_template')" v-bind:class="{ menu_active: quest }"><p>Квесты</p></div>
               <div class="menu_header_style" @click="MenuType('priz_template')" v-bind:class="{ menu_active: priz }"><p>Награды</p></div>
               <div class="menu_header_style"><p>Банк</p></div>
               <div class="menu_header_style"><p>Недвижимость</p></div>
               <div class="menu_header_style"><p>Транспорт</p></div>
               <div class="menu_header_style"><p>Помощь</p></div>
               <div class="menu_header_donate menu_header_style"> <p>Магазин</p></div>
               <div class="menu_header_style"><p>Настройки</p></div>
               <div class="menu_header_exit menu_header_style" @click="MenuType('exit')"><p>Х</p></div>
            </div>
            <div class="menu_box">
               <div class="menu_box_stats">
                  <div v-show="menuPage == 'pause'"><div class="menu_box_pause"><p>Пауза</p></div></div>
                  <div v-show="menuPage == 'stats_template'" class="menu_box menu_box_stats">
                     <div class="menu_box_stats_base menu_box_stats_style">
                        <h2>Основная информация</h2>
                        <div class="menu_box_stats_style_info">
                           <p><span class="menu_box_stats_title">Аккаунт</span>{{ pName }}</p>
                           <p><span class="menu_box_stats_title">Дата регистрации</span>{{ pDataReg }}</p>
                           <p><span class="menu_box_stats_title">Донат-счёт</span>{{ pDonate }}</p>
                           <h2>Информация о персонаже</h2>
                           <p><span class="menu_box_stats_title">Уровень</span>1[2/6Exp]</p>
                           <p><span class="menu_box_stats_title">Наличные</span>5.000 р.</p>
                           <p><span class="menu_box_stats_title">В банке</span>0 р.</p>
                           <h2></h2>
                           <p><span class="menu_box_stats_title">Номер телефона</span>456-836</p>
                           <h2></h2>
                           <p><span class="menu_box_stats_title">Фракция</span>МВД ППС</p>
                           <p><span class="menu_box_stats_title">Ранг</span>Полковник</p>
                           <p><span class="menu_box_stats_title">Организация</span>ApisCompany</p>
                           <p><span class="menu_box_stats_title">Должность</span>Директор</p>
                           <h2></h2>
                           <p><span class="menu_box_stats_title">Работа</span>Нет</p>
                        </div>
                     </div>
                     <div class="menu_box_stats_dom menu_box_stats_style">
                        <h2>Недвижимость</h2>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Жилье</span></p>
                           <p></p>
                           <p></p>
                        </div>
                        <div class="menu_box_stats_dom_biz">
                           <p><span class="menu_box_stats_title">Бизнес</span></p>
                           <p>Магазин Центральный</p>
                           <p>Первооткрывателей 10</p>
                        </div>
                     </div>
                     <div class="menu_box_stats_cars menu_box_stats_style">
                        <h2>Транспорт</h2>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Мерседес Е63</span></p>
                           <p>Премиум класс</p>
                           <p>Пробег: 34км</p>
                        </div>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Свободный слот</span></p>
                           <p></p>
                           <p></p>
                        </div>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Свободный слот</span></p>
                           <p></p>
                           <p></p>
                        </div>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Свободный слот</span></p>
                           <p></p>
                           <p></p>
                        </div>
                        <div class="menu_box_stats_dom_info">
                           <p><span class="menu_box_stats_title">Свободный слот</span></p>
                           <p></p>
                           <p></p>
                        </div>
                     </div>
                  </div>
                  <div v-show="menuPage == 'inv_template'"><div class="menu_box_pause"><p>Инвентарь</p></div></div>
                  <div v-show="menuPage == 'quest_template'"><div class="menu_box_pause"><p>Квесты</p></div></div>
                  <div v-show="menuPage == 'priz_template'"><div class="menu_box_pause"><p>Награды</p></div></div>
               </div>
            </div>
      </div>
   </div>
   `
 });

 cef.on("CEF:smart_menu", (p_name, p_datareg, p_donate) => {
   _PLINFO.Name = p_name;
   _PLINFO.RegData = p_datareg;
   _PLINFO.Donate = p_donate;
 
   _PLINFO.interfacePage = 'menu';

   app.PageTypeUpdate();
 
   cef.hide(false);
   cef.set_focus(true);
});
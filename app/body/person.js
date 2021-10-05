Vue.component('person', {
   data: function () {
     return {
      PlayerName: _PLINFO.Name,

      sex: 1,
      age: 16,
      skinOther: [47, 32, 85, 12],
      skin: 47,
      isActive_Man: false,
      isActive_Woman: false,
      isActive_SkinMan_1: false,
      isActive_SkinMan_2: false,
      isActive_SkinWoman_1: false,
      isActive_SkinWoman_2: false,

      image_1: "img/skin_man_1.png",
      image_2: "img/skin_man_2.png",

      errors_age: [],

      page: '',
     }
   },
   methods:{
    //=== Обновление создание персонажа ===//
      CreatePersonUpdate(){
         this.isActive_Man = false;
         this.isActive_Woman = false;
         this.isActive_SkinMan_1 = false;
         this.isActive_SkinMan_2 = false;
         this.isActive_SkinWoman_1 = false;
         this.isActive_SkinWoman_2 = false;
         if(this.sex == 1){
            this.isActive_Man = true;
            this.image_1 = "img/skin_man_1.png";
            this.image_2 = "img/skin_man_2.png";
            if(this.skin == this.skinOther[0]){
               this.isActive_SkinMan_1 = true;
            }
            else if(this.skin == this.skinOther[1]){
               this.isActive_SkinMan_2 = true;
            }
         }
         else if(this.sex == 2){
            this.isActive_Woman = true;
            this.image_1 = "img/skin_woman_1.png";
            this.image_2 = "img/skin_woman_2.png";
            if(this.skin == this.skinOther[2]){
               this.isActive_SkinWoman_1 = true;
            }
            else if(this.skin == this.skinOther[3]){
               this.isActive_SkinWoman_2 = true;
            }
         }
         if(_PLINFO.interfacePage == 'person'){
            cef.emit("CEF_Data_CreatPerson", this.sex, this.age, this.skin, 1);
         }
      },
      //=== Создания персонажа ===//
      CreatePersonSex(sex){
         switch(sex){
            case 'man':{
               this.sex = 1;
               this.skin = this.skinOther[0];
               this.CreatePersonUpdate();
               break;
            }
            case 'woman':{
               this.sex = 2;
               this.skin = this.skinOther[2];
               this.CreatePersonUpdate();
               break;
            }
         }
      },
      CreatePersonSkin(skin){
         switch(skin){
            case 1:{
               if(this.sex == 1)this.skin = this.skinOther[0];
               else if(this.sex == 2)this.skin = this.skinOther[2];
               this.CreatePersonUpdate()
               break;
            }
            case 2:{
               if(this.sex == 1)this.skin = this.skinOther[1];
               else if(this.sex == 2)this.skin = this.skinOther[3];
               this.CreatePersonUpdate()
               break;
            }
         }
      },
      CreatePerson(){
         this.errors_age = [];
         if(this.age < 16 || this.age > 60){
            return this.errors_age.push(' - укажите возраст от 16 до 60');
         }
         if(_PLINFO.interfacePage == 'person'){
            cef.emit("CEF_Data_CreatPerson", this.sex, this.age, this.skin, 2);
            app.PageClose();
         }
         
      },
   },
   created: function () {
      this.CreatePersonUpdate();
   },
   template: `
   <div class="create_person">
      <div class="create_person_content">
         <div class="create_person_left">
            <div class="create_person_left_top">
               <h2>Создание персонажа</h2>
               <h2>{{ PlayerName }}</h2>
            </div>
            <div class="create_person_left_center">
               <div class="create_sex">
                  <h2>Выберите пол персонажа</h2>
                  <div class="create_sex_box">
                     <div class="create_sex_man create_sex_b" @click="CreatePersonSex('man')" v-bind:class="{ active_sex_box_1: isActive_Man }">
                        <img src="img/icon_man.png" alt="">
                     </div>
                     <div class="create_sex_woman create_sex_b"  @click="CreatePersonSex('woman')" v-bind:class="{ active_sex_box_2: isActive_Woman }">
                        <img src="img/icon_woman.png" alt="">
                     </div>
                  </div>
               </div>
               <div class="create_age">
                  <h2>Введите возраст персонажа {{ errors_age + ''}}</h2>
                  <div class="create_age_form">
                     <input type="text" required placeholder="16-60" v-model="age">
                  </div>
               </div>
               <div class="create_person_skin">
                  <h2>Выберите внешний вид</h2>
                  <div class="create_person_skin_box">
                     <div class="create_person_skin_1 create_sex_b"
                        :class="{ active_skin_box_1: isActive_SkinMan_1, active_skin_box_2: isActive_SkinWoman_1  }" @click="CreatePersonSkin(1)">
                        <img :src="image_1" alt="">
                     </div>
                     <div class="create_person_skin_2 create_sex_b"
                        :class="{ active_skin_box_1: isActive_SkinMan_2, active_skin_box_2: isActive_SkinWoman_2  }" @click="CreatePersonSkin(2)">
                        <img :src="image_2" alt="">
                     </div>
                  </div>
               </div>
               <button class="form_button" @click="CreatePerson()">Создать персонаж</button>
            </div>
         </div>
      </div>
   </div>
   `
 });
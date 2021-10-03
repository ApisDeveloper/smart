//====================== ПРИНИМАЕМЫЕ ДАННЫЕ ИГРОКА ============================================//
let _PLINFO = [];

_PLINFO.interface;                    //тип открытой страницы интерфейса
_PLINFO.interfacePage;                //тип действия интерфейса

_PLINFO.BotType;                      //бот с которым действует игрок
_PLINFO.TypeInfo;                     //тип всплывающей информации

_PLINFO.Name;                         //имя игрока
_PLINFO.Password;                     //пароль игрока
_PLINFO.Email;                        //почта игрока
_PLINFO.RegData;                      //дата регистрации игрока
_PLINFO.Donate;                       //донат счет игрока


//====================== ОСНОВА РАБОТЫ VUE =====================================================//
var app = new Vue({
  el: "#content",
  data:{
    interfaceType: '',
    interfacePage: '',
    isFone: false,
    test_info: '',
    typeInfo: 1,
  },
  methods:{
    StartCef(){
      this.interfaceType = _PLINFO.interface;
      this.isFone = true;
      
      this.interfacePage = _PLINFO.interfacePage;
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
    PageTypeUpdate(){
      this.isFone = true;

      this.interfacePage = _PLINFO.interfacePage;
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
    PageClose(){
      this.isFone = false;
      // this.interfaceType = 'interface';
      this.interfacePage = 'window';

      cef.set_focus(false);
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
  }
});
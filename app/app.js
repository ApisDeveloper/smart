//====================== ПРИНИМАЕМЫЕ ДАННЫЕ ИГРОКА ============================================//
let _PLINFO = [];

_PLINFO.interface;                    //тип открытой страницы интерфейса
_PLINFO.interfacePage;                //тип действия интерфейса

_PLINFO.TypeBot;                      //бот с которым действует игрок
_PLINFO.TypeInfo;                     //тип всплывающей информации
_PLINFO.TypeWindow;                   //тип квестового задания
_PLINFO.TypeWinStatus;                //выполнено заданий из общего количества

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
    typeInfo: 0,
    typeBot: 0,
    typeWindow: 0,
    TypeWinStatus: 0,
  },
  methods:{
    DataPlayerUpdate(){
      this.typeInfo = _PLINFO.TypeInfo;
      this.typeBot = _PLINFO.TypeBot;
      this.typeWindow = _PLINFO.TypeWindow;
      this.TypeWinStatus = _PLINFO.TypeWinStatus;
    },
    StartCef(){
      this.interfaceType = _PLINFO.interface;
      this.isFone = true;
      
      this.interfacePage = _PLINFO.interfacePage;
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
    PageTypeUpdate(){
      this.isFone = true;
      
      this.DataPlayerUpdate();

      this.interfacePage = _PLINFO.interfacePage;
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
    PageClose(){
      this.isFone = false;
      this.interfacePage = 'window';

      cef.set_focus(false);
      this.test_info = `Test panel: ${this.interfaceType} ${this.interfacePage}`;
    },
  }
});
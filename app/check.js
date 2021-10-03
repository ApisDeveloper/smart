function INTRO(){
   _PLINFO.interface = 'interface';
   _PLINFO.interfacePage = 'intro';
   app.StartCef();
}
function WELCOME(){
   _PLINFO.interface = 'interface';
   _PLINFO.interfacePage = 'welcome';
   app.StartCef();
}
function WINDOW(){
   _PLINFO.interfacePage = 'window';
   app.PageTypeUpdate();
}
function LOGIN(){
   _PLINFO.interfacePage = 'login';
   app.PageTypeUpdate();
}
function REG(){
   _PLINFO.interfacePage = 'register';

   app.PageTypeUpdate();
}
function PERSON(){
   _PLINFO.interfacePage = 'person';

   app.PageTypeUpdate();
}
function BOT(){
   _PLINFO.interfacePage = 'bot';
   _PLINFO.TypeBot = 1;
   app.PageTypeUpdate();
}
function INFO(){
   _PLINFO.interfacePage = 'info';
   _PLINFO.TypeInfo = 2;
   app.PageTypeUpdate();
}
function MENU (){
   _PLINFO.interfacePage = 'menu';
   app.PageTypeUpdate();
}

function CLOSE(){
   app.PageClose();
   
}
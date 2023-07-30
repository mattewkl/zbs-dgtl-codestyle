const PhoneMask = new Inputmask("+9 (999) 999 99 99")

// сама маска для телефона. ВАЖНО - 9 это указатель для ввода цифры. Вместо 9 по факту будет пустое место куда можно ввести Т О Л Ь К О цифру. Остальные будут просто выведены как есть.


const inputPhoneRegister = document.getElementById("form-phone-register");
const inputPhone = document.getElementById("form-phone");
//элементы на которые накладывается маска. Поддерживается большая часть инпутов


PhoneMask.mask(inputPhone)
PhoneMask.mask(inputPhoneRegister)

//подключение самой маски


   'use strict';

   const p = document.querySelectorAll('p');
   console.log(p);

   const script = document.createElement('script');
   script.src = "035_test_defer.js";
   script.async = false; // будет вести себя как обычный скрипт
   document.body.append(script); // помещает в конец body
   // начнет загружаться, когда дойдет до этой строки
   //никого ждать не будут


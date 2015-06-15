//var form = document.querySelector('form');
//var name = document.getElementById('#name');
//var email = document.getElementById('#email');
//var phoneArea = document.getElementById('#phone-area');
//var phone = document.getElementById('#phone');
//var cellArea = document.getElementById('#cell-area');
//var cell = document.getElementById('#cell');
//var zipHead = document.getElementById('#zip-head');
//var zipTail = document.getElementById('#zip-tail');
//var address = document.getElementById('#address');
//var number = document.getElementById('#number');
//var district = document.getElementById('#district');
//var city = document.getElementById('#city');
//var state = document.getElementById('#state');
//var buttonDelete = document.getElementById('#buttonDelete');
//var buttonSave = document.getElementById('#buttonSave');


(function(){

    var inputs = document.querySelectorAll('input:not([type=button])');

    var buttonDelete = document.querySelector('#buttonDelete');
    var buttonSave = document.querySelector('#buttonSave');

    function save(key,value) {
        localStorage[key] = JSON.stringify(value);
    }

    function loadFormValues(){

        var signup = {};

        for (var i = 0; i < inputs.length; i++) {
            signup [inputs[i].name] = [inputs[i].value];
          //console.log(inputs[i].name , inputs[i].value);
        }

        save('signup', signup);
    }

    buttonSave.onclick= function(){
        loadFormValues();
    };

})();
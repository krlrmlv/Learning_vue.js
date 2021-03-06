
// глобальный фильтр    
Vue.filter('capitalize', function (value) {
    if (!value) return '';
    value = value.toString();
    return value.replace(/\b\w/g, function (l) { return l.toUpperCase(); })
});

// глобальный компонент, они являются глобальными и могут быть использованы в любом обхекте Vue
Vue.component('app-car',{
    data: function () {
        return {
          cars : [
              {model:"wqfwqf"},
              {model:"rgrgr"},
              {model:"ewf"},
              {model:"qfw"},
              {model:"wqfwqfwbfdbqf"}
          ]
        }
      },
      template: '<div><div class="car" v-for="car in cars"><p> {{car.model}} </p></div></div>'
});


new Vue({
    el: '#app',
    data: {
        title: 'Hello world',
        stylecss: '',
        value: 1,
        // doublevalue: 1,
        show: true,
        cars: [
            { model: "bmw", speed: "228" },
            { model: "kek", speed: "435" },
            { model: "mek", speed: "124" },
            { model: "hek", speed: "213" }
        ],
        message: 'Hello world'
    },
    methods: {
        changetext() {
            // title = "Zhopa" // обращение к локальной переменной
            this.title = "Zhopa" // обращеник к глобальной переменной
        },
        increment(value) {
            this.value = value;
            // this.doublevalue = this.value * 2; // обычный вывод переменной
            if (value == 25) // поддерживается также обычный синтаксис js
            {
                alert("sosi");
            }
        }
    },
    computed: {
        doublevalue() {
            return this.value * 2 // обработанное свойтсво
        },
        showMessage() {
            return this.message.toUpperCase();
        }
    },
    filters: {
        // локальный фильтр ( работает только внутри объекта vue )
        lowercase(value) {
            return value.toLowerCase();
        }
    },
    components:{

        // локальный компонент ( работает только внутри объекта даннного vue )
        'app-car2':{
            data: function () {
                return {
                  cars : [
                      {model:"sssss"},
                      {model:"rgrssssssssssssssssssssgr"},
                      {model:"ewsssssssssssssssssf"},
                      {model:"qsssssssssssssfw"},
                      {model:"wssssssssssssqfwqfwbfdbqf"}
                  ]
                }
              },
              template: '<div><div class="car" v-for="car in cars"><p> {{car.model}} </p></div></div>'
        }
    }
});



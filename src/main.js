import { createApp } from 'vue'
import App from './App.vue'
import router from './Router'

var app=createApp(App)

app.config.globalProperties.$filters={
    esPar(num){
        var html="";
        if (num%2===0) {
            html="<span style='color:green'>"+num+"</span>";
        }else{
            html="<span style='color:red'>"+num+"</span>";
        }
        return html;
    }
}

app.use(router).mount('#app')
